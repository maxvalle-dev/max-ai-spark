import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import genitoriImg from "@/assets/books/genitori-e-internet.jpg";
import sitiIncuboImg from "@/assets/books/siti-da-incubo.jpg";
import webMarketingImg from "@/assets/books/web-marketing.jpg";
import formulaImg from "@/assets/books/formula-infoprodotto.jpg";
import emailMarketingImg from "@/assets/books/email-marketing.jpg";

const books = [
  {
    title: "Genitori e Internet",
    image: genitoriImg,
    description: "La guida per proteggere i tuoi figli online",
  },
  {
    title: "Siti da Incubo",
    image: sitiIncuboImg,
    description: "Errori da evitare nella realizzazione del tuo sito web",
  },
  {
    title: "Web Marketing – Il Manuale",
    image: webMarketingImg,
    description: "Strategie concrete per il marketing digitale",
  },
  {
    title: "Formula Infoprodotto",
    image: formulaImg,
    description: "Come creare e vendere prodotti digitali",
  },
  {
    title: "Email Marketing",
    image: emailMarketingImg,
    description: "Tecniche efficaci per campagne email di successo",
  },
];

const BooksSection = () => {
  return (
    <section className="py-20 md:py-28 bg-surface-dim">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="section-label bg-primary-50 text-primary mx-auto mb-4 w-fit">
            <BookOpen className="w-4 h-4 inline mr-2" />
            I Miei Libri
          </div>
          <h2 className="font-display text-h2-mobile md:text-h2 mb-4">
            Pubblicazioni e <span className="text-gradient-hero">Best Seller</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Sono autore e contributore di questi libri.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8">
          {books.map((book, i) => (
            <motion.div
              key={book.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col items-center text-center"
            >
              <div className="relative mb-4 rounded-xl overflow-hidden shadow-card group-hover:shadow-float transition-shadow duration-300">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <h3 className="font-display text-sm md:text-base font-bold text-foreground leading-tight mb-1">
                {book.title}
              </h3>
              <p className="text-xs text-muted hidden md:block">{book.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BooksSection;
