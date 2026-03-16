import { Link } from "wouter";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Eye, Sparkles, BookOpen, ChevronDown, Star, Users, FileText, Infinity } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663360791554/9Xytk5XuyaGQiwf2ptjWSz/hero-bg_b62bb861.jpg";
const QUANTUM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663360791554/9Xytk5XuyaGQiwf2ptjWSz/quantum-universe_459d330e.jpg";
const MEDITATION_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663360791554/9Xytk5XuyaGQiwf2ptjWSz/meditation-nature_28fbb110.jpg";

const areas = [
  {
    icon: Brain,
    title: "Psihologija",
    subtitle: "Klinička i analitička",
    desc: "Jungovi arhetipovi, klinička psihologija, filozofija uma i forenzička praksa. Dubinsko razumijevanje ljudske psihe.",
    href: "/psihologija",
    gradient: "from-blue-50 to-violet-50",
    border: "border-blue-200",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    accentColor: "text-blue-600",
  },
  {
    icon: Eye,
    title: "Parapsihologija",
    subtitle: "ESP i kvantna svijest",
    desc: "Rhine eksperimenti, Orch-OR teorija, kvantna biologija i Dean Radinova istraživanja izvan-čulne percepcije.",
    href: "/parapsihologija",
    gradient: "from-violet-50 to-purple-50",
    border: "border-violet-200",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    accentColor: "text-violet-600",
  },
  {
    icon: Sparkles,
    title: "Alternativni pristupi",
    subtitle: "Holistički i integrativni",
    desc: "Holistička iscjeljenja, lucidni snovi, meditacija i kvantna svijest kao put prema cjelovitom razumijevanju.",
    href: "/alternativni-pristupi",
    gradient: "from-purple-50 to-pink-50",
    border: "border-purple-200",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    accentColor: "text-purple-600",
  },
  {
    icon: BookOpen,
    title: "Istraživanja",
    subtitle: "Empirija i rubni fenomeni",
    desc: "Integriramo rigoroznu metodologiju s otvorenošću prema neobjašnjivom. Osporavamo mainstream dogme.",
    href: "/o-nama",
    gradient: "from-teal-50 to-blue-50",
    border: "border-teal-200",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
    accentColor: "text-teal-600",
  },
];

