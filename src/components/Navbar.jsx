import { useState, useEffect } from 'react';
import { Github, Linkedin, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll for glass effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const navLinks = [
    { num: '01', name: 'Work', href: '#work' },
    { num: '02', name: 'Manifesto', href: '#manifesto' },
    { num: '03', name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-xl border-b border-black/10 shadow-sm'
            : 'bg-white/50 backdrop-blur-sm border-b border-transparent'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 h-16 sm:h-20 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="font-display text-2xl sm:text-3xl tracking-wider text-brutal-black hover:text-brutal-pink transition-colors"
            aria-label="Beranda"
          >
            <span className="font-black">M</span>.
            <span className="text-brutal-pink">A</span>
            <span className="font-black">Nasir</span>
          </a>

          {/* Desktop nav — centered */}
          <nav
            aria-label="Main navigation"
            className="hidden sm:flex items-center gap-10"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group flex items-center gap-2 font-sans font-semibold text-sm uppercase tracking-[0.15em] text-black/50 hover:text-brutal-black transition-all duration-200"
              >
                <span className="font-mono text-[10px] text-brutal-pink group-hover:scale-110 transition-transform">
                  {link.num}
                </span>
                <span className="relative">
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brutal-pink group-hover:w-full transition-all duration-300" />
                </span>
              </a>
            ))}
          </nav>

          {/* Desktop right side — social + Hire Me */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="https://github.com/nashirru"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-black/40 hover:text-brutal-black transition-colors"
              aria-label="GitHub profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/nashirru"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-black/40 hover:text-brutal-black transition-colors"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="ml-2 px-5 py-2.5 bg-brutal-black text-white font-sans font-bold text-xs uppercase tracking-[0.15em] hover:bg-brutal-pink hover:text-white transition-all duration-200"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden p-2 text-brutal-black"
            aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Overlay Menu — inspired by irfansabrian */}
      <div
        className={`fixed inset-0 z-40 sm:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-md"
          onClick={() => setIsOpen(false)}
        />

        {/* Menu panel */}
        <nav
          aria-label="Mobile navigation"
          className="absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white border-l border-black/10 shadow-2xl"
        >
          <div className="flex justify-end p-5">
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-brutal-black hover:text-brutal-pink transition-colors"
              aria-label="Tutup menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="px-8 py-2">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="group flex items-center gap-4 py-4 border-b border-black/5 hover:border-brutal-pink/20 transition-all"
                style={{
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: `${i * 80}ms`,
                  transitionDuration: '400ms',
                  transitionProperty: 'opacity, transform',
                }}
              >
                <span className="font-mono text-xs text-brutal-pink font-bold min-w-[24px]">
                  {link.num}
                </span>
                <span className="font-sans font-bold text-xl uppercase tracking-wider text-black hover:text-brutal-pink transition-colors">
                  {link.name}
                </span>
              </a>
            ))}

            {/* Social links in mobile menu */}
            <div className="mt-8 flex items-center gap-5">
              <a
                href="https://github.com/nashirru"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-black/40 hover:text-brutal-black transition-colors"
                aria-label="GitHub profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/nashirru"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-black/40 hover:text-brutal-black transition-colors"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-6 block text-center py-4 bg-brutal-black text-white font-sans font-bold uppercase text-sm tracking-[0.15em] hover:bg-brutal-pink transition-all duration-200"
            >
              Hire Me
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
