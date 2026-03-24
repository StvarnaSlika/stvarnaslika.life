import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Brain, Eye, Sparkles, BookOpen, ChevronDown, Star, Users, FileText, Infinity, Search, Cpu, Globe } from "lucide-react";
import { AIChatBox, type Message } from "@/components/AIChatBox";
import { trpc } from "@/lib/trpc";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663360791554/9Xytk5XuyaGQiwf2ptjWSz/hero-bg_b62bb861.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

function AIDoctorChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Pozdrav, ja sam iDoctor. Specijaliziran sam za integrativnu psihologiju, forenzičku analizu i istraživanje rubnih fenomena svijesti. Kako vam mogu pomoći u dekonstrukciji vaših trenutnih uvida ili izazova?",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const chatMutation = trpc.chatbot.chat.useMutation({
    onSuccess: (data: any) => {
      setMessages((prev) => [...prev, { role: "assistant", content: data.response }]);
      setIsLoading(false);
    },
    onError: () => {
      setIsLoading(false);
    },
  });

  const handleSendMessage = (content: string) => {
    setMessages((prev) => [...prev, { role: "user", content }]);
    setIsLoading(true);
    const history = messages.filter(m => m.role !== "system").map(m => ({
      role: m.role as "user" | "assistant",
      content: m.content,
    }));
    chatMutation.mutate({ message: content, history });
  };

  return (
    <AIChatBox
      messages={messages}
      onSendMessage={handleSendMessage}
      isLoading={isLoading}
      placeholder="Postavite pitanje iDoctoru..."
      height={500}
      emptyStateMessage="Započnite razgovor s iDoctor-om"
      suggestedPrompts={[
        "Što je Jungova analitička psihologija?",
        "Kako Orch-OR teorija objašnjava svijest?",
        "Objasni forenzičku analizu vjerodostojnosti",
        "Savjeti za istraživanje parapsiholoških studija",
      ]}
    />
  );
}

