import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Star, Shield, Scale, Award } from "lucide-react";
import maxVallePhoto from "@/assets/max-valle.png";

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.08, duration: 0.4, ease: "easeOut" as const },
  }),
};

const HeroSection = () => {
  const words = ["Trasforma", "la tua", "azienda", "con", "l'Intelligenza", "Artificiale", "ed il", "digital", "marketing"];

  return (
    <section className="relative bg-aurora min-h-[calc(100vh-7rem)] flex items-center overflow-hidden">
      <div className="container relative z-10 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="section-label bg-primary-50 text-primary mb-6"
            >
              ✦ Business AI Strategist · Dal 1993
            </motion.div>

            <h1 className="font-display text-h1-mobile md:text-h1 mb-6">
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={wordVariants}
                  className={`inline-block mr-3 ${
                    word === "azienda" || word === "l'Intelligenza" || word === "Artificiale" ? "text-gradient-hero" : ""
                  }`}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-muted text-lg leading-relaxed mb-8 max-w-lg"
            >
              Con 33 anni di esperienza guido le PMI italiane verso il futuro digitale. Aumenta produttività, automatizza processi e conquista nuovi clienti con strategie AI personalizzate.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Button asChild size="lg" className="rounded-full px-8 text-base font-semibold gap-2">
                <a href="/servizi-ai">
                  Scopri i Servizi AI <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 text-base font-semibold gap-2">
                <a href="/prenota">
                  <Calendar className="w-4 h-4" /> Consulenza Gratuita
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex items-center gap-4 text-sm text-muted"
            >
              <div className="flex items-center gap-1 text-secondary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span>4.9/5 · oltre 110+ recensioni</span>
            </motion.div>
          </div>

          {/* Right — Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 20 }}
            className="hidden lg:block"
          >
            <div className="bg-background/60 backdrop-blur-xl border border-border/50 rounded-3xl p-8 shadow-float max-w-sm mx-auto">
              <div className="flex flex-col items-center mb-6">
                <img src={maxVallePhoto} alt="Max Valle" className="w-20 h-20 rounded-full object-cover object-top shadow-glass mb-4" />
                <h3 className="font-display text-xl font-bold text-foreground">Max Valle</h3>
                <p className="text-sm text-muted">Business AI Strategist</p>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { value: "33+", label: "anni" },
                  { value: "2.500+", label: "aziende" },
                  { value: "12", label: "paesi" },
                  { value: "1.300+", label: "articoli" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-surface-dim rounded-xl p-3 text-center">
                    <div className="font-display text-xl font-bold text-primary">{stat.value}</div>
                    <div className="text-xs text-muted">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 justify-center">
                {[
                  { icon: Shield, label: "CPEH" },
                  { icon: Scale, label: "FederPrivacy" },
                  { icon: Award, label: "CTU Tribunale" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-1.5 px-3 py-1.5 bg-primary-50 rounded-full text-xs font-medium text-primary">
                    <Icon className="w-3.5 h-3.5" />
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
