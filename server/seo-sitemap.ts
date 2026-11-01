import type { Express } from "express";
import { SITE_URL, STATIC_PAGES } from "../shared/seo";
import { getPublishedPosts } from "./db";

type SitemapPost = {
  slug: string;
  published: string;
  updatedAt?: Date | string | null;
  createdAt?: Date | string | null;
};

function escapeXml(value: string): string {
  return value.replace(/[<>&"']/g, character => ({
    "<": "&lt;",
    ">": "&gt;",
    "&": "&amp;",
    '"': "&quot;",
    "'": "&apos;",
  })[character]!);
}

function lastModified(value: Date | string | null | undefined): string {
  if (!value) return "";
  const date = new Date(value);
  return Number.isNaN(date.getTime())
    ? ""
    : `\n    <lastmod>${date.toISOString()}</lastmod>`;
}

export function buildSitemap(posts: SitemapPost[]): string {
  // No lastmod for static pages: request time is not a content modification date.
  const urls = STATIC_PAGES.map(page =>
    `  <url>\n    <loc>${escapeXml(`${SITE_URL}${page.path}`)}</loc>\n  </url>`
  );
  const seenSlugs = new Set<string>();
  for (const post of posts) {
    if (post.published !== "published" || !post.slug || seenSlugs.has(post.slug)) continue;
    seenSlugs.add(post.slug);
    const url = `${SITE_URL}/blog/${encodeURIComponent(post.slug)}`;
    urls.push(`  <url>\n    <loc>${escapeXml(url)}</loc>${lastModified(post.updatedAt ?? post.createdAt)}\n  </url>`);
  }

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;
}

export function registerSitemapRoute(app: Express): void {
  app.get("/sitemap.xml", async (_req, res) => {
    try {
      const posts = await getPublishedPosts();
      res.type("application/xml").send(buildSitemap(posts));
    } catch {
      // A temporary DB failure must not tell crawlers that article URLs disappeared.
      console.error("[Sitemap] Could not read published posts");
      res.status(503).set("Retry-After", "300").type("text/plain")
        .send("Sitemap is temporarily unavailable. Please retry later.");
    }
  });
}
