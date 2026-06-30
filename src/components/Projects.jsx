import { motion } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import { projectsData } from '../data/projects';
import AnimatedScribble from './ui/AnimatedScribble';

const projectExtras = [
  {
    label: 'SaaS',
    stat: '500+ transactions/mo',
    description:
      'Real-time cash flow management dashboard for SMEs with interactive data visualization.',
  },
  {
    label: 'Enterprise',
    stat: '1,000+ daily check-ins',
    description:
      'Geolocation-based attendance system with dynamic QR code validation.',
  },
  {
    label: 'CMS',
    stat: '200+ portfolios hosted',
    description:
      'Interactive gallery CMS for graphic designers with dynamic media integration.',
  },
];

const tagColors = {
  React: 'border-black/10 hover:border-brutal-blue/30 hover:text-brutal-blue',
  Laravel: 'border-black/10 hover:border-brutal-yellow/40 hover:text-yellow-700',
  PHP: 'border-black/10 hover:border-black/30',
  MySQL: 'border-black/10 hover:border-brutal-blue/30 hover:text-brutal-blue',
  'Tailwind CSS': 'border-black/10 hover:border-cyan-300/30 hover:text-cyan-700',
  Vite: 'border-black/10 hover:border-purple-300/30 hover:text-purple-700',
  'Framer Motion': 'border-black/10 hover:border-pink-300/30 hover:text-pink-700',
};

export default function Projects() {
  return (
    <section id="projects" aria-label="Selected work" className="py-[80px] lg:py-[100px]">
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
              Featured Work
            </span>
          </div>
          <div className="flex items-center gap-4 mt-1">
            <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-brutal-black leading-none">
              Selected Projects
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

        <div className="space-y-[1px]" style={{ backgroundColor: 'rgba(0,0,0,0.06)' }}>
          {projectsData.map((project, index) => {
            const extra = projectExtras[index] || projectExtras[0];

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white px-8 sm:px-10 py-10 sm:py-12 group relative overflow-hidden"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {/* Yellow hover stripe on left */}
                <motion.div
                  className="absolute inset-y-0 left-0 w-[2px] bg-brutal-yellow/0 group-hover:bg-brutal-yellow/50 transition-colors duration-300"
                />

                {/* Index indicator */}
                <div className="hidden lg:flex absolute top-10 right-10">
                  <motion.span
                    className="font-mono text-[10px] text-black/15 group-hover:text-brutal-yellow/50 transition-colors"
                    whileHover={{ scale: 1.2 }}
                  >
                    {`0${index + 1}`}
                  </motion.span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
                  {/* Main content */}
                  <div className="lg:col-span-8">
                    <div className="flex items-center gap-3 mb-4 flex-wrap">
                      <motion.span
                        className="text-[10px] font-mono uppercase tracking-[0.15em] font-semibold border px-2.5 py-1 bg-brutal-yellow/10 border-brutal-yellow/20 text-yellow-700"
                        whileHover={{
                          backgroundColor: 'rgba(255,230,0,0.2)',
                        }}
                      >
                        {extra.label}
                      </motion.span>
                      <span className="text-[10px] font-mono text-black/25">
                        {extra.stat}
                      </span>
                    </div>

                    <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-brutal-black leading-tight mb-4 relative inline-block">
                      {project.title}
                      <AnimatedScribble variant={index} className="absolute -bottom-1 left-0 w-full" />
                    </h3>

                    <p className="text-sm sm:text-base leading-relaxed text-black/50 max-w-xl mb-6">
                      {extra.description || project.description}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <motion.span
                          key={tag}
                          className={`text-[10px] font-mono uppercase tracking-[0.08em] px-2.5 py-1.5 border transition-all duration-200 cursor-default bg-black/[0.02] ${tagColors[tag] || 'border-black/10 hover:border-black/30'}`}
                          whileHover={{ y: -1 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="lg:col-span-4 flex flex-row lg:flex-col items-start gap-3 lg:pt-8">
                    <motion.a
                      href={project.githubUrl || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 border border-black/15 text-[11px] font-semibold uppercase tracking-[0.1em] text-black/50 hover:text-brutal-black hover:border-black/40 transition-all"
                      whileHover={{ x: 2 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Github className="w-3.5 h-3.5" strokeWidth={1.5} />
                      Source
                    </motion.a>
                    <motion.a
                      href={project.liveUrl || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-brutal-black text-white text-[11px] font-semibold uppercase tracking-[0.1em] relative overflow-hidden group/btn"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <span className="absolute inset-0 bg-brutal-yellow translate-y-full group-hover/btn:translate-y-0 transition-transform duration-200" />
                      <span className="relative z-10 flex items-center gap-2 group-hover:text-brutal-black transition-colors duration-200">
                        <ExternalLink className="w-3.5 h-3.5" strokeWidth={1.5} />
                        Live Demo
                      </span>
                    </motion.a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-black/40 mb-5 font-mono">
            Have a project in mind?
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-6 py-3 border border-brutal-black text-[13px] font-semibold uppercase tracking-[0.12em] text-brutal-black hover:bg-brutal-yellow hover:border-brutal-yellow hover:text-brutal-black transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            Let&apos;s Talk
            <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
