import express from "express";
import { createServer, type Server } from "node:http";
import type { AddressInfo } from "node:net";
import { afterAll, beforeAll, beforeEach, describe, expect, it, vi } from "vitest";
import type { Post } from "../drizzle/schema";
import type { RenderData } from "../client/src/entry-server";
import { escapeHtml, SITE_URL } from "../shared/seo";
import { getPostBySlug, getPublishedPosts } from "./db";
import { createPageHandler } from "./seo-render";

vi.mock("./db", () => ({ getPostBySlug: vi.fn(), getPublishedPosts: vi.fn() }));

const post: Post = {
  id: 1,
  title: "Kako razumjeti obrasce ponašanja",
  slug: "obrasci-ponasanja",
  content: "Tekst objavljenog članka.",
  excerpt: "Uvod u obrasce ponašanja.",
  category: "psihologija",
  imageUrl: null,
  seoTitle: "Obrasci ponašanja | Stvarna Slika",
  seoDescription: "Prepoznajte obrasce ponašanja kroz ovaj istraživački članak.",
  published: "published",
  authorId: 1,
  createdAt: new Date("2026-10-01T12:00:00Z"),
  updatedAt: new Date("2026-10-02T12:00:00Z"),
};

describe("public page HTTP rendering", () => {
  let server: Server;
  let baseUrl: string;
  const render = vi.fn((data: RenderData) => ({
    html: `<main>${escapeHtml(data.post?.title ?? data.pathname)}</main>`,
    state: data,
  }));
  const template = "<!doctype html><html><head><!--seo-head-start--><!--seo-head-end--></head><body><div id=\"root\"></div><!--app-state--></body></html>";

  beforeAll(async () => {
    const app = express();
    app.use(createPageHandler(async () => template, async () => render));
    app.get("/api/probe", (_req, res) => { res.json({ ok: true }); });
    server = createServer(app);
    await new Promise<void>((resolve, reject) => {
      server.once("error", reject);
      server.listen(0, "127.0.0.1", resolve);
    });
    baseUrl = `http://127.0.0.1:${(server.address() as AddressInfo).port}`;
  });

  afterAll(async () => {
    if (!server) return;
    server.closeAllConnections();
    await new Promise<void>((resolve, reject) => {
      server.close(error => error ? reject(error) : resolve());
    });
  });

  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(getPublishedPosts).mockResolvedValue([]);
    vi.mocked(getPostBySlug).mockResolvedValue(undefined);
  });

  it("serves distinct public metadata with a matching canonical URL", async () => {
    const [home, psychology] = await Promise.all([
      fetch(`${baseUrl}/`), fetch(`${baseUrl}/psihologija`),
    ]);
    const homeHtml = await home.text();
    const psychologyHtml = await psychology.text();
    expect(home.status).toBe(200);
    expect(psychology.status).toBe(200);
    expect(homeHtml).toContain('href="https://stvarnaslika.life/"');
    expect(psychologyHtml).toContain('href="https://stvarnaslika.life/psihologija"');
    expect(psychologyHtml).toContain("Psihologija — Jung, emocije i ponašanje");
    expect(homeHtml.match(/<title>(.*?)<\/title>/)?.[1])
      .not.toBe(psychologyHtml.match(/<title>(.*?)<\/title>/)?.[1]);
    expect(psychology.headers.get("x-robots-tag")).toBe("index, follow");
  });

  it("renders published article metadata and passes its content to the renderer", async () => {
    vi.mocked(getPostBySlug).mockResolvedValueOnce(post);
    const response = await fetch(`${baseUrl}/blog/${post.slug}`);
    const html = await response.text();
    expect(response.status).toBe(200);
    expect(html).toContain(`<title>${post.seoTitle}</title>`);
    expect(html).toContain(`content="${post.seoDescription}"`);
    expect(html).toContain(`href="${SITE_URL}/blog/${post.slug}"`);
    expect(html).toContain('"@type":"BlogPosting"');
    expect(html).toContain(`<main>${post.title}</main>`);
    expect(render).toHaveBeenCalledWith(expect.objectContaining({ post }));
  });

  it.each([undefined, { ...post, title: "TAJNI NACRT", content: "NEOBJAVLJENI SADRŽAJ", published: "draft" } as Post])(
    "returns 404 without serializing a missing or draft article (%s)",
    async value => {
      vi.mocked(getPostBySlug).mockResolvedValueOnce(value);
      const response = await fetch(`${baseUrl}/blog/${post.slug}`);
      const html = await response.text();
      expect(response.status).toBe(404);
      expect(response.headers.get("x-robots-tag")).toBe("noindex, follow");
      expect(html).not.toContain("TAJNI NACRT");
      expect(html).not.toContain("NEOBJAVLJENI SADRŽAJ");
      expect(html).not.toContain('"@type":"BlogPosting"');
      expect(render).toHaveBeenCalledWith(expect.objectContaining({ post: null }));
    },
  );

  it("uses a real 404 and noindex for an unknown page", async () => {
    const response = await fetch(`${baseUrl}/nepostojeca-stranica`);
    const html = await response.text();
    expect(response.status).toBe(404);
    expect(response.headers.get("x-robots-tag")).toBe("noindex, follow");
    expect(html).toContain("Stranica nije pronađena");
  });

  it("keeps administration noindex and excludes private client state from SSR", async () => {
    const response = await fetch(`${baseUrl}/admin/blog`);
    const html = await response.text();
    expect(response.status).toBe(200);
    expect(response.headers.get("x-robots-tag")).toBe("noindex, follow");
    expect(render).not.toHaveBeenCalled();
    expect(html).toContain('<div id="root"></div>');
    expect(html).toContain('id="app-state" type="application/json">null</script>');
  });

  it("returns a temporary 503 on data failure rather than an indexable empty blog", async () => {
    vi.mocked(getPublishedPosts).mockRejectedValueOnce(new Error("DB unavailable"));
    const log = vi.spyOn(console, "error").mockImplementation(() => {});
    try {
      const response = await fetch(`${baseUrl}/blog`);
      await response.text();
      expect(response.status).toBe(503);
      expect(response.headers.get("retry-after")).toBe("60");
      expect(response.headers.get("x-robots-tag")).toBe("noindex");
      expect(render).not.toHaveBeenCalled();
    } finally {
      log.mockRestore();
    }
  });

  it("escapes malicious metadata and embeds serialized state without executable script injection", async () => {
    const title = '</title><script>alert("xss")</script>&';
    vi.mocked(getPostBySlug).mockResolvedValueOnce({ ...post, title, seoTitle: title });
    const response = await fetch(`${baseUrl}/blog/${post.slug}`);
    const html = await response.text();
    expect(response.status).toBe(200);
    expect(html).toContain(`<title>${escapeHtml(title)}</title>`);
    expect(html).not.toContain('<script>alert("xss")</script>');
    const stateJson = html.match(/<script id="app-state" type="application\/json">([\s\S]*?)<\/script>/)?.[1];
    expect(stateJson).toBeTruthy();
    expect(JSON.parse(stateJson!).post.title).toBe(title);
    const structuredJson = html.match(/<script type="application\/ld\+json" data-seo>([\s\S]*?)<\/script>/)?.[1];
    expect(JSON.parse(structuredJson!)[1].headline).toBe(title);
  });

  it("leaves API responses to their handlers", async () => {
    const response = await fetch(`${baseUrl}/api/probe`);
    expect(await response.json()).toEqual({ ok: true });
    expect(render).not.toHaveBeenCalled();
  });

  it("rejects a malformed encoded article slug without rendering it", async () => {
    const response = await fetch(`${baseUrl}/blog/%ZZ`);
    await response.text();
    expect(response.status).toBe(400);
    expect(render).not.toHaveBeenCalled();
  });
});
