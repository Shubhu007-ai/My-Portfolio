import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: shouldReduceMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.85, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 12 }}
          whileHover={shouldReduceMotion ? {} : { y: -3, scale: 1.05 }}
          whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-[#E4E1D9] text-[#666666] hover:text-[#4F46E5] hover:border-[#4F46E5] hover:bg-[#EEF2FF] shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/40"
        >
          <ArrowUp className="w-4 h-4" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
