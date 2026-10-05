import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowRight, Download, Terminal, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';
import { SocialLinks } from '../ui/SocialLinks';
import { Magnetic } from '../ui/Magnetic';
import { socialLinks } from '../../data/socialLinks';
import { DURATION, EASING } from '../../utils/motion';

const roles = [
  "MERN Stack Developer",
  "Full Stack Developer",
  "React Developer"
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

const handleResumeDownload = () => {
  const link = document.createElement("a");
  link.href = "/Resume.pdf";
  link.download = "Shubham-Patel-Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.09,
        delayChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: DURATION.NORMAL, ease: EASING.PREMIUM }
    },
  };

  const visualVariants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.96, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: DURATION.SLOW, delay: shouldReduceMotion ? 0 : 0.25, ease: EASING.PREMIUM }
    }
  };

  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center py-16 lg:py-24 overflow-hidden">
      {/* Subtle background ambient warmth */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-[#4F46E5]/4 via-[#7C3AED]/4 to-transparent blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Hero Text Column: Editorial Layout */}
          <motion.div 
            className="lg:col-span-7 flex flex-col justify-center space-y-7"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* 1. Status Pill: AVAILABLE FOR OPPORTUNITIES */}
            <motion.div variants={itemVariants} className="inline-flex">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#EEF2FF] border border-[#4F46E5]/20 text-[#4F46E5] text-xs font-mono font-medium tracking-wide shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>AVAILABLE FOR OPPORTUNITIES</span>
              </div>
            </motion.div>

            {/* 2. Strong Display Typography: WHO I AM + WHAT I BUILD */}
            <motion.div variants={itemVariants} className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-xs sm:text-sm font-mono tracking-widest text-[#666666] uppercase font-semibold">
                  SHUBHAM PATEL
                </span>
                <span className="w-8 h-[1px] bg-[#E4E1D9]" />
                <span className="text-xs font-mono text-[#8A8A8A]">NEW DELHI, INDIA</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-[4.25rem] xl:text-[4.75rem] font-extrabold font-heading text-[#171717] tracking-tight leading-[1.04]">
                I BUILD<br />
                <span className="text-gradient">MODERN DIGITAL</span><br />
                EXPERIENCES.
              </h1>
            </motion.div>

            {/* 3. Secondary Dynamic Role Indicator with AnimatePresence */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 py-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-[#E4E1D9] text-xs sm:text-sm font-mono text-[#666666] shadow-xs">
                <span className="text-[#4F46E5] font-semibold">&lt;Developer /&gt;</span>
                <span className="w-1 h-3 bg-[#E4E1D9]" />
                <div className="overflow-hidden h-5 flex items-center min-w-[170px]">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={roleIndex}
                      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -10 }}
                      transition={{ duration: 0.35, ease: EASING.PREMIUM }}
                      className="text-[#171717] font-semibold inline-block"
                    >
                      {roles[roleIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* 4. Main Description */}
            <motion.div variants={itemVariants}>
              <p className="text-base sm:text-lg text-[#666666] max-w-xl leading-relaxed font-sans">
                I build responsive, scalable web applications with modern frontend experiences and reliable backend systems. Skilled in REST APIs, authentication, and full-stack MERN engineering.
              </p>
            </motion.div>

            {/* 5. CTAs with Magnetic Effect */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-1">
              <Magnetic maxDistance={4}>
                <Button to="/projects" variant="primary" size="lg" icon={ArrowRight}>
                  View My Work
                </Button>
              </Magnetic>
              <Button 
                onClick={handleResumeDownload} 
                variant="secondary" 
                size="lg" 
                icon={Download}
                title="Download Resume"
                aria-label="Download Resume"
              >
                Download Resume
              </Button>
            </motion.div>

            {/* 6. Compact Social Links */}
            <motion.div variants={itemVariants} className="pt-2 flex items-center gap-4">
              <span className="text-xs font-mono text-[#8A8A8A] uppercase tracking-wider font-medium">Connect:</span>
              <SocialLinks />
            </motion.div>
          </motion.div>

          {/* Right Column: Integrated Technical Developer Visual */}
          <motion.div 
            className="lg:col-span-5 flex justify-center lg:justify-end"
            variants={visualVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative w-full max-w-md">
              
              {/* Technical Coordinates & Spec Header */}
              <div className="flex items-center justify-between text-[11px] font-mono text-[#8A8A8A] px-2 mb-2">
                <span>LOC: 28.61° N, 77.20° E</span>
                <span className="text-[#4F46E5] font-semibold">SPEC: MERN FULL STACK</span>
              </div>

              {/* Main Code Window Card */}
              <div className="relative rounded-2xl bg-white border border-[#E4E1D9] p-6 shadow-sm hover:shadow-md hover:border-[#4F46E5]/30 transition-all duration-300">
                
                {/* Window Chrome Header */}
                <div className="flex items-center justify-between border-b border-[#E4E1D9] pb-3.5 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E4E1D9] border border-[#D8D4CA] inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E4E1D9] border border-[#D8D4CA] inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E4E1D9] border border-[#D8D4CA] inline-block" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#666666]">
                    <Terminal className="w-3.5 h-3.5 text-[#4F46E5]" />
                    <span className="font-medium">Developer.jsx</span>
                  </div>
                </div>

                {/* Technical Code Representation */}
                <div className="font-mono text-xs sm:text-[13px] space-y-2 text-[#171717] leading-relaxed overflow-x-auto py-1">
                  <div>
                    <span className="text-[#7C3AED] font-semibold">const</span>{' '}
                    <span className="text-[#4F46E5] font-semibold">developer</span>{' '}
                    <span className="text-[#666666]">=</span>{' '}
                    <span className="text-[#171717]">{"{"}</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-[#666666]">name:</span>{' '}
                    <span className="text-[#0D9488] font-medium">'Shubham Patel'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-[#666666]">role:</span>{' '}
                    <span className="text-[#0D9488] font-medium">'MERN Stack Developer'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-[#666666]">location:</span>{' '}
                    <span className="text-[#0D9488] font-medium">'New Delhi, India'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-[#666666]">stack:</span>{' '}
                    <span className="text-[#7C3AED]">[</span>
                  </div>
                  <div className="pl-8 text-[#4F46E5]">
                    'React.js', 'Node.js',
                  </div>
                  <div className="pl-8 text-[#4F46E5]">
                    'Express.js', 'MongoDB'
                  </div>
                  <div className="pl-4">
                    <span className="text-[#7C3AED]">]</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-[#666666]">status:</span>{' '}
                    <span className="text-[#D97706] font-medium">'Ready for Impact'</span>
                  </div>
                  <div>
                    <span className="text-[#171717]">{"}"}</span>;
                  </div>
                </div>

                {/* Card Technical Footer */}
                <div className="mt-5 pt-3.5 border-t border-[#E4E1D9] flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded bg-[#EEF2FF] text-[#4F46E5] text-[11px] font-mono border border-[#4F46E5]/20 font-medium">
                      Frontend &amp; Backend
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#666666] text-xs font-mono">
                    <Sparkles className="w-3.5 h-3.5 text-[#4F46E5]" />
                    <span>Clean Architecture</span>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-14 lg:mt-20 flex justify-center">
          <a
            href="#featured-projects"
            className="flex flex-col items-center gap-2 text-[#8A8A8A] hover:text-[#4F46E5] transition-colors text-xs font-mono group"
            aria-label="Scroll to featured projects"
          >
            <span>Scroll Down</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-[#4F46E5]" />
          </a>
        </div>

      </div>
    </section>
  );
}

