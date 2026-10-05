import React from 'react';
import { ArrowRight, Code2, Server, Database, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { AnimatedSection } from '../ui/AnimatedSection';

export function AboutPreview() {
  return (
    <section className="py-24 sm:py-32 bg-[#EFEDE7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Asymmetric Editorial Header & Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Section Label & Large Editorial Statement */}
          <AnimatedSection className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono tracking-widest text-[#4F46E5] font-semibold uppercase">
                01 / ABOUT
              </span>
              <span className="w-10 h-[1.5px] bg-[#E4E1D9]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#171717] tracking-tight leading-[1.12]">
              "Building thoughtful digital experiences, one component at a time."
            </h2>

            <div className="pt-2">
              <Button to="/about" variant="outline" size="md" icon={ArrowRight}>
                More About Me
              </Button>
            </div>
          </AnimatedSection>

          {/* Right Column: Personal Introduction & Core Focus */}
          <AnimatedSection className="lg:col-span-6 space-y-6" delay={0.15}>
            <p className="text-[#171717] text-base sm:text-lg leading-relaxed font-sans">
              I am a Web Developer based in <span className="font-semibold text-[#171717]">New Delhi, India</span> with hands-on experience building responsive web applications and solid MERN stack knowledge, including <span className="text-[#4F46E5] font-semibold">React.js</span>, <span className="text-[#4F46E5] font-semibold">Node.js</span>, <span className="text-[#4F46E5] font-semibold">Express.js</span>, and <span className="text-[#4F46E5] font-semibold">MongoDB</span>.
            </p>
            <p className="text-[#666666] text-sm sm:text-base leading-relaxed font-sans">
              My core focus is on creating clean, intuitive frontend interfaces paired with well-structured REST APIs and database models. I value maintainable code, modern JavaScript practices, and continuous learning.
            </p>

            {/* Core Focus Tags */}
            <div className="pt-2 space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#8A8A8A] font-semibold block">
                CORE FOCUS
              </span>
              <div className="flex flex-wrap gap-2.5">
                <span className="px-3 py-1.5 rounded-lg bg-white border border-[#E4E1D9] text-xs font-medium text-[#171717] shadow-xs">
                  Frontend Engineering
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-white border border-[#E4E1D9] text-xs font-medium text-[#171717] shadow-xs">
                  Backend Architecture &amp; REST APIs
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-white border border-[#E4E1D9] text-xs font-medium text-[#171717] shadow-xs">
                  Clean Component Design
                </span>
              </div>
            </div>
          </AnimatedSection>

        </div>

        {/* Editorial Metadata Stats Bar */}
        <AnimatedSection delay={0.2} className="mt-16 sm:mt-20">
          <div className="rounded-2xl bg-white border border-[#E4E1D9] p-6 sm:p-8 shadow-xs">
            <motion.div 
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#E4E1D9]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ staggerChildren: 0.08 }}
            >
              
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] } }
                }}
                className="pt-4 sm:pt-0 sm:px-4 first:pt-0 first:px-0"
              >
                <span className="text-2xl sm:text-3xl font-extrabold font-heading text-[#171717] block">
                  06 MONTHS
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-[#4F46E5] font-semibold mt-1 block">
                  MERN INTERNSHIP
                </span>
                <span className="text-xs text-[#666666] mt-0.5 block">CodSoft &amp; Bootcamps</span>
              </motion.div>

              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] } }
                }}
                className="pt-4 sm:pt-0 sm:px-6"
              >
                <span className="text-2xl sm:text-3xl font-extrabold font-heading text-[#171717] block">
                  03+
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-[#4F46E5] font-semibold mt-1 block">
                  MAJOR PROJECTS
                </span>
                <span className="text-xs text-[#666666] mt-0.5 block">Full-Stack &amp; Web Apps</span>
              </motion.div>

              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] } }
                }}
                className="pt-4 sm:pt-0 sm:px-6"
              >
                <span className="text-2xl sm:text-3xl font-extrabold font-heading text-[#171717] block">
                  MERN
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-[#4F46E5] font-semibold mt-1 block">
                  PRIMARY STACK
                </span>
                <span className="text-xs text-[#666666] mt-0.5 block">React, Node, Express, Mongo</span>
              </motion.div>

              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] } }
                }}
                className="pt-4 sm:pt-0 sm:px-6"
              >
                <span className="text-2xl sm:text-3xl font-extrabold font-heading text-[#171717] block">
                  NEW DELHI
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-[#4F46E5] font-semibold mt-1 block">
                  LOCATION
                </span>
                <span className="text-xs text-[#666666] mt-0.5 block">India (Open to Remote/Relo)</span>
              </motion.div>

            </motion.div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
