import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data/projects';

const tagVariants = {
  laravel: 'bg-brutal-yellow',
  default: 'bg-transparent',
};

function getTagStyle(tag) {
  const lower = tag.toLowerCase();
  if (lower === 'laravel') return 'bg-brutal-yellow';
  if (lower === 'react' || lower === 'next.js') return 'bg-brutal-blue/10 text-brutal-blue border-brutal-blue/40';
  return 'bg-transparent';
}

const projectExtras = [
  {
    label: 'SaaS',
    labelColor: 'text-brutal-blue border-brutal-blue',
    stat: '500+ transactions/mo',
  },
  {
    label: 'Enterprise',
    labelColor: 'text-brutal-pink border-brutal-pink',
    stat: '1,000+ daily check-ins',
  },
  {
    label: 'CMS',
    labelColor: 'text-brutal-yellow bg-brutal-black border-brutal-black',
    stat: '200+ portfolios hosted',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
};

export default function Works() {
  return (
    <section id="work" aria-label="Selected work" className="max-w-[1280px] mx-auto px-6 py-20 sm:py-28">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 mb-12 sm:mb-16"
      >
        <span className="font-sans text-xs font-black tracking-[0.2em] text-brutal-pink">01</span>
        <h2 className="font-display text-5xl sm:text-7xl md:text-8xl uppercase tracking-tight text-brutal-black leading-none">
          Selected Work
        </h2>
        <div className="flex-1 border-t-4 border-brutal-black" />
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8"
      >
        {projectsData.map((project, index) => {
          const extra = projectExtras[index] || projectExtras[0];
          const isFirst = index === 0;

          return (
            <motion.article
              key={index}
              variants={cardVariants}
              className={`flex flex-col border-4 border-brutal-black bg-brutal-white p-6 sm:p-8 shadow-brutal hover:shadow-brutal-lg hover:-translate-y-0.5 hover:translate-x-0.5 transition-all duration-200 ${
                isFirst ? 'sm:row-span-2' : ''
              }`}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <span
                  className={`font-sans text-xs font-black uppercase tracking-widest px-2 border-2 ${extra.labelColor}`}
                >
                  {extra.label}
                </span>
                <a
                  href={project.githubUrl || '#'}
                  className="font-sans text-sm font-bold uppercase text-brutal-black hover:text-brutal-pink transition-colors flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title}`}
                >
                  View <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl md:text-5xl uppercase leading-tight text-brutal-black mb-4">
                {project.title}
              </h3>

              <p className="font-sans text-sm sm:text-base text-brutal-black/70 leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              {extra.stat && (
                <p className="font-sans text-xs font-bold uppercase text-brutal-pink tracking-wider mb-6">
                  {extra.stat}
                </p>
              )}

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className={`px-3 py-1.5 text-xs font-bold border-2 border-brutal-black ${getTagStyle(tag)}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          );
        })}

        {/* CTA Card — "Have a project?" */}
        <motion.article
          variants={cardVariants}
          className="flex flex-col items-center justify-center text-center border-4 border-brutal-black bg-brutal-black p-6 sm:p-8 shadow-brutal hover:shadow-brutal-lg hover:-translate-y-0.5 hover:translate-x-0.5 transition-all duration-200"
        >
          <p className="font-display text-3xl sm:text-4xl uppercase text-brutal-yellow leading-tight mb-4">
            Have a project?
          </p>
          <p className="font-sans text-sm sm:text-base text-white/60 mb-6 max-w-xs">
            Available for freelance and collaborations. Let&apos;s build something structurally sound.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brutal-yellow border-2 border-brutal-yellow text-brutal-black font-black uppercase text-sm hover:bg-transparent hover:text-brutal-yellow transition-colors"
          >
            Let&apos;s Talk
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.article>
      </motion.div>
    </section>
  );
}
