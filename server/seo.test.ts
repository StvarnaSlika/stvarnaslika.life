import { describe, expect, it } from "vitest";
import type { Post } from "../drizzle/schema";
import {
  getPageSeo,
  renderSeoHead,
  serializeForHtml,
  STATIC_PAGES,
} from "../shared/seo";

const post: Post = {
  id: 1,
  title: "Snovi i emocije",
  slug: "snovi-i-emocije",
  excerpt: "Kako razumjeti emocije u snovima.",
  content: "Sadržaj članka",
  category: "psihologija",
  imageUrl: null,
  seoTitle: "Snovi — istraživanje",
  seoDescription: "Poseban opis članka.",
  published: "published",
  authorId: 1,
  createdAt: new Date("2026-01-01T12:00:00Z"),
  updatedAt: new Date("2026-01-02T12:00:00Z"),
};

describe("public page metadata", () => {
  it("gives every public route its own canonical, title and description", () => {
    const metadata = STATIC_PAGES.map(page => getPageSeo(page.path));
    expect(new Set(metadata.map(seo => seo.canonical)).size).toBe(
      STATIC_PAGES.length
    );
    expect(new Set(metadata.map(seo => seo.title)).size).toBe(
      STATIC_PAGES.length
    );
    expect(new Set(metadata.map(seo => seo.description)).size).toBe(
      STATIC_PAGES.length
    );
    for (const seo of metadata) expect(seo.robots).toBe("index, follow");
  });

  it("uses article SEO fields and real publication dates in structured data", () => {
    const seo = getPageSeo("/blog/snovi-i-emocije", post);
    expect(seo.title).toBe(post.seoTitle);
    expect(seo.description).toBe(post.seoDescription);
    expect(seo.canonical).toBe(
      "https://stvarnaslika.life/blog/snovi-i-emocije"
    );
    expect(seo.type).toBe("article");
    expect(seo.structuredData[1]).toMatchObject({
      "@type": "BlogPosting",
      datePublished: post.createdAt.toISOString(),
      dateModified: post.updatedAt.toISOString(),
    });
  });

  it("keeps drafts, missing pages and admin pages out of search", () => {
    for (const seo of [
      getPageSeo("/blog/snovi-i-emocije", { ...post, published: "draft" }),
      getPageSeo("/missing", null, 404),
      getPageSeo("/admin/blog"),
    ]) {
      expect(seo.robots).toBe("noindex, follow");
      expect(seo.structuredData).toEqual([]);
      expect(seo.title).not.toBe(post.seoTitle);
    }
  });

  it("escapes user supplied metadata and embedded JSON instead of injecting HTML", () => {
    const malicious = '</script><script>alert("x")</script>&';
    const head = renderSeoHead(
      getPageSeo("/blog/snovi-i-emocije", {
        ...post,
        seoTitle: malicious,
        seoDescription: malicious,
      })
    );
    expect(head).not.toContain("<script>alert(");
    expect(head).toContain("&lt;/script&gt;");
    expect(head).toContain("\\u003c/script\\u003e");
    expect(JSON.parse(serializeForHtml({ content: malicious }))).toEqual({
      content: malicious,
    });
  });
});
