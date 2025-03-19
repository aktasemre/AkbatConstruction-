'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useReducedMotion } from 'framer-motion';

const DirectionalTransition = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [prevPath, setPrevPath] = useState('');
  const [direction, setDirection] = useState('forward');
  const shouldReduceMotion = useReducedMotion();
  
  useEffect(() => {
    if (prevPath === '') {
      setPrevPath(pathname);
      return;
    }
    
    // Sayfa derinliğini kontrol et
    const prevDepth = (prevPath.match(/\//g) || []).length;
    const currentDepth = (pathname.match(/\//g) || []).length;
    
    if (prevDepth < currentDepth) {
      setDirection('forward');
    } else if (prevDepth > currentDepth) {
      setDirection('backward');
    } else {
      // Aynı derinlikte - yol adı karşılaştırması yap
      setDirection(prevPath < pathname ? 'forward' : 'backward');
    }
    
    setPrevPath(pathname);
  }, [pathname, prevPath]);
  
  const forwardVariants = shouldReduceMotion
    ? {
        hidden: { opacity: 0 },
        enter: { opacity: 1 },
        exit: { opacity: 0 },
      }
    : {
        hidden: { opacity: 0, x: 50 },
        enter: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -50 },
      };
      
  const backwardVariants = shouldReduceMotion
    ? {
        hidden: { opacity: 0 },
        enter: { opacity: 1 },
        exit: { opacity: 0 },
      }
    : {
        hidden: { opacity: 0, x: -50 },
        enter: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 50 },
      };
  
  const variants = direction === 'forward' ? forwardVariants : backwardVariants;
  
  return (
    <motion.div
      key={pathname}
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.3, ease: "easeInOut" }}
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

export default DirectionalTransition; 