import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MessageSquare, Send, MapPin } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a production environment, this would handle form submission
    alert('Thank you! Your message has been sent successfully (Mockup Action).');
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden z-10">
      {/* Background ambient glow */}
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-accent-purple/5 blur-[160px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-glass-border bg-glass-fill backdrop-blur-md text-xs text-accent-cyan font-mono mb-4"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Hubungi Saya</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-[#FAFAFA] mb-4 font-sans tracking-tight"
          >
            Let's Connect
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#A1A1AA] text-sm sm:text-base leading-relaxed max-w-xl mx-auto"
          >
            Mempunyai ide proyek menarik atau ingin berkolaborasi? Kirimkan pesan Anda di bawah ini.
          </motion.p>
        </div>

        {/* Large Central Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto border border-glass-border bg-glass-fill backdrop-blur-xl rounded-[32px] p-8 md:p-12 shadow-2xl relative overflow-hidden group hover:border-accent-cyan/30 transition-all duration-500"
        >
          {/* Subtle inside card radial gradient glow */}
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-accent-cyan/10 blur-[80px] pointer-events-none group-hover:bg-accent-cyan/15 transition-all duration-500" />
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
            
            {/* Left side: Contact Form */}
            <div className="md:col-span-7">
              <h3 className="text-xl font-bold text-[#FAFAFA] mb-8 tracking-tight font-sans">
                Kirim Pesan
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="text-xs uppercase text-accent-cyan font-mono tracking-widest mb-1 block">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Masukkan nama Anda"
                    className="w-full bg-transparent border-b border-glass-border px-0 py-3 text-sm text-[#FAFAFA] placeholder:text-[#A1A1AA]/35 focus:outline-none focus:border-accent-cyan transition-colors duration-300 font-sans"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-xs uppercase text-accent-cyan font-mono tracking-widest mb-1 block">
                    Alamat Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="nama@email.com"
                    className="w-full bg-transparent border-b border-glass-border px-0 py-3 text-sm text-[#FAFAFA] placeholder:text-[#A1A1AA]/35 focus:outline-none focus:border-accent-cyan transition-colors duration-300 font-sans"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-xs uppercase text-accent-cyan font-mono tracking-widest mb-1 block">
                    Pesan Anda
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tulis detail proyek atau pesan kolaborasi..."
                    className="w-full bg-transparent border-b border-glass-border px-0 py-3 text-sm text-[#FAFAFA] placeholder:text-[#A1A1AA]/35 focus:outline-none focus:border-accent-cyan transition-colors duration-300 font-sans h-28 resize-none"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FAFAFA] text-[#09090B] font-semibold text-sm rounded-xl px-6 py-3.5 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.35)] active:scale-95 cursor-pointer font-sans"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>

            {/* Right side: Contact Info & Socials */}
            <div className="md:col-span-5 flex flex-col justify-between border-t md:border-t-0 md:border-l border-glass-border pt-10 md:pt-0 md:pl-10">
              <div>
                <h3 className="text-xl font-bold text-[#FAFAFA] mb-8 tracking-tight font-sans">
                  Info Kontak
                </h3>
                <div className="space-y-6">
                  {/* Location info */}
                  <div className="flex items-center gap-4 group/item">
                    <div className="w-10 h-10 rounded-lg border border-glass-border bg-white/[0.02] flex items-center justify-center text-accent-cyan">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-[11px] uppercase text-[#A1A1AA] font-mono tracking-widest">Lokasi</h4>
                      <p className="text-sm text-[#FAFAFA] font-sans">Jawa Timur, Indonesia</p>
                    </div>
                  </div>

                  {/* Email info */}
                  <div className="flex items-center gap-4 group/item">
                    <div className="w-10 h-10 rounded-lg border border-glass-border bg-white/[0.02] flex items-center justify-center text-accent-cyan">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-[11px] uppercase text-[#A1A1AA] font-mono tracking-widest">Email</h4>
                      <a href="mailto:abdunnasir.dev@gmail.com" className="text-sm text-[#FAFAFA] hover:text-accent-cyan transition-colors font-sans">
                        abdunnasir.dev@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-10 md:mt-0">
                <h4 className="text-xs uppercase text-accent-cyan font-mono tracking-widest mb-4">
                  Temukan Saya
                </h4>
                <div className="flex items-center gap-4">
                  {/* GitHub */}
                  <a
                    href="https://github.com/nashirru"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl border border-glass-border bg-white/[0.01] flex items-center justify-center text-[#A1A1AA] hover:text-accent-cyan hover:border-accent-cyan/50 transition-all duration-300"
                    title="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl border border-glass-border bg-white/[0.01] flex items-center justify-center text-[#A1A1AA] hover:text-accent-cyan hover:border-accent-cyan/50 transition-all duration-300"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl border border-glass-border bg-white/[0.01] flex items-center justify-center text-[#A1A1AA] hover:text-accent-cyan hover:border-accent-cyan/50 transition-all duration-300"
                    title="WhatsApp"
                  >
                    <MessageSquare className="w-5 h-5" />
                  </a>
                </div>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
