import { Linkedin, Youtube, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="font-display text-xl font-bold tracking-tight mb-3">
              <span className="text-primary-light">max</span>
              <span className="text-white">valle</span>
              <span className="text-white/50">.it</span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-4">
              Business AI Strategist con 33 anni di esperienza. Guido le PMI italiane verso il futuro digitale.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, href: "https://linkedin.com/in/maxvalle", label: "LinkedIn" },
                { icon: Youtube, href: "https://youtube.com/@maxvalle", label: "YouTube" },
                { icon: Facebook, href: "https://facebook.com/maxvalle.it", label: "Facebook" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white mb-4">Servizi AI</h4>
            <ul className="space-y-2.5 text-sm text-white/60">
              {["Strategia AI su Misura", "Marketing AI", "Agenti AI", "AI Generativa", "SEO per AI", "Assistenti Vocali"].map((s) => (
                <li key={s}><a href="/servizi-ai" className="hover:text-white transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white mb-4">Servizi Professionali</h4>
            <ul className="space-y-2.5 text-sm text-white/60">
              {["Consulenza Aziendale", "Digital Marketing", "Siti Web", "Compliance GDPR", "Cloud & Hosting", "Sicurezza Informatica"].map((s) => (
                <li key={s}><a href="/servizi" className="hover:text-primary transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground mb-4">Info</h4>
            <ul className="space-y-2.5 text-sm text-muted">
              {[
                { label: "Chi sono", href: "#chi-sono" },
                { label: "Blog", href: "/blog" },
                { label: "Contatti", href: "/contatti" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Cookie Policy", href: "/cookie-policy" },
              ].map((l) => (
                <li key={l.label}><a href={l.href} className="hover:text-primary transition-colors">{l.label}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t py-6">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-muted">
          <span>© {new Date().getFullYear()} MaxValle.it — Tutti i diritti riservati</span>
          <span>P.IVA: IT02948220967</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
