import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section id="booking" className="bg-primary py-20 md:py-28">
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-h2-mobile md:text-h2 text-primary-foreground mb-4">
            Pronto a portare il tuo business al livello successivo?
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-8 max-w-lg mx-auto">
            Prenota una consulenza gratuita di 30 minuti e scopri come l'AI può trasformare la tua azienda.
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-full px-10 text-base font-bold bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-float"
          >
            <a href="/prenota">Prenota Consulenza Gratuita 🚀</a>
          </Button>
          <p className="text-primary-foreground/50 text-sm mt-4">Gratuita · 30 minuti · Nessun impegno</p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
