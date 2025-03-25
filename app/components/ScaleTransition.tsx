import { motion } from 'framer-motion';
import React from 'react';

const scaleVariants = {
  initial: { opacity: 0, scale: 0.8 },
  enter: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
};

interface ScaleTransitionProps {
  children: React.ReactNode;
}

const ScaleTransition: React.FC<ScaleTransitionProps> = ({ children }) => (
  <motion.div
    initial="initial"
    animate="enter"
    exit="exit"
    variants={scaleVariants}
    transition={{ duration: 0.5, ease: 'easeInOut' }}
  >
    {children}
  </motion.div>
);

export default ScaleTransition; 