import { Link } from "wouter";
import { Eye, Mail } from "lucide-react";

const navLinks = [
  { href: "/", label: "Početna" },
  { href: "/o-nama", label: "O nama" },
  { href: "/psihologija", label: "Psihologija" },
  { href: "/parapsihologija", label: "Parapsihologija" },
  { href: "/alternativni-pristupi", label: "Alternativni pristupi" },
  { href: "/kontakt", label: "Kontakt" },
];

const topics = [
  "Jungovi arhetipovi",
  "ESP i jasnovidnost",
  "Orch-OR teorija",
  "Kvantna svijest",
  "Lucidni snovi",
  "Holistička iscjeljenja",
  "Parapsihologija",
  "Rhine eksperimenti",
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-white">
      {/* Top accent line */}
      <div className="h-1 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500" />

      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-600 to-purple-500 flex items-center justify-center shadow-md">
                <Eye className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-serif font-bold text-lg text-foreground leading-none block">
                  Stvarna <span className="gradient-text">Slika</span>
                </span>
                <span className="text-xs text-muted-foreground tracking-widest uppercase">Psihologija</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Prostor gdje se ne bojimo propitivati granice. Istražujemo psihu kroz kliničku psihologiju, parapsihologiju i alternativne pristupe.
            </p>
            <a
              href="mailto:info@stvarnaslika.com"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-violet-600 transition-colors"
            >
              <Mail className="w-4 h-4" />
              info@stvarnaslika.com
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Navigacija</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-sm text-muted-foreground hover:text-violet-600 transition-colors cursor-pointer">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Topics */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Teme</h4>
            <ul className="space-y-2.5">
              {topics.map((topic) => (
                <li key={topic}>
                  <span className="text-sm text-muted-foreground">{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quote */}
          <div>
            <div className="mt-0 p-4 rounded-xl bg-violet-50 border border-violet-100">
              <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">Citat</p>
              <blockquote className="text-sm text-foreground/70 italic font-serif leading-relaxed">
                "Ono što je iznad, jest kao i ono što je dolje."
                <span className="block mt-1 text-xs not-italic text-muted-foreground">— Hermetički princip</span>
              </blockquote>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 Stvarna Slika. Sva prava pridržana.
          </p>
          <p className="text-xs text-muted-foreground">
            Istražujemo granice ljudske psihe bez straha od istine.
          </p>
        </div>
      </div>
    </footer>
  );
}
