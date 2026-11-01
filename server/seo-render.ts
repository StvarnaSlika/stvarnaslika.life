import type { RequestHandler } from "express";
import type { RenderData } from "../client/src/entry-server";
import { getPageSeo, serializeForHtml, STATIC_PAGES } from "../shared/seo";
import { renderSeoHead } from "../shared/seo";
import { getPostBySlug, getPublishedPosts } from "./db";

type Render = (data: RenderData) => { html: string; state: unknown };

export function createPageHandler(
  template: () => Promise<string>,
  loadRenderer: () => Promise<Render>
): RequestHandler {
  return async (req, res, next) => {
    if (req.method !== "GET" && req.method !== "HEAD") return next();
    if (
      req.path.startsWith("/api/") ||
      req.path.startsWith("/__") ||
      /\.[A-Za-z0-9]+$/.test(req.path)
    )
      return next();
    try {
      const pathname = req.path;
      const isAdmin = pathname === "/admin" || pathname.startsWith("/admin/");
      const match = /^\/blog\/([^/]+)$/.exec(pathname);
      const data: RenderData = {
        pathname,
        search: new URL(req.originalUrl, "http://localhost").search,
      };
      let status =
        STATIC_PAGES.some(page => page.path === pathname) || isAdmin
          ? 200
          : 404;
      if (pathname === "/blog") data.posts = await getPublishedPosts();
      if (match) {
        data.slug = decodeURIComponent(match[1]);
        const post = await getPostBySlug(data.slug);
        data.post = post?.published === "published" ? post : null;
        status = data.post ? 200 : 404;
      }
      const seo = getPageSeo(pathname, data.post, status);
      // Admin pages contain private client-side auth state; only public pages are rendered.
      const rendered = isAdmin
        ? { html: "", state: null }
        : (await loadRenderer())(data);
      const html = (await template())
        .replace(/<!--seo-head-start-->[\s\S]*?<!--seo-head-end-->/, () =>
          renderSeoHead(seo)
        )
        .replace(
          '<div id="root"></div>',
          () => `<div id="root">${rendered.html}</div>`
        )
        .replace(
          "<!--app-state-->",
          () =>
            `<script id="app-state" type="application/json">${serializeForHtml(rendered.state)}</script>`
        );
      res.set("X-Robots-Tag", seo.robots);
      // HTML includes live publication state; let the server revalidate each request.
      res.set("Cache-Control", "no-cache");
      res.status(status).type("html").send(html);
    } catch (error) {
      if (error instanceof URIError) {
        res.status(400).end();
        return;
      }
      console.error("[Page render] Failed to render public page", error);
      // Transient data/render failures must not become indexable error pages or 404s.
      res
        .status(503)
        .set("Retry-After", "60")
        .set("X-Robots-Tag", "noindex")
        .type("text")
        .send("Stranica privremeno nije dostupna. Pokušajte ponovno kasnije.");
    }
  };
}
