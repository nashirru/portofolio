import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Terminal,
  Layout,
  Cloud,
  Cpu,
  Workflow,
  Database,
  GitBranch,
} from 'lucide-react';

const skillGroups = [
  {
    icon: Terminal,
    title: 'Backend',
    items: ['Laravel', 'PHP', 'Node.js', 'REST API'],
  },
  {
    icon: Layout,
    title: 'Frontend',
    items: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    icon: Database,
    title: 'Database',
    items: ['MySQL', 'PostgreSQL', 'SQLite', 'Redis'],
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    items: ['VPS', 'CI/CD', 'Docker', 'Cloudflare'],
  },
  {
    icon: Cpu,
    title: 'AI & Automation',
    items: ['AI Pipelines', 'Web Scraping', 'OCR', 'Chatbots'],
  },
  {
    icon: Workflow,
    title: 'Tools',
    items: ['Git', 'Composer', 'Vite', 'Postman'],
  },
  {
    icon: GitBranch,
    title: 'Architecture',
    items: ['Microservices', 'Multi-Tenant', 'API Design', 'TDD'],
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="skills" aria-label="Skills" className="py-[80px] lg:py-[100px]">
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
              Stack
            </span>
          </div>
          <div className="flex items-center gap-4 mt-1">
            <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-brutal-black leading-none">
              Skills & Tools
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

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-[1px]"
          style={{ backgroundColor: 'rgba(0,0,0,0.06)' }}
        >
          {skillGroups.map((group, gi) => {
            const Icon = group.icon;
            const isHovered = hoveredIndex === gi;

            return (
              <motion.div
                key={group.title}
                variants={cardItem}
                className="bg-white p-6 sm:p-8 group relative overflow-hidden cursor-default"
                onMouseEnter={() => setHoveredIndex(gi)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {/* Yellow top border on hover */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-[2px] bg-brutal-yellow/0 group-hover:bg-brutal-yellow/40 transition-colors duration-300"
                />

                {/* Corner indicator */}
                <motion.div
                  className="absolute top-0 right-0 w-0 h-0 border-t-[12px] border-r-[12px] border-t-transparent border-r-transparent transition-all duration-300"
                  style={{
                    borderTopColor: isHovered ? 'rgba(255,230,0,0.15)' : 'transparent',
                    borderRightColor: isHovered ? 'rgba(255,230,0,0.15)' : 'transparent',
                  }}
                />

                {/* Icon */}
                <motion.div
                  className="text-black/15 group-hover:text-brutal-yellow/50 transition-colors duration-300 mb-4"
                  animate={isHovered ? { rotate: -5, scale: 1.1 } : { rotate: 0, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Icon className="w-5 h-5" strokeWidth={1.2} />
                </motion.div>

                {/* Title */}
                <h3 className="font-display text-lg sm:text-xl uppercase tracking-tight text-brutal-black mb-3">
                  {group.title}
                </h3>

                {/* Items */}
                <ul className="space-y-1.5">
                  {group.items.map((item, ii) => (
                    <motion.li
                      key={item}
                      className="text-[11px] font-mono text-black/35 leading-relaxed relative"
                      initial={{ opacity: 0.35 }}
                      animate={
                        isHovered
                          ? { opacity: 0.7, x: 3 }
                          : { opacity: 0.35, x: 0 }
                      }
                      transition={{ duration: 0.2, delay: isHovered ? ii * 0.03 : 0 }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
