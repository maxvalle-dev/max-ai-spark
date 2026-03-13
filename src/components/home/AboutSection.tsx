import { motion } from "framer-motion";
import { CheckCircle2, Shield, Scale, Award } from "lucide-react";

const checkItems = [
  "Imprenditore da 33 anni",
  "Oltre 2.500 realtà italiane ed estere seguite",
  "Business AI Strategist e consulente IA per PMI",
  "Specialista in AI Marketing e automazione",
  "CPEH — Certified Professional Ethical Hacker",
  "Consulente Tecnico d'Ufficio — Tribunale di Lodi",
  "Consulente Privacy & Data Security GDPR",
  "Autore di 5 libri sul digitale",
];

const books = [
  { title: "Genitori e Internet®", color: "bg-primary-50 text-primary border-primary/20" },
  { title: "Siti da Incubo®", color: "bg-red-50 text-service-marketing border-red-200" },
  { title: "Web Marketing: il Manuale", color: "bg-green-50 text-service-web border-green-200" },
  { title: "Email Marketing", color: "bg-yellow-50 text-service-gdpr border-yellow-200" },
  { title: "Formula Infoprodotto", color: "bg-purple-50 text-service-consulting border-purple-200" },
];

const certifications = [
  { icon: Shield, title: "CPEH", desc: "Certified Professional Ethical Hacker" },
  { icon: Scale, title: "FederPrivacy", desc: "Consulente Privacy certificato" },
  { icon: Award, title: "CTU Tribunale", desc: "Consulente Tecnico d'Ufficio" },
];

const AboutSection = () => {
  return (
    <section id="chi-sono" className="py-20 md:py-28">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-label bg-green-50 text-service-web mb-4">👤 Chi sono</div>
            <h2 className="font-display text-h2-mobile md:text-h2 text-foreground mb-4">Un imprenditore come te, dal 1993</h2>
            <p className="text-muted leading-relaxed mb-8">
              Non sono un teorico: sono un imprenditore che vive ogni giorno le stesse sfide delle PMI italiane. 
              Da oltre trent'anni aiuto aziende a crescere con il digitale, e oggi con l'intelligenza artificiale.
            </p>
            <ul className="space-y-3">
              {checkItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-muted mb-4">📚 I miei libri</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {books.map((book) => (
                  <div key={book.title} className={`${book.color} border rounded-xl p-4 text-center`}>
                    <div className="text-2xl mb-2">📘</div>
                    <div className="text-xs font-semibold leading-tight">{book.title}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-muted mb-4">🏅 Certificazioni</h4>
              <div className="space-y-3">
                {certifications.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex items-center gap-4 p-4 bg-surface-dim rounded-xl border">
                    <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-display text-sm font-semibold text-foreground">{title}</div>
                      <div className="text-xs text-muted">{desc}</div>
                    </div>
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

export default AboutSection;