export default function Home() {
  useEffect(() => {
    document.title = "Stvarna Slika — Arhitektura nevidljivog";
  }, []);

  return (
    <main className="mandala-pattern">
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-white to-purple-50/30">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/70" />
        <div className="absolute inset-0 neural-network opacity-30" />

        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold uppercase tracking-widest border border-purple-200">
              Stvarna Slika — Istraživačka Platforma
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif font-bold text-purple-900 mb-6 max-w-4xl mx-auto leading-tight"
          >
            Dekonstrukcija <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 bg-clip-text text-transparent">mainstream dogmi</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-purple-900/80 max-w-3xl mx-auto mb-10 leading-relaxed font-serif"
          >
            Stvarnaslika.com predstavlja istraživačku platformu posvećenu integraciji potisnutih empirijskih podataka o prirodi svijesti kroz rigoroznu forenzičku metodologiju i fenomenologiju rubnih iskustava.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/psihologija">
              <button className="neon-button group flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold hover:scale-105 transition-all cursor-pointer">
                Istraži Dubinu
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/o-nama">
              <button className="transparent-card px-8 py-4 rounded-full text-purple-900 font-semibold hover:scale-105 transition-all cursor-pointer border-2 border-purple-300">
                O Projektu
              </button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-purple-600/60 uppercase tracking-widest">Otkrij Više</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
            <ChevronDown className="w-5 h-5 text-purple-600/60" />
          </motion.div>
        </motion.div>
      </section>

      {/* ===== KLINIČKA I FORENZIČKA DUBINA ===== */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.div variants={fadeUp} custom={0}>
                <span className="text-purple-600 font-semibold tracking-widest uppercase text-xs">Forenzička Psihologija</span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-purple-900 mt-2 mb-6">Izvan Simptoma: Analiza Vjerodostojnosti</h2>
                <p className="text-purple-800/70 text-lg leading-relaxed mb-6">
                  Psihologija se prečesto svodi na puko klasificiranje poremećaja, zanemarujući dublje slojeve arhetipske dinamike i forenzičke preciznosti u analizi iskaza. Naš pristup koristi Jungovu analitičku psihologiju kao temelj za razumijevanje sjene, dok forenzički uvidi omogućuju razlikovanje patoloških procesa od autentičnih transformativnih iskustava.
                </p>
                <div className="border-l-4 border-purple-400 pl-6 py-4 bg-purple-50/50 rounded-r-lg italic font-serif">
                  <p className="text-purple-900">
                    "Dok god ne učiniš nesvjesno svjesnim, ono će upravljati tvojim životom i ti ćeš to zvati sudbinom."
                  </p>
                  <span className="block mt-2 text-sm text-purple-600">— Carl Gustav Jung</span>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-purple-200 to-cyan-200 blur-2xl opacity-30 rounded-full" />
              <div className="relative transparent-card p-8 rounded-3xl border-2 border-purple-100 shadow-xl bg-white/50 backdrop-blur-sm">
                <Brain className="w-12 h-12 text-purple-600 mb-6" />
                <p className="text-purple-900 font-serif text-xl leading-relaxed italic">
                  "Forenzička psihologija u svojoj biti nije samo alat pravosuđa, već kirurški precizna metoda za analizu vjerodostojnosti subjektivne realnosti."
                </p>
                <p className="mt-4 text-sm text-purple-600 font-semibold">— Istraživački tim Stvarna Slika</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== PARAPSIHOLOGIJA I KVANTNA SVIJEST ===== */}
      <section className="py-24 bg-purple-50/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-200 to-transparent" />
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-purple-600 font-semibold tracking-widest uppercase text-xs">Empirija Ruba</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-serif font-bold text-purple-900 mt-2">Parapsihologija i Kvantna Svijest</motion.h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="transparent-card p-10 rounded-3xl border-2 border-purple-200 hover:border-purple-400 transition-all">
              <Eye className="w-10 h-10 text-purple-600 mb-6" />
              <p className="text-purple-800/80 leading-relaxed mb-8">
                Parapsihologija nije negacija znanosti, već njezina nužna ekstenzija. Kroz prizmu Orch-OR teorije (Penrose-Hameroff) i studija o izvanosjetilnoj percepciji (ESP), istražujemo kako svijest korelira s kvantnim procesima izvan linearnog vremena.
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-white/60 rounded-xl border border-purple-100 italic font-serif">
                  <p className="text-purple-900 text-sm">"Postoje dokazi da mozak funkcionira kao biološki kvantni sustav, što otvara vrata razumijevanju fenomena poput prekognicije."</p>
                  <span className="text-xs text-purple-500 mt-2 block">— Stuart Hameroff, Orch-OR Theory</span>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} className="transparent-card p-10 rounded-3xl border-2 border-cyan-200 hover:border-cyan-400 transition-all">
              <Sparkles className="w-10 h-10 text-cyan-600 mb-6" />
              <p className="text-purple-800/80 leading-relaxed mb-8">
                Statistička značajnost parapsiholoških eksperimenata često nadmašuje onu u konvencionalnoj medicini, no otpor paradigme ostaje neprobojan. Mi dekonstruiramo taj otpor kroz empirijske dokaze.
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-white/60 rounded-xl border border-cyan-100 italic font-serif">
                  <p className="text-purple-900 text-sm">"Svijest nije epifenomen materije, već njezina temeljna potka u kvantnoj realnosti."</p>
                  <span className="text-xs text-cyan-600 mt-2 block">— Dean Radin, Entangled Minds</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== USPOREDBA TEORIJA ===== */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-purple-900 mb-8 text-center">Usporedba Teorija: Materijalizam vs. Panpsihizam</h2>
            <div className="space-y-8">
              <div className="p-8 rounded-3xl bg-gradient-to-r from-purple-50 to-white border-2 border-purple-100">
                <h3 className="text-xl font-bold text-purple-900 mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-600" /> Reduktivni Materijalizam
                </h3>
                <p className="text-purple-800/70 leading-relaxed">
                  Tvrdi da je svijest puki nusprodukt moždane aktivnosti (epifenomen). U ovom modelu, subjektivno iskustvo je biološka anomalija koja prestaje s fizičkom degradacijom neurona.
                </p>
              </div>
              <div className="p-8 rounded-3xl bg-gradient-to-r from-cyan-50 to-white border-2 border-cyan-100">
                <h3 className="text-xl font-bold text-cyan-900 mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-600" /> Panpsihizam i Univerzalno Polje
                </h3>
                <p className="text-purple-800/70 leading-relaxed">
                  Sugerira da je svijest temeljna gradivna jedinica svemira. Mi zastupamo integrativni model gdje se subjektivno iskustvo promatra kao primarni podatak, a ne kao sekundarni derivat materije.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ACTION PLAN: ŠTO DALJE? ===== */}
      <section className="py-24 bg-gradient-to-b from-white to-purple-100/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-purple-900 mb-4">Što Dalje?</h2>
            <p className="text-purple-700/70 max-w-xl mx-auto">Predloženi koraci za dublje istraživanje i implementaciju integrativnih uvida.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Search, title: "Dubinsko Istraživanje", desc: "Koristite Perplexity Pro AI za pristup najnovijim parapsihološkim studijama i peer-reviewed radovima.", color: "purple" },
              { icon: Cpu, title: "Vizualizacija", desc: "Upotrijebite Galaxy AI za generiranje vizualnih prikaza arhetipskih snova ili kvantnih polja svijesti.", color: "cyan" },
              { icon: Globe, title: "Sintetička Analiza", desc: "Za povezivanje forenzike i misticizma, Super Grok AI nudi najbržu sintezu kompleksnih podataka.", color: "pink" },
              { icon: BookOpen, title: "Interakcija", desc: "Razgovarajte s iDoctorom — AI asistentom obučenim na integrativnim psihološkim modelima.", color: "teal" },
            ].map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="transparent-card p-8 rounded-3xl border-2 border-purple-100 hover:neon-glow transition-all text-center"
                >
                  <div className={`w-12 h-12 rounded-2xl bg-${step.color}-100 flex items-center justify-center mx-auto mb-6`}>
                    <Icon className={`w-6 h-6 text-${step.color}-600`} />
                  </div>
                  <h4 className="font-bold text-purple-900 mb-3">{step.title}</h4>
                  <p className="text-sm text-purple-800/70 leading-relaxed">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== AI DOCTOR SECTION ===== */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-purple-900 mb-4">Konzultacije s <span className="text-purple-600">iDoctor-om</span></h2>
              <p className="text-purple-700/70">Dostupan 24/7 za analizu vaših uvida i pitanja iz područja psihologije i znanosti.</p>
            </div>
            <AIDoctorChat />
          </div>
        </div>
      </section>

      {/* ===== REFERENCES ===== */}
      <footer className="py-12 bg-purple-900 text-white/80 text-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-4">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Izvori i Reference</h4>
            <p>[1] Jung, C. G. (1951). Aion: Researches into the Phenomenology of the Self. Princeton University Press.</p>
            <p>[2] Hameroff, S., & Penrose, R. (2014). Consciousness in the universe: A review of the 'Orch OR' theory. Physics of Life Reviews.</p>
            <p>[3] Radin, D. (2006). Entangled Minds: Extrasensory Experiences in a Quantum Reality. Paraview Pocket Books.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
