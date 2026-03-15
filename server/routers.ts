import { z } from "zod";
import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { invokeLLM } from "./_core/llm";
import { notifyOwner } from "./_core/notification";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),

  // ===== CHATBOT PSIHOTERAPEUT =====
  chatbot: router({
    chat: publicProcedure
      .input(
        z.object({
          message: z.string().min(1).max(2000),
          history: z.array(
            z.object({
              role: z.enum(["user", "assistant"]),
              content: z.string(),
            })
          ).max(20).optional(),
        })
      )
      .mutation(async ({ input }) => {
        const systemPrompt = `Ti si empatičan i stručan AI psihoterapeut koji govori isključivo na hrvatskom jeziku. 
Tvoja uloga je pružiti podršku, razumijevanje i psihološke uvide korisnicima koji dolaze s pitanjima o:
- Psihologiji, emocijama i mentalnom zdravlju
- Jungovima arhetipovima i analitičkoj psihologiji
- Parapsihologiji, kvantnoj svijesti i rubnim fenomenima
- Holističkim pristupima, meditaciji i lucidnim snovima
- Osobnom razvoju i samorazumijevanju

Principi kojih se pridržavaš:
1. Uvijek odgovaraj na hrvatskom jeziku
2. Budi empatičan, topao i ne-osudujući
3. Postavljaj otvorena pitanja koja potiču refleksiju
4. Integriraj znanje iz kliničke psihologije, Jungove analitičke psihologije i alternativnih pristupa
5. Ako korisnik pokazuje znakove ozbiljne krize, preporuči profesionalnu pomoć
6. Nikad ne postavljaj dijagnoze — to je uloga licenciranih terapeuta
7. Budi analitičan ali pristupačan — korak ispred mainstream pristupa
8. Odgovori neka budu sažeti (2-4 rečenice) osim ako korisnik traži detaljno objašnjenje

Zapamti: AI savjeti nisu zamjena za profesionalnu terapiju.`;

        const messages = [
          { role: "system" as const, content: systemPrompt },
          ...(input.history || []).map(m => ({
            role: m.role as "user" | "assistant",
            content: m.content,
          })),
          { role: "user" as const, content: input.message },
        ];

        const response = await invokeLLM({ messages });
        const rawContent = response.choices?.[0]?.message?.content;
        const content = typeof rawContent === "string" ? rawContent : "Žao mi je, ne mogu odgovoriti u ovom trenutku.";

        return { response: content };
      }),
  }),

  // ===== KONTAKT FORMA =====
  contact: router({
    send: publicProcedure
      .input(
        z.object({
          name: z.string().min(2).max(100),
          email: z.string().email(),
          subject: z.string().min(1).max(200),
          message: z.string().min(10).max(5000),
        })
      )
      .mutation(async ({ input }) => {
        // Notify owner
        await notifyOwner({
          title: `Nova kontakt poruka: ${input.subject}`,
          content: `Od: ${input.name} (${input.email})\n\nPredmet: ${input.subject}\n\nPoruka:\n${input.message}`,
        });

        return { success: true, message: "Poruka uspješno poslana" };
      }),
  }),
});

export type AppRouter = typeof appRouter;
