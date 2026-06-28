import { motion } from 'framer-motion';

export default function SplitText({ text, className = "", delay = 0, duration = 0.5, stagger = 0.06 }) {
  const words = text.split(" ");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay
      }
    }
  };

  const wordVariants = {
    hidden: { 
      y: "115%",
      opacity: 0
    },
    visible: { 
      y: 0,
      opacity: 1,
      transition: { 
        duration: duration, 
        ease: [0.16, 1, 0.3, 1] // easeOutExpo
      }
    }
  };

  return (
    <motion.span 
      className={`inline-flex flex-wrap ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden mr-[0.25em] py-[0.05em]">
          <motion.span
            className="inline-block"
            variants={wordVariants}
          >
            {word === "" ? "\u00A0" : word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
