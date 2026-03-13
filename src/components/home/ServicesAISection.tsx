import { motion } from "framer-motion";
import { Brain, TrendingUp, Bot, PenTool, Search, Mic, ArrowRight } from "lucide-react";

const services = [
  { icon: Brain, title: "Strategia AI su Misura", desc: "Analisi del tuo business e creazione di un piano AI personalizzato per massimizzare il ROI.", color: "text-service-ai", bg: "bg-primary-50", badge: "Più richiesto" },
  { icon: TrendingUp, title: "Marketing Potenziato dall'AI", desc: "Campagne marketing automatizzate e ottimizzate dall'intelligenza artificiale.", color: "text-service-marketing", bg: "bg-red-50", badge: null },
  { icon: Bot, title: "Creazione Agenti AI", desc: "Agenti intelligenti che lavorano per te: customer service, vendita, analisi dati.", color: "text-service-web", bg: "bg-green-50", badge: "Nuovo" },
  { icon: PenTool, title: "AI Generativa per Contenuti", desc: "Produzione di contenuti di qualità con AI generativa per blog, social e marketing.", color: "text-service-consulting", bg: "bg-purple-50", badge: null },
  { icon: Search, title: "SEO per AI", desc: "Ottimizzazione per i nuovi motori AI: ChatGPT, Perplexity, Google SGE.", color: "text-service-training", bg: "bg-teal-50", badge: "Nuovo" },
  { icon: Mic, title: "Assistenti Vocali Business", desc: "Assistenti vocali AI per il tuo business: IVR intelligenti, receptionist virtuali.", color: "text-secondary", bg: "bg-secondary-50", badge: null },
];

const ServicesAISection = () => {
  return (
    <section className="py-20 md:py-28 bg-surface-dim">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="section-label bg-primary-50 text-primary mx-auto mb-4">🤖 Intelligenza Artificiale</div>
          <h2 className="font-display text-h2-mobile md:text-h2 text-foreground mb-3">Servizi AI per la tua azienda</h2>
          <p className="text-muted max-w-xl mx-auto">Soluzioni di intelligenza artificiale concrete e misurabili per far crescere il tuo business.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card-service group relative"
            >
              {s.badge && (
                <span className={`absolute top-4 right-4 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                  s.badge === "Nuovo" ? "bg-green-50 text-service-web" : "bg-secondary-50 text-secondary"
                }`}>
                  {s.badge}
                </span>
              )}
              <div className={`w-12 h-12 rounded-2xl ${s.bg} ${s.color} flex items-center justify-center mb-4`}>
                <s.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-h3 text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted leading-relaxed mb-4">{s.desc}</p>
              <a href="/servizi-ai" className={`inline-flex items-center gap-1.5 text-sm font-semibold ${s.color} group-hover:gap-3 transition-all`}>
                Scopri <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesAISection;
