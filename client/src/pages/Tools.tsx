import { useState, useEffect } from "react";
import { AIChatBox, type Message } from "@/components/AIChatBox";
import { trpc } from "@/lib/trpc";

export default function Tools() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Pozdrav — ja sam iDoctor, vaš integrativni AI asistent za pitanja iz psihologije i parapsihologije. Kako mogu pomoći?",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const chatMutation = trpc.chatbot.chat.useMutation({
    onSuccess: (data: any) => {
      setMessages((prev) => [...prev, { role: "assistant", content: data.response }]);
      setIsLoading(false);
    },
    onError: () => {
      setMessages((prev) => [...prev, { role: "assistant", content: "Došlo je do pogreške — pokušajte ponovno." }]);
      setIsLoading(false);
    },
  });

  const handleSendMessage = (content: string) => {
    setMessages((prev) => [...prev, { role: "user", content }]);
    setIsLoading(true);
    const history = messages.filter((m) => m.role !== "system").map((m) => ({ role: m.role as "user" | "assistant", content: m.content }));
    chatMutation.mutate({ message: content, history });
  };

  useEffect(() => {
    document.title = "Alati — iDoctor chat & podrška | Stvarna Slika";
  }, []);

  return (
    <main className="pt-20 pb-20 bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">Alati</h1>
          <p className="mt-2 text-sm text-muted-foreground">Interaktivni AI asistent i alati za brzu analizu i istraživanje.</p>
        </div>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">iDoctor — AI chat</h2>
          <p className="text-sm text-muted-foreground mb-4">Razgovarajte s iDoctorom o psihologiji, parapsihologiji, istraživanjima ili osobnim uvidima.</p>
          <AIChatBox messages={messages} onSendMessage={handleSendMessage} isLoading={isLoading} placeholder="Postavite pitanje iDoctoru..." height={560} suggestedPrompts={["Kako razumjeti snove?","Što je Jungova individua"]} />
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-3">Dodatni alati</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <a className="rounded-2xl border p-4 bg-white shadow-sm flex items-start justify-between" href="/downloads/legacy-backup-notes.txt">
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Backup</div>
                <div className="mt-1 font-semibold">Prethodna verzija (notes)</div>
                <div className="text-sm text-muted-foreground mt-1">Sačuvani asseti i napomene za migraciju</div>
              </div>
              <div className="text-violet-600">Preuzmi</div>
            </a>

            <a className="rounded-2xl border p-4 bg-white shadow-sm flex items-start justify-between" href="/downloads/blog-primer.md">
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Blog</div>
                <div className="mt-1 font-semibold">PDF / Priručnik za blog</div>
                <div className="text-sm text-muted-foreground mt-1">Predložak i struktura za članke</div>
              </div>
              <div className="text-cyan-600">Preuzmi</div>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
