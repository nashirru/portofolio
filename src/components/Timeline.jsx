import { motion } from 'framer-motion';
import AnimatedScribble from './ui/AnimatedScribble';

const milestones = [
  { year: '2021', label: 'Started Coding', desc: 'First line of PHP & HTML' },
  { year: '2022', label: 'Freelance', desc: 'Built websites for local clients' },
  { year: '2023', label: 'Laravel', desc: 'Deep-dive into enterprise backend' },
  { year: '2024', label: 'AI & Automation', desc: 'Built AI-assisted pipelines' },
  { year: '2025', label: 'Full-Stack SaaS', desc: 'Architected multi-tenant platforms' },
  { year: 'Now', label: 'Founder @ Warok Dev', desc: 'Building AI-powered SaaS products', isCurrent: true },
];

export default function Timeline() {
  return (
    <section id="timeline" aria-label="Timeline" className="py-[80px] lg:py-[100px]">
      <div className="max-w-[1200px] mx-auto px-8 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="w-4 h-[2px] bg-brutal-yellow" />
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-black/30 font-semibold">
              Journey
            </span>
          </div>
          <div className="flex items-center gap-4 mt-1">
            <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-brutal-black leading-none">
              Timeline
            </h2>
            <motion.div
              className="h-[1px] flex-1 bg-black/10"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: 'left' }}
            />
          </div>
        </motion.div>

        {/* Horizontal timeline */}
        <div className="relative overflow-x-auto pb-4">
          <motion.div
            className="flex gap-0 min-w-max"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08, ease: 'easeOut' }}
                className="flex flex-col items-start relative group"
                style={{ minWidth: i === milestones.length - 1 ? '180px' : '150px' }}
              >
                {/* Dot + line */}
                <div className="flex items-center w-full mb-6">
                  <motion.div
                    className={`w-3 h-3 rounded-full border-[2px] shrink-0 relative z-10 transition-all duration-300 ${
                      m.isCurrent
                        ? 'border-brutal-yellow bg-brutal-yellow'
                        : 'border-brutal-black bg-white group-hover:bg-brutal-yellow group-hover:border-brutal-yellow'
                    }`}
                    whileHover={{ scale: 1.5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  />
                  {i < milestones.length - 1 && (
                    <motion.div
                      className="h-[2px] flex-1 bg-black/10 origin-left"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
                    />
                  )}
                </div>

                {/* Year */}
                <motion.span
                  className={`font-mono text-xs font-semibold mb-2 transition-colors duration-300 ${
                    m.isCurrent ? 'text-brutal-yellow' : 'text-black/30 group-hover:text-brutal-black'
                  }`}
                >
                  {m.year}
                </motion.span>

                {/* Label */}
                <h3 className="font-display text-xl sm:text-2xl uppercase tracking-tight text-brutal-black leading-tight mb-1 relative">
                  {m.label}
                  {m.isCurrent && (
                    <motion.span
                      className="absolute -top-1 -right-3 w-1.5 h-1.5 rounded-full bg-brutal-yellow"
                      animate={{ opacity: [1, 0.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  )}
                </h3>

                {/* Description */}
                <p className="text-xs text-black/40 font-mono leading-relaxed max-w-[120px]">
                  {m.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Scribble accent */}
          <AnimatedScribble variant={4} className="mt-6 opacity-30" />
        </div>
      </div>
    </section>
  );
}
