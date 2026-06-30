import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const scribbles = [
  {
    id: 'scribble-1',
    d: 'M0,20 Q30,0 60,20 Q90,40 120,20 Q150,0 180,20 Q210,40 240,20',
    width: 240,
    height: 40,
    strokeWidth: 2,
    color: 'currentColor',
    opacity: 0.12,
    className: 'absolute -bottom-2 left-0 w-full',
    delay: 0.5,
  },
  {
    id: 'scribble-2',
    d: 'M0,15 C20,35 40,-5 60,15 C80,35 100,-5 120,15 C140,35 160,-5 180,15',
    width: 180,
    height: 40,
    strokeWidth: 1.5,
    color: '#FF3366',
    opacity: 0.15,
    className: 'absolute -bottom-1 left-0',
    delay: 0.8,
  },
  {
    id: 'scribble-3',
    d: 'M10,10 L80,40 M20,40 L90,10 M40,25 L100,25',
    width: 100,
    height: 50,
    strokeWidth: 1.5,
    color: 'currentColor',
    opacity: 0.08,
    className: 'absolute top-0 right-0 -rotate-6',
    delay: 1.0,
  },
  {
    id: 'scribble-4',
    d: 'M0,0 C20,30 40,-10 60,20 C80,50 100,10 120,40 C140,70 160,30 180,60',
    width: 180,
    height: 70,
    strokeWidth: 1,
    color: 'currentColor',
    opacity: 0.06,
    className: 'absolute -bottom-4 left-1/4',
    delay: 0.3,
  },
  {
    id: 'scribble-5',
    d: 'M5,5 L35,35 M5,35 L35,5 M20,20 L50,50 M50,20 L20,50',
    width: 55,
    height: 55,
    strokeWidth: 2,
    color: '#FF3366',
    opacity: 0.1,
    className: 'absolute -top-2 -right-2 rotate-12',
    delay: 1.2,
  },
  {
    id: 'scribble-6',
    d: 'M0,0 Q15,-15 30,0 Q45,15 60,0 Q75,-15 90,0 Q105,15 120,0',
    width: 120,
    height: 18,
    strokeWidth: 2,
    color: '#FFE600',
    opacity: 0.2,
    className: 'absolute -bottom-3 left-0',
    delay: 0.6,
  },
  {
    id: 'scribble-7',
    d: 'M0,0 L120,0 M0,8 L100,8 M0,16 L80,16',
    width: 120,
    height: 16,
    strokeWidth: 1.5,
    color: 'currentColor',
    opacity: 0.07,
    className: 'absolute top-0 left-0',
    delay: 0.4,
  },
];

function ScribbleSVG({ scribble, inView }) {
  const pathLength = scribble.d.length * 0.8;

  return (
    <svg
      width={scribble.width}
      height={scribble.height}
      viewBox={`0 0 ${scribble.width} ${scribble.height}`}
      fill="none"
      className={scribble.className}
      style={{ opacity: scribble.opacity }}
      aria-hidden="true"
    >
      <path
        d={scribble.d}
        stroke={scribble.color}
        strokeWidth={scribble.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        style={{
          strokeDasharray: pathLength,
          strokeDashoffset: inView ? 0 : pathLength,
          transition: `stroke-dashoffset 1.8s cubic-bezier(0.16, 1, 0.3, 1) ${scribble.delay}s`,
        }}
      />
    </svg>
  );
}

export default function AnimatedScribble({ variant = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const scribble = scribbles[variant % scribbles.length];

  return (
    <span ref={ref} className={`inline-block relative ${className}`} aria-hidden="true">
      <ScribbleSVG scribble={scribble} inView={inView} />
    </span>
  );
}

/** Full background scribble decoration — abstract floating strokes */
export function BackgroundScribbles() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Large abstract floating scribbles */}
      {[
        {
          d: 'M100,200 C300,100 500,400 700,200 C900,0 1100,300 1300,150',
          color: 'rgba(0,0,0,0.03)',
          width: 4,
          viewBox: '0 0 1400 500',
        },
        {
          d: 'M-50,600 C200,400 400,800 600,500 C800,200 1000,600 1200,400',
          color: 'rgba(255,51,102,0.04)',
          width: 3,
          viewBox: '0 0 1300 900',
        },
        {
          d: 'M50,50 C200,150 150,300 350,200 C550,100 500,350 700,250',
          color: 'rgba(0,0,0,0.02)',
          width: 2,
          viewBox: '0 0 800 400',
        },
        {
          d: 'M0,400 C200,600 400,200 600,500 C800,800 1000,300 1200,600',
          color: 'rgba(255,230,0,0.04)',
          width: 3,
          viewBox: '0 0 1300 900',
        },
      ].map((line, i) => {
        const pathLen = 2000;
        return (
          <svg
            key={i}
            className="absolute inset-0 w-full h-full"
            viewBox={line.viewBox}
            preserveAspectRatio="none"
            style={{
              top: `${[5, 30, 55, 75][i]}%`,
              left: 0,
              width: '100%',
              height: `${[30, 35, 20, 30][i]}%`,
            }}
          >
            <path
              d={line.d}
              stroke={line.color}
              strokeWidth={line.width}
              strokeLinecap="round"
              fill="none"
              style={{
                strokeDasharray: pathLen,
                strokeDashoffset: pathLen,
                animation: `drawLine 6s cubic-bezier(0.16, 1, 0.3, 1) ${1 + i * 1.5}s forwards`,
              }}
            />
          </svg>
        );
      })}

      <style>{`
        @keyframes drawLine {
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </div>
  );
}
