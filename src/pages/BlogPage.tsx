import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileFooterBar from "@/components/MobileFooterBar";
import ChatWidget from "@/components/ChatWidget";
import { motion } from "framer-motion";

const posts = [
  { emoji: "🤖", title: "Come usare ChatGPT per la tua azienda: guida completa 2025", category: "AI", categoryColor: "bg-primary-50 text-primary", date: "12 Mar 2025", readTime: "8 min", excerpt: "Scopri come integrare ChatGPT nei processi aziendali per aumentare produttività e ridurre i costi operativi." },
  { emoji: "📈", title: "SEO per AI: come ottimizzare per i motori di ricerca AI", category: "SEO", categoryColor: "bg-green-50 text-service-web", date: "8 Mar 2025", readTime: "6 min", excerpt: "I motori di ricerca stanno cambiando. Ecco come preparare il tuo sito per ChatGPT, Perplexity e Google SGE." },
  { emoji: "💡", title: "5 strategie di AI Marketing per le PMI italiane", category: "Marketing", categoryColor: "bg-red-50 text-service-marketing", date: "3 Mar 2025", readTime: "10 min", excerpt: "Le migliori strategie di marketing potenziato dall'AI che stanno rivoluzionando le piccole e medie imprese." },
  { emoji: "🔒", title: "GDPR e Intelligenza Artificiale: cosa devi sapere", category: "GDPR", categoryColor: "bg-yellow-50 text-service-gdpr", date: "28 Feb 2025", readTime: "7 min", excerpt: "Come usare l'AI rispettando la normativa privacy europea: guida pratica per imprenditori." },
  { emoji: "🎯", title: "Agenti AI: il futuro dell'automazione aziendale", category: "AI", categoryColor: "bg-primary-50 text-primary", date: "22 Feb 2025", readTime: "9 min", excerpt: "Gli agenti AI stanno ridefinendo il modo in cui le aziende operano. Ecco cosa sono e come implementarli." },
  { emoji: "☁️", title: "Cloud computing per PMI: guida alla migrazione", category: "Cloud", categoryColor: "bg-blue-50 text-service-cloud", date: "15 Feb 2025", readTime: "12 min", excerpt: "Tutto quello che devi sapere per migrare la tua azienda al cloud in sicurezza." },
];

const BlogPage = () => {
  return (
    <div className="pb-mobile-bar">
      <TopBar />
      <Header />
      <main className="py-16 md:py-24">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
            <div className="section-label bg-primary-50 text-primary mx-auto mb-4">📝 Blog</div>
            <h1 className="font-display text-h1-mobile md:text-h1 text-foreground mb-3">Blog & Risorse</h1>
            <p className="text-muted max-w-xl mx-auto">1.300+ articoli su AI, SEO, marketing digitale e business.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <motion.a
                key={post.title}
                href="/blog/articolo"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="group bg-background rounded-2xl border overflow-hidden hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-44 bg-surface-dim flex items-center justify-center text-6xl">{post.emoji}</div>
                <div className="p-5">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${post.categoryColor} mb-3`}>{post.category}</span>
                  <h2 className="font-display text-base font-semibold text-foreground leading-snug mb-2 group-hover:text-primary transition-colors">{post.title}</h2>
                  <p className="text-xs text-muted leading-relaxed mb-3">{post.excerpt}</p>
                  <div className="text-xs text-muted">{post.date} · {post.readTime} lettura</div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <MobileFooterBar />
      <ChatWidget />
    </div>
  );
};

export default BlogPage;