const stats = [
  { icon: Star, value: "15+", label: "Godina iskustva" },
  { icon: Users, value: "500+", label: "Klijenata" },
  { icon: FileText, value: "50+", label: "Objavljenih radova" },
  { icon: Infinity, value: "∞", label: "Znatiželja" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

export default function Home() {
  useEffect(() => {
    document.title = "Stvarna Slika — Psihologija i Parapsihologija";
  }, []);

  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        {/* Light overlay — keeps image visible but text readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-background" />
        <div className="absolute inset-0 dot-pattern opacity-20" />

        {/* Soft colour orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-violet-300/20 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-56 h-56 rounded-full bg-purple-300/20 blur-3xl" />

        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="tag tag-gold">Stvarna Slika Psihologije</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="hero-text text-foreground mb-6 max-w-4xl mx-auto"
          >
            Prostor gdje se ne bojimo{" "}
            <span className="gradient-text">propitivati granice</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-4 leading-relaxed"
          >
            Osporavamo ukorijenjene dogme mainstream psihologije i istražujemo rubne spoznaje koje konvencionalna znanost zanemaruje.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-sm text-foreground/50 max-w-xl mx-auto mb-10 italic font-serif"
          >
            Autentično razumijevanje ljudske psihe kroz otvoreno istraživanje nekonvencionalnih uvida, gdje se klinička rigoroznost susreće s parapsihološkom znatiželjom.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/psihologija">
              <button className="group flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold hover:opacity-90 hover:scale-105 transition-all shadow-lg cursor-pointer">
                Istraži područja
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/o-nama">
              <button className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-white border border-border text-foreground font-semibold hover:bg-muted transition-all shadow-sm cursor-pointer">
                O nama
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
          <span className="text-xs text-foreground/40 uppercase tracking-widest">Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
            <ChevronDown className="w-5 h-5 text-foreground/40" />
          </motion.div>
        </motion.div>
      </section>

      {/* ===== INTRO VIDEO ===== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.span variants={fadeUp} custom={0} className="tag mb-4 inline-block">Uvod</motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="section-heading mb-4">
              Uvod u <span className="gradient-text">Stvarnu Sliku</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground max-w-xl mx-auto">
              Pogledajte našu viziju integrativnog pristupa razumijevanju ljudske psihe
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="video-container rounded-2xl overflow-hidden border border-border shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/rNh6fM6_hCo?rel=0&modestbranding=1"
                title="Uvod u Stvarnu Sliku"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== AREAS ===== */}
      <section className="py-20 bg-background relative">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <motion.span variants={fadeUp} custom={0} className="tag mb-4 inline-block">Naša područja</motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="section-heading mb-4">
              Integriramo rigoroznu <span className="gradient-text">metodologiju</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground max-w-2xl mx-auto">
              s otvorenošću prema neobjašnjivom — spajamo empirijsku znanost s rubnim fenomenima psihe
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {areas.map((area, i) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <Link href={area.href}>
                    <div className={`group h-full p-6 rounded-2xl border bg-gradient-to-br ${area.gradient} ${area.border} card-hover cursor-pointer`}>
                      <div className={`w-12 h-12 rounded-xl ${area.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <Icon className={`w-6 h-6 ${area.iconColor}`} />
                      </div>
                      <h3 className="font-serif font-bold text-foreground text-xl mb-1">{area.title}</h3>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">{area.subtitle}</p>
                      <p className="text-sm text-foreground/65 leading-relaxed">{area.desc}</p>
                      <div className={`mt-4 flex items-center gap-1 text-xs font-semibold ${area.accentColor} opacity-70 group-hover:opacity-100 transition-opacity`}>
                        Saznaj više <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== FEATURED CONTENT ===== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
                <img src={QUANTUM_IMG} alt="Kvantna svijest" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="tag tag-gold mb-2 inline-block">Kvantna biologija</span>
                  <p className="text-white font-serif text-lg font-semibold">Orch-OR teorija svijesti</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 max-w-[200px] hidden md:block shadow-lg border border-border">
                <p className="text-xs text-muted-foreground mb-1">Penrose & Hameroff</p>
                <p className="text-sm text-foreground font-semibold">2351 citata</p>
                <p className="text-xs text-muted-foreground">Physics of Life Reviews</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="tag mb-4 inline-block">Istaknuto istraživanje</span>
              <h2 className="section-heading mb-6">
                Kvantna <span className="gradient-text">svijest</span> i granice percepcije
              </h2>
              <div className="quote-block mb-6">
                "Svijest nastaje iz kvantnih vibracija u mikrotubulima neurona kroz proces objektivne redukcije — Penroseova matematička veza između kvantne gravitacije i svijesti."
              </div>
              <p className="text-foreground/65 leading-relaxed mb-6">
                Orch-OR teorija, razvijena od strane Stuarta Hameroffa i Rogera Penrosea, predlaže da svijest nije produkt neuronalnog računanja, već fundamentalno kvantno svojstvo svemira. Dean Radin (2013, 2021) proširio je ova istraživanja pokazujući da fokusirana pažnja može utjecati na kvantnu interferenciju.
              </p>
              <Link href="/parapsihologija">
                <button className="group flex items-center gap-2 text-sm font-semibold text-violet-600 hover:text-violet-700 transition-colors cursor-pointer">
                  Istraži parapsihologiju
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="py-16 relative overflow-hidden bg-gradient-to-r from-violet-50 via-background to-purple-50">
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-5 h-5 text-violet-600" />
                  </div>
                  <div className="text-3xl md:text-4xl font-serif font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== HOLISTIC SECTION ===== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="tag tag-gold mb-4 inline-block">Alternativni pristupi</span>
              <h2 className="section-heading mb-6">
                Lucidni snovi i <span className="gradient-text">holistička iscjeljenja</span>
              </h2>
              <p className="text-foreground/65 leading-relaxed mb-4">
                Lucidni snovi — stanje svjesnog sanjanja — pružaju jedinstven prozor u nesvjesne procese. Istraživanja pokazuju da redovita praksa lucidnog sanjanja može poboljšati kreativnost, smanjiti noćne more i produbiti samospoznaju.
              </p>
              <p className="text-foreground/65 leading-relaxed mb-6">
                Holistička iscjeljenja integriraju tijelo, um i duh kroz prakse poput meditacije, joge, akupunkture i energetske medicine — pristupe koji sve više dobivaju empirijsku potvrdu.
              </p>
              <Link href="/alternativni-pristupi">
                <button className="group flex items-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-700 transition-colors cursor-pointer">
                  Istraži alternativne pristupe
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
                <img src={MEDITATION_IMG} alt="Meditacija i holistička iscjeljenja" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden p-10 md:p-16 text-center bg-white border border-border shadow-lg"
          >
            <div className="absolute inset-0 dot-pattern opacity-20" />
            <div className="relative z-10">
              <span className="tag mb-6 inline-block">Kontakt</span>
              <h2 className="section-heading mb-4">
                Imate pitanja o <span className="gradient-text">psihi i svijesti</span>?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Naš AI psihoterapeut dostupan je 24/7 za razgovor, ili nas kontaktirajte direktno za konzultacije i suradnju.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/kontakt">
                  <button className="px-8 py-3.5 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold hover:opacity-90 hover:scale-105 transition-all shadow-md cursor-pointer">
                    Kontaktiraj nas
                  </button>
                </Link>
                <button
                  onClick={() => {
                    const el = document.getElementById("chatbot-trigger");
                    if (el) el.click();
                  }}
                  className="px-8 py-3.5 rounded-full bg-white border border-border text-foreground font-semibold hover:bg-muted transition-all shadow-sm cursor-pointer"
                >
                  Razgovaraj s AI terapeutom
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
