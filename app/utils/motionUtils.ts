export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0 }
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 20 },
  show: { opacity: 1, x: 0 }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const transition = {
  duration: 0.4,
  ease: [0.43, 0.13, 0.23, 0.96]
};

export const staggerTransition = (delayChildren = 0.1, staggerChildren = 0.1) => ({
  delayChildren,
  staggerChildren,
});

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { 
    opacity: 1, 
    scale: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100
    }
  }
};

export const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.3 }
};

export const tapScale = {
  scale: 0.95,
  transition: { duration: 0.15 }
}; 