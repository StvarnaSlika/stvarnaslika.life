import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function About() {
  useEffect(() => {
    document.title = "O meni | Luka Ani-Antić | Stvarna Slika";
  }, []);

  return (
    <main className="pt-20 bg-[#f7f3ef] text-slate-800">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(168,85,247,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.12),transparent_30%)]" />
        <div className="container mx-auto max-w-5xl px-4">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-violet-700">O meni</p>
          <h1 className="text-5xl font-black tracking-[-0.05em] text-slate-900 md:text-6xl">
            Ja sam Luka Ani-Antić.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Moj rad je nastao iz interesa za ono što ne možemo lako objasniti: psihologiju, svijest, emocije, traumatska iskustva i dublji smisao ljudskog postojanja.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_16px_36px_rgba(15,23,42,0.04)]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-violet-700">Priča</p>
              <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-slate-900">Zašto Stvarna Slika?</h2>
              <p className="mt-4 text-slate-600 leading-8">
                Stvarna Slika nastala je iz potrebe da se u razgovor o čovjeku vrati dubina. Ne pokušavam samo objasniti ponašanje, nego razumjeti što leži ispod njega: emocije, trauma, motive, nesvjesno i unutarnje simboličke jezike.
              </p>
              <p className="mt-4 text-slate-600 leading-8">
                U svom radu povezuju se znanost i intuicija, psihologija i filozofija, iskustvo i promišljanje. Volim istraživati ono što se često zanemaruje u svakodnevnom govoru o mentalnom zdravlju i vlastitom razvoju.
              </p>
            </div>

            <div className="rounded-[2rem] border border-violet-100 bg-gradient-to-br from-violet-50 via-white to-cyan-50 p-8 shadow-[0_18px_40px_rgba(109,40,217,0.08)]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-violet-700">Filozofija</p>
              <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-slate-900">Dubina, ne površina</h2>
              <p className="mt-4 text-slate-600 leading-8">
                Ne tražim samo rješenja, nego razumijevanje. Proces istraživanja je za mene put prema dubljoj autentičnosti — prema osobi koja je sposobna vidjeti više od površinskog i prihvatiti složenost vlastitog svijeta.
              </p>
              <p className="mt-4 text-slate-600 leading-8">
                Ovdje se spajaju psihologija, parapsihologija, filozofija uma i promišljanje o tome što znači biti čovjek u vremenu u kojem se sve često brže čita nego što se ikad dublje razumije.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_16px_36px_rgba(15,23,42,0.04)]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-violet-700">Načelo</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-slate-900">Istraživanje bez zatvaranja</h2>
            <p className="mt-4 text-slate-600 leading-8">
              U svojoj praksi i pisanju nastojim istraživati bez dogmi i bez predrasuda. Psihologija, parapsihologija i filozofija uma ne trebaju biti odvojeni svjetovi — mogu se skladno spojiti u jedan dublji i smisleniji pogled na čovjeka.
            </p>
            <p className="mt-4 text-slate-600 leading-8">
              U ovom prostoru dijelim informacije, refleksije i analize koje pomažu ljudima da bliže pogledaju na svoju stvarnost, svoje emocije i vlastite unutarnje procese.
            </p>

            <Link href="/blog">
              <button className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_30px_rgba(109,40,217,0.22)] transition hover:-translate-y-0.5">
                Pročitaj blog
                <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
