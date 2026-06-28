import { motion } from 'framer-motion';
import { ExternalLink, Github, FolderKanban } from 'lucide-react';
import { projectsData } from '../data/projects';

export default function Works() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section id="works" className="py-20 relative overflow-hidden z-10">
      {/* Background radial glow */}
      <div className="absolute top-[40%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-accent-cyan/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-15%] w-[45vw] h-[45vw] rounded-full bg-accent-purple/5 blur-[150px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-glass-border bg-glass-fill backdrop-blur-md text-xs text-accent-cyan font-mono mb-4"
          >
            <FolderKanban className="w-3.5 h-3.5" />
            <span>Portofolio Saya</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-[#FAFAFA] mb-4 font-sans tracking-tight"
          >
            Selected Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#A1A1AA] text-sm sm:text-base leading-relaxed max-w-xl mx-auto"
          >
            Menampilkan deretan aplikasi web terbaik yang dirancang dengan performa tinggi dan pengalaman pengguna yang luar biasa.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative h-full flex flex-col justify-between p-6 border border-glass-border bg-glass-fill backdrop-blur-xl rounded-[24px] hover:border-accent-cyan/40 hover:bg-white/[0.03] transition-all duration-300"
            >
              <div>
                {/* Project Image Container */}
                <div className="relative overflow-hidden rounded-xl aspect-[16/10] mb-6">
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090B]/60 via-transparent to-transparent z-10 pointer-events-none" />
                  
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-[1.04] transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Project Header & Links */}
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl font-bold text-[#FAFAFA] tracking-tight group-hover:text-accent-cyan transition-colors duration-300 font-sans">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3 text-[#A1A1AA]">
                    <a
                      href={project.githubUrl}
                      className="hover:text-accent-cyan transition-colors"
                      title="View GitHub Repository"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.liveUrl}
                      className="hover:text-accent-cyan transition-colors"
                      title="View Live Demo"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6 font-sans">
                  {project.description}
                </p>
              </div>

              {/* Technology Badges */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-[11px] px-2.5 py-1 rounded-full border border-white/5 bg-white/[0.02] text-[#A1A1AA] font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
