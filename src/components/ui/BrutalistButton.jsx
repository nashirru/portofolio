import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * BrutalistButton — Thick-bordered button with shadow offset that morphs on hover.
 * Renders as <a> when `href` is provided, <button> otherwise.
 */
export default function BrutalistButton({
  children,
  href,
  onClick,
  className = '',
  shadow = true,
  variant = 'default', // 'default' | 'yellow' | 'ghost'
}) {
  const Element = href ? 'a' : 'button';
  const relProps = href ? { href, target: '_blank', rel: 'noopener noreferrer' } : {};

  const baseClasses = `
    inline-flex items-center justify-center gap-2
    px-6 sm:px-8 py-3 sm:py-4
    font-sans font-bold text-sm sm:text-base uppercase tracking-wide
    border-4 border-brutal-black
    transition-all duration-150 ease-out
    active:scale-95
    ${shadow ? 'shadow-brutal-sm sm:shadow-brutal hover:shadow-none hover:-translate-y-0.5 hover:translate-x-0.5' : ''}
    ${className}
  `;

  const variants = {
    default: 'bg-brutal-black text-white hover:bg-brutal-pink hover:text-brutal-black',
    yellow: 'bg-brutal-yellow text-brutal-black hover:bg-brutal-black hover:text-brutal-yellow',
    ghost: 'bg-transparent text-brutal-black hover:bg-brutal-black hover:text-white',
  };

  return (
    <Element
      className={`${baseClasses} ${variants[variant] || variants.default}`}
      onClick={onClick}
      {...relProps}
    >
      {children}
    </Element>
  );
}
