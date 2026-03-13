import Header from "@/components/Header";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileFooterBar from "@/components/MobileFooterBar";
import ChatWidget from "@/components/ChatWidget";
import { motion } from "framer-motion";
import { Brain, TrendingUp, Bot, Target, BarChart3, Zap, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const features = [
  { icon: Brain, title: "Analisi AI Personalizzata", desc: "Mappiamo i tuoi processi e identifichiamo dove l'AI può avere il massimo impatto." },
  { icon: TrendingUp, title: "Implementazione Guidata", desc: "Ti accompagniamo passo dopo passo nell'adozione delle soluzioni AI." },
  { icon: Bot, title: "Automazione Intelligente", desc: "Agenti AI che lavorano per te, 24/7, senza errori." },
  { icon: Target, title: "ROI Misurabile", desc: "KPI chiari e misurabili per ogni soluzione implementata." },
  { icon: BarChart3, title: "Report & Analytics", desc: "Dashboard personalizzate per monitorare le performance AI." },
  { icon: Zap, title: "Supporto Continuo", desc: "Assistenza post-implementazione e aggiornamenti costanti." },
];

const steps = [
  { num: "01", title: "Analisi", desc: "Analizziamo il tuo business, i processi e gli obiettivi per identificare le opportunità AI." },
  { num: "02", title: "Strategia", desc: "Creiamo un piano d'azione personalizzato con priorità, timeline e ROI atteso." },
  { num: "03", title: "Implementazione", desc: "Implementiamo le soluzioni AI con il tuo team, formando il personale lungo il percorso." },
  { num: "04", title: "Ottimizzazione", desc: "Monitoriamo i risultati e ottimizziamo continuamente per massimizzare il rendimento." },
];

const plans = [
  { name: "Starter", price: "€ 497", period: "/mese", features: ["1 processo automatizzato", "Report mensile", "Supporto email", "1 agente AI"], cta: "Inizia ora", popular: false },
  { name: "Business", price: "€ 997", period: "/mese", features: ["5 processi automatizzati", "Report settimanale", "Supporto prioritario", "5 agenti AI", "Formazione team"], cta: "Più popolare", popular: true },
  { name: "Enterprise", price: "Custom", period: "", features: ["Processi illimitati", "Report real-time", "Account manager dedicato", "Agenti AI illimitati", "Formazione avanzata", "SLA garantito"], cta: "Contattaci", popular: false },
];

const faqs = [
  { q: "Quanto tempo serve per implementare una soluzione AI?", a: "Dipende dalla complessità, ma generalmente tra 2 e 8 settimane per le prime soluzioni operative." },
  { q: "È necessario avere competenze tecniche?", a: "No, ci occupiamo noi di tutta la parte tecnica. Il tuo team viene formato per l'uso quotidiano." },
  { q: "Quali risultati posso aspettarmi?", a: "I nostri clienti vedono mediamente un aumento del 40% della produttività e una riduzione del 30% dei costi operativi nei primi 6 mesi." },
  { q: "Posso iniziare con una prova?", a: "Sì, offriamo una consulenza gratuita di 30 minuti per valutare insieme le opportunità per la tua azienda." },
];

const ServicePage = () => {
  return (
    <div className="pb-mobile-bar">
      <TopBar />
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary to-[#0D47A1] py-20 md:py-28">
          <div className="container text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="font-display text-h1-mobile md:text-h1 text-primary-foreground mb-4">Strategia AI su Misura</h1>
              <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-8">
                Analizziamo il tuo business e creiamo un piano AI personalizzato per massimizzare produttività, ridurre costi e conquistare nuovi clienti.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="rounded-full px-8 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
                  <a href="/prenota">Prenota Consulenza Gratuita</a>
                </Button>
                <Button asChild size="lg" className="rounded-full px-8 bg-white text-primary hover:bg-white/90 font-semibold">
                  <a href="#pricing">Vedi i piani</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="text-center mb-14">
              <h2 className="font-display text-h2-mobile md:text-h2 text-foreground mb-3">Cosa include il servizio</h2>
              <p className="text-muted max-w-xl mx-auto">Un approccio completo per portare l'AI nella tua azienda, dalla strategia all'implementazione.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="p-6 bg-background rounded-2xl border">
                  <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary flex items-center justify-center mb-4">
                    <f.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-h3 text-foreground mb-2">{f.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="py-20 md:py-28 bg-surface-dim">
          <div className="container">
            <div className="text-center mb-14">
              <h2 className="font-display text-h2-mobile md:text-h2 text-foreground mb-3">Come funziona</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, i) => (
                <motion.div key={step.num} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <div className="font-display text-5xl font-extrabold text-primary/30 mb-2">{step.num}</div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{step.desc}</p>
                  {i < steps.length - 1 && <ArrowRight className="hidden lg:block w-5 h-5 text-primary/30 mt-4 ml-auto" />}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-20 md:py-28">
          <div className="container">
            <div className="text-center mb-14">
              <h2 className="font-display text-h2-mobile md:text-h2 text-foreground mb-3">Piani e prezzi</h2>
              <p className="text-muted">Scegli il piano più adatto alle esigenze della tua azienda.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {plans.map((plan) => (
                <div key={plan.name} className={`p-6 rounded-2xl border ${plan.popular ? "border-primary shadow-float ring-2 ring-primary/20 relative" : "bg-background"}`}>
                  {plan.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">Più popolare</span>}
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="font-display text-3xl font-extrabold text-foreground">{plan.price}</span>
                    <span className="text-sm text-muted">{plan.period}</span>
                  </div>
                  <ul className="space-y-2.5 mb-6">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted">
                        <Check className="w-4 h-4 text-primary shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                  {/* // TODO: sostituire con URL WHMCS reale */}
                  <Button asChild className={`w-full rounded-full ${plan.popular ? "" : "bg-surface-dim text-foreground hover:bg-primary hover:text-primary-foreground"}`}>
                    <a href="#">{plan.cta}</a>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container max-w-2xl">
            <div className="text-center mb-14">
              <h2 className="font-display text-h2-mobile md:text-h2 text-foreground">Domande frequenti</h2>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="bg-background rounded-xl border px-5">
                  <AccordionTrigger className="text-sm font-semibold text-foreground hover:no-underline">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
      <Footer />
      <MobileFooterBar />
      <ChatWidget />
    </div>
  );
};

export default ServicePage;
