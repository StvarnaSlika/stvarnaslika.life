import { Link } from "wouter";
import {
  ArrowUpRight,
  BookOpen,
  BrainCircuit,
  Compass,
  Eye,
  Fingerprint,
  Layers3,
  Mail,
  Play,
  Sparkles,
} from "lucide-react";

const topics = [
  {
    number: "01",
    title: "Psihologija bez etiketa",
    text: "Emocije, trauma, identitet i obrasci ponašanja — objašnjeni jasno, bez dijagnoza iz fotelje i bez osuđivanja.",
    href: "/psihologija",
    icon: BrainCircuit,
    accent: "bg-[#d8e8df]",
  },
  {
    number: "02",
    title: "Svijest pod povećalom",
    text: "Kako nastaje iskustvo stvarnosti? Istraži percepciju, pažnju, intuiciju i granice onoga što mislimo da znamo.",
    href: "/parapsihologija",
    icon: Eye,
    accent: "bg-[#e8d9ce]",
  },
  {
    number: "03",
    title: "Pitanja koja ostaju",
    text: "Otvoreno prema nepoznatom, strogo prema dokazima. Rubni fenomeni zaslužuju znatiželju — i kritičko čitanje.",
    href: "/alternativni-pristupi",
    icon: Compass,
    accent: "bg-[#ddd9ea]",
  },
];

