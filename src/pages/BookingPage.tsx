import Header from "@/components/Header";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileFooterBar from "@/components/MobileFooterBar";
import ChatWidget from "@/components/ChatWidget";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Brain, TrendingUp, Shield, Lightbulb, Check, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const consultationTypes = [
  { icon: Brain, label: "Strategia AI", desc: "Piano AI personalizzato" },
  { icon: TrendingUp, label: "Marketing AI", desc: "Campagne potenziate dall'AI" },
  { icon: Shield, label: "Sicurezza & GDPR", desc: "Protezione dati e compliance" },
  { icon: Lightbulb, label: "Consulenza Generale", desc: "Digitalizzazione e crescita" },
];

const timeSlots = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30"];

const BookingPage = () => {
  const [step, setStep] = useState(0);
  const [selectedType, setSelectedType] = useState<number | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const steps = ["Tipo consulenza", "Data e ora", "I tuoi dati", "Conferma"];

  return (
    <div className="pb-mobile-bar">
      
      <Header />
      <main className="py-16 md:py-24">
        <div className="container max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
            <h1 className="font-display text-h2-mobile md:text-h2 text-foreground mb-3">Prenota la tua consulenza gratuita</h1>
            <p className="text-muted">30 minuti · Nessun impegno · 100% gratuita</p>
          </motion.div>

          {/* Progress Bar */}
          <div className="mb-10">
            <div className="flex justify-between text-xs font-medium text-muted mb-2">
              {steps.map((s, i) => (
                <span key={s} className={i <= step ? "text-primary" : ""}>{s}</span>
              ))}
            </div>
            <div className="h-1.5 bg-surface-dim rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary rounded-full"
                animate={{ width: `${((step + 1) / steps.length) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div key="step0" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }}>
                <h2 className="font-display text-h3 text-foreground mb-6">Di cosa hai bisogno?</h2>
                <div className="grid grid-cols-2 gap-4">
                  {consultationTypes.map((type, i) => (
                    <button
                      key={type.label}
                      onClick={() => setSelectedType(i)}
                      className={`p-5 rounded-2xl border text-left transition-all ${
                        selectedType === i ? "border-primary bg-primary-50 ring-2 ring-primary/20" : "hover:border-primary/30"
                      }`}
                    >
                      <type.icon className={`w-6 h-6 mb-3 ${selectedType === i ? "text-primary" : "text-muted"}`} />
                      <div className="font-display text-sm font-semibold text-foreground">{type.label}</div>
                      <div className="text-xs text-muted">{type.desc}</div>
                    </button>
                  ))}
                </div>
                <div className="mt-8 flex justify-end">
                  <Button onClick={() => setStep(1)} disabled={selectedType === null} className="rounded-full px-8 gap-2">
                    Continua <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }}>
                <h2 className="font-display text-h3 text-foreground mb-6">Scegli data e ora</h2>
                {/* // TODO: collegare a Google Calendar API */}
                <div className="bg-surface-dim rounded-2xl border p-6 mb-6">
                  <p className="text-sm text-muted text-center mb-4">📅 Seleziona una data dal calendario</p>
                  <div className="grid grid-cols-7 gap-2 text-center text-xs">
                    {["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"].map((d) => (
                      <div key={d} className="font-semibold text-muted py-1">{d}</div>
                    ))}
                    {Array.from({ length: 28 }, (_, i) => i + 1).map((day) => (
                      <button key={day} className={`py-2 rounded-lg transition-colors ${
                        day === 15 ? "bg-primary text-primary-foreground" : [6, 7, 13, 14, 20, 21, 27, 28].includes(day) ? "text-muted/40" : "hover:bg-primary-50 text-foreground"
                      }`}>
                        {day}
                      </button>
                    ))}
                  </div>
                </div>
                <h3 className="font-display text-sm font-semibold text-foreground mb-3">Orari disponibili</h3>
                <div className="grid grid-cols-4 gap-2 mb-8">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      onClick={() => setSelectedSlot(slot)}
                      className={`py-2.5 rounded-xl border text-sm font-medium transition-all ${
                        selectedSlot === slot ? "border-primary bg-primary-50 text-primary" : "hover:border-primary/30 text-foreground"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
                <div className="flex justify-between">
                  <Button variant="ghost" onClick={() => setStep(0)} className="gap-2"><ArrowLeft className="w-4 h-4" /> Indietro</Button>
                  <Button onClick={() => setStep(2)} disabled={!selectedSlot} className="rounded-full px-8 gap-2">Continua <ArrowRight className="w-4 h-4" /></Button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }}>
                <h2 className="font-display text-h3 text-foreground mb-6">I tuoi dati</h2>
                {/* // TODO: collegare a API route */}
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div><label className="text-xs font-medium text-foreground mb-1.5 block">Nome *</label><Input placeholder="Il tuo nome" /></div>
                    <div><label className="text-xs font-medium text-foreground mb-1.5 block">Cognome *</label><Input placeholder="Il tuo cognome" /></div>
                  </div>
                  <div><label className="text-xs font-medium text-foreground mb-1.5 block">Email *</label><Input type="email" placeholder="email@azienda.it" /></div>
                  <div><label className="text-xs font-medium text-foreground mb-1.5 block">Telefono</label><Input type="tel" placeholder="+39 ..." /></div>
                  <div><label className="text-xs font-medium text-foreground mb-1.5 block">Azienda</label><Input placeholder="Nome azienda" /></div>
                  <div><label className="text-xs font-medium text-foreground mb-1.5 block">Come posso aiutarti?</label><Textarea placeholder="Descrivi brevemente le tue esigenze..." rows={3} /></div>
                </div>
                <div className="flex justify-between mt-8">
                  <Button variant="ghost" onClick={() => setStep(1)} className="gap-2"><ArrowLeft className="w-4 h-4" /> Indietro</Button>
                  <Button onClick={() => setStep(3)} className="rounded-full px-8 gap-2">Conferma <ArrowRight className="w-4 h-4" /></Button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                  className="w-20 h-20 rounded-full bg-service-web/10 flex items-center justify-center mx-auto mb-6"
                >
                  <Check className="w-10 h-10 text-service-web" />
                </motion.div>
                <h2 className="font-display text-h2-mobile md:text-h2 text-foreground mb-3">Prenotazione confermata! 🎉</h2>
                <p className="text-muted mb-6">
                  Riceverai un'email di conferma con il link per la videochiamata su Google Meet.
                </p>
                <div className="bg-surface-dim rounded-2xl border p-6 inline-block text-left">
                  <div className="space-y-2 text-sm">
                    <div><span className="text-muted">Tipo:</span> <span className="font-medium text-foreground">{selectedType !== null ? consultationTypes[selectedType].label : ""}</span></div>
                    <div><span className="text-muted">Data:</span> <span className="font-medium text-foreground">15 Marzo 2025</span></div>
                    <div><span className="text-muted">Ora:</span> <span className="font-medium text-foreground">{selectedSlot}</span></div>
                    <div><span className="text-muted">Durata:</span> <span className="font-medium text-foreground">30 minuti</span></div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
      <Footer />
      <MobileFooterBar />
      <ChatWidget />
    </div>
  );
};

export default BookingPage;
