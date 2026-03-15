import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

const CONTACT_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663360791554/9Xytk5XuyaGQiwf2ptjWSz/contact-bg_50f514c6.jpg";

const contactInfo = [
  { icon: Mail, label: "Email", value: "info@stvarnaslika.com", href: "mailto:info@stvarnaslika.com" },
  { icon: Phone, label: "Telefon", value: "+385 1 234 5678", href: "tel:+38512345678" },
  { icon: MapPin, label: "Lokacija", value: "Zagreb, Hrvatska", href: "#" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const sendContact = trpc.contact.send.useMutation({
    onSuccess: () => {
      setSubmitted(true);
      toast.success("Poruka uspješno poslana!");
    },
    onError: (err) => {
      toast.error("Greška pri slanju: " + err.message);
    },
  });

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Ime je obavezno";
    if (!form.email.trim()) newErrors.email = "Email je obavezan";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Unesite valjani email";
    if (!form.subject.trim()) newErrors.subject = "Predmet je obavezan";
    if (!form.message.trim()) newErrors.message = "Poruka je obavezna";
    else if (form.message.length < 10) newErrors.message = "Poruka mora imati najmanje 10 znakova";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    sendContact.mutate(form);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url(${CONTACT_BG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-teal-900/20 via-background to-background" />
        <div className="container mx-auto px-4 lg:px-8 relative text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="tag mb-6 inline-block"
          >
            Kontakt
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="section-heading text-white mb-6"
          >
            Stupite s nama u <span className="gradient-text">kontakt</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white/60 max-w-xl mx-auto text-lg"
          >
            Imate pitanja, prijedloge ili želite suradnju? Javite nam se — odgovaramo unutar 24 sata.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="font-serif font-bold text-white text-2xl mb-6">Informacije</h2>
              <div className="space-y-6 mb-10">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={info.label}
                      href={info.href}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-purple-500/15 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500/25 transition-colors">
                        <Icon className="w-5 h-5 text-purple-400" />
                      </div>
                      <div>
                        <div className="text-xs text-white/40 uppercase tracking-wider mb-0.5">{info.label}</div>
                        <div className="text-sm text-white/80 group-hover:text-white transition-colors">{info.value}</div>
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="p-6 rounded-2xl border border-white/10 bg-white/3">
                <h3 className="font-serif font-bold text-white mb-3">AI Psihoterapeut</h3>
                <p className="text-sm text-white/55 leading-relaxed mb-4">
                  Naš AI chatbot psihoterapeut dostupan je 24/7 za razgovor, podršku i savjete. Kliknite na ikonu u donjem desnom kutu.
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-green-400">Dostupan sada</span>
                </div>
              </div>

              <div className="mt-6 p-6 rounded-2xl border border-white/10 bg-white/3">
                <h3 className="font-serif font-bold text-white mb-3">Radno vrijeme</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/50">Pon – Pet</span>
                    <span className="text-white/80">9:00 – 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/50">Subota</span>
                    <span className="text-white/80">10:00 – 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/50">Nedjelja</span>
                    <span className="text-white/80">Zatvoreno</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center p-12 rounded-2xl border border-green-500/30 bg-green-500/5"
                >
                  <CheckCircle className="w-16 h-16 text-green-400 mb-6" />
                  <h3 className="font-serif font-bold text-white text-2xl mb-3">Poruka poslana!</h3>
                  <p className="text-white/60 max-w-sm">
                    Hvala na vašoj poruci. Odgovorit ćemo vam unutar 24 sata na navedenu email adresu.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                    className="mt-6 px-6 py-2.5 rounded-full border border-white/20 text-white text-sm hover:bg-white/5 transition-colors"
                  >
                    Pošalji novu poruku
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-1.5">
                        Ime i prezime <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Vaše ime"
                        className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-colors ${errors.name ? "border-red-500/50" : "border-white/10 hover:border-white/20"}`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-1.5">
                        Email adresa <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="vas@email.com"
                        className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-colors ${errors.email ? "border-red-500/50" : "border-white/10 hover:border-white/20"}`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-1.5">
                      Predmet <span className="text-red-400">*</span>
                    </label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-colors appearance-none ${errors.subject ? "border-red-500/50" : "border-white/10 hover:border-white/20"}`}
                    >
                      <option value="" className="bg-[#0d0d1a]">Odaberite predmet...</option>
                      <option value="konzultacija" className="bg-[#0d0d1a]">Konzultacija</option>
                      <option value="istraživanje" className="bg-[#0d0d1a]">Istraživanje i suradnja</option>
                      <option value="terapija" className="bg-[#0d0d1a]">Terapija i savjetovanje</option>
                      <option value="edukacija" className="bg-[#0d0d1a]">Edukacija i radionice</option>
                      <option value="ostalo" className="bg-[#0d0d1a]">Ostalo</option>
                    </select>
                    {errors.subject && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.subject}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-1.5">
                      Poruka <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={6}
                      placeholder="Opišite vaš upit, pitanje ili prijedlog..."
                      className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-colors resize-none ${errors.message ? "border-red-500/50" : "border-white/10 hover:border-white/20"}`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                    <p className="mt-1 text-xs text-white/30 text-right">{form.message.length} znakova</p>
                  </div>

                  <button
                    type="submit"
                    disabled={sendContact.isPending}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:opacity-90 hover:scale-[1.01] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {sendContact.isPending ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Slanje...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Pošalji poruku
                      </>
                    )}
                  </button>

                  <p className="text-xs text-white/30 text-center">
                    Vaši podaci su sigurni i neće biti dijeljeni s trećim stranama.
                  </p>
                </motion.form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
