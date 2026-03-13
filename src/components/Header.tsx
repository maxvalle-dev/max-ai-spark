import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ChevronRight, Bot, Sparkles, TrendingUp, Globe, Cloud, Shield, Euro, GraduationCap, ShieldCheck, Stamp, Contact, CalendarCheck, Users, ShoppingBag, Lightbulb, BookOpen, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/max-valle-logo.svg";

interface MenuItem {
  icon: React.ElementType;
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const menuItems: MenuItem[] = [
  {
    icon: Bot,
    label: "Intelligenza Artificiale",
    href: "/servizi-ai",
    children: [
      { label: "Servizi AI per Aziende", href: "/servizi-ai" },
      { label: "Consulenza AI", href: "/servizi-ai#consulenza" },
      { label: "Automazione AI", href: "/servizi-ai#automazione" },
    ],
  },
  {
    icon: Sparkles,
    label: "Consulenza",
    href: "/servizi",
    children: [
      { label: "Consulenza Strategica", href: "/servizi#strategica" },
      { label: "Consulenza Digitale", href: "/servizi#digitale" },
    ],
  },
  {
    icon: TrendingUp,
    label: "Digital Marketing",
    href: "/servizi#marketing",
    children: [
      { label: "SEO", href: "/servizi#seo" },
      { label: "Social Media", href: "/servizi#social" },
      { label: "Content Marketing", href: "/servizi#content" },
    ],
  },
  { icon: Globe, label: "Siti Web", href: "/servizi#siti-web" },
  { icon: Cloud, label: "Cloud Hosting", href: "/servizi#hosting" },
  { icon: Shield, label: "Sicurezza Informatica", href: "/servizi#sicurezza" },
  { icon: Euro, label: "Finanza Agevolata", href: "/servizi#finanza" },
  { icon: GraduationCap, label: "Formazione", href: "/servizi#formazione" },
  {
    icon: ShieldCheck,
    label: "Compliance",
    href: "/servizi#compliance",
    children: [
      { label: "GDPR", href: "/servizi#gdpr" },
      { label: "Privacy", href: "/servizi#privacy" },
    ],
  },
  { icon: Stamp, label: "Marchio Registrato", href: "/servizi#marchio" },
  { icon: Contact, label: "Contatti", href: "/contatti" },
  { icon: CalendarCheck, label: "Prenota una Consulenza", href: "/prenota" },
  { icon: Users, label: "Area Clienti", href: "#" },
  {
    icon: ShoppingBag,
    label: "Shop",
    href: "#",
    children: [
      { label: "Libri", href: "#libri" },
      { label: "Corsi", href: "#corsi" },
    ],
  },
  {
    icon: Lightbulb,
    label: "Progetti",
    href: "#",
    children: [
      { label: "Case Studies", href: "#case-studies" },
      { label: "Portfolio", href: "#portfolio" },
    ],
  },
  {
    icon: BookOpen,
    label: "I Miei Libri",
    href: "#libri",
    children: [
      { label: "Genitori e Internet", href: "#" },
      { label: "Siti da Incubo", href: "#" },
      { label: "Web Marketing", href: "#" },
    ],
  },
  {
    icon: Award,
    label: "Risorse",
    href: "#",
    children: [
      { label: "Blog", href: "/blog" },
      { label: "Guide Gratuite", href: "#" },
    ],
  },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubs, setOpenSubs] = useState<Set<string>>(new Set());

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setOpenSubs(new Set());
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const toggleSub = (label: string) => {
    setOpenSubs((prev) => {
      const next = new Set(prev);
      if (next.has(label)) next.delete(label);
      else next.add(label);
      return next;
    });
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 bg-background/80 backdrop-blur-xl ${
          scrolled ? "shadow-header" : ""
        }`}
      >
        <div className="container flex items-center justify-between h-20 md:h-24">
          <Link to="/">
            <img src={logo} alt="Max Valle" className="h-16 md:h-20 w-auto" />
          </Link>

          <div className="flex items-center gap-4">
            <Button asChild className="hidden sm:inline-flex rounded-full px-6 shadow-card font-semibold">
              <a href="/prenota">Consulenza Gratuita</a>
            </Button>
            <button
              className="p-2 text-foreground"
              onClick={() => setMenuOpen(true)}
              aria-label="Apri menu"
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-[100]"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-background z-[101] shadow-float flex flex-col"
            >
              <div className="flex justify-between items-center p-5 border-b border-border">
                <img src={logo} alt="Max Valle" className="h-12 w-auto" />
                <button onClick={() => setMenuOpen(false)} aria-label="Chiudi menu">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto py-2">
                {menuItems.map(({ icon: Icon, label, href, children }) => (
                  <div key={label} className="border-b border-border/50">
                    {children ? (
                      <>
                        <button
                          onClick={() => toggleSub(label)}
                          className="flex items-center justify-between w-full px-5 py-4 text-left hover:bg-surface-dim transition-colors"
                        >
                          <span className="flex items-center gap-3">
                            <Icon className="w-5 h-5 text-primary" />
                            <span className="font-medium text-foreground">{label}</span>
                          </span>
                          <ChevronDown
                            className={`w-4 h-4 text-muted transition-transform ${
                              openSubs.has(label) ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {openSubs.has(label) && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden bg-surface-dim/50"
                            >
                              {children.map((child) => (
                                <a
                                  key={child.label}
                                  href={child.href}
                                  onClick={() => setMenuOpen(false)}
                                  className="flex items-center gap-2 pl-14 pr-5 py-3 text-sm text-muted hover:text-foreground transition-colors"
                                >
                                  <ChevronRight className="w-3 h-3" />
                                  {child.label}
                                </a>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <a
                        href={href}
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-3 px-5 py-4 hover:bg-surface-dim transition-colors"
                      >
                        <Icon className="w-5 h-5 text-primary" />
                        <span className="font-medium text-foreground">{label}</span>
                      </a>
                    )}
                  </div>
                ))}
              </nav>

              <div className="p-5 border-t border-border">
                <Button asChild className="rounded-full w-full text-base py-6 font-semibold">
                  <a href="/prenota" onClick={() => setMenuOpen(false)}>Consulenza Gratuita</a>
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
