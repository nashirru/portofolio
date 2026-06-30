import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const metrics = [
  { value: 20, suffix: '+', label: 'Projects Shipped' },
  { value: 5, suffix: '+', label: 'Years Building' },
  { value: 100, suffix: '%', label: 'Client Satisfaction', prefix: '' },
  { value: 15, suffix: '+', label: 'Technologies Mastered' },
];

function AnimatedCounter({ end, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 1400;
          const steps = 50;
          const increment = end / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [end, hasAnimated]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export default function Metrics() {
  return (
    <section id="metrics" aria-label="Metrics" className="py-[80px] lg:py-[100px]">
      <div className="max-w-[1200px] mx-auto px-8 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="w-4 h-[2px] bg-brutal-yellow" />
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-black/30 font-semibold">
              By the Numbers
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[1px]"
          style={{ backgroundColor: 'rgba(0,0,0,0.06)' }}>
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
              className="bg-white p-8 sm:p-10 group hover:bg-black/[0.02] transition-colors duration-300 cursor-default relative"
            >
              {/* Yellow accent on hover */}
              <motion.div
                className="absolute top-0 left-0 w-full h-[2px] bg-brutal-yellow/0 group-hover:bg-brutal-yellow/50 transition-colors duration-300"
              />

              <motion.p
                className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight text-brutal-black leading-none mb-2 group-hover:text-brutal-yellow transition-colors duration-300"
                whileHover={{ scale: 1.02, x: 2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <AnimatedCounter end={m.value} suffix={m.suffix} prefix={m.prefix || ''} />
              </motion.p>
              <p className="text-[11px] font-mono uppercase tracking-[0.12em] text-black/35 font-medium group-hover:text-black/50 transition-colors">
                {m.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
