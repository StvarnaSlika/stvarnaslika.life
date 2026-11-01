import type { Express } from "express";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { getPublishedPosts } from "./db";
import { buildSitemap, registerSitemapRoute } from "./seo-sitemap";
import { SITE_URL, STATIC_PAGES } from "../shared/seo";

vi.mock("./db", () => ({ getPublishedPosts: vi.fn() }));

describe("XML sitemap", () => {
  beforeEach(() => vi.resetAllMocks());

  it("includes every public static route without inventing modification dates", () => {
    const xml = buildSitemap([]);
    for (const page of STATIC_PAGES) {
      expect(xml).toContain(`<loc>${SITE_URL}${page.path}</loc>`);
    }
    expect(xml).toContain(`${SITE_URL}/alati`);
    expect(xml).toContain(`${SITE_URL}/biblioteka`);
    expect(xml).not.toContain("<lastmod>");
    expect(xml).not.toContain("/admin");
  });

  it("publishes only unique published article URLs with real modification dates", () => {
    const xml = buildSitemap([
      { slug: "objavljeni-clanak", published: "published", updatedAt: "2026-10-01T12:00:00Z" },
      { slug: "objavljeni-clanak", published: "published" },
      { slug: "skriveni-nacrt", published: "draft", updatedAt: "2026-10-02T12:00:00Z" },
      { slug: "bez-valjanog-datuma", published: "published", updatedAt: "invalid" },
    ]);
    expect(xml.match(/\/blog\/objavljeni-clanak/g)).toHaveLength(1);
    expect(xml).toContain("<lastmod>2026-10-01T12:00:00.000Z</lastmod>");
    expect(xml).not.toContain("skriveni-nacrt");
    expect(xml).not.toContain("Invalid Date");
    expect(xml.match(/<lastmod>/g)).toHaveLength(1);
  });

  it("encodes article path segments and escapes XML special characters", () => {
    const xml = buildSitemap([{ slug: "a&b<'\"", published: "published" }]);
    expect(xml).toContain("/blog/a%26b%3C&apos;%22</loc>");
    expect(xml).not.toContain("a&b<");
  });

  it("returns 503 with a retry hint on database failure instead of a partial success", async () => {
    vi.mocked(getPublishedPosts).mockRejectedValueOnce(new Error("database unavailable"));
    const log = vi.spyOn(console, "error").mockImplementation(() => {});
    const get = vi.fn();
    registerSitemapRoute({ get } as unknown as Express);
    const response = {
      status: vi.fn().mockReturnThis(),
      set: vi.fn().mockReturnThis(),
      type: vi.fn().mockReturnThis(),
      send: vi.fn().mockReturnThis(),
    };
    await get.mock.calls[0][1]({}, response);
    expect(response.status).toHaveBeenCalledWith(503);
    expect(response.set).toHaveBeenCalledWith("Retry-After", "300");
    expect(response.send).not.toHaveBeenCalledWith(expect.stringContaining("<urlset"));
    log.mockRestore();
  });
});
