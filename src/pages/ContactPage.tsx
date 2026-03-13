import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileFooterBar from "@/components/MobileFooterBar";
import ChatWidget from "@/components/ChatWidget";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Phone, label: "Telefono", value: "+39 02 8715 8054", href: "tel:+390287158054" },
  { icon: MessageCircle, label: "WhatsApp", value: "+39 335 144 4135", href: "https://wa.me/393351444135" },
  { icon: Mail, label: "Email", value: "info@maxvalle.it", href: "mailto:info@maxvalle.it" },
  { icon: MapPin, label: "Sede", value: "Milano, Italia", href: null },
];

const ContactPage = () => {
  const [gdprAccepted, setGdprAccepted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!gdprAccepted) return;
    setLoading(true);
    // TODO: collegare a API route
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Messaggio inviato!", description: "Ti risponderemo entro 24 ore." });
    }, 1500);
  };

  return (
    <div className="pb-mobile-bar">
      
      <Header />
      <main className="py-16 md:py-24">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
            <h1 className="font-display text-h1-mobile md:text-h1 text-foreground mb-3">Contattaci</h1>
            <p className="text-muted max-w-xl mx-auto">Hai un progetto o una domanda? Siamo qui per aiutarti.</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left — Info */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <div className="space-y-4 mb-10">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-4 p-4 bg-surface-dim rounded-xl border">
                    <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-muted">{label}</div>
                      {href ? (
                        <a href={href} className="text-sm font-semibold text-foreground hover:text-primary transition-colors">{value}</a>
                      ) : (
                        <div className="text-sm font-semibold text-foreground">{value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              {/* Map placeholder */}
              <div className="h-64 bg-surface-dim rounded-2xl border flex items-center justify-center text-muted text-sm">
                📍 Mappa — Milano, Italia
              </div>
            </motion.div>

            {/* Right — Form */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div><label className="text-xs font-medium text-foreground mb-1.5 block">Nome *</label><Input required placeholder="Il tuo nome" /></div>
                  <div><label className="text-xs font-medium text-foreground mb-1.5 block">Cognome *</label><Input required placeholder="Il tuo cognome" /></div>
                </div>
                <div><label className="text-xs font-medium text-foreground mb-1.5 block">Email *</label><Input required type="email" placeholder="email@azienda.it" /></div>
                <div><label className="text-xs font-medium text-foreground mb-1.5 block">Telefono</label><Input type="tel" placeholder="+39 ..." /></div>
                <div><label className="text-xs font-medium text-foreground mb-1.5 block">Azienda</label><Input placeholder="Nome azienda" /></div>
                <div>
                  <label className="text-xs font-medium text-foreground mb-1.5 block">Servizio di interesse</label>
                  <Select>
                    <SelectTrigger><SelectValue placeholder="Seleziona un servizio" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ai">Strategia AI</SelectItem>
                      <SelectItem value="marketing">Digital Marketing</SelectItem>
                      <SelectItem value="web">Siti Web</SelectItem>
                      <SelectItem value="gdpr">Compliance GDPR</SelectItem>
                      <SelectItem value="security">Sicurezza Informatica</SelectItem>
                      <SelectItem value="other">Altro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div><label className="text-xs font-medium text-foreground mb-1.5 block">Messaggio *</label><Textarea required placeholder="Descrivi le tue esigenze..." rows={4} /></div>
                <div className="flex items-start gap-3">
                  <Checkbox id="gdpr" checked={gdprAccepted} onCheckedChange={(v) => setGdprAccepted(v === true)} />
                  <label htmlFor="gdpr" className="text-xs text-muted leading-relaxed cursor-pointer">
                    Acconsento al trattamento dei miei dati personali ai sensi del GDPR. <a href="/privacy" className="text-primary underline">Privacy Policy</a>
                  </label>
                </div>
                <Button type="submit" disabled={!gdprAccepted || loading} className="w-full rounded-full py-6 text-base font-semibold">
                  {loading ? "Invio in corso..." : "Invia messaggio"}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
      <MobileFooterBar />
      <ChatWidget />
    </div>
  );
};

export default ContactPage;
