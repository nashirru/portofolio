import { motion } from 'framer-motion';
import SplitText from './ui/SplitText';
import BlurText from './ui/BlurText';
import Lanyard from './ui/Lanyard';
import { ArrowRight, Code2, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-12 overflow-hidden z-10">
      <div className="max-w-[1280px] mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column - Typography & Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Greeting Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-glass-border bg-glass-fill backdrop-blur-md text-sm text-accent-cyan font-medium mb-6"
          >
            <Sparkles className="w-4 h-4 text-accent-cyan animate-pulse" />
            <span>Tersedia untuk Proyek Freelance</span>
          </motion.div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-[#FAFAFA] mb-6 font-sans">
            <SplitText 
              text="Backend &" 
              className="text-[#FAFAFA] block"
              delay={0.1}
              duration={0.6}
            />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-[#a78bfa] to-accent-purple block filter drop-shadow-md">
              <BlurText 
                text="Frontend Architect" 
                delay={0.4}
                duration={0.8}
              />
            </span>
          </h1>

          {/* Subheading / Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-[#A1A1AA] text-lg md:text-xl max-w-xl mb-8 leading-relaxed font-normal"
          >
            Membangun web responsif yang modern, antarmuka berkinerja tinggi menggunakan React dan Tailwind CSS, serta arsitektur backend yang solid dengan Laravel PHP.
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            {/* Primary Glow Button */}
            <a
              href="#projects"
              className="group flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 rounded-glass-md font-semibold text-[#09090B] bg-[#FAFAFA] hover:shadow-[0_0_25px_rgba(255,255,255,0.45)] hover:bg-[#FAFAFA]/90 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Lihat Karya Saya
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            {/* Secondary Link */}
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 rounded-glass-md font-semibold text-gray-300 hover:text-white bg-white/5 border border-white/10 hover:border-accent-cyan/40 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Code2 className="w-4 h-4 text-accent-cyan" />
              Hubungi Saya
            </a>
          </motion.div>
        </div>

        {/* Right Column - 3D Lanyard WebGL */}
        <div className="lg:col-span-5 flex justify-center items-center w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full flex justify-center"
          >
            <Lanyard />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
