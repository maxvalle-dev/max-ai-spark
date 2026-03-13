import { ArrowRight } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-primary text-primary-foreground text-center py-2.5 px-4 text-sm font-medium" role="banner">
      <a href="#booking" className="inline-flex items-center gap-2 hover:opacity-90 transition-opacity">
        🤖 Consulenza AI gratuita 30 minuti —{" "}
        <span className="underline underline-offset-2 inline-flex items-center gap-1">
          Prenota ora <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </a>
    </div>
  );
};

export default TopBar;
