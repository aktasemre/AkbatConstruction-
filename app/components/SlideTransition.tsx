import { motion } from 'framer-motion';
import React from 'react';

const slideVariants = {
  initial: { opacity: 0, x: -100 },
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
};

interface SlideTransitionProps {
  children: React.ReactNode;
}

const SlideTransition: React.FC<SlideTransitionProps> = ({ children }) => (
  <motion.div
    initial="initial"
    animate="enter"
    exit="exit"
    variants={slideVariants}
    transition={{ duration: 0.5, ease: 'easeInOut' }}
  >
    {children}
  </motion.div>
);

export default SlideTransition; 