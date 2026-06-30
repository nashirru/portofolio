import { motion } from 'framer-motion';
import { Database, Layout, Sparkles } from 'lucide-react';
import { skillsData, techLogos } from '../data/skills';
import FloatingGeometry from './ui/FloatingGeometry';

export default function Keahlian() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="skills"
      aria-label="Keahlian dan teknologi"
      className="py-20 relative overflow-hidden z-10"
    >
      {/* Floating 3D geometry for ambiance */}
      <div className="hidden md:block">
        <FloatingGeometry
          type="torusKnot"
          color="#8B5CF6"
          opacity={0.12}
          wireframe
          speed={0.15}
          position={[2, -1, -5]}
          scale={2}
        />
      </div>
      <div className="hidden lg:block">
        <FloatingGeometry
          type="icosahedron"
          color="#06B6D4"
          opacity={0.1}
          wireframe
          speed={0.25}
          position={[-3, 1.5, -6]}
          scale={1.5}
        />
      </div>

      {/* Subtle background glow */}
      <div className="absolute top-[20%] left-[-10%] w-[35vw] h-[35vw] rounded-full bg-accent-purple/5 blur-[120px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-glass-border bg-glass-fill backdrop-blur-md text-xs text-accent-cyan font-mono mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Keahlian &amp; Teknologi</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-[#FAFAFA] mb-4 font-sans tracking-tight"
          >
            My Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#A1A1AA] text-sm sm:text-base leading-relaxed max-w-xl mx-auto"
          >
            Mengkombinasikan keandalan arsitektur backend dengan keindahan
            antarmuka frontend yang modern.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {skillsData.map((category, catIndex) => {
            const isBackend = category.category === 'Backend Engineering';
            const IconComponent = isBackend ? Database : Layout;

            return (
              <motion.div
                key={catIndex}
                variants={cardVariants}
                className={isBackend ? 'md:col-span-2' : 'md:col-span-1'}
              >
                <div className="h-full p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 border border-glass-border bg-glass-fill backdrop-blur-xl rounded-glass-xl hover:border-accent-cyan/50 hover:bg-white/[0.02] group">
                  <div>
                    {/* Category Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl border flex items-center justify-center bg-white/[0.02] border-white/10 text-accent-cyan transition-colors duration-300 group-hover:border-accent-cyan/30 group-hover:text-accent-cyan">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-[#FAFAFA] tracking-tight font-sans">
                        {category.category}
                      </h3>
                    </div>

                    {/* Category Description */}
                    <p className="text-sm text-[#A1A1AA] leading-relaxed mb-8">
                      {category.description}
                    </p>

                    {/* Progress bars list */}
                    <div className="space-y-5">
                      {category.skills.map((skill, sIndex) => (
                        <div key={sIndex} className="space-y-2">
                          <div className="flex items-center justify-between text-xs sm:text-sm">
                            <span className="text-[#FAFAFA] font-medium">
                              {skill.name}
                            </span>
                            <span className="text-[#A1A1AA] font-mono text-xs">
                              {skill.level}
                            </span>
                          </div>
                          {/* Progress bar background */}
                          <div className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: skill.level }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 1,
                                delay: 0.1 + sIndex * 0.05,
                                ease: 'easeOut',
                              }}
                              className="h-full rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple shadow-[0_0_8px_rgba(6,182,212,0.3)]"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Marquee Banner of Technologies */}
        <div className="mt-16 relative overflow-hidden py-4 border-y border-glass-border bg-white/[0.01] rounded-lg">
          {/* Edge Faders */}
          <div className="absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-[#09090B] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-[#09090B] to-transparent z-10 pointer-events-none" />

          <div className="flex whitespace-nowrap animate-marquee motion-safe-only">
            {Array(2)
              .fill(techLogos)
              .flat()
              .map((tech, tIndex) => (
                <span
                  key={tIndex}
                  className="text-[#A1A1AA]/45 font-mono font-bold text-xs sm:text-sm tracking-widest uppercase mx-8 sm:mx-10 inline-block transition-colors hover:text-accent-cyan duration-300"
                >
                  // {tech}
                </span>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
