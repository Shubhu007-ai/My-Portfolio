/**
 * Centralized motion design system for Shubham Patel Portfolio
 * Stage 3 - Premium Motion + Interaction System
 */

// Timing system
export const DURATION = {
  FAST: 0.25,
  NORMAL: 0.5,
  SLOW: 0.8,
};

// Premium easing curves
export const EASING = {
  // Editorial custom cubic-bezier for snappy, premium deceleration
  PREMIUM: [0.21, 0.47, 0.32, 0.98],
  SMOOTH: [0.25, 0.1, 0.25, 1.0],
  EASE_OUT: [0, 0, 0.2, 1],
  SPRING_SUBTLE: { type: "spring", damping: 20, stiffness: 200 },
};

// Reusable Framer Motion Variants

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION.NORMAL, ease: EASING.PREMIUM },
  },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.NORMAL, ease: EASING.PREMIUM },
  },
};

export const fadeDown = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.NORMAL, ease: EASING.PREMIUM },
  },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATION.NORMAL, ease: EASING.PREMIUM },
  },
};

export const fadeRight = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATION.NORMAL, ease: EASING.PREMIUM },
  },
};

export const scaleReveal = {
  hidden: { opacity: 0, scale: 0.97, y: 12 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: DURATION.NORMAL, ease: EASING.PREMIUM },
  },
};

export const staggerContainer = (staggerChildren = 0.08, delayChildren = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const pageTransition = {
  initial: {
    opacity: 0,
    y: 12,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: EASING.PREMIUM,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: EASING.EASE_OUT,
    },
  },
};

// Subtle line reveal for timeline and dividers
export const lineReveal = {
  hidden: { scaleY: 0, originY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: DURATION.SLOW, ease: EASING.PREMIUM },
  },
};

// Horizontal line reveal
export const horizontalLineReveal = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: DURATION.SLOW, ease: EASING.PREMIUM },
  },
};
