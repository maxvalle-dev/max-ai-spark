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


const certifications = [
  { icon: Award, title: "Consulente IA e Digital Marketing", desc: "Consulente Intelligenza Artificiale e di digital marketing" },
  { icon: Shield, title: "CPEH n°4053103", desc: "Certified Professional Ethical Hacker" },
  { icon: Award, title: "IWA n°0312827", desc: "International Web Association" },
  { icon: Shield, title: "Federprivacy n°FP-9572", desc: "Membro Federprivacy" },
  { icon: Scale, title: "AIP n°3241", desc: "Associazione Informatici Professionisti" },
  { icon: Scale, title: "CTU Tribunale", desc: "Consulente Tecnico d'Ufficio — Tribunale di Lodi" },
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
                <li key={item} className="flex items-start gap-3 text-base">
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
              <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-muted mb-4">🏅 Credenziali</h4>
              <div className="space-y-3">
                {certifications.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex items-center gap-4 p-4 bg-surface-dim rounded-xl border">
                    <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-display text-base font-semibold text-foreground">{title}</div>
                      <div className="text-sm text-muted">{desc}</div>
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
