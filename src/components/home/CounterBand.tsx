import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  { value: 33, suffix: "+", label: "Anni di esperienza" },
  { value: 2500, suffix: "+", label: "Aziende seguite" },
  { value: 5000, suffix: "+", label: "Ore di consulenza" },
  { value: 500, suffix: "+", label: "Ore di formazione" },
];

const CountUp = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const steps = 40;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString("it-IT")}{suffix}
    </span>
  );
};

const CounterBand = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-primary-light py-14" aria-label="Statistiche">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-display text-4xl md:text-5xl font-extrabold text-primary-foreground mb-1">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-primary-foreground/70">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterBand;
