import { motion } from "framer-motion";
import { ArrowUpRight, Brain, Fingerprint, Mail, ScanFace, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "wouter";

const principles = [
  { icon: ShieldCheck, title: "Dokazi prije zaključka", text: "Razlikovati činjenice, hipoteze i otvorena pitanja prije nego što ih pretvorimo u priču." },
  { icon: ScanFace, title: "Čovjek prije etikete", text: "Ponašanje ima kontekst. Razumijevanje počinje tamo gdje prestaje automatsko osuđivanje." },
  { icon: Brain, title: "Otvorenost bez lakovjernosti", text: "Istraživati rubove znanja uz znatiželju, ali i uz poštovanje prema provjeri i granicama dokaza." },
];

const timeline = [
  ["01", "Iskustvo iz prakse", "Rad u MUP-u RH kao kriminalist i iskustvo u situacijama koje zahtijevaju razumijevanje ljudskog ponašanja pod pritiskom."],
  ["02", "Istraživački fokus", "Bihevioralna analiza, ovisnosti, psihotropne tvari, psihofarmakologija i toksikologija — s naglaskom na razumijevanje."],
  ["03", "Stvarna Slika", "Neovisna platforma na raskrižju psihologije, filozofije uma, neuroznanosti i pitanja koja ne stanu u jednostavan odgovor."],
];

export default function About() {
  return (
    <main className="overflow-hidden bg-[#f5f7f5] text-[#18211f]">
      <section className="relative border-b border-[#18211f]/10 bg-[#e8eeea] pt-24">
        <div className="pointer-events-none absolute -right-20 top-20 h-72 w-72 rounded-full bg-[#d5e4da] blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-end gap-10 px-5 pb-14 pt-12 sm:px-8 lg:grid-cols-[1fr_0.8fr] lg:px-12 lg:pb-20 lg:pt-20">
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="mb-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#9a6f55]"><span className="h-px w-10 bg-[#9a6f55]" />O meni / autor</p>
            <h1 className="max-w-3xl font-serif text-[clamp(4rem,8vw,8rem)] leading-[0.84] tracking-[-0.07em]">Luka<br /><span className="italic text-[#667b6e]">Anić-Antić.</span></h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-[#56635d]">Autor i osnivač Stvarne Slike. Moj rad nastaje na spoju kriminalističkog iskustva, forenzičke psihologije, psihofarmakologije i filozofije uma.</p>
            <div className="mt-8 flex flex-wrap gap-3"><Link href="/blog"><span className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#18211f] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#667b6e]">Istraži moj rad <ArrowUpRight className="h-4 w-4" /></span></Link><Link href="/kontakt"><span className="inline-flex cursor-pointer items-center gap-2 px-3 py-3 text-sm font-semibold"><Mail className="h-4 w-4 text-[#9a6f55]" /> Kontakt</span></Link></div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative mx-auto w-full max-w-md">
            <div className="relative aspect-[0.86] overflow-hidden rounded-[1.5rem_1.5rem_9rem_9rem] bg-[#18211f] shadow-[0_30px_70px_rgba(24,33,31,.2)]"><img src="/images/control-mind.jpg" alt="Vizualni prikaz kontrole uma i ponašanja" className="h-full w-full object-cover opacity-75 mix-blend-screen transition duration-700 hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-[#18211f] via-transparent to-[#18211f]/10" /><div className="absolute inset-0 flex flex-col justify-between p-6 text-white"><div className="flex justify-between"><span className="text-[10px] uppercase tracking-[0.3em] text-[#c7d6cb]">Profil / 01</span><Fingerprint className="h-7 w-7 text-[#c7d6cb]" strokeWidth={1} /></div><div><p className="font-serif text-3xl leading-tight">Iskustvo iz prakse.<br /><span className="italic text-[#c7d6cb]">Potreba za razumijevanjem.</span></p><div className="mt-5 flex justify-between border-t border-white/25 pt-4 text-[9px] uppercase tracking-[0.2em] text-[#c7d6cb]"><span>Zagreb / Hrvatska</span><span>2026</span></div></div></div></div>
            <motion.div animate={{ y: [0, -7, 0] }} transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }} className="absolute -bottom-5 -left-5 rounded-2xl bg-[#e8d9ce] px-5 py-4 shadow-xl"><Sparkles className="mb-2 h-4 w-4 text-[#9a6f55]" /><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#5e4e44]">Bez osude<br />bez senzacionalizma</p></motion.div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12"><div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#9a6f55]">Zašto Stvarna Slika?</p><h2 className="mt-4 max-w-sm font-serif text-5xl leading-[0.92] tracking-[-0.06em]">Dublje od prvog dojma.</h2><div className="mt-7 h-px w-24 bg-[#9a6f55]" /></div><div className="grid gap-5 text-[#56635d] sm:grid-cols-2"><p className="text-lg leading-8">Stvarna Slika nastala je iz potrebe da se u razgovor o čovjeku vrati dubina. Ne pokušavam samo opisati ponašanje, nego razumjeti što se nalazi ispod njega: emocije, traume, motive, nesvjesno i unutarnji simbolički jezik.</p><p className="text-lg leading-8">Ovdje se susreću znanost i iskustvo, psihologija i filozofija, analiza i pitanje smisla. Ne tražim jednostavan zaključak — tražim precizniji pogled.</p></div></div></section>

      <section className="border-y border-[#18211f]/10 bg-white"><div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12"><div className="mb-8 flex items-end justify-between"><div><p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#9a6f55]">Tri načela rada</p><h2 className="font-serif text-4xl tracking-[-0.05em] sm:text-5xl">Kako gledam čovjeka.</h2></div><span className="hidden font-mono text-xs text-[#9a6f55] sm:block">01—03</span></div><div className="grid gap-4 md:grid-cols-3">{principles.map(({ icon: Icon, title, text }, i) => <motion.article key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-2xl border border-[#18211f]/10 bg-[#f5f7f5] p-6 transition hover:-translate-y-1 hover:shadow-xl"><div className="mb-10 flex items-center justify-between"><span className="font-mono text-xs text-[#9a6f55]">0{i + 1}</span><span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#dce8e0] text-[#34443d]"><Icon className="h-5 w-5" strokeWidth={1.4} /></span></div><h3 className="font-serif text-2xl leading-tight">{title}</h3><p className="mt-4 text-sm leading-6 text-[#68736e]">{text}</p></motion.article>)}</div></div></section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12"><div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr]"><div className="relative min-h-[390px] overflow-hidden rounded-2xl bg-[#24332d]"><img src="/images/psychopathy-dark.jpg" alt="Forenzička analiza ponašanja" className="absolute inset-0 h-full w-full object-cover opacity-55" /><div className="absolute inset-0 bg-gradient-to-t from-[#18211f] via-transparent to-transparent" /><div className="absolute bottom-6 left-6 text-white"><p className="mb-2 text-[10px] uppercase tracking-[0.25em] text-[#c7d6cb]">Istraživački fokus</p><p className="font-serif text-3xl">Ponašanje je trag.<br /><span className="italic text-[#c7d6cb]">Kontekst je ključ.</span></p></div></div><div><p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#9a6f55]">Put / iskustvo / fokus</p><h2 className="font-serif text-5xl leading-[0.92] tracking-[-0.06em]">Od prakse do platforme.</h2><div className="mt-8 border-t border-[#18211f]/15">{timeline.map(([num, title, text]) => <div key={num} className="grid gap-4 border-b border-[#18211f]/15 py-5 sm:grid-cols-[40px_180px_1fr]"><span className="font-mono text-xs text-[#9a6f55]">{num}</span><h3 className="font-semibold">{title}</h3><p className="text-sm leading-6 text-[#68736e]">{text}</p></div>)}</div></div></div></section>

      <section className="bg-[#e8d9ce]"><div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12"><div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between"><div><p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#9a6f55]">Osobna rečenica</p><blockquote className="max-w-3xl font-serif text-4xl leading-[1.02] tracking-[-0.05em] text-[#34413b] sm:text-6xl">“Ne tražim samo objasniti čovjeka — tražim razumjeti njegovu dublju, istinitu sliku.”</blockquote></div><Link href="/biblioteka"><span className="inline-flex cursor-pointer items-center gap-2 border-b border-[#5e4e44] pb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#5e4e44]">Pogledaj biblioteku <ArrowUpRight className="h-4 w-4" /></span></Link></div></div></section>
    </main>
  );
}
