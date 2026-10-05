import React, { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export function Magnetic({ children, className = '', maxDistance = 5 }) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;

    // Constrain offset to maxDistance (4-6px)
    const factor = 0.12;
    const x = Math.max(-maxDistance, Math.min(maxDistance, deltaX * factor));
    const y = Math.max(-maxDistance, Math.min(maxDistance, deltaY * factor));

    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{
        type: 'spring',
        damping: 18,
        stiffness: 220,
        mass: 0.2,
      }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}
