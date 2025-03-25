import { motion } from 'framer-motion';
import React from 'react';

const fadeVariants = {
  initial: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

interface FadeTransitionProps {
  children: React.ReactNode;
}

const FadeTransition: React.FC<FadeTransitionProps> = ({ children }) => (
  <motion.div
    initial="initial"
    animate="enter"
    exit="exit"
    variants={fadeVariants}
    transition={{ duration: 0.5, ease: 'easeInOut' }}
  >
    {children}
  </motion.div>
);

export default FadeTransition; 