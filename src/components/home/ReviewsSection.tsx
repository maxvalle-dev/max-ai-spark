import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    text: "Max ha trasformato completamente il nostro approccio al marketing digitale. I risultati sono stati immediati e misurabili.",
    name: "Marco Rossi",
    role: "CEO",
    company: "TechVenture Srl",
    initial: "M",
    color: "bg-primary",
  },
  {
    text: "Grazie alla consulenza AI di Max, abbiamo automatizzato il 60% dei processi customer service risparmiando 200 ore/mese.",
    name: "Laura Bianchi",
    role: "COO",
    company: "Retail Group SpA",
    initial: "L",
    color: "bg-service-web",
  },
  {
    text: "Professionalità e competenza straordinarie. Max è il punto di riferimento per qualsiasi azienda che vuole innovare con l'AI.",
    name: "Giuseppe Verdi",
    role: "Founder",
    company: "InnovaPlus",
    initial: "G",
    color: "bg-service-consulting",
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="section-label bg-yellow-50 text-service-gdpr mx-auto mb-4">⭐ Recensioni</div>
          <h2 className="font-display text-h2-mobile md:text-h2 text-foreground">Cosa dicono i clienti</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 bg-background rounded-2xl border shadow-card"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-secondary fill-secondary" />
                ))}
              </div>
              <p className="text-base text-foreground italic leading-relaxed mb-6">"{r.text}"</p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${r.color} text-primary-foreground flex items-center justify-center font-display font-bold text-sm`}>
                  {r.initial}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{r.name}</div>
                  <div className="text-xs text-muted">{r.role}, {r.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
