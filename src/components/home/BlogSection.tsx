import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const blogPosts = [
  { emoji: "🤖", title: "Come usare ChatGPT per la tua azienda: guida completa 2025", category: "AI", categoryColor: "bg-primary-50 text-primary", date: "12 Mar 2025", readTime: "8 min" },
  { emoji: "📈", title: "SEO per AI: come ottimizzare il tuo sito per i motori di ricerca AI", category: "SEO", categoryColor: "bg-green-50 text-service-web", date: "8 Mar 2025", readTime: "6 min" },
  { emoji: "💡", title: "5 strategie di AI Marketing che stanno rivoluzionando le PMI italiane", category: "Marketing", categoryColor: "bg-red-50 text-service-marketing", date: "3 Mar 2025", readTime: "10 min" },
];

const BlogSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="section-label bg-primary-50 text-primary mx-auto mb-4">📝 Blog & Risorse</div>
          <h2 className="font-display text-h2-mobile md:text-h2 text-foreground mb-3">1.300+ articoli su AI, SEO e business</h2>
          <p className="text-muted">Approfondimenti, guide e strategie per far crescere il tuo business.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {blogPosts.map((post, i) => (
            <motion.a
              key={post.title}
              href="/blog"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-background rounded-2xl border overflow-hidden hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-44 bg-surface-dim flex items-center justify-center text-6xl">
                {post.emoji}
              </div>
              <div className="p-5">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${post.categoryColor} mb-3`}>
                  {post.category}
                </span>
                <h3 className="font-display text-base font-semibold text-foreground leading-snug mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <div className="text-xs text-muted">
                  {post.date} · {post.readTime} lettura
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg" className="rounded-full px-8">
            <a href="/blog">Vedi tutti gli articoli →</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
