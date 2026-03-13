import { Phone, MessageCircle, Mail, Menu } from "lucide-react";

const actions = [
  { icon: Phone, label: "Chiama", href: "tel:+390287158054", external: true },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/393351444135", external: true },
  { icon: Mail, label: "Contatti", href: "/contatti", external: false },
  { icon: Menu, label: "Menu", href: "#", external: false },
];

const MobileFooterBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background border-t border-border shadow-float">
      <div className="flex items-center justify-around h-[60px]">
        {actions.map(({ icon: Icon, label, href }) => (
          <a
            key={label}
            href={href}
            className="flex flex-col items-center gap-0.5 text-primary hover:text-primary/80 transition-colors"
            aria-label={label}
          >
            <Icon className="w-5 h-5" />
            <span className="text-[10px] font-medium">{label}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MobileFooterBar;
