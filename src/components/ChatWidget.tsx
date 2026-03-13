import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages] = useState([
    { role: "bot" as const, text: "Ciao! 👋 Sono l'assistente virtuale di MaxValle. Come posso aiutarti?" },
  ]);

  return (
    <div className="fixed bottom-6 right-6 z-40 md:bottom-6 max-md:bottom-20">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute bottom-16 right-0 w-[340px] bg-background rounded-2xl shadow-float border overflow-hidden"
          >
            <div className="bg-gradient-to-r from-primary to-primary-light p-4 text-primary-foreground">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary-foreground/20 flex items-center justify-center text-lg">
                  🤖
                </div>
                <div>
                  <div className="font-display font-semibold text-sm">Assistente MaxValle AI</div>
                  <div className="text-xs text-primary-foreground/70">Powered by Claude</div>
                </div>
              </div>
            </div>
            <div className="h-[280px] overflow-y-auto p-4 space-y-3">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "bot" ? "justify-start" : "justify-end"}`}>
                  <div
                    className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "bot"
                        ? "bg-surface-dim text-foreground rounded-bl-md"
                        : "bg-primary text-primary-foreground rounded-br-md"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-3 border-t">
              <div className="flex gap-2">
                <label htmlFor="chat-input" className="sr-only">Scrivi un messaggio</label>
                <input
                  id="chat-input"
                  type="text"
                  placeholder="Scrivi un messaggio..."
                  className="flex-1 text-sm px-4 py-2.5 rounded-full border bg-surface-dim focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
                <button className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary-light transition-colors" aria-label="Invia messaggio">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary-light text-primary-foreground shadow-float flex items-center justify-center"
        aria-label={open ? "Chiudi chat" : "Apri chat"}
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>
    </div>
  );
};

export default ChatWidget;