const notes = [
  ["01", "Ne vjeruj prvoj interpretaciji."],
  ["02", "Činjenica nije isto što i dojam."],
  ["03", "Čovjek je uvijek više od obrasca."],
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#f4f0ea] text-[#18211f]">
      <section className="relative min-h-[760px] border-b border-[#18211f]/10">
        <div className="pointer-events-none absolute -right-32 top-20 h-[520px] w-[520px] rounded-full bg-[#d8e8df] blur-3xl opacity-80" />
        <div className="pointer-events-none absolute -left-48 bottom-0 h-[420px] w-[420px] rounded-full bg-[#e8d9ce] blur-3xl opacity-70" />
        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-28 sm:px-8 lg:px-12 lg:pt-36">
          <div className="grid items-end gap-16 lg:grid-cols-[1.12fr_0.88fr]">
            <div>
              <div className="mb-8 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#68736e]">
                <span className="h-px w-10 bg-[#18211f]" />
                Neovisni prostor za istraživanje uma
              </div>
              <h1 className="max-w-4xl font-serif text-[clamp(3.8rem,8vw,8rem)] font-medium leading-[0.88] tracking-[-0.065em] text-[#18211f]">
                Vidjeti čovjeka
                <span className="block italic text-[#667b6e]">iza obrasca.</span>
              </h1>
              <p className="mt-10 max-w-xl text-lg leading-8 text-[#56635d] sm:text-xl">
                Psihologija, svijest, ovisnosti i rubni fenomeni — povezani u prostor koji razlikuje činjenice od pretpostavki, a razumijevanje od osude.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link href="/blog">
                  <span className="group inline-flex cursor-pointer items-center gap-3 rounded-full bg-[#18211f] px-6 py-3.5 text-sm font-semibold text-[#f4f0ea] transition hover:-translate-y-1 hover:bg-[#667b6e]">
                    Istraži platformu
                    <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
                <Link href="/alati">
                  <span className="group inline-flex cursor-pointer items-center gap-3 px-3 py-3.5 text-sm font-semibold text-[#18211f]">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#18211f]/25 transition group-hover:border-[#18211f] group-hover:bg-white"><Play className="ml-0.5 h-3.5 w-3.5 fill-current" /></span>
                    Isprobaj alate
                  </span>
                </Link>
                <Link href="/biblioteka">
                  <span className="group inline-flex cursor-pointer items-center gap-2 px-3 py-3.5 text-sm font-semibold text-[#56635d] transition hover:text-[#18211f]">
                    <BookOpen className="h-4 w-4" /> Biblioteka materijala
                  </span>
                </Link>
              </div>
            </div>

            <div className="relative lg:pb-4">
              <div className="relative aspect-[0.82] overflow-hidden rounded-[11rem_11rem_1.5rem_1.5rem] bg-[#24332d] p-7 text-[#f4f0ea] shadow-[0_35px_80px_rgba(24,33,31,0.18)] sm:p-10">
                <div className="absolute inset-0 opacity-50" style={{ backgroundImage: "linear-gradient(rgba(244,240,234,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(244,240,234,.08) 1px, transparent 1px)", backgroundSize: "42px 42px" }} />
                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#c7d6cb]">Stvarna Slika / 01</span>
                    <Fingerprint className="h-7 w-7 text-[#c7d6cb]" strokeWidth={1} />
                  </div>
                  <div>
                    <p className="mb-5 max-w-[13rem] font-serif text-3xl leading-tight text-[#f4f0ea] sm:text-4xl">Percepcija nije prozor. Ona je proces.</p>
                    <div className="h-px w-full bg-[#f4f0ea]/25" />
                    <div className="mt-5 flex items-end justify-between text-[10px] uppercase tracking-[0.2em] text-[#c7d6cb]">
                      <span>Um / ponašanje / svijest</span>
                      <span>2026</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-5 -left-5 rounded-2xl bg-[#e8d9ce] px-5 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#5e4e44] shadow-xl sm:-left-8">
                <Sparkles className="mb-2 h-4 w-4" />
                Otvoreno<br />kritički
              </div>
            </div>
          </div>

          <div className="mt-20 grid border-t border-[#18211f]/15 pt-5 sm:grid-cols-3">
            {notes.map(([num, text]) => <div key={num} className="flex gap-4 py-3 text-sm text-[#68736e] sm:border-r sm:border-[#18211f]/15 sm:px-5 first:pl-0 last:border-0"><span className="font-mono text-xs text-[#9a6f55]">{num}</span><span>{text}</span></div>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div><p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#9a6f55]">Četiri smjera / jedan fokus</p><h2 className="max-w-2xl font-serif text-5xl leading-[0.95] tracking-[-0.05em] sm:text-6xl">Bolja pitanja mijenjaju ono što vidimo.</h2></div>
          <p className="max-w-xs text-sm leading-6 text-[#68736e]">Ne nudimo brze odgovore. Gradimo prostor za preciznije mišljenje i dublje razumijevanje.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {topics.map(({ number, title, text, href, icon: Icon, accent }) => <Link key={title} href={href}><article className="group flex h-full cursor-pointer flex-col rounded-[1.5rem] border border-[#18211f]/10 bg-[#f9f7f3] p-7 transition duration-300 hover:-translate-y-2 hover:border-[#667b6e]/50 hover:shadow-[0_25px_50px_rgba(24,33,31,.10)]"><div className="mb-12 flex items-start justify-between"><span className="font-mono text-xs text-[#9a6f55]">{number}</span><span className={`flex h-12 w-12 items-center justify-center rounded-full ${accent} text-[#34443d] transition group-hover:rotate-12`}><Icon className="h-5 w-5" strokeWidth={1.5} /></span></div><h3 className="font-serif text-3xl leading-tight">{title}</h3><p className="mt-4 flex-1 text-sm leading-7 text-[#68736e]">{text}</p><span className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#18211f]">Otvori temu <ArrowUpRight className="h-4 w-4" /></span></article></Link>)}
        </div>
      </section>

      <section className="bg-[#e8d9ce]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-12">
          <div className="relative mx-auto aspect-square w-full max-w-sm rounded-full border border-[#9a6f55]/30 p-5"><div className="flex h-full items-center justify-center rounded-full border border-[#9a6f55]/30 bg-[#f4f0ea]/45"><div className="text-center"><Layers3 className="mx-auto mb-4 h-8 w-8 text-[#9a6f55]" strokeWidth={1.2} /><p className="font-serif text-3xl italic text-[#5e4e44]">Čovjek prije<br />etikete.</p></div></div></div>
          <div><p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#9a6f55]">Manifest / 01</p><blockquote className="max-w-3xl font-serif text-4xl leading-[1.05] tracking-[-0.04em] text-[#34413b] sm:text-6xl">“Ne tražimo jednostavne odgovore. Tražimo hrabrost da provjerimo vlastite pretpostavke.”</blockquote><Link href="/o-nama"><span className="mt-9 inline-flex cursor-pointer items-center gap-3 border-b border-[#5e4e44] pb-2 text-sm font-semibold text-[#5e4e44]">Upoznaj autora <ArrowUpRight className="h-4 w-4" /></span></Link></div>
        </div>
      </section>

      <section className="bg-[#18211f] text-[#f4f0ea]"><div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-16 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12"><div><p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#c7d6cb]">Nastavimo razgovor</p><h2 className="font-serif text-4xl tracking-[-0.04em] sm:text-5xl">Dobar razgovor počinje<br /><span className="italic text-[#c7d6cb]">jasnim pitanjem.</span></h2></div><a href="mailto:info@stvarnaslika.com" className="inline-flex items-center gap-3 self-start rounded-full bg-[#f4f0ea] px-6 py-3.5 text-sm font-semibold text-[#18211f] transition hover:bg-[#c7d6cb]"><Mail className="h-4 w-4" /> Javi se</a></div></section>
    </main>
  );
}
