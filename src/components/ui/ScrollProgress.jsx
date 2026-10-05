import React from 'react';
import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion';

export function ScrollProgress() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  if (shouldReduceMotion) return null;

  return (
    <motion.div
      style={{ scaleX, transformOrigin: '0%' }}
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#4F46E5] via-[#6366F1] to-[#7C3AED] z-50 pointer-events-none shadow-xs"
      aria-hidden="true"
    />
  );
}
