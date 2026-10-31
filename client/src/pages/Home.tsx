import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowUpRight, BookOpen, BrainCircuit, Compass, Eye, Fingerprint, Layers3, Mail, Play, Sparkles } from "lucide-react";

const topics = [
  {
    number: "01",
    title: "Psihologija bez etiketa",
    text: "Emocije, trauma, identitet i obrasci ponašanja — jasno, bez dijagnoza iz fotelje i bez površinskog morala.",
    href: "/psihologija",
    icon: BrainCircuit,
    image: "/images/hero-brain.jpg",
  },
  {
    number: "02",
    title: "Svijest pod povećalom",
    text: "Percepcija, pažnja, intuicija i granice onoga što mislimo da znamo — u potrazi za stvarnim uzrocima i značenjima.",
    href: "/parapsihologija",
    icon: Eye,
    image: "/images/control-mind.jpg",
  },
  {
    number: "03",
    title: "Pitanja koja ostaju",
    text: "Otvoreno prema nepoznatom, strogo prema dokazima, interpretaciji i humanom razumijevanju čovjeka.",
    href: "/alternativni-pristupi",
    icon: Compass,
    image: "/images/brain-abstract.jpg",
  },
];

const notes = [
  ["01", "Ne vjeruj prvoj interpretaciji."],
  ["02", "Činjenica nije isto što i dojam."],
  ["03", "Čovjek je uvijek više od obrasca."],
];

