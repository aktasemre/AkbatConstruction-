'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useReducedMotion } from 'framer-motion';

const ServiceTransition = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  
  const serviceVariants = shouldReduceMotion
    ? {
        hidden: { opacity: 0 },
        enter: { opacity: 1 },
        exit: { opacity: 0 },
      }
    : {
        hidden: { opacity: 0, scale: 0.98 },
        enter: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.98 },
      };
  
  return (
    <motion.div
      key={pathname}
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={serviceVariants}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
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

export default ServiceTransition; 