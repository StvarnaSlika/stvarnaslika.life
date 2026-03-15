import { motion } from "framer-motion";
import { Eye, Zap, Link2, Waves } from "lucide-react";

const PARA_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663360791554/9Xytk5XuyaGQiwf2ptjWSz/parapsychology-eye_5f035c08.jpg";
const QUANTUM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663360791554/9Xytk5XuyaGQiwf2ptjWSz/quantum-universe_459d330e.jpg";

const espTopics = [
  {
    icon: Eye,
    title: "ESP i Jasnovidnost",
    tag: "Kvantna biologija",
    color: "text-violet-600",
    desc: "Dean Radin (2013, 2021) proširio je istraživanja kvantne biologije na ljudsku svijest. Njegovi double-slit eksperimenti pokazuju da fokusirana pažnja može utjecati na kvantnu interferenciju — sugerirajući da mozak može 'čitati' kvantne informacije. Ferritini (željezni proteini u mozgu) potencijalno služe kao kvantne antene.",
    facts: ["P < 0.0002 u Radinovim eksperimentima", "95% učinkovitost kvantnog transporta u fotosintezi", "Ferritini kao potencijalni kvantni senzori"],
  },
  {
    icon: Zap,
    title: "Orch-OR Teorija",
    tag: "Kvantna svijest",
    color: "text-amber-500",
    desc: "Orch-OR (Orchestrated Objective Reduction) teorija, razvijena od strane Stuarta Hameroffa i Rogera Penrosea, predlaže da svijest nastaje iz kvantnih vibracija u mikrotubulima neurona. Objektivna redukcija (OR) je Penroseov koncept prema kojem kvantna superpozicija spontano kolapsira, stvarajući 'trenutak' svjesnog iskustva.",
    facts: ["2351 citata u znanstvenoj literaturi", "Frekvencija OR ~40Hz odgovara gama oscilacijama", "E = ℏ/T — veza energije i vremena koherence"],
  },
  {
    icon: Link2,
    title: "Kvantna zapletenost",
    tag: "Sinkronistički fenomeni",
    color: "text-teal-600",
    desc: "Jung je opisao sinkronističke pojave kao 'smislene slučajnosti' koje ne mogu biti objašnjene kauzalnošću. Moderna kvantna fizika nudi potencijalni mehanizam: kvantna zapletenost omogućuje trenutnu korelaciju između čestica bez obzira na udaljenost — potencijalni temelj za telepatiju i sinkronicitete.",
    facts: ["Bell-ove nejednakosti eksperimentalno potvrđene", "Zapletenost na makroskopskim razinama istraživana", "Jung-Pauli suradnja na sinkronicitetu"],
  },
  {
    icon: Waves,
    title: "Retrokausalnost i Prekognicija",
    tag: "Vremenski fenomeni",
    color: "text-purple-600",
    desc: "Retrokauzalnost — mogućnost da budući događaji utječu na sadašnjost — nije zabranjena kvantnom mehanikom. Daryl Bem (2011) objavio je kontroverzne dokaze za prekogniciju u časopisu Journal of Personality and Social Psychology, potičući veliku debatu o metodologiji i replikabilnosti u psihologiji.",
    facts: ["Bem (2011): 9 od 10 eksperimenata pozitivno", "Retrokauzalni modeli u kvantnoj mehanici", "Panpsihizam kao alternativni okvir"],
  },
];

const orchOrSteps = [
  { step: "1", title: "Kvantna superpozicija", desc: "Kvantna stanja u mikrotubulima postoje u superpoziciji — istovremeno u više stanja." },
  { step: "2", title: "Objektivna redukcija", desc: "Kada energija premaši prag (E = ℏ/T), dolazi do spontanog kolapsa valne funkcije." },
  { step: "3", title: "Orkestracija", desc: "Biološki procesi 'orkestriraju' OR, stvarajući kontinuirano svjesno iskustvo." },
];

const topics = [
  { title: "Panpsihizam i univerzalno polje svijesti", href: "https://www.stvarnaslika.com/panpsihizam-i-univerzalno-polje-svijesti" },
  { title: "Kvantna Besmrtnost", href: "https://www.stvarnaslika.com/kvantna-besmrtnost" },
  { title: "Psihički Vampirizam", href: "https://www.stvarnaslika.com/psihicki-vampirizam" },
  { title: "Makro Poltergeist", href: "https://www.stvarnaslika.com/makro-poltergeist" },
  { title: "Pakleni NDE Loop", href: "https://www.stvarnaslika.com/pakleni-nde-loop" },
  { title: "Promatrači iz paralelnih grana", href: "https://www.stvarnaslika.com/promatraci-iz-paralelnih-grana" },
];

