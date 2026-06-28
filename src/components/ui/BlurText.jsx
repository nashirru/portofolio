import { motion } from 'framer-motion';

export default function BlurText({ text, className = "", delay = 0, duration = 0.6, stagger = 0.025 }) {
  const characters = Array.from(text);
  
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay
      }
    }
  };

  const charVariants = {
    hidden: { 
      filter: "blur(8px)", 
      opacity: 0, 
      y: 10 
    },
    visible: { 
      filter: "blur(0px)", 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: duration, 
        ease: [0.215, 0.61, 0.355, 1.0] // OutCubic
      }
    }
  };

  return (
    <motion.span 
      className={`inline-block ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          className="inline-block whitespace-pre"
          variants={charVariants}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}
