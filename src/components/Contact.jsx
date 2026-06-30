import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MessageSquare, ArrowUpRight, Terminal } from 'lucide-react';
import AnimatedScribble from './ui/AnimatedScribble';

const fadeUp = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, ease: 'easeOut' },
};

export default function Contact() {
  return (
    <section
      id="contact"
      aria-label="Contact"
      className="py-[80px] lg:py-[100px] border-t border-black/10 relative overflow-hidden"
    >
      {/* Floating yellow accents */}
      <motion.div
        className="absolute top-10 left-[20%] w-2 h-2 bg-brutal-yellow/20 rotate-45"
        animate={{ y: [-8, 8, -8], rotate: [45, 60, 45] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute bottom-20 right-[15%] w-1.5 h-1.5 bg-brutal-yellow/25 rounded-full"
        animate={{ y: [8, -8, 8], opacity: [0.15, 0.5, 0.15] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute top-1/2 right-[10%] w-1 h-1 bg-brutal-pink/15 rounded-full"
        animate={{ scale: [1, 2, 1], opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        aria-hidden="true"
      />

      {/* Yellow diagonal accent */}
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-brutal-yellow/3 rotate-45 pointer-events-none" aria-hidden="true" />

      <div className="max-w-[1200px] mx-auto px-8 lg:px-12">
        <div className="max-w-2xl">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="w-4 h-[2px] bg-brutal-yellow" />
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-black/30 font-semibold">
                Connect
              </span>
            </div>
            <div className="flex items-center gap-4 mt-1">
              <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-brutal-black leading-none">
                Get in Touch
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

          {/* Terminal-inspired contact block */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="border border-black/10 p-6 sm:p-8 font-mono text-sm bg-black/[0.02] mt-10 relative group"
          >
            {/* Yellow top border */}
            <motion.div className="absolute top-0 left-0 right-0 h-[2px] bg-brutal-yellow/0 group-hover:bg-brutal-yellow/30 transition-colors duration-300" />

            {/* Prompt line */}
            <div className="flex items-center gap-2 text-black/30 mb-6 pb-4 border-b border-black/5">
              <Terminal className="w-3.5 h-3.5 text-brutal-yellow/40" strokeWidth={1.5} />
              <span className="text-brutal-yellow font-semibold">$</span>
              <motion.span
                className="text-black/50"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                ./contact
              </motion.span>
              <motion.span
                className="w-[3px] h-5 bg-brutal-yellow/60 inline-block"
                animate={{ opacity: [1, 0.1, 1] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'steps(2)' }}
              />
            </div>

            {/* Contact items */}
            {[
              {
                icon: Mail,
                href: 'mailto:abdunnasir.dev@gmail.com',
                label: 'abdunnasir.dev@gmail.com',
                meta: '— Primary',
                delay: 0.1,
              },
              {
                icon: Github,
                href: 'https://github.com/nashirru',
                label: 'github.com/nashirru',
                meta: '— Open Source',
                delay: 0.2,
              },
              {
                icon: Linkedin,
                href: '#',
                label: 'linkedin.com/in/nashirru',
                meta: '— Professional',
                delay: 0.3,
              },
              {
                icon: MessageSquare,
                href: null,
                label: '+62 8XX-XXXX-XXXX',
                meta: '— WhatsApp',
                delay: 0.4,
              },
            ].map((item) => {
              const Icon = item.icon;
              const content = (
                <motion.div
                  key={item.label}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: item.delay }}
                  className="flex items-center gap-3 mb-4 group/item"
                >
                  <motion.div
                    className="text-black/20 group-hover/item:text-brutal-yellow transition-colors shrink-0"
                    whileHover={{ scale: 1.2, rotate: -5 }}
                  >
                    <Icon className="w-4 h-4" strokeWidth={1.5} />
                  </motion.div>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black/60 hover:text-brutal-black transition-colors text-sm"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span className="text-black/40 text-sm">
                      {item.label}
                    </span>
                  )}
                  <span className="text-[10px] text-black/20 font-sans uppercase tracking-wider">
                    {item.meta}
                  </span>
                </motion.div>
              );
              return content;
            })}

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="mt-8 pt-4 border-t border-black/5"
            >
              <motion.a
                href="mailto:abdunnasir.dev@gmail.com"
                className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-brutal-black text-white text-[12px] font-sans font-semibold uppercase tracking-[0.12em] relative overflow-hidden group/btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="absolute inset-0 bg-brutal-yellow translate-y-full group-hover/btn:translate-y-0 transition-transform duration-200" />
                <span className="relative z-10 flex items-center gap-2.5 group-hover:text-brutal-black transition-colors duration-200">
                  Start a Conversation
                  <motion.span
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </motion.span>
                </span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Scribble accent */}
          <AnimatedScribble variant={5} className="mt-8 opacity-20" />
        </div>
      </div>
    </section>
  );
}