export default function Parapsychology() {
  return (
    <main className="pt-20">

      {/* Hero */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-violet-50 via-purple-50 to-background">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-8"
          style={{ backgroundImage: `url(${PARA_IMG})` }}
        />
        <div className="container mx-auto px-4 lg:px-8 relative text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="tag mb-6 inline-block"
          >
            Parapsihologija
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="section-heading text-foreground mb-6 max-w-3xl mx-auto"
          >
            Istraživanje fenomena <span className="gradient-text">izvan konvencionalne znanosti</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-foreground/65 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Sistematično proučavanje ESP, jasnovidnosti, telepatije i kvantne svijesti kroz kontrolirane eksperimentalne protokole.
          </motion.p>
        </div>
      </section>

      {/* Rhine Experiments */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="tag tag-gold mb-4 inline-block">Rhine istraživanja</span>
              <h2 className="section-heading text-foreground mb-6">
                J.B. Rhine i <span className="gradient-text">ESP eksperimenti</span>
              </h2>
              <p className="text-foreground/65 leading-relaxed mb-4">
                Joseph Banks Rhine (1895–1980) utemeljio je parapsihologiju kao akademsku disciplinu na Duke Sveučilištu 1930-ih. Koristeći Zener karte (s 5 simbola: krug, križ, valovi, kvadrat, zvijezda), Rhine je proveo tisuće kontroliranih eksperimenata za testiranje ESP-a.
              </p>
              <p className="text-foreground/65 leading-relaxed mb-4">
                Njegovi rezultati pokazali su statistički značajne devijacije od slučajnosti — neke ispitanike s rezultatima koji su imali vjerojatnost slučajnog pojavljivanja manjom od 1 u milijardu. Rhine je uveo pojmove "telepatija", "jasnovidnost" i "psihokineza" u znanstveni vokabular.
              </p>
              <div className="quote-block">
                "Parapsihologija je istraživanje fenomena koji se čine izvan granica poznatih fizičkih zakona, ali koji su dostupni empirijskom istraživanju."
                <span className="block mt-2 text-sm not-italic text-foreground/45">— J.B. Rhine</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
                <img src={QUANTUM_IMG} alt="Kvantna istraživanja" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="tag tag-gold">Rhine Institute, Duke University</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ESP Topics Grid */}
      <section className="py-16 bg-background relative">
        <div className="absolute inset-0 dot-pattern opacity-25" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="text-center mb-12">
            <span className="tag mb-4 inline-block">Ključna područja</span>
            <h2 className="section-heading text-foreground mb-4">
              Fenomeni koje <span className="gradient-text">istražujemo</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {espTopics.map((topic, i) => {
              const Icon = topic.icon;
              return (
                <motion.div
                  key={topic.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="p-6 rounded-2xl border bg-white card-hover shadow-sm border-border"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                      <Icon className={`w-6 h-6 ${topic.color}`} />
                    </div>
                    <div className="flex-1">
                      <span className="tag mb-2 inline-block text-xs">{topic.tag}</span>
                      <h3 className="font-serif font-bold text-foreground text-xl mb-3">{topic.title}</h3>
                      <p className="text-sm text-foreground/65 leading-relaxed mb-4">{topic.desc}</p>
                      <div className="space-y-1.5">
                        {topic.facts.map((fact) => (
                          <div key={fact} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                            <span className="text-xs text-foreground/55">{fact}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Orch-OR Detail */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <span className="tag tag-gold mb-4 inline-block">Penrose & Hameroff</span>
            <h2 className="section-heading text-foreground mb-4">
              Orch-OR: Tri koraka do <span className="gradient-text">svijesti</span>
            </h2>
            <p className="text-foreground/65 max-w-xl mx-auto">
              Kako kvantni procesi u mikrotubulima generiraju svjesna iskustva
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {orchOrSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="relative p-6 rounded-2xl border border-border bg-muted text-center"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  {step.step}
                </div>
                <h3 className="font-serif font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">{step.desc}</p>
                {i < orchOrSteps.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-muted-foreground text-2xl">→</div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Scientific papers */}
          <div className="mt-12 max-w-3xl mx-auto">
            <h3 className="font-serif font-bold text-foreground text-xl mb-6 text-center">Ključne publikacije</h3>
            <div className="space-y-4">
              {[
                { year: "2014", title: "Consciousness in the universe: A review of the 'Orch OR' theory", authors: "Hameroff & Penrose", journal: "Physics of Life Reviews, 11(1), 39–78", citations: "2351 citata" },
                { year: "2021", title: "Psychophysical Interactions with Entangled Photons", authors: "Dean Radin et al.", journal: "Journal of Scientific Exploration", citations: "P < 0.0002" },
                { year: "2011", title: "Feeling the Future: Experimental Evidence for Anomalous Retroactive Influences", authors: "Daryl Bem", journal: "Journal of Personality and Social Psychology", citations: "Kontroverzno, ali replicirano" },
              ].map((paper) => (
                <div key={paper.title} className="p-5 rounded-xl border border-border bg-muted flex gap-4">
                  <div className="text-sm font-bold text-violet-600 flex-shrink-0 w-10">{paper.year}</div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm mb-1">{paper.title}</h4>
                    <p className="text-xs text-foreground/55">{paper.authors} — {paper.journal}</p>
                    <span className="tag mt-2 inline-block">{paper.citations}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-10">
            <span className="tag mb-4 inline-block">Video</span>
            <h2 className="section-heading text-foreground mb-4">
              Dean Radin: <span className="gradient-text">Kvantna biologija i ESP</span>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="video-container rounded-2xl border border-border shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/hfnF9Vu3hvI?rel=0&modestbranding=1"
                title="Dean Radin - Kvantna biologija i ESP"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* More topics from stvarnaslika.com */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-10">
            <span className="tag tag-gold mb-4 inline-block">Više tema</span>
            <h2 className="section-heading text-foreground mb-4">
              Istražite na <span className="gradient-text">Stvarnaslika.com</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {topics.map((topic, i) => (
              <motion.a
                key={topic.title}
                href={topic.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                className="flex items-center gap-3 p-4 rounded-xl border border-border bg-muted hover:bg-violet-50 hover:border-violet-300 transition-all group"
              >
                <div className="w-2 h-2 rounded-full bg-violet-500 flex-shrink-0 group-hover:bg-amber-500 transition-colors" />
                <span className="text-sm text-foreground/70 group-hover:text-violet-700 transition-colors">{topic.title}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
