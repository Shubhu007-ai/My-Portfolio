import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { developmentProcess } from '../../data/skills';
import { SectionHeading } from '../ui/SectionHeading';

export function HowIBuild() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };

  return (
    <div className="py-12">
      <SectionHeading
        number="05 / APPROACH"
        title="How I turn ideas into products."
        description="A structured development methodology focused on clarity, scalability, and high usability."
      />

      {/* DESKTOP PROCESS (Horizontal layout) */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="hidden lg:block relative mt-14"
      >
        {/* Horizontal Connecting Line */}
        <div className="absolute top-5 left-10 right-10 h-0.5 bg-[#E4E1D9] z-0">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { duration: 1.0, ease: 'easeInOut' }
            }
            className="h-full bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] origin-left"
          />
        </div>

        {/* 5 Sequential Steps */}
        <div className="grid grid-cols-5 gap-5 relative z-10">
          {developmentProcess.map((proc) => (
            <motion.div
              key={proc.step}
              variants={itemVariants}
              className="flex flex-col p-5 rounded-xl bg-white border border-[#E4E1D9] hover:border-[#4F46E5]/40 hover:shadow-sm transition-all duration-300 group shadow-sm"
            >
              {/* Dot & Step Number */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-[#4F46E5]">
                  {proc.step}
                </span>
                <div className="w-3 h-3 rounded-full bg-[#EEF2FF] border border-[#4F46E5] group-hover:bg-[#4F46E5] group-hover:shadow-[0_0_10px_rgba(79,70,229,0.5)] transition-all duration-300" />
              </div>

              <h4 className="text-base font-heading font-bold text-[#171717] group-hover:text-[#4F46E5] transition-colors mb-1.5">
                {proc.title}
              </h4>

              <p className="text-xs text-[#666666] font-sans leading-relaxed">
                {proc.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* MOBILE / TABLET PROCESS (Vertical layout with vertical line) */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="block lg:hidden relative mt-10 pl-6 sm:pl-8 space-y-6"
      >
        {/* Vertical Connecting Line */}
        <div className="absolute top-4 bottom-4 left-2.5 sm:left-3.5 w-0.5 bg-[#E4E1D9] z-0">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { duration: 1.0, ease: 'easeInOut' }
            }
            className="w-full bg-gradient-to-b from-[#4F46E5] to-[#7C3AED] origin-top h-full"
          />
        </div>

        {developmentProcess.map((proc) => (
          <motion.div
            key={proc.step}
            variants={itemVariants}
            className="relative flex flex-col p-4 sm:p-5 rounded-xl bg-white border border-[#E4E1D9] transition-all hover:border-[#4F46E5]/40 hover:shadow-sm group shadow-sm"
          >
            {/* Timeline Dot positioned on the line */}
            <div className="absolute -left-[27px] sm:-left-[35px] top-5 w-3 h-3 rounded-full bg-[#EEF2FF] border border-[#4F46E5] group-hover:bg-[#4F46E5] group-hover:shadow-[0_0_8px_rgba(79,70,229,0.5)] transition-all" />

            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono font-bold text-[#4F46E5]">
                {proc.step}
              </span>
              <span className="text-[#8A8A8A] font-mono text-xs">/</span>
              <h4 className="text-sm sm:text-base font-heading font-bold text-[#171717] group-hover:text-[#4F46E5] transition-colors">
                {proc.title}
              </h4>
            </div>

            <p className="text-xs sm:text-sm text-[#666666] font-sans leading-relaxed">
              {proc.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
