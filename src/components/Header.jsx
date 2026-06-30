import { useState, useEffect } from 'react';
import { FileText } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] bg-white/90 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_1px_0_rgba(0,0,0,0.08)]' : 'shadow-none'
      }`}
    >
      <div className="h-full mx-auto px-6 flex items-center justify-between max-w-[1440px]">
        {/* Left: Logo + Breadcrumb */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="font-display text-2xl tracking-wider text-brutal-black hover:text-brutal-pink transition-colors leading-none"
          >
            <span className="font-black">M</span>.
            <span className="text-brutal-pink">A</span>
            <span className="font-black">Nasir</span>
          </a>
          <span className="hidden sm:inline-flex items-center gap-2 text-[11px] font-mono text-black/30 uppercase tracking-wider">
            <span className="w-1 h-1 rounded-full bg-black/20" />
            <span>Portfolio / 2026</span>
          </span>
        </div>

        {/* Right: Resume */}
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-4 py-2 border border-black/20 text-[11px] font-semibold uppercase tracking-[0.12em] text-black/60 hover:text-brutal-black hover:border-black/50 transition-all"
        >
          <FileText className="w-3.5 h-3.5" />
          Resume
        </a>
      </div>
    </header>
  );
}
