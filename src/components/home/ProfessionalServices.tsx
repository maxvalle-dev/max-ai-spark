import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  { emoji: "💼", title: "Consulenza Aziendale", desc: "Strategie digitali e di business per PMI e grandi aziende.", color: "text-service-consulting", bg: "bg-purple-50" },
  { emoji: "📣", title: "Digital Marketing", desc: "SEO, SEM, social media marketing e campagne digitali.", color: "text-service-marketing", bg: "bg-red-50" },
  { emoji: "🌐", title: "Siti Web", desc: "Sviluppo siti web professionali, e-commerce e web app.", color: "text-service-web", bg: "bg-green-50" },
  { emoji: "🔒", title: "Compliance GDPR", desc: "Adeguamento privacy, DPO esterno e consulenza GDPR.", color: "text-service-gdpr", bg: "bg-yellow-50" },
  { emoji: "☁️", title: "Cloud & Hosting", desc: "Soluzioni cloud, hosting gestito e infrastruttura IT.", color: "text-service-cloud", bg: "bg-blue-50" },
  { emoji: "™️", title: "Marchio Registrato", desc: "Registrazione marchi nazionali, europei e internazionali.", color: "text-service-consulting", bg: "bg-purple-50" },
  { emoji: "🛡️", title: "Sicurezza Informatica", desc: "Penetration test, vulnerability assessment e protezione dati.", color: "text-service-security", bg: "bg-red-50" },
  { emoji: "🎓", title: "Formazione", desc: "Corsi AI, marketing digitale e sicurezza per aziende.", color: "text-service-training", bg: "bg-teal-50" },
  { emoji: "💰", title: "Finanza Agevolata", desc: "Bandi, contributi e credito d'imposta per innovazione.", color: "text-service-finance", bg: "bg-orange-50" },
];

const ProfessionalServices = () => {
  return (
    <section className="py-20 md:py-28 bg-surface-dim">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="section-label bg-secondary-50 text-secondary mx-auto mb-4">💼 Servizi Professionali</div>
          <h2 className="font-display text-h2-mobile md:text-h2 text-foreground mb-3">La competenza completa per la tua crescita</h2>
          <p className="text-muted max-w-xl mx-auto">Oltre all'AI, un ecosistema completo di servizi per digitalizzare e proteggere il tuo business.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.a
              key={s.title}
              href="/servizi"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-start gap-4 p-5 bg-background rounded-2xl border hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className={`w-11 h-11 rounded-xl ${s.bg} flex items-center justify-center text-xl shrink-0`}>
                {s.emoji}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-base font-semibold text-foreground mb-1">{s.title}</h3>
                <p className="text-sm text-muted leading-relaxed mb-2">{s.desc}</p>
                <span className={`inline-flex items-center gap-1 text-xs font-semibold ${s.color} group-hover:gap-2 transition-all`}>
                  Scopri <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalServices;
