import { motion } from "framer-motion";
import { Brain, Scale, BookOpen, Lightbulb, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const BRAIN_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663360791554/9Xytk5XuyaGQiwf2ptjWSz/psychology-brain_9bb2b757.jpg";
const JUNG_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663360791554/9Xytk5XuyaGQiwf2ptjWSz/cg-jung_2e331198.jpg";

const archetypes = [
  { name: "Persona", symbol: "🎭", desc: "Maska koju nosimo pred društvom — javno lice koje skriva naše pravo ja." },
  { name: "Sjena", symbol: "🌑", desc: "Potisnuta, neprihvaćena strana osobnosti — tamna strana koja traži integraciju." },
  { name: "Anima/Animus", symbol: "☯️", desc: "Ženski aspekt u muškarcu (Anima) i muški u ženi (Animus) — kontraspolni princip." },
  { name: "Sebstvo", symbol: "⭕", desc: "Cjelina psihe — arhetip koji integrira sve aspekte ličnosti u jedinstvenu cjelinu." },
  { name: "Mudrac", symbol: "🦉", desc: "Arhetip mudrosti i znanja — unutarnji vodič koji usmjerava prema istini." },
  { name: "Heroj", symbol: "⚔️", desc: "Arhetip transformacije kroz izazov — snaga koja prevladava prepreke." },
];

const clinicalTopics = [
  {
    title: "Kognitivno-bihevioralna terapija (KBT)",
    desc: "Evidence-based pristup koji mijenja negativne misaone obrasce i ponašanja. Najefikasnije za anksioznost, depresiju i PTSP.",
  },
  {
    title: "Analitička psihologija",
    desc: "Jungov pristup koji integrira svjesno i nesvjesno kroz rad sa snovima, simbolima i arhetipovima.",
  },
  {
    title: "Psihodinamska terapija",
    desc: "Istraživanje nesvjesnih konflikata i ranih iskustava koji oblikuju sadašnje obrasce ponašanja.",
  },
  {
    title: "Humanistička psihologija",
    desc: "Maslow, Rogers i Frankl — fokus na ljudski potencijal, samoostvarenje i potragu za smislom.",
  },
];

function AccordionItem({ title, desc }: { title: string; desc: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden bg-white shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-muted transition-colors"
      >
        <span className="font-semibold text-foreground text-sm">{title}</span>
        {open
          ? <ChevronUp className="w-4 h-4 text-muted-foreground flex-shrink-0" />
          : <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0" />
        }
      </button>
      {open && (
        <div className="px-5 pb-5">
          <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
        </div>
      )}
    </div>
  );
}

export default function Psychology() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-50 via-violet-50 to-background">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${BRAIN_IMG})` }}
        />
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="container mx-auto px-4 lg:px-8 relative text-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="tag mb-6 inline-block">
            Psihologija
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="section-heading mb-6 max-w-3xl mx-auto"
          >
            Dubinsko razumijevanje <span className="gradient-text">ljudske psihe</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Od Jungovih arhetipova do kliničke prakse, filozofije uma i forenzičke psihologije — istražujemo sve dimenzije psihološke znanosti.
          </motion.p>
        </div>
      </section>

      {/* Jung Archetypes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="tag tag-gold mb-4 inline-block">Carl Gustav Jung</span>
              <h2 className="section-heading mb-6">
                Jungovi <span className="gradient-text">arhetipovi</span>
              </h2>
              <p className="text-foreground/65 leading-relaxed mb-4">
                Carl Gustav Jung (1875–1961) razvio je teoriju kolektivnog nesvjesnog — sloja psihe koji dijele svi ljudi, bez obzira na kulturu ili povijest. Arhetipovi su univerzalni simbolički obrasci koji se pojavljuju u mitovima, snovima i religijama diljem svijeta.
              </p>
              <p className="text-foreground/65 leading-relaxed mb-6">
                Za razliku od Freuda koji je fokus stavljao na osobno nesvjesno i seksualne nagone, Jung je prepoznao dublje slojeve psihe koji transcendiraju individualno iskustvo. Individuacija — proces integracije svih aspekata ličnosti — bila je za njega vrhunski cilj psihološkog razvoja.
              </p>
              <div className="quote-block mb-6">
                "Dok god ne učiniš nesvjesno svjesnim, ono će upravljati tvojim životom i ti ćeš to zvati sudbinom."
                <span className="block mt-2 text-sm not-italic text-muted-foreground">— Carl Gustav Jung</span>
              </div>
            </div>
            <div>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] mb-6 shadow-lg">
                <img src={JUNG_IMG} alt="Carl Gustav Jung" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </div>
          </div>

          {/* Archetypes Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
            {archetypes.map((arch, i) => (
              <motion.div
                key={arch.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="p-4 rounded-xl border border-border bg-gradient-to-br from-violet-50 to-purple-50 text-center card-hover"
              >
                <div className="text-3xl mb-2">{arch.symbol}</div>
                <h4 className="font-serif font-bold text-foreground text-sm mb-1">{arch.name}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{arch.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video: Jung */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-10">
            <span className="tag mb-4 inline-block">Video</span>
            <h2 className="section-heading mb-4">
              Jungova <span className="gradient-text">analitička psihologija</span>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="video-container rounded-2xl border border-border shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/p-cKY-L4-mw?start=10&rel=0&modestbranding=1"
                title="Jungova analitička psihologija"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Psychology */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <span className="tag mb-4 inline-block">Klinička psihologija</span>
            <h2 className="section-heading mb-4">
              Terapeutski <span className="gradient-text">modaliteti</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Evidence-based pristupi kombinirani s dubinskim razumijevanjem nesvjesnih mehanizama
            </p>
          </div>
          <div className="max-w-2xl mx-auto space-y-3">
            {clinicalTopics.map((topic) => (
              <AccordionItem key={topic.title} title={topic.title} desc={topic.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy of Mind */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-violet-50 to-background relative">
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <span className="tag tag-gold mb-4 inline-block">Filozofija uma</span>
              <h2 className="section-heading mb-4">
                Priroda <span className="gradient-text">svijesti</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Fundamentalna pitanja o prirodi subjektivnog iskustva, kvalijama, slobodnoj volji i odnosu uma i tijela.
              </p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Brain, title: "Problem teške svijesti", desc: "Zašto postoji subjektivno iskustvo? David Chalmers postavio je ovo kao temeljno pitanje filozofije uma — jaz između fizičkih procesa i kvalija.", iconBg: "bg-blue-100", iconColor: "text-blue-600" },
                { icon: Lightbulb, title: "Slobodna volja", desc: "Libet eksperimenti sugeriraju da mozak donosi odluke prije svjesne namjere. Što to znači za odgovornost i slobodu?", iconBg: "bg-amber-100", iconColor: "text-amber-600" },
                { icon: BookOpen, title: "Dualizam vs. monizam", desc: "Descartes vs. Spinoza — je li um odvojen od tijela ili je sve jedna supstancija? Suvremena neuroznanost i kvantna fizika nude nove odgovore.", iconBg: "bg-violet-100", iconColor: "text-violet-600" },
                { icon: Scale, title: "Forenzička psihologija", desc: "Primjena psihološkog znanja u pravnom kontekstu — procjena vjerodostojnosti, profiliranje i ekspertiza temeljena na rigoroznoj metodologiji.", iconBg: "bg-teal-100", iconColor: "text-teal-600" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="p-6 rounded-2xl border border-border bg-white card-hover shadow-sm"
                  >
                    <div className={`w-10 h-10 rounded-xl ${item.iconBg} flex items-center justify-center mb-3`}>
                      <Icon className={`w-5 h-5 ${item.iconColor}`} />
                    </div>
                    <h3 className="font-serif font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Video: Consciousness */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-10">
            <span className="tag mb-4 inline-block">Video</span>
            <h2 className="section-heading mb-4">
              Problem <span className="gradient-text">teške svijesti</span>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="video-container rounded-2xl border border-border shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/uhRhtFFhNzQ?rel=0&modestbranding=1"
                title="Problem teške svijesti"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
