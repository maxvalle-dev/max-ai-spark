import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookie-consent");
    if (!accepted) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = (value: string) => {
    localStorage.setItem("cookie-consent", value);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-[60] md:bottom-0 max-md:bottom-[60px] bg-background border-t shadow-float p-4 md:p-6"
        >
          <div className="container flex flex-col md:flex-row items-start md:items-center gap-4">
            <p className="text-sm text-muted flex-1">
              Utilizziamo cookie tecnici e, con il tuo consenso, cookie di profilazione per migliorare la tua esperienza.{" "}
              <a href="/cookie-policy" className="text-primary underline underline-offset-2">Maggiori info</a>
            </p>
            <div className="flex gap-3 shrink-0">
              <Button variant="ghost" size="sm" onClick={() => accept("rejected")} className="text-muted">
                Rifiuta
              </Button>
              <Button variant="outline" size="sm" onClick={() => accept("custom")}>
                Personalizza
              </Button>
              <Button size="sm" onClick={() => accept("accepted")}>
                Accetta tutto
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
