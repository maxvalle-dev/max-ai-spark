import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/max-valle-logo.svg";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Servizi AI", href: "/servizi-ai" },
  { label: "Chi Sono", href: "#chi-sono" },
  { label: "Blog", href: "/blog" },
  { label: "Contatti", href: "/contatti" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 bg-background/80 backdrop-blur-xl ${
        scrolled ? "shadow-header" : ""
      }`}
    >
      <div className="container flex items-center justify-between h-20 md:h-24">
        <Link to="/">
          <img src={logo} alt="Max Valle" className="h-16 md:h-20 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild className="rounded-full px-6 shadow-card font-semibold">
            <a href="/prenota">Consulenza Gratuita</a>
          </Button>
        </div>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMenuOpen(true)}
          aria-label="Apri menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed bottom-0 left-0 right-0 bg-background rounded-t-3xl z-50 p-6 pb-10 shadow-float"
            >
              <div className="flex justify-between items-center mb-6">
                <span className="font-display text-lg font-bold">Menu</span>
                <button onClick={() => setMenuOpen(false)} aria-label="Chiudi menu">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-lg font-medium text-foreground py-2 border-b border-border"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <Button asChild className="rounded-full mt-4 w-full text-base py-6 font-semibold">
                  <a href="/prenota">Prenota Consulenza</a>
                </Button>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
