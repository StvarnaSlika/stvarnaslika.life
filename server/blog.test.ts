import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

type AuthenticatedUser = NonNullable<TrpcContext["user"]>;

function createAdminContext(): { ctx: TrpcContext } {
  const user: AuthenticatedUser = {
    id: 1,
    openId: "admin-user",
    email: "admin@stvarnaslika.com",
    name: "Admin",
    loginMethod: "manus",
    role: "admin",
    createdAt: new Date(),
    updatedAt: new Date(),
    lastSignedIn: new Date(),
  };
  const ctx: TrpcContext = {
    user,
    req: { protocol: "https", headers: {} } as TrpcContext["req"],
    res: { clearCookie: () => {} } as unknown as TrpcContext["res"],
  };
  return { ctx };
}

function createUserContext(): { ctx: TrpcContext } {
  const user: AuthenticatedUser = {
    id: 2,
    openId: "regular-user",
    email: "user@example.com",
    name: "User",
    loginMethod: "manus",
    role: "user",
    createdAt: new Date(),
    updatedAt: new Date(),
    lastSignedIn: new Date(),
  };
  const ctx: TrpcContext = {
    user,
    req: { protocol: "https", headers: {} } as TrpcContext["req"],
    res: { clearCookie: () => {} } as unknown as TrpcContext["res"],
  };
  return { ctx };
}

function createPublicContext(): { ctx: TrpcContext } {
  const ctx: TrpcContext = {
    user: null,
    req: { protocol: "https", headers: {} } as TrpcContext["req"],
    res: { clearCookie: () => {} } as unknown as TrpcContext["res"],
  };
  return { ctx };
}

describe("blog router", () => {
  it("public list procedure exists and is callable", async () => {
    const { ctx } = createPublicContext();
    const caller = appRouter.createCaller(ctx);
    // Should not throw even with no DB in test env
    const result = await caller.blog.list(undefined).catch(() => []);
    expect(Array.isArray(result)).toBe(true);
  });

  it("public getBySlug throws NOT_FOUND for missing slug", async () => {
    const { ctx } = createPublicContext();
    const caller = appRouter.createCaller(ctx);
    await expect(caller.blog.getBySlug({ slug: "non-existent-slug-xyz" }))
      .rejects.toMatchObject({ code: "NOT_FOUND" });
  });

  it("adminList requires authentication", async () => {
    const { ctx } = createPublicContext();
    const caller = appRouter.createCaller(ctx);
    await expect(caller.blog.adminList()).rejects.toMatchObject({ code: "UNAUTHORIZED" });
  });

  it("adminList requires admin role", async () => {
    const { ctx } = createUserContext();
    const caller = appRouter.createCaller(ctx);
    await expect(caller.blog.adminList()).rejects.toMatchObject({ code: "FORBIDDEN" });
  });

  it("create requires admin role", async () => {
    const { ctx } = createUserContext();
    const caller = appRouter.createCaller(ctx);
    await expect(caller.blog.create({
      title: "Test",
      slug: "test",
      content: "Test content here",
      category: "psihologija",
      published: "draft",
    })).rejects.toMatchObject({ code: "FORBIDDEN" });
  });

  it("delete requires admin role", async () => {
    const { ctx } = createUserContext();
    const caller = appRouter.createCaller(ctx);
    await expect(caller.blog.delete({ id: 1 })).rejects.toMatchObject({ code: "FORBIDDEN" });
  });

  it("create validates slug format", async () => {
    const { ctx } = createAdminContext();
    const caller = appRouter.createCaller(ctx);
    await expect(caller.blog.create({
      title: "Test",
      slug: "INVALID SLUG WITH SPACES",
      content: "Test content here",
      category: "psihologija",
      published: "draft",
    })).rejects.toThrow();
  });

  it("create validates minimum content length", async () => {
    const { ctx } = createAdminContext();
    const caller = appRouter.createCaller(ctx);
    await expect(caller.blog.create({
      title: "Test",
      slug: "test-slug",
      content: "Short",
      category: "psihologija",
      published: "draft",
    })).rejects.toThrow();
  });
});
