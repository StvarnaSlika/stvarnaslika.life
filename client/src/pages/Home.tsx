import { useEffect } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  BrainCircuit,
  BookOpen,
  Compass,
  Download,
  Eye,
  Mail,
  Sparkles,
  UserRound,
} from "lucide-react";

const pillars = [
  {
    icon: BrainCircuit,
    title: "Psihologija",
    description:
      "Dubinska analiza ljudskog ponašanja, motivacije, trauma, identiteta i psihičke kompleksnosti s jasnim, profesionalnim pristupom.",
    accent: "from-violet-50 to-violet-100 text-violet-700",
  },
  {
    icon: Eye,
    title: "Parapsihologija",
    description:
      "Istraživanje fenomena koji dosežu granice klasične znanosti — svijest, percepcija, intuitivni uvid i neobična iskustva." ,
    accent: "from-cyan-50 to-cyan-100 text-cyan-700",
  },
  {
    icon: Sparkles,
    title: "O meni",
    description:
      "Ja sam Luka Ani-Antić — dio mog rada je ujediniti znanost, filozofiju, priču i osobno ispitivanje stvarnosti.",
    accent: "from-rose-50 to-rose-100 text-rose-700",
  },
];

const articles = [
  "Psihologija i skrivene motivacije",
  "Parapsihološki fenomeni i percepcija",
  "Svijest, trauma i integrativni pogled",
  "Osvrt na alternativne pristupe i analitičke okvire",
];

const values = [
  "Kritičko promišljanje",
  "Integrativni pogled na znanost i čovjeka",
  "Profesionalna estetika i jasna komunikaija",
  "Autentična priča i dubina sadržaja",
];

