import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Target, Eye, Microscope, Heart } from "lucide-react";

const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663360791554/9Xytk5XuyaGQiwf2ptjWSz/about-team_ecf53962.jpg";
const BOOKS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663360791554/9Xytk5XuyaGQiwf2ptjWSz/books-library_be72b1d6.jpg";

const values = [
  {
    icon: Target,
    title: "Rigoroznost",
    desc: "Primjenjujemo stroge metodološke standarde u svakom istraživanju, kombinirajući empirijsku preciznost s otvorenošću prema anomalijama.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    icon: Eye,
    title: "Otvorenost",
    desc: "Odbijamo dogmatski pristup. Svaka hipoteza zaslužuje poštenu evaluaciju, bez obzira koliko izazivala ustaljene paradigme.",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    icon: Microscope,
    title: "Istraživanje",
    desc: "Aktivno istražujemo rubne fenomene psihe — od parapsihologije do kvantne biologije — uvijek s osloncem na podatke.",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
  },
  {
    icon: Heart,
    title: "Integracija",
    desc: "Spajamo kliničku psihologiju, filozofiju uma i alternativne pristupe u koherentan, holistički okvir razumijevanja.",
    color: "text-teal-400",
    bg: "bg-teal-500/10",
  },
];

const timeline = [
  { year: "2010", title: "Osnivanje", desc: "Stvarna Slika nastaje kao platforma za istraživanje rubnih fenomena psihe izvan mainstream okvira." },
  { year: "2013", title: "Prva istraživanja", desc: "Početak sustavnog proučavanja ESP fenomena i Jungove analitičke psihologije u hrvatskom kontekstu." },
  { year: "2018", title: "Kvantna psihologija", desc: "Integracija kvantne biologije i Orch-OR teorije u naš istraživački okvir. Suradnja s međunarodnim institutima." },
  { year: "2022", title: "Digitalna platforma", desc: "Lansiranje online platforme za edukaciju i istraživanje. Više od 500 klijenata i 50 objavljenih radova." },
  { year: "2026", title: "Danas", desc: "Nastavak pionirskog istraživanja na granici psihologije, parapsihologije i kvantne fizike." },
];

export default function About() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent" />
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="container mx-auto px-4 lg:px-8 relative text-center">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="tag mb-6 inline-block"
          >
            O nama
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="section-heading text-white mb-6 max-w-3xl mx-auto"
          >
            Istraživači na granici <span className="gradient-text">poznatog i nepoznatog</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Stvarna Slika je platforma koja integrira kliničku psihologiju, parapsihologiju i filozofiju uma u koherentan istraživački okvir — bez straha od propitivanja.
          </motion.p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="tag tag-gold mb-4 inline-block">Naša misija</span>
              <h2 className="section-heading text-white mb-6">
                "Ono što je iznad, jest kao i ono što je dolje"
              </h2>
              <div className="quote-block mb-6">
                Hermetički princip korespondencije — temelj našeg integrativnog pristupa razumijevanju stvarnosti i psihe.
              </div>
              <p className="text-white/60 leading-relaxed mb-4">
                Naša misija je osporavati ukorijenjene dogme mainstream psihologije i istraživati rubne spoznaje koje konvencionalna znanost zanemaruje. Vjerujemo da autentično razumijevanje ljudske psihe zahtijeva otvorenost prema svim dimenzijama iskustva.
              </p>
              <p className="text-white/60 leading-relaxed">
                Kombiniramo kliničku rigoroznost s parapsihološkom znatiželjom, forenzičku preciznost s duhovnom otvorenošću — jer samo integrativni pristup može dati cjelovitu sliku.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative rounded-2xl overflow-hidden aspect-square">
                <img src={ABOUT_IMG} alt="O nama" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 relative">
        <div className="absolute inset-0 dot-pattern opacity-15" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="text-center mb-12">
            <span className="tag mb-4 inline-block">Naše vrijednosti</span>
            <h2 className="section-heading text-white">
              Principi koji nas <span className="gradient-text">vode</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="p-6 rounded-2xl border border-white/10 bg-white/3 card-hover"
                >
                  <div className={`w-12 h-12 rounded-xl ${v.bg} flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${v.color}`} />
                  </div>
                  <h3 className="font-serif font-bold text-white text-xl mb-2">{v.title}</h3>
                  <p className="text-sm text-white/55 leading-relaxed">{v.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <span className="tag mb-4 inline-block">Naša povijest</span>
            <h2 className="section-heading text-white">
              Put kroz <span className="gradient-text">istraživanje</span>
            </h2>
          </div>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-pink-500/50 to-transparent" />
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative pl-20 pb-10 last:pb-0"
              >
                <div className="absolute left-5 top-1 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>
                <div className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-1">{item.year}</div>
                <h3 className="font-serif font-bold text-white text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Books / Resources */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img src={BOOKS_IMG} alt="Knjige i istraživanja" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="tag tag-gold mb-4 inline-block">Naš pristup</span>
              <h2 className="section-heading text-white mb-6">
                Empirija susreće <span className="gradient-text">rubne fenomene</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-4">
                Naš istraživački pristup temelji se na integraciji klasičnih psiholoških metoda s inovativnim paradigmama. Proučavamo sve — od Jungovih arhetipova i Rhine ESP eksperimenata do Penrose-Hameroff Orch-OR teorije i Radinovih kvantnih istraživanja.
              </p>
              <p className="text-white/60 leading-relaxed mb-8">
                Svaki fenomen analiziramo kroz višestruke leće: kliničku, forenzičku, filozofsku i parapsihološku — jer samo multidisciplinarni pristup može dati cjelovitu sliku stvarnosti.
              </p>
              <Link href="/psihologija">
                <button className="group flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:opacity-90 transition-all cursor-pointer text-sm">
                  Istraži psihologiju
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
