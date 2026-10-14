import { Link } from "wouter";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#f7f3ef]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Stvarna Slika</p>
            <p className="text-lg font-semibold text-slate-900">Luka Ani-Antić</p>
          </div>

          <nav className="flex flex-wrap gap-4 text-sm text-slate-600">
            <Link href="/">Početna</Link>
            <Link href="/o-nama">O meni</Link>
            <Link href="/psihologija">Psihologija</Link>
            <Link href="/parapsihologija">Parapsihologija</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/kontakt">Kontakt</Link>
          </nav>

          <a href="mailto:luka@stvarnaslika.life" className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm">
            <Mail className="h-4 w-4" />
            Kontakt
          </a>
        </div>

        <div className="mt-8 border-t border-slate-200 pt-6 text-sm text-slate-500">
          © 2026 Stvarna Slika. Sva prava pridržana.
        </div>
      </div>
    </footer>
  );
}
