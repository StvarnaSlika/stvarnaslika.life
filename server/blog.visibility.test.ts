import { describe, expect, it, vi } from "vitest";
import type { Post } from "../drizzle/schema";
import type { TrpcContext } from "./_core/context";
import { getPostBySlug } from "./db";
import { appRouter } from "./routers";

vi.mock("./db", async () => ({
  ...await vi.importActual<typeof import("./db")>("./db"),
  getPostBySlug: vi.fn(),
}));

describe("public article visibility", () => {
  it("does not disclose an existing draft through the public slug API", async () => {
    vi.mocked(getPostBySlug).mockResolvedValueOnce({
      slug: "private-draft",
      title: "Private draft title",
      content: "Private unpublished content",
      published: "draft",
    } as Post);
    const ctx: TrpcContext = {
      user: null,
      req: { protocol: "https", headers: {} } as TrpcContext["req"],
      res: { clearCookie: vi.fn() } as unknown as TrpcContext["res"],
    };

    await expect(appRouter.createCaller(ctx).blog.getBySlug({ slug: "private-draft" }))
      .rejects.toMatchObject({ code: "NOT_FOUND" });
  });
});
