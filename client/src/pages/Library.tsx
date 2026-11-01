import { ArrowDownToLine, ArrowUpRight, BookOpen, FileText, Presentation, Search } from "lucide-react";

const materials = [
  { title: "Stvarna Slika — psihologija, psihijatrija i istraživanje svijesti", type: "PDF", category: "Temeljni materijal", description: "Pregled platforme, njezinih tema i istraživačkog pristupa.", file: "/biblioteka/stvarna-slika-psihologija-psihijatrija-svijest.pdf" },
  { title: "Neuropsihijatrija: cjelovit vodič", type: "PDF", category: "Psihijatrija", description: "Veza mozga, ponašanja i mentalnog zdravlja kroz neuropsihijatrijsku perspektivu.", file: "/biblioteka/neuropsihijatrija-cjelovit-vodic.pdf" },
  { title: "Percepcija nije prozor", type: "PDF", category: "Svijest", description: "Vizualno istraživanje načina na koji mozak konstruira stvarnost.", file: "/biblioteka/percepcija-nije-prozor.pdf" },
  { title: "Psihologija prokrastinacije", type: "PDF", category: "Psihologija", description: "Kako nastaje odgađanje i što nam ono govori o unutarnjim obrascima.", file: "/biblioteka/psihologija-prokrastinacije.pdf" },
  { title: "Prezentacija: shizofrenija", type: "PDF", category: "Mentalno zdravlje", description: "Edukativni pregled simptoma, razumijevanja i konteksta shizofrenije.", file: "/biblioteka/prezentacija-sizofrenija.pdf" },
  { title: "Prezentacija: shizofrenija", type: "PPTX", category: "Mentalno zdravlje", description: "Prezentacijska verzija materijala o shizofreniji.", file: "/biblioteka/prezentacija-sizofrenija.pptx" },
  { title: "Autopsihoanaliza — vizualna prezentacija", type: "PPTX", category: "Samorefleksija", description: "Vizualni materijal za promatranje vlastitih obrazaca i unutarnjih procesa.", file: "/biblioteka/autopsihoanaliza-vizualna-prezentacija.pptx" },
  { title: "Psihologija prokrastinacije — prezentacija", type: "PPTX", category: "Psihologija", description: "Sažeta prezentacija o mehanizmima odgađanja i samoregulaciji.", file: "/biblioteka/prezentacija-prokrastinacija.pptx" },
  { title: "Istraživanje alternativnih metoda mentalnog zdravlja", type: "DOCX", category: "Istraživanje", description: "Dokument za čitanje i daljnje istraživanje integrativnih pristupa.", file: "/biblioteka/istrazivanje-alternativne-metode-mentalno-zdravlje.docx" },
];

export default function Library() {
  return (
    <main className="min-h-screen bg-[#f4f0ea] pt-24 text-[#18211f]">
      <section className="border-b border-[#18211f]/10 bg-[#e8d9ce]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#9a6f55]"><span className="h-px w-10 bg-[#9a6f55]" />Biblioteka / materijali</p>
            <h1 className="font-serif text-6xl leading-[0.9] tracking-[-0.06em] sm:text-8xl">Čitaj.<br /><span className="italic text-[#667b6e]">Istražuj.</span></h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-[#56635d]">Autorski PDF-ovi, prezentacije i istraživački materijali Luke Anića-Antića na jednom mjestu. Otvori ili preuzmi sadržaj koji te zanima.</p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
        <div className="mb-8 flex items-center justify-between gap-4 border-b border-[#18211f]/15 pb-5"><div className="flex items-center gap-3"><BookOpen className="h-5 w-5 text-[#667b6e]" /><p className="text-sm font-semibold">{materials.length} dostupnih materijala</p></div><div className="hidden items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#68736e] sm:flex"><Search className="h-4 w-4" />Otvoreni pristup</div></div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {materials.map((item, index) => { const Icon = item.type === "PPTX" ? Presentation : FileText; return <article key={`${item.file}-${index}`} className="group flex min-h-[290px] flex-col rounded-[1.5rem] border border-[#18211f]/10 bg-[#f9f7f3] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#667b6e]/50 hover:shadow-[0_25px_50px_rgba(24,33,31,.10)]"><div className="flex items-start justify-between"><span className="font-mono text-xs text-[#9a6f55]">{String(index + 1).padStart(2, "0")}</span><span className="flex items-center gap-2 rounded-full bg-[#e3ece6] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#34443d]"><Icon className="h-3.5 w-3.5" />{item.type}</span></div><p className="mt-9 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9a6f55]">{item.category}</p><h2 className="mt-3 font-serif text-2xl leading-tight">{item.title}</h2><p className="mt-3 flex-1 text-sm leading-6 text-[#68736e]">{item.description}</p><a href={item.file} download className="mt-6 inline-flex items-center justify-between border-t border-[#18211f]/15 pt-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#18211f]"><span className="inline-flex items-center gap-2"><ArrowDownToLine className="h-4 w-4" />Preuzmi</span><ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a></article>; })}
        </div>
      </section>
      <section className="bg-[#18211f] text-[#f4f0ea]"><div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12"><p className="max-w-2xl text-sm leading-7 text-[#c7d6cb]">Materijali su edukativni i istraživački. Ne predstavljaju dijagnozu, medicinski savjet ni zamjenu za razgovor s kvalificiranim stručnjakom.</p></div></section>
    </main>
  );
}
