import { motion } from 'framer-motion';
import { Cpu, Workflow, Globe, Cloud } from 'lucide-react';
import AnimatedScribble from './ui/AnimatedScribble';

const capabilities = [
  {
    icon: Globe,
    title: 'Full-Stack Apps',
    description:
      'End-to-end SaaS products, admin dashboards, and data-driven interfaces built with Laravel, React, and modern stacks.',
    scribble: 6,
  },
  {
    icon: Workflow,
    title: 'Automation',
    description:
      'Workflow pipelines, data sync, document flows, and integrations that eliminate manual routines.',
    scribble: 1,
  },
  {
    icon: Cpu,
    title: 'AI Systems',
    description:
      'Assisted pipelines for parsing, drafting, search, and classification around real project data.',
    scribble: 2,
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description:
      'Deployment, CI/CD, server management, and infrastructure that keeps products running smoothly.',
    scribble: 6,
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function CapabilityGrid() {
  return (
    <section id="capabilities" aria-label="Capabilities" className="py-[80px] lg:py-[100px]">
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
              Capabilities
            </span>
          </div>
          <div className="flex items-center gap-4 mt-1">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-brutal-black leading-none">
              What I Do
            </h2>
            <motion.div
              className="h-[1px] flex-1 bg-black/10"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              style={{ transformOrigin: 'left' }}
            />
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-[1px]"
          style={{ backgroundColor: 'rgba(0,0,0,0.06)' }}
        >
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <motion.article
                key={cap.title}
                variants={item}
                className="bg-white p-8 sm:p-10 group relative overflow-hidden"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {/* Yellow top accent on hover */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-[2px] bg-brutal-yellow/0 group-hover:bg-brutal-yellow/60 transition-colors duration-300"
                />

                {/* Hover fill effect */}
                <motion.div
                  className="absolute inset-0 bg-black/[0.02] pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                <div className="relative">
                  {/* Icon with subtle float */}
                  <motion.div
                    className="mb-5 text-black/20 group-hover:text-brutal-yellow/60 transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Icon className="w-6 h-6" strokeWidth={1.2} />
                  </motion.div>

                  <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-brutal-black mb-3 relative inline-block">
                    {cap.title}
                    <AnimatedScribble
                      variant={cap.scribble}
                      className="absolute -bottom-1 left-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </h3>

                  <p className="text-sm sm:text-base leading-relaxed text-black/50 max-w-sm">
                    {cap.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
