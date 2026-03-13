import { motion } from "framer-motion";
import bancaAsti from "@/assets/clients/banca-di-asti.png";
import politecnico from "@/assets/clients/politecnico-milano.png";
import unipolsai from "@/assets/clients/unipolsai.png";
import marangoni from "@/assets/clients/istituto-marangoni.png";
import abbvie from "@/assets/clients/abbvie.png";
import bananas from "@/assets/clients/bananas-agency.png";

const clients = [
  { name: "Banca di Asti", logo: bancaAsti },
  { name: "Politecnico di Milano", logo: politecnico },
  { name: "UnipolSai", logo: unipolsai },
  { name: "Istituto Marangoni", logo: marangoni },
  { name: "Abbvie", logo: abbvie },
  { name: "Bananas Agency", logo: bananas },
];

const ClientsSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="section-label bg-primary-50 text-primary mx-auto mb-4 w-fit">
            🤝 Clienti
          </div>
          <h2 className="font-display text-h2-mobile md:text-h2 mb-4">
            Alcuni clienti che <span className="text-gradient-hero">ho seguito</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Aziende, istituzioni e brand che hanno scelto la mia consulenza per crescere nel digitale.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 md:gap-8 items-center">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center justify-center p-6 bg-background rounded-2xl border shadow-sm hover:shadow-card transition-shadow duration-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-20 md:h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
