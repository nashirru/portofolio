import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Code2 } from 'lucide-react';
import SplitText from './ui/SplitText';
import AnimatedScribble from './ui/AnimatedScribble';

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero"
      className="pt-[120px] pb-[80px] lg:pb-[100px] relative overflow-hidden"
    >
      {/* Floating decorative accents — yellow dominant */}
      <motion.div
        className="absolute top-16 right-[12%] w-3 h-3 bg-brutal-yellow/20 rotate-45"
        animate={{ y: [-10, 10, -10], rotate: [45, 55, 45] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute top-40 right-[28%] w-1.5 h-1.5 bg-brutal-yellow/40 rounded-full"
        animate={{ y: [6, -8, 6], opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute bottom-40 left-[8%] w-2 h-2 bg-brutal-yellow/15 rounded-full"
        animate={{ y: [-12, 12, -12], opacity: [0.15, 0.4, 0.15] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute bottom-20 right-[20%] w-1 h-1 bg-brutal-pink/20 rounded-full"
        animate={{ scale: [1, 1.8, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        aria-hidden="true"
      />

      {/* Decorative brutalist geometry — replaces previous 3D */}
      {/* Large rotating hollow square */}
      <motion.div
        className="absolute top-24 right-[8%] w-32 h-32 border-2 border-brutal-yellow/10 pointer-events-none hidden lg:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        aria-hidden="true"
      />
      {/* Small rotating square inside */}
      <motion.div
        className="absolute top-[136px] right-[104px] w-16 h-16 border border-brutal-yellow/15 pointer-events-none hidden lg:block"
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        aria-hidden="true"
      />
      {/* Code bracket decorative */}
      <motion.div
        className="absolute top-1/3 right-[4%] text-[120px] font-black text-brutal-yellow/5 leading-none pointer-events-none hidden lg:block select-none font-sans"
        animate={{ y: [-6, 6, -6], opacity: [0.04, 0.08, 0.04] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        {'{ }'}
      </motion.div>
      {/* Horizontal dashed line */}
      <motion.div
        className="absolute top-[55%] right-[2%] w-40 border-t border-dashed border-brutal-yellow/10 pointer-events-none hidden lg:block"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 1.5, ease: 'easeOut' }}
        style={{ transformOrigin: 'right' }}
        aria-hidden="true"
      />

      {/* Yellow diagonal stripe accent */}
      <div
        className="absolute -top-20 -right-20 w-40 h-40 bg-brutal-yellow/5 rotate-12 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-8 lg:px-12 relative">
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="mb-10 inline-flex items-center gap-2 group cursor-default"
        >
          <span className="relative flex h-2 w-2">
            <motion.span
              className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brutal-yellow opacity-50"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brutal-yellow" />
          </span>
          <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-black/40 font-medium group-hover:text-black/60 transition-colors">
            Open for projects
          </span>
        </motion.div>

        {/* Yellow accent bar */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="h-[3px] w-16 bg-brutal-yellow mb-6"
          style={{ transformOrigin: 'left' }}
        />

        {/* Name */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          className="font-mono text-xs tracking-[0.25em] text-black/30 uppercase mb-4"
        >
          Muhammad Abdun Nasir
        </motion.p>

        {/* Large headline */}
        <h1 className="font-display text-6xl sm:text-8xl md:text-9xl lg:text-[9rem] leading-[0.88] tracking-tight text-brutal-black relative">
          <div className="overflow-hidden">
            <SplitText
              text="I build full-stack"
              delay={0.15}
              stagger={0.04}
              duration={0.4}
              className="!flex-wrap"
            />
          </div>
          <div className="relative inline-block mt-1">
            <motion.span
              initial={{ opacity: 0, y: '100%', rotateZ: 3 }}
              animate={{ opacity: 1, y: 0, rotateZ: -1 }}
              transition={{ delay: 0.6, duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
              className="inline-block bg-brutal-yellow px-3 sm:px-5 py-1 sm:py-2 leading-none relative"
            >
              systems & SaaS.
            </motion.span>
            {/* Scribble underline */}
            <AnimatedScribble variant={0} className="absolute -bottom-3 left-0 w-full" />
          </div>
        </h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8, ease: 'easeOut' }}
          className="max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-black/60 mt-8 sm:mt-10 border-l-[3px] border-brutal-yellow pl-6 relative"
        >
          From interfaces to infrastructure — I architect SaaS platforms,
          automation pipelines, and AI-assisted systems that scale.
          <AnimatedScribble variant={3} className="absolute -bottom-2 left-6 w-3/4" />
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0, ease: 'easeOut' }}
          className="mt-10 sm:mt-12 flex flex-wrap items-center gap-5"
        >
          <motion.a
            href="#projects"
            className="inline-flex items-center gap-2.5 px-6 py-3 bg-brutal-black text-white text-[13px] font-semibold uppercase tracking-[0.12em] relative overflow-hidden group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="absolute inset-0 bg-brutal-yellow translate-y-full group-hover:translate-y-0 transition-transform duration-200" />
            <span className="relative z-10 flex items-center gap-2.5 group-hover:text-brutal-black transition-colors duration-200">
              View Projects
              <motion.span
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
              </motion.span>
            </span>
          </motion.a>
          <motion.a
            href="https://github.com/nashirru"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 border border-brutal-yellow/30 text-[13px] font-semibold uppercase tracking-[0.12em] text-black/50 hover:text-brutal-black hover:border-brutal-yellow/70 transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Github className="w-4 h-4" strokeWidth={1.5} />
            GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
