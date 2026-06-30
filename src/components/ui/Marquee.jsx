import { useMemo } from 'react';

/**
 * Marquee — Infinite horizontal scroll of repeated content.
 * Automatically duplicates children for seamless looping.
 */
export default function Marquee({
  children,
  className = '',
  speed = 20,
}) {
  const items = useMemo(() => Array.from({ length: 3 }), []);

  return (
    <div
      className={`border-y-4 border-brutal-black overflow-hidden ${className}`}
    >
      <div
        className="animate-marquee"
        style={{ animationDuration: `${speed}s` }}
      >
        {items.map((_, groupIndex) => (
          <div key={groupIndex} className="flex items-center gap-12 shrink-0">
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}
