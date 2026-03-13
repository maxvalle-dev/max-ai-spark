import { motion } from "framer-motion";

const clients = [
  "Banca di Asti",
  "Politecnico di Milano",
  "UnipolSai",
  "Istituto Marangoni",
  "Abbvie",
  "Bananas Agency",
];

const ClientsSection = () => {
  return (
    <section className="py-12 border-y bg-surface-dim">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-label-caps text-muted mb-6 tracking-widest">ALCUNI CLIENTI CHE HO SEGUITO</p>
          <div className="flex flex-wrap justify-center gap-3">
            {clients.map((client) => (
              <span
                key={client}
                className="px-5 py-2.5 bg-background rounded-full text-sm font-medium text-muted border"
              >
                {client}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
