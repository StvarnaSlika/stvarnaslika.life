import { describe, expect, it, vi } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock LLM and notification
vi.mock("./_core/llm", () => ({
  invokeLLM: vi.fn().mockResolvedValue({
    choices: [{ message: { content: "Pozdrav! Kako vam mogu pomoći?" } }],
  }),
}));

vi.mock("./_core/notification", () => ({
  notifyOwner: vi.fn().mockResolvedValue(true),
}));

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: { protocol: "https", headers: {} } as TrpcContext["req"],
    res: { clearCookie: vi.fn() } as unknown as TrpcContext["res"],
  };
}

describe("chatbot.chat", () => {
  it("returns a response from LLM", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.chatbot.chat({
      message: "Kako se nositi s anksioznošću?",
      history: [],
    });

    expect(result).toHaveProperty("response");
    expect(typeof result.response).toBe("string");
    expect(result.response.length).toBeGreaterThan(0);
  });

  it("handles empty history gracefully", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.chatbot.chat({
      message: "Što su Jungovi arhetipovi?",
    });

    expect(result.response).toBeTruthy();
  });
});

describe("contact.send", () => {
  it("sends contact message successfully", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.send({
      name: "Ivan Horvat",
      email: "ivan@example.com",
      subject: "konzultacija",
      message: "Zanima me konzultacija o analitičkoj psihologiji.",
    });

    expect(result.success).toBe(true);
  });

  it("rejects invalid email", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.send({
        name: "Ivan",
        email: "not-an-email",
        subject: "test",
        message: "Test poruka koja je dovoljno duga",
      })
    ).rejects.toThrow();
  });

  it("rejects too short message", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.send({
        name: "Ivan",
        email: "ivan@example.com",
        subject: "test",
        message: "Kratko",
      })
    ).rejects.toThrow();
  });
});
