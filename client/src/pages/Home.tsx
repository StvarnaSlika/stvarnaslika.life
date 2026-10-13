import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight,
  Brain,
  Eye,
  Sparkles,
  BookOpen,
  ChevronDown,
  Search,
  Cpu,
  Globe,
  ShieldCheck,
  Compass,
  MessageSquareText,
} from "lucide-react";
import { AIChatBox, type Message } from "@/components/AIChatBox";
import { trpc } from "@/lib/trpc";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663360791554/9Xytk5XuyaGQiwf2ptjWSz/hero-bg_b62bb861.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const researchPillars = [
  {
    icon: Brain,
    title: "Forenzička psihologija",
    description:
      "Analiza vjerodostojnosti, psiholoških profila i subjektivnih iskaza s preciznošću kliničke i forenzičke metodologije.",
    accent: "purple",
  },
  {
    icon: Eye,
    title: "Parapsihologija",
    description:
      "Istraživanje ESP fenomena, percepcije izvan čula i teorija svijesti koje pomiču granice klasičnog znanja.",
    accent: "cyan",
  },
  {
    icon: Sparkles,
    title: "Integrativna znanost",
    description:
      "Povezivanje psihologije, filozofije uma, arhetipske dinamike i empirijskih tragova iz rubnih područja znanosti.",
    accent: "pink",
  },
];

const actionSteps = [
  {
    icon: Search,
    title: "Dubinsko istraživanje",
    desc: "Koristite Perplexity Pro AI za pristup najnovijim studijama i peer-reviewed modelima znanja.",
    color: "purple",
    panel: "bg-purple-100 text-purple-700",
  },
  {
    icon: Cpu,
    title: "Vizualizacija",
    desc: "Upotrijebite AI alate za generiranje konceptualnih mapa, arhetipskih scenarija i vizualnih modela svijesti.",
    color: "cyan",
    panel: "bg-cyan-100 text-cyan-700",
  },
  {
    icon: Globe,
    title: "Sintetička analiza",
    desc: "Povezivanje forenzike, psihe i misticizma kroz sintezu kompleksnih podataka i teorijskih okvira.",
    color: "pink",
    panel: "bg-pink-100 text-pink-700",
  },
  {
    icon: BookOpen,
    title: "Interakcija",
    desc: "Razgovarajte s iDoctorom — AI asistentom obučenim na integrativnim psihološkim modelima.",
    color: "teal",
    panel: "bg-teal-100 text-teal-700",
  },
];

function AIDoctorChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Pozdrav, ja sam iDoctor. Specijaliziran sam za integrativnu psihologiju, forenzičku analizu i istraživanje rubnih fenomena svijesti. Kako vam mogu pomoći u dekonstrukciji vaših uvida?",
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
    const history = messages.filter((m) => m.role !== "system").map((m) => ({
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
    document.title = "Stvarna Slika — Istraživanje psihe, svijesti i integrativne znanosti";
  }, []);

  return (
    <main className="relative overflow-hidden bg-[#f8fafc] text-slate-900">
      <section className="relative isolate overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(168,85,247,0.12),transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(6,182,212,0.10),transparent_35%)]" />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(${HERO_BG})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/85 to-white/95" />
        <div className="absolute inset-0 neural-network opacity-30" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
          <header className="mb-16 flex items-center justify-between rounded-full border border-white/50 bg-white/60 px-4 py-3 shadow-[0_12px_30px_rgba(15,23,42,0.04)] backdrop-blur-xl sm:px-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 via-purple-500 to-cyan-500 text-sm font-bold text-white shadow-lg shadow-violet-200">
                SS
              </div>
              <div>
                <div className="text-base font-semibold tracking-wide text-slate-900">Stvarna Slika</div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-slate-500">Istraživanje psihe</div>
              </div>
            </div>

            <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
              <Link href="/psihologija" className="transition hover:text-violet-700">Psihologija</Link>
              <Link href="/parapsihologija" className="transition hover:text-violet-700">Parapsihologija</Link>
              <Link href="/alternativni-pristupi" className="transition hover:text-violet-700">Pristupi</Link>
              <Link href="/blog" className="transition hover:text-violet-700">Blog</Link>
            </nav>

            <Link href="/kontakt">
              <button className="rounded-full border border-violet-200 bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_14px_24px_rgba(139,92,246,0.25)] transition hover:-translate-y-0.5 hover:bg-violet-700">
                Kontakt
              </button>
            </Link>
          </header>

          <div className="grid min-h-[70vh] items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-violet-700">
                <ShieldCheck className="h-3.5 w-3.5" />
                Istraživačka platforma
              </div>

              <h1 className="max-w-4xl text-5xl font-black leading-[0.96] tracking-tight text-slate-900 md:text-6xl xl:text-7xl">
                Dekonstrukcija <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">mainstream dogmi</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 md:text-xl">
                Stvarna Slika istražuje psihoanalitičke, kliničke i parapsihološke dimenzije svijesti kroz rigoroznu metodologiju, jasnoću i integrativni pogled na kompleksnost ljudskog iskustva.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/psihologija">
                  <button className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 via-purple-500 to-cyan-500 px-7 py-3.5 text-base font-semibold text-white shadow-[0_18px_28px_rgba(168,85,247,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_34px_rgba(6,182,212,0.28)]">
                    Istraži dubinu
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </button>
                </Link>
                <Link href="/o-nama">
                  <button className="rounded-full border border-slate-200 bg-white/80 px-7 py-3.5 text-base font-semibold text-slate-800 shadow-[0_10px_24px_rgba(15,23,42,0.04)] transition hover:-translate-y-0.5 hover:border-violet-200 hover:text-violet-700">
                    O projektu
                  </button>
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-slate-600">
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1.5">
                  <Compass className="h-4 w-4 text-violet-600" />
                  Prema empiriji i razumu
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1.5">
                  <MessageSquareText className="h-4 w-4 text-cyan-600" />
                  iDoctor AI 
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-violet-200/70 via-white to-cyan-200/70 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-violet-100 bg-white/80 p-5 shadow-[0_28px_70px_rgba(76,29,149,0.12)] backdrop-blur-xl sm:p-6">
                <div className="rounded-[1.5rem] border border-violet-100 bg-gradient-to-br from-violet-50 via-white to-cyan-50 p-6">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="rounded-full bg-violet-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-violet-700">
                      Insight
                    </span>
                    <span className="text-xs font-medium text-slate-500">Live</span>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-2xl border border-violet-100 bg-white p-4 shadow-sm">
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Tema</p>
                      <p className="mt-2 text-xl font-serif text-slate-900">“Svijest nije samo produkt mozga. Ona je fenomen koji zahtijeva integrativno promišljanje.”</p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl bg-violet-100 p-4">
                        <p className="text-[11px] uppercase tracking-[0.22em] text-violet-700">Psihologija</p>
                        <p className="mt-2 text-lg font-semibold text-slate-900">Jung</p>
                      </div>
                      <div className="rounded-2xl bg-cyan-100 p-4">
                        <p className="text-[11px] uppercase tracking-[0.22em] text-cyan-700">Sustav</p>
                        <p className="mt-2 text-lg font-semibold text-slate-900">Orch-OR</p>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-sm font-semibold text-slate-700">Analiza</span>
                        <span className="text-xs text-emerald-600">+18.4%</span>
                      </div>
                      <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
                        <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-8 flex justify-center"
          >
            <div className="flex flex-col items-center gap-2 text-slate-500">
              <span className="text-[10px] uppercase tracking-[0.28em]">Otkrij više</span>
              <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Number.POSITIVE_INFINITY }}>
                <ChevronDown className="h-5 w-5 text-violet-600" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-700">
              Istraživanje i dubina
            </span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Integrativni pristup razumijevanju psihe
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {researchPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={index}
                  className="group rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-[0_18px_40px_rgba(15,23,42,0.04)] transition hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(168,85,247,0.10)]"
                >
                  <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${
                    pillar.accent === "purple"
                      ? "bg-violet-100 text-violet-700"
                      : pillar.accent === "cyan"
                        ? "bg-cyan-100 text-cyan-700"
                        : "bg-pink-100 text-pink-700"
                  }`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900">{pillar.title}</h3>
                  <p className="mt-4 text-base leading-7 text-slate-600">{pillar.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-700">
                  Forenzička psihologija
                </span>
                <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                  Izvan simptoma: analiza vjerodostojnosti
                </h2>
              </div>

              <p className="text-lg leading-8 text-slate-600">
                Psihologija se često svodi na klasifikaciju simptoma, dok pravi uvid zahtijeva dublje promišljanje o arhetipskoj dinamici, značenju iskaza i forenzičkoj preciznosti u razumijevanju ljudske naravi.
              </p>

              <div className="rounded-[1.5rem] border-l-4 border-violet-500 bg-violet-50/80 p-6 italic text-slate-800 shadow-sm">
                <p className="text-xl leading-8">“Dok god ne učiniš nesvjesno svjesnim, ono će upravljati tvojim životom i ti ćeš to zvati sudbinom.”</p>
                <span className="mt-3 block text-sm font-semibold uppercase tracking-[0.16em] text-violet-700">— Carl Gustav Jung</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-8 rounded-[2rem] bg-gradient-to-br from-violet-200/70 via-white to-cyan-200/70 blur-2xl" />
              <div className="relative rounded-[2rem] border border-violet-100 bg-white p-7 shadow-[0_30px_70px_rgba(91,33,182,0.10)]">
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">
                  <Brain className="h-7 w-7" />
                </div>
                <p className="font-serif text-2xl leading-9 text-slate-900 md:text-3xl">
                  “Forenzička psihologija u svojoj biti nije samo alat pravosuđa, već kirurški precizna metoda za analizu vjerodostojnosti subjektivne realnosti.”
                </p>
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-violet-700">— Istraživački tim Stvarna Slika</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#f8f9ff_0%,#f4f7ff_100%)] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-700">
              Empirija ruba
            </span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Parapsihologija i kvantna svijest
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-[2rem] border border-violet-100 bg-white p-8 shadow-[0_18px_40px_rgba(15,23,42,0.04)]"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">
                <Eye className="h-6 w-6" />
              </div>
              <p className="text-base leading-8 text-slate-600">
                Parapsihologija nije negacija znanosti, nego njezina nužna ekstenzija u područja koja klasični materijalizam često izostavlja. Kroz prizmu Orch-OR teorije i studija o izvanosjetilnoj percepciji, promatramo načine na koje svijest može djelovati izvan standardnih okvira percepcije.
              </p>
              <div className="mt-6 rounded-2xl border border-violet-100 bg-violet-50 p-5">
                <p className="font-serif text-lg text-slate-800">“Postoje dokazi da mozak funkcionira kao biološki kvantni sustav, što otvara vrata razumijevanju fenomena poput prekognicije.”</p>
                <span className="mt-3 block text-xs font-semibold uppercase tracking-[0.18em] text-violet-700">— Stuart Hameroff</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-[2rem] border border-cyan-100 bg-white p-8 shadow-[0_18px_40px_rgba(15,23,42,0.04)]"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700">
                <Sparkles className="h-6 w-6" />
              </div>
              <p className="text-base leading-8 text-slate-600">
                Statistička značajnost parapsiholoških eksperimenata često nadmašuje onu u konvencionalnoj medicini, no otpor paradigme ostaje neprobojan. Naša analiza nastoji dekonstrukciju dogmi prevesti u strukturirani, kritički i empirijski općenit pogled na svijest.
              </p>
              <div className="mt-6 rounded-2xl border border-cyan-100 bg-cyan-50 p-5">
                <p className="font-serif text-lg text-slate-800">“Svijest nije epifenomen materije, nego njezina temeljna potka u kvantnoj realnosti.”</p>
                <span className="mt-3 block text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">— Dean Radin</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Usporedba teoretskih okvira
            </h2>
          </div>

          <div className="space-y-8">
            <div className="rounded-[2rem] border border-violet-100 bg-gradient-to-r from-violet-50 to-white p-8 shadow-[0_18px_40px_rgba(15,23,42,0.04)]">
              <h3 className="mb-4 flex items-center gap-3 text-2xl font-semibold text-slate-900">
                <span className="h-2.5 w-2.5 rounded-full bg-violet-600" />
                Reduktivni materijalizam
              </h3>
              <p className="text-lg leading-8 text-slate-600">
                Tvrdi da je svijest puki nusprodukt moždane aktivnosti. U tom modelu, subjektivno iskustvo se često svodi na biološku pojavu koja prestaje s fizičkom degradacijom neurona.
              </p>
            </div>

            <div className="rounded-[2rem] border border-cyan-100 bg-gradient-to-r from-cyan-50 to-white p-8 shadow-[0_18px_40px_rgba(15,23,42,0.04)]">
              <h3 className="mb-4 flex items-center gap-3 text-2xl font-semibold text-slate-900">
                <span className="h-2.5 w-2.5 rounded-full bg-cyan-600" />
                Panpsihizam i univerzalno polje
              </h3>
              <p className="text-lg leading-8 text-slate-600">
                Sugerira da je svijest temeljna gradivna jedinica svemira. Mi zastupamo integrativni model gdje se subjektivno iskustvo promatra kao primarni podatak, a ne kao sekundarni derivat materije.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#fbf9ff_0%,#f5f8ff_100%)] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">Što dalje?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Predloženi koraci za dublje istraživanje i praktičnu primjenu integrativnih uvida.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {actionSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-[0_16px_36px_rgba(15,23,42,0.04)] transition hover:-translate-y-1 hover:shadow-[0_22px_40px_rgba(168,85,247,0.10)]"
              >
                <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${step.panel}`}>
                  <step.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Konzultacije s <span className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">iDoctor-om</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600">Dostupan 24/7 za analizu vaših uvida i pitanja iz područja psihologije i znanosti.</p>
          </div>
          <AIDoctorChat />
        </div>
      </section>

      <footer className="bg-slate-950 py-14 text-slate-300">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
            <div>
              <div className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">Stvarna Slika</div>
              <p className="max-w-xl text-base leading-7 text-slate-400">
                Platforma za istraživanje psihe, svijesti, kliničke psihologije i parapsihologije kroz integrativnu analizu i jasnoću u znanstvenom razmišljanju.
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">Reference</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>Jung, C. G. — Aion</li>
                <li>Hameroff & Penrose — Consciousness in the universe</li>
                <li>Radin, D. — Entangled Minds</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
