import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileFooterBar from "@/components/MobileFooterBar";
import ChatWidget from "@/components/ChatWidget";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, User, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogArticle = () => {
  return (
    <div className="pb-mobile-bar">
      <TopBar />
      <Header />
      <main className="py-12 md:py-20">
        <div className="container">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12">
            {/* Main Content */}
            <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <nav className="text-sm text-muted mb-6">
                <a href="/" className="hover:text-primary">Home</a> {" > "}
                <a href="/blog" className="hover:text-primary">Blog</a> {" > "}
                <span className="text-primary">AI</span> {" > "}
                <span className="text-foreground">Come usare ChatGPT</span>
              </nav>

              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary-50 text-primary mb-4">AI</span>
              <h1 className="font-display text-h2-mobile md:text-[2.5rem] font-extrabold text-foreground leading-tight mb-4" style={{ letterSpacing: '-0.03em' }}>
                Come usare ChatGPT per la tua azienda: guida completa 2025
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted mb-8">
                <span className="flex items-center gap-1.5"><User className="w-4 h-4" /> Max Valle</span>
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 8 min lettura</span>
                <span>12 Marzo 2025</span>
                <button className="flex items-center gap-1.5 hover:text-primary transition-colors" aria-label="Condividi"><Share2 className="w-4 h-4" /> Condividi</button>
              </div>

              <div className="h-64 md:h-80 bg-surface-dim rounded-2xl flex items-center justify-center text-8xl mb-10">🤖</div>

              {/* Table of Contents */}
              <div className="bg-surface-dim border-l-4 border-primary rounded-lg p-5 mb-10">
                <h3 className="font-display text-sm font-semibold text-foreground mb-3">Indice dei contenuti</h3>
                <ul className="space-y-2 text-sm">
                  {["Introduzione all'AI per le aziende", "Cosa può fare ChatGPT per te", "Casi d'uso reali", "Come iniziare", "Errori da evitare", "Conclusioni"].map((item, i) => (
                    <li key={i}><a href="#" className="text-muted hover:text-primary transition-colors">{i + 1}. {item}</a></li>
                  ))}
                </ul>
              </div>

              {/* Article Body */}
              <div className="prose prose-lg max-w-none">
                <h2 className="font-display text-h3 text-foreground mt-10 mb-4">1. Introduzione all'AI per le aziende</h2>
                <p className="text-muted leading-relaxed mb-6">
                  L'intelligenza artificiale sta rivoluzionando il modo in cui le aziende operano. ChatGPT, in particolare, offre opportunità straordinarie per automatizzare processi, migliorare la comunicazione e ridurre i costi operativi.
                </p>
                <p className="text-muted leading-relaxed mb-6">
                  In questa guida completa, esploreremo come la tua azienda può sfruttare al massimo le potenzialità di ChatGPT e dell'AI generativa, con esempi concreti e strategie immediatamente applicabili.
                </p>

                {/* Promo Block */}
                <div className="border-l-4 border-secondary bg-secondary-50 rounded-lg p-6 my-10">
                  <span className="inline-block px-2.5 py-1 rounded text-xs font-bold bg-secondary text-secondary-foreground mb-2">🔥 OFFERTA</span>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">Consulenza AI gratuita per la tua azienda</h3>
                  <p className="text-sm text-muted mb-4">Prenota 30 minuti con Max Valle per scoprire come implementare l'AI nella tua azienda. Senza impegno.</p>
                  <Button asChild size="sm" className="rounded-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                    <a href="/prenota">Prenota ora →</a>
                  </Button>
                </div>

                <h2 className="font-display text-h3 text-foreground mt-10 mb-4">2. Cosa può fare ChatGPT per te</h2>
                <p className="text-muted leading-relaxed mb-6">
                  ChatGPT può essere utilizzato in molteplici ambiti aziendali: dal customer service automatizzato alla generazione di contenuti marketing, dalla analisi dei dati all'assistenza nella programmazione e nello sviluppo software.
                </p>
              </div>

              <div className="mt-12">
                <a href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
                  <ArrowLeft className="w-4 h-4" /> Torna al blog
                </a>
              </div>
            </motion.article>

            {/* Sidebar */}
            <aside className="hidden lg:block space-y-6">
              <div className="sticky top-24 space-y-6">
                {/* Author Card */}
                <div className="bg-background rounded-2xl border p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-2xl">👨‍💼</div>
                    <div>
                      <div className="font-display text-sm font-bold text-foreground">Max Valle</div>
                      <div className="text-xs text-muted">Business AI Strategist</div>
                    </div>
                  </div>
                  <p className="text-xs text-muted leading-relaxed">33 anni di esperienza nel digitale. Aiuto le PMI italiane a crescere con AI e tecnologia.</p>
                </div>

                {/* Newsletter */}
                <div className="bg-primary-50 rounded-2xl p-5 border border-primary/10">
                  <h4 className="font-display text-sm font-semibold text-foreground mb-2">📧 Newsletter</h4>
                  <p className="text-xs text-muted mb-3">Ricevi ogni settimana strategie AI e business nella tua casella email.</p>
                  <input type="email" placeholder="La tua email" className="w-full px-4 py-2.5 rounded-lg border bg-background text-sm mb-2 focus:outline-none focus:ring-2 focus:ring-primary/30" />
                  <Button className="w-full rounded-lg text-sm">Iscriviti</Button>
                </div>

                {/* Latest Articles */}
                <div className="bg-background rounded-2xl border p-5">
                  <h4 className="font-display text-sm font-semibold text-foreground mb-4">Ultimi articoli</h4>
                  <ul className="space-y-3">
                    {["SEO per AI: ottimizza per i motori AI", "5 strategie di AI Marketing per PMI", "GDPR e Intelligenza Artificiale"].map((title) => (
                      <li key={title}>
                        <a href="/blog/articolo" className="text-xs text-muted hover:text-primary transition-colors leading-relaxed">{title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
      <MobileFooterBar />
      <ChatWidget />
    </div>
  );
};

export default BlogArticle;