export default function Home() {
  useEffect(() => {
    document.title = "Stvarna Slika | Luka Ani-Antić";
  }, []);

  return (
    <main className="relative overflow-hidden bg-[#f6f3ef] text-slate-800">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(168,85,247,0.14),transparent_36%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.10),transparent_32%)]" />

      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 pb-10 pt-6 sm:px-6 lg:px-8">
          <header className="rounded-full border border-white/80 bg-white/80 px-4 py-3 shadow-[0_12px_30px_rgba(15,23,42,0.05)] backdrop-blur-xl">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 via-purple-500 to-cyan-500 text-xs font-black text-white shadow-lg shadow-violet-200">
                  SS
                </div>
                <div>
                  <p className="text-sm font-semibold tracking-[0.18em] text-slate-700">STVARNA SLIKA</p>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-slate-500">Luka Ani-Antić</p>
                </div>
              </div>

              <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
                <Link href="/">Početna</Link>
                <Link href="/psihologija">Psihologija</Link>
                <Link href="/parapsihologija">Parapsihologija</Link>
                <Link href="/o-nama">O meni</Link>
                <Link href="/blog">Blog</Link>
              </nav>

              <Link href="/kontakt">
                <button className="rounded-full bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_15px_28px_rgba(109,40,217,0.28)] transition hover:-translate-y-0.5 hover:bg-violet-500">
                  Kontakt
                </button>
              </Link>
            </div>
          </header>

          <div className="grid items-center gap-10 pb-12 pt-12 lg:grid-cols-[1.08fr_0.92fr] lg:pt-16">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-violet-700">
                <Compass className="h-3.5 w-3.5" />
                Premium portal za znanje i razumijevanje
              </div>

              <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-[-0.04em] text-slate-900 md:text-6xl xl:text-7xl">
                Istraživanje <span className="bg-gradient-to-r from-violet-600 via-purple-500 to-cyan-500 bg-clip-text text-transparent">psihologije</span>, svijesti i stvarnosti.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Stvarna Slika je mjesto gdje se susreću psihologija, parapsihologija, filozofija uma i osobno istraživanje stvarnosti. Ja sam Luka Ani-Antić, i kroz ovaj prostor dijelim uvid, analize i sadržaje koji nastoje razotkriti dublji sloj čovjeka.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/o-nama">
                  <button className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 via-purple-500 to-cyan-500 px-6 py-3.5 text-base font-semibold text-white shadow-[0_20px_32px_rgba(124,58,237,0.26)] transition hover:-translate-y-0.5">
                    O meni
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </button>
                </Link>
                <Link href="/blog">
                  <button className="rounded-full border border-slate-200 bg-white px-6 py-3.5 text-base font-semibold text-slate-800 shadow-[0_10px_24px_rgba(15,23,42,0.04)] transition hover:-translate-y-0.5 hover:border-violet-200 hover:text-violet-700">
                    Blog i članci
                  </button>
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-600">
                <span className="rounded-full border border-slate-200 bg-white/80 px-3 py-2">Psihologija</span>
                <span className="rounded-full border border-slate-200 bg-white/80 px-3 py-2">Parapsihologija</span>
                <span className="rounded-full border border-slate-200 bg-white/80 px-3 py-2">Alternativni pristupi</span>
                <span className="rounded-full border border-slate-200 bg-white/80 px-3 py-2">Uvidi i analiza</span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-violet-200/70 via-white to-cyan-200/70 blur-3xl" />
              <div className="rounded-[2rem] border border-violet-100 bg-white/80 p-5 shadow-[0_28px_65px_rgba(91,33,182,0.10)] backdrop-blur-xl sm:p-6">
                <div className="rounded-[1.5rem] bg-gradient-to-br from-violet-50 via-white to-cyan-50 p-6">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="rounded-full bg-violet-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-violet-700">
                      Stvarna slika
                    </span>
                    <span className="text-xs font-medium text-slate-500">Premium</span>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                      <p className="text-[10px] uppercase tracking-[0.22em] text-slate-500">Tematika</p>
                      <p className="mt-2 font-serif text-2xl leading-snug text-slate-900">
                        “Svijest je najdublji problem čovjeka — i najljepši put do razumijevanja sebe.”
                      </p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-3">
                      <div className="rounded-2xl bg-violet-100 p-3">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-violet-700">Tema</p>
                        <p className="mt-2 text-lg font-bold text-slate-900">Psiha</p>
                      </div>
                      <div className="rounded-2xl bg-cyan-100 p-3">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-700">Tema</p>
                        <p className="mt-2 text-lg font-bold text-slate-900">Svest</p>
                      </div>
                      <div className="rounded-2xl bg-rose-100 p-3">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-rose-700">Tema</p>
                        <p className="mt-2 text-lg font-bold text-slate-900">Ja</p>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                      <div className="mb-2 flex items-center justify-between text-sm text-slate-600">
                        <span>Analitički fokus</span>
                        <span className="font-semibold text-violet-700">96%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                        <div className="h-full w-[96%] rounded-full bg-gradient-to-r from-violet-600 via-purple-500 to-cyan-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-violet-700">Tri razine sadržaja</p>
            <h2 className="mt-3 text-4xl font-bold tracking-[-0.04em] text-slate-900 md:text-5xl">
              Psihologija, parapsihologija i osobna priča zajedno.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <div
                  key={pillar.title}
                  className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-[0_18px_40px_rgba(15,23,42,0.04)] transition hover:-translate-y-1 hover:shadow-[0_24px_52px_rgba(124,58,237,0.10)]"
                >
                  <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${pillar.accent}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900">{pillar.title}</h3>
                  <p className="mt-4 text-base leading-7 text-slate-600">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-violet-700">O meni</p>
            <h2 className="mt-3 text-4xl font-bold tracking-[-0.04em] text-slate-900 md:text-5xl">
              Ja sam Luka Ani-Antić.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              Moj cilj je razotkriti slojeve psihologije, nesvjesnog i iskustvenog znanja na način koji je inspirativan, ozbiljan i dostupan. Ovdje ne tražim jednostavne odgovore — tražim dublju sliku i temeljit uvid.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {values.map((value) => (
                <div key={value} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
                  {value}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-violet-100 bg-gradient-to-br from-violet-50 via-white to-cyan-50 p-7 shadow-[0_22px_48px_rgba(109,40,217,0.08)]">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">
                <UserRound className="h-6 w-6" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-slate-500">Autor</p>
                <p className="text-xl font-semibold text-slate-900">Luka Ani-Antić</p>
              </div>
            </div>

            <blockquote className="border-l-4 border-violet-500 bg-white/80 p-5 text-xl leading-8 text-slate-800 shadow-sm">
              “Ne tražim samo objasniti čovjeka — tražim osjetiti njegovu dubinu i prepoznati što je stvarno u njemu.”
            </blockquote>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4">
              <p className="text-[10px] uppercase tracking-[0.22em] text-slate-500">Sadržaj</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>• Tematski članci o psihologiji</li>
                <li>• Analize parapsiholoških fenomena</li>
                <li>• Eseji i osobni uvidi</li>
                <li>• Profesionalni i estetski dizajn</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-violet-700">Blog i članci</p>
              <h2 className="mt-3 text-4xl font-bold tracking-[-0.04em] text-slate-900 md:text-5xl">
                Najnoviji sadržaj i teme u razvoju
              </h2>
            </div>
            <Link href="/blog">
              <button className="hidden rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm md:inline-flex">
                Svi članci
              </button>
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {articles.map((article, index) => (
              <div key={article} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-[0_14px_28px_rgba(15,23,42,0.03)]">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-100 to-cyan-100 text-violet-700">
                  <BookOpen className="h-5 w-5" />
                </div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">#{index + 1}</p>
                <h3 className="mt-3 text-xl font-semibold text-slate-900">{article}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Dubinski zapis, pregled i kritički uvid s fokusom na kvalitetnu interpretaciju i razumijevanje.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-violet-100 bg-gradient-to-br from-violet-50 via-white to-cyan-50 p-8 shadow-[0_24px_50px_rgba(124,58,237,0.08)] md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-violet-700">Backup i arhiva</p>
                <h2 className="mt-3 text-4xl font-bold tracking-[-0.04em] text-slate-900 md:text-5xl">
                  Arhiva i priprema za nove verzije stranice
                </h2>
                <p className="mt-4 max-w-xl text-lg leading-8 text-slate-600">
                  U planu je backup prethodne verzije i dodatni sadržaj za blog sekciju, sačuvan u arhivi za lak pristup i kasnije dorade. Ovaj portal je već osmišljen kao profesionalna, svježa i light verzija s fokusom na jasnoću i dizajn.
                </p>
              </div>

              <div className="space-y-4 rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
                <a href="/downloads/legacy-backup-notes.txt" className="flex items-center justify-between rounded-2xl border border-violet-200 bg-violet-50 px-4 py-4 text-left transition hover:bg-violet-100">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-violet-700">Backup</p>
                    <p className="mt-1 text-base font-semibold text-slate-900">Legacy backup notes</p>
                  </div>
                  <Download className="h-5 w-5 text-violet-700" />
                </a>

                <a href="/downloads/blog-primer.md" className="flex items-center justify-between rounded-2xl border border-cyan-200 bg-cyan-50 px-4 py-4 text-left transition hover:bg-cyan-100">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-cyan-700">Blog</p>
                    <p className="mt-1 text-base font-semibold text-slate-900">Blog primer / priprema sadržaja</p>
                  </div>
                  <Download className="h-5 w-5 text-cyan-700" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 pt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] bg-slate-950 px-6 py-10 text-white shadow-[0_30px_60px_rgba(15,23,42,0.18)] md:px-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-violet-300">Kontakt</p>
                <h2 className="mt-3 text-3xl font-bold tracking-[-0.04em] md:text-4xl">Radiš li na nekoj temi — piši mi.</h2>
              </div>

              <a href="mailto:luka@example.com" className="inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-violet-50">
                <Mail className="h-4 w-4" />
                luka@example.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
