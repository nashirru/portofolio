import { motion } from 'framer-motion';

/**
 * SplitText — Word-by-word staggered reveal animation.
 * Each word rises from below with a slight rotate, using a snappy
 * cubic-bezier curve that fits the brutalist aesthetic.
 */
export default function SplitText({
  text,
  className = '',
  delay = 0,
  stagger = 0.08,
  duration = 0.5,
  wordClassName = '',
}) {
  const words = text.split(' ');

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: { y: '110%', rotateZ: 5, opacity: 0 },
    visible: {
      y: 0,
      rotateZ: 0,
      opacity: 1,
      transition: {
        duration,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  return (
    <span className={`inline-flex flex-wrap ${className}`}>
      <motion.span
        className="inline-flex flex-wrap"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {words.map((word, index) => (
          <span
            key={index}
            className={`inline-block overflow-hidden mr-[0.3em] last:mr-0 ${wordClassName}`}
          >
            <motion.span className="inline-block" variants={wordVariants}>
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </span>
  );
}