const rise = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" as const } },
};

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#f5f7f5] text-[#18211f]">
      <section className="relative border-b border-[#18211f]/10 bg-[#f5f7f5]">
        <div className="pointer-events-none absolute -right-32 top-10 h-[540px] w-[540px] rounded-full bg-[#dce8e0] blur-3xl opacity-80" />
        <div className="pointer-events-none absolute -left-44 bottom-0 h-[420px] w-[420px] rounded-full bg-[#e7e1db] blur-3xl opacity-70" />
        <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-28 sm:px-8 lg:px-12 lg:pt-32">
          <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
            <motion.div initial="hidden" animate="show" variants={rise}>
              <div className="mb-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#68736e]">
                <span className="h-px w-9 bg-[#18211f]" />
                Neovisni prostor za istraživanje
              </div>

              <h1 className="max-w-3xl font-serif text-[clamp(3.5rem,7.5vw,7.7rem)] font-medium leading-[0.86] tracking-[-0.07em]">
                Vidjeti čovjeka
                <span className="block italic text-[#667b6e]">iza simbola</span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-7 text-[#56635d]">
                Psihologija, svijest, ovisnosti i rubni fenomeni — povezani u prostor koji razlikuje činjenice od pretpostavki.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link href="/blog">
                  <span className="group inline-flex cursor-pointer items-center gap-3 rounded-full bg-[#18211f] px-5 py-3 text-sm font-medium text-[#f5f7f5] transition hover:bg-[#24332d]">
                    Saznaj više
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
                <Link href="/o-nama">
                  <span className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#18211f]/15 bg-white/60 px-5 py-3 text-sm font-medium text-[#18211f] transition hover:border-[#18211f]/30 hover:bg-white">
                    <Play className="h-4 w-4" />
                    O projektu
                  </span>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative"
            >
              <div className="relative aspect-[1.03] overflow-hidden rounded-[2rem] bg-[#24332d] shadow-[0_30px_70px_rgba(24,33,31,.18)]">
                <img src="/images/hero-brain.jpg" alt="Vizualna interpretacija ljudskog uma" className="h-full w-full object-cover" />
              </div>

              <motion.div
                animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-5 -left-4 rounded-2xl bg-white/90 p-4 shadow-lg ring-1 ring-black/5"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ecf3ee] text-[#18211f]">
                    <Layers3 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#68736e]">Analiza</p>
                    <p className="text-sm font-medium text-[#18211f]">Sustavnost nad intuicijom</p>
                  </div>
                </div>
              </motion.div>

              <div className="absolute -right-3 top-8 hidden w-28 overflow-hidden rounded-xl border-4 border-[#f5f7f5] shadow-lg sm:block">
                <img src="/images/control-mind.jpg" alt="Kontrola i um" className="h-28 w-full object-cover" />
              </div>
            </motion.div>
          </div>

          <div className="mt-12 grid border-t border-[#18211f]/15 pt-3 sm:grid-cols-3">
            {notes.map(([num, text]) => (
              <div key={num} className="flex gap-3 py-2 text-xs text-[#68736e] sm:border-r sm:border-[#18211f]/10 sm:last:border-r-0">
                <span className="font-semibold text-[#18211f]">{num}</span>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12">
        <div className="mb-7 flex items-end justify-between gap-5">
          <div>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#68736e]">Teme</p>
            <h2 className="font-serif text-4xl text-[#18211f] sm:text-5xl">Istraživanje koje vodi do dubljeg pogleda</h2>
          </div>
          <Link href="/blog">
            <span className="hidden items-center gap-2 text-sm font-medium text-[#18211f] md:inline-flex">
              Pregledaj članke
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {topics.map(({ number, title, text, href, icon: Icon, image }) => (
            <Link key={number} href={href}>
              <article className="group cursor-pointer overflow-hidden rounded-[1.75rem] border border-[#18211f]/10 bg-white shadow-[0_16px_40px_rgba(24,33,31,.04)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(24,33,31,.08)]">
                <div className="relative h-52 overflow-hidden">
                  <img src={image} alt={title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#18211f]/60 via-[#18211f]/10 to-transparent" />
                  <div className="absolute left-5 top-5 flex items-center justify-center rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#18211f]">
                    {number}
                  </div>
                </div>
                <div className="space-y-4 p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eef2ee] text-[#18211f]">
                      <Icon className="h-4 w-4" />
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-[#68736e] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <h3 className="font-serif text-2xl text-[#18211f]">{title}</h3>
                  <p className="text-sm leading-6 text-[#56635d]">{text}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-[#18211f]/10 bg-[#eef2ee]">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-12 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-12">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#18211f] p-7 text-[#f5f7f5] shadow-[0_30px_80px_rgba(24,33,31,.15)] sm:p-8">
            <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#dfe9e0]">
              <Sparkles className="h-4 w-4" />
              Zašto Stvarna Slika
            </div>
            <h3 className="mt-5 max-w-md font-serif text-4xl leading-tight">Ne tražimo jednostavne odgovore. Tražimo dublje razumijevanje.</h3>
            <p className="mt-5 max-w-lg text-base leading-7 text-[#d5ded7]">
              Naša istraživanja povezuju psihologiju, svijest, traumatske obrasce, ovisnosti i alternativne pristupe bez predrasuda. Cilj je spoznati čovjeka tako da se ne svodi na etikete, već na razumijevanje složenosti.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              { icon: Fingerprint, title: "Proučavanje uzroka", copy: "Ne zanemarujemo kontekst, osobnu povijest i složene obrasce ponašanja." },
              { icon: BookOpen, title: "Istraživački pristup", copy: "Članci, analize i promišljanja nastaju kroz kritičko čitanje i pregled savremenih znanja." },
              { icon: Mail, title: "Diskusija i kontakt", copy: "Pitanja, prijedlozi i suradnja su dio procesa stvaranja sadržaja i razumijevanja." },
            ].map(({ icon: Icon, title, copy }) => (
              <div key={title} className="rounded-[1.5rem] border border-[#18211f]/10 bg-white p-5 shadow-sm">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#eef2ee] text-[#18211f]">
                  <Icon className="h-5 w-5" />
                </div>
                <h4 className="font-serif text-2xl text-[#18211f]">{title}</h4>
                <p className="mt-2 text-sm leading-6 text-[#56635d]">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#68736e]">Pristup</p>
            <h2 className="font-serif text-4xl text-[#18211f]">Tri ravni istraživanja</h2>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            { label: "Psihologija", text: "Emocije, trauma, identitet, obrasci i unutarnji mehanizmi kroz koji se čovjek oblikuje." },
            { label: "Svijest", text: "Percepcija, pažnja, intuicija i granice subjektivnog iskustva u odnosu prema znanju i dokazima." },
            { label: "Alternativni pristupi", text: "Otvorenost prema novim modelima i pristupima koji provociraju predrasude i otvaraju nove horizonte." },
          ].map((item) => (
            <div key={item.label} className="rounded-[1.5rem] border border-[#18211f]/10 bg-white p-6 shadow-sm">
              <div className="mb-4 inline-flex rounded-full bg-[#eef2ee] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#18211f]">
                {item.label}
              </div>
              <p className="text-sm leading-7 text-[#56635d]">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#18211f] text-[#f4f0ea]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <div>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#dfe9e0]">Stvarna Slika</p>
            <h3 className="font-serif text-3xl text-[#f4f0ea] sm:text-4xl">Poveži se, istraži i promišljaj.</h3>
          </div>
          <Link href="/kontakt">
            <span className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#f4f0ea] px-5 py-3 text-sm font-medium text-[#18211f] transition hover:bg-white">
              Kontaktiraj nas
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
