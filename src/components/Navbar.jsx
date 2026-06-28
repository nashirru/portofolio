import { useState, useEffect } from 'react';
import { Menu, X, Terminal, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Keahlian', href: '#skills' },
    { name: 'Proyek', href: '#projects' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
      scrolled 
        ? 'py-4 bg-[#09090B]/80 backdrop-blur-[12px] border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.4)]' 
        : 'py-5 bg-[#09090B]/50 backdrop-blur-[12px] border-white/[0.04]'
    }`}>
      <div className="max-w-[1280px] mx-auto px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-accent-cyan to-accent-purple flex items-center justify-center transition-transform group-hover:rotate-12 duration-300 shadow-[0_0_15px_rgba(6,182,212,0.25)]">
            <Terminal className="w-4 h-4 text-white" />
          </div>
          <span className="text-[#FAFAFA] font-bold tracking-tight text-lg font-sans">
            Nasir
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors duration-200 text-sm font-medium relative group"
            >
              {link.name}
              <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-gradient-to-r from-accent-cyan to-accent-purple transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          
          <a
            href="#contact"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent-cyan/40 transition-all"
          >
            Hire Me
            <ArrowUpRight className="w-3.5 h-3.5 text-accent-cyan" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white bg-white/5 border border-white/5"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden w-full bg-[#09090B]/95 backdrop-blur-[12px] border-b border-white/[0.08]">
          <div className="px-6 py-5 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white text-base font-semibold py-2 border-b border-white/[0.02]"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-1.5 w-full py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-accent-cyan to-accent-purple hover:opacity-90 text-center mt-2 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
            >
              Hubungi Saya
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
