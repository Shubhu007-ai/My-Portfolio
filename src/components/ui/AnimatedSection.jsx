import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export function AnimatedSection({ 
  children, 
  className = '', 
  delay = 0,
  duration = 0.5,
  direction = 'up'
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const directionVariants = {
    up: { y: 25, x: 0 },
    down: { y: -25, x: 0 },
    left: { x: 25, y: 0 },
    right: { x: -25, y: 0 },
    none: { x: 0, y: 0 }
  };

  const initial = { 
    opacity: 0, 
    ...directionVariants[direction] 
  };

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ 
        duration: duration, 
        delay: delay, 
        ease: [0.21, 0.47, 0.32, 0.98] 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
