'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useReducedMotion } from 'framer-motion';

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  
  const variants = shouldReduceMotion 
    ? {
        hidden: { opacity: 0 },
        enter: { opacity: 1 },
        exit: { opacity: 0 },
      }
    : {
        hidden: { opacity: 0, y: 20 },
        enter: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 20 },
      };
  
  return (
    <motion.div
      key={pathname}
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: 'easeInOut' }}
      className="page-transition-container"
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        willChange: 'opacity, transform'
      }}
    >
      {children}
    </motion.div>
  );
}

export default PageTransition; 