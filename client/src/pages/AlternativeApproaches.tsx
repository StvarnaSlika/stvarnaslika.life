import { motion } from "framer-motion";
import { Moon, Leaf, Atom, Sun, Wind, Droplets } from "lucide-react";

const LUCID_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663360791554/9Xytk5XuyaGQiwf2ptjWSz/lucid-dream_0dce0884.jpg";
const MEDITATION_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663360791554/9Xytk5XuyaGQiwf2ptjWSz/meditation-nature_28fbb110.jpg";
const QUANTUM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663360791554/9Xytk5XuyaGQiwf2ptjWSz/quantum-universe_459d330e.jpg";

const lucidTechniques = [
  { name: "MILD tehnika", desc: "Mnemonic Induction of Lucid Dreams — ponavljanje namjere prije spavanja za povećanje svjesnosti u snu." },
  { name: "WILD tehnika", desc: "Wake-Initiated Lucid Dream — direktan prijelaz iz budnog stanja u lucidni san bez gubitka svjesnosti." },
  { name: "WBTB metoda", desc: "Wake Back To Bed — buđenje nakon 5-6 sati spavanja i povratak u san s povećanom svjesnošću." },
  { name: "Provjera stvarnosti", desc: "Redovite provjere u budnom stanju koje se prenose u snove i aktiviraju lucidnost." },
];

const holisticPractices = [
  { icon: Leaf, title: "Meditacija i mindfulness", desc: "Istraživanja pokazuju da redovita meditacija mijenja strukturu mozga — povećava gustoću sive tvari u prefrontalnom korteksu i smanjuje amigdalnu reaktivnost.", color: "text-green-400", bg: "bg-green-500/10" },
  { icon: Wind, title: "Pranayama i disanje", desc: "Kontrolirano disanje direktno utječe na autonomni živčani sustav. Wim Hof metoda i holotropno disanje pokazuju duboke fiziološke i psihološke učinke.", color: "text-blue-400", bg: "bg-blue-500/10" },
  { icon: Sun, title: "Energetska medicina", desc: "Akupunktura, Reiki i bioenergetika — prakse koje rade s 'energetskim poljem' tijela. Sve više empirijskih istraživanja potvrđuje njihovu učinkovitost.", color: "text-yellow-400", bg: "bg-yellow-500/10" },
  { icon: Droplets, title: "Psihoaktivne supstance", desc: "Istraživanja s psilocibinom (Johns Hopkins) i MDMA (MAPS) pokazuju revolucionarne rezultate u liječenju PTSP-a, depresije i anksioznosti.", color: "text-purple-400", bg: "bg-purple-500/10" },
  { icon: Moon, title: "Lucidni snovi", desc: "Svjesno sanjanje kao terapeutski alat — od liječenja noćnih mora do kreativnog rješavanja problema i duhovnog istraživanja.", color: "text-indigo-400", bg: "bg-indigo-500/10" },
  { icon: Atom, title: "Kvantna biofeedback", desc: "Primjena kvantnih principa u biofeedback terapiji — mjerenje i modulacija energetskih polja tijela za optimizaciju zdravlja.", color: "text-pink-400", bg: "bg-pink-500/10" },
];

export default function AlternativeApproaches() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${MEDITATION_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-teal-900/30 via-background to-background" />
        <div className="container mx-auto px-4 lg:px-8 relative text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="tag mb-6 inline-block"
          >
            Alternativni pristupi
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="section-heading text-white mb-6 max-w-3xl mx-auto"
          >
            Holistički put prema <span className="gradient-text">cjelovitosti</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Integriramo drevne mudrosti s modernom neuroznanošću — od lucidnih snova do holističkih iscjeljenja i kvantne biologije.
          </motion.p>
        </div>
      </section>

      {/* Lucid Dreams */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="tag tag-gold mb-4 inline-block">Lucidni snovi</span>
              <h2 className="section-heading text-white mb-6">
                Svjesno <span className="gradient-text">sanjanje</span> kao terapija
              </h2>
              <p className="text-white/60 leading-relaxed mb-4">
                Lucidni snovi — stanje u kojem sanjač postaje svjestan da sanja — pružaju jedinstven prozor u nesvjesne procese. Keith Hearne (1975) i Stephen LaBerge (1980) prvi su eksperimentalno potvrdili lucidno sanjanje koristeći unaprijed dogovorene pokrete očiju.
              </p>
              <p className="text-white/60 leading-relaxed mb-6">
                Istraživanja pokazuju da redovita praksa lucidnog sanjanja može: poboljšati motoričke vještine (vježbanjem u snu), smanjiti učestalost noćnih mora kod PTSP-a, povećati kreativnost i rješavanje problema, te produbiti samospoznaju kroz direktno istraživanje nesvjesnog.
              </p>
              <div className="quote-block">
                "Lucidni san je jedina situacija u kojoj možemo direktno komunicirati s nesvjesnim umom dok smo svjesni."
                <span className="block mt-2 text-sm not-italic text-white/40">— Stephen LaBerge, Stanford</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] mb-6">
                <img src={LUCID_IMG} alt="Lucidni snovi" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="tag">Lucidno sanjanje</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Techniques */}
          <div className="mt-10">
            <h3 className="font-serif font-bold text-white text-2xl mb-6 text-center">Tehnike indukcije</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {lucidTechniques.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="p-5 rounded-xl border border-white/10 bg-white/3 card-hover"
                >
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-3">
                    <Moon className="w-4 h-4 text-indigo-400" />
                  </div>
                  <h4 className="font-semibold text-white text-sm mb-2">{tech.name}</h4>
                  <p className="text-xs text-white/50 leading-relaxed">{tech.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video: Lucid Dreams */}
      <section className="py-16 bg-white/2">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-10">
            <span className="tag mb-4 inline-block">Video</span>
            <h2 className="section-heading text-white mb-4">
              Lucidni snovi: <span className="gradient-text">Neuroznanost i praksa</span>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="video-container rounded-2xl border border-white/10">
              <iframe
                src="https://www.youtube.com/embed/YQjAIlFZWWc?rel=0&modestbranding=1"
                title="Lucidni snovi - neuroznanost"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Holistic Practices */}
      <section className="py-16 relative">
        <div className="absolute inset-0 dot-pattern opacity-15" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="text-center mb-12">
            <span className="tag mb-4 inline-block">Holistička iscjeljenja</span>
            <h2 className="section-heading text-white mb-4">
              Integrativni <span className="gradient-text">pristupi zdravlju</span>
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">
              Prakse koje integriraju tijelo, um i duh — sve više potvrđene empirijskim istraživanjima
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {holisticPractices.map((practice, i) => {
              const Icon = practice.icon;
              return (
                <motion.div
                  key={practice.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="p-6 rounded-2xl border border-white/10 bg-white/3 card-hover"
                >
                  <div className={`w-12 h-12 rounded-xl ${practice.bg} flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${practice.color}`} />
                  </div>
                  <h3 className="font-serif font-bold text-white text-lg mb-2">{practice.title}</h3>
                  <p className="text-sm text-white/55 leading-relaxed">{practice.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quantum Consciousness */}
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
                <img src={QUANTUM_IMG} alt="Kvantna svijest" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="tag tag-gold mb-4 inline-block">Kvantna svijest</span>
              <h2 className="section-heading text-white mb-6">
                Gdje fizika susreće <span className="gradient-text">duhovnost</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-4">
                Kvantna mehanika i duhovna tradicija dijele iznenađujuće paralele: nelokalnost i sveprisutnost, superpozicija i nedualnost, promatrač koji mijenja promatrano i svjesnost kao temelj stvarnosti.
              </p>
              <p className="text-white/60 leading-relaxed mb-4">
                Fizičari poput Davida Bohma (implicitni red), Fritjof Capre (Tao fizike) i Amit Goswamija (svjesnost kao temelj) razvili su okvire koji premošćuju jaz između kvantne fizike i drevnih mudrosti.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                {[
                  { label: "Nelokalnost", desc: "Kvantna zapletenost i telepatija" },
                  { label: "Superpozicija", desc: "Nedualnost u budizmu" },
                  { label: "Promatrač", desc: "Svjesnost mijenja stvarnost" },
                  { label: "Implicitni red", desc: "Bohm i holografski svemir" },
                ].map((item) => (
                  <div key={item.label} className="p-3 rounded-lg border border-white/10 bg-white/3">
                    <div className="text-xs font-bold text-purple-400 mb-1">{item.label}</div>
                    <div className="text-xs text-white/50">{item.desc}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video: Meditation */}
      <section className="py-16 bg-white/2">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-10">
            <span className="tag mb-4 inline-block">Video</span>
            <h2 className="section-heading text-white mb-4">
              Meditacija i <span className="gradient-text">neuroznanost</span>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="video-container rounded-2xl border border-white/10">
              <iframe
                src="https://www.youtube.com/embed/m8rRzTtP7Tc?rel=0&modestbranding=1"
                title="Meditacija i neuroznanost"
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
