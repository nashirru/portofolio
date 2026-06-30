import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/nashirru', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:abdunnasir.dev@gmail.com', label: 'Email' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="border-t border-black/10 bg-white"
    >
      <div className="max-w-[1200px] mx-auto px-8 lg:px-12 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* Left: Logo + copyright */}
          <div className="flex flex-col items-center sm:items-start gap-2">
            <a
              href="#"
              className="font-display text-xl tracking-wider text-brutal-black hover:text-brutal-pink transition-colors leading-none"
            >
              <span className="font-black">M</span>.<span className="text-brutal-pink">A</span>
              <span className="font-black">Nasir</span>
            </a>
            <p className="text-[11px] font-mono text-black/30">
              &copy; {currentYear} Muhammad Abdun Nasir
            </p>
          </div>

          {/* Center: Stack */}
          <p className="text-[11px] font-mono text-black/25 order-3 sm:order-none">
            React / Laravel / Tailwind / MySQL
          </p>

          {/* Right: Social */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-9 h-9 flex items-center justify-center border border-black/10 text-black/30 hover:text-brutal-yellow hover:border-brutal-yellow/30 transition-all duration-200 group"
                >
                  <Icon className="w-3.5 h-3.5" strokeWidth={1.5} />
                </a>
              );
            })}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 bg-brutal-black text-white text-[10px] font-semibold uppercase tracking-[0.1em] hover:bg-brutal-yellow hover:text-brutal-black transition-all"
            >
              Hire Me
              <ArrowUpRight className="w-3 h-3" strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 pt-4 border-t border-black/5 flex justify-center">
          <p className="text-[10px] font-mono text-black/15">
            Built with Laravel, React &amp; a lot of kopi
          </p>
        </div>
      </div>
    </footer>
  );
}
