import React from 'react';
import { ArrowRight, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import { experiences } from '../../data/experience';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { AnimatedSection } from '../ui/AnimatedSection';

export function ExperiencePreview() {
  return (
    <section className="py-24 sm:py-32 bg-[#F7F5F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimatedSection>
          <SectionHeading
            number="02 / EXPERIENCE"
            title="Practical engineering journey."
            description="Hands-on experience developing full-stack web applications, architecting REST APIs, and implementing reliable client interfaces."
          />
        </AnimatedSection>

        {/* Vertical Editorial Timeline */}
        <div className="relative mt-12 sm:mt-16 pl-6 sm:pl-10 space-y-12">
          
          {/* Vertical Connecting Line with gradual reveal */}
          <motion.div 
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            style={{ originY: 0 }}
            className="absolute top-3 bottom-3 left-2 sm:left-3 w-[1.5px] bg-[#E4E1D9]" 
          />

          {experiences.map((exp, idx) => (
            <AnimatedSection key={exp.id} delay={0.15 + idx * 0.12} className="relative">
              
              {/* Timeline Indicator Node with subtle pop-in */}
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: 0.25 + idx * 0.1, duration: 0.4, ease: 'easeOut' }}
                className="absolute -left-[27px] sm:-left-[39px] top-6 w-4 h-4 rounded-full bg-white border-2 border-[#4F46E5] flex items-center justify-center shadow-xs"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5]" />
              </motion.div>

              {/* Experience Entry Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E4E1D9] hover:border-[#4F46E5]/40 transition-all duration-300 shadow-xs hover:shadow-sm space-y-4">
                
                {/* Header: ROLE -> Company -> Date */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-3 border-b border-[#E4E1D9]">
                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-[#171717]">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2.5 text-sm">
                      <span className="font-semibold text-[#4F46E5]">{exp.company}</span>
                      <span className="text-[#8A8A8A] font-mono text-xs">•</span>
                      <span className="text-[#8A8A8A] font-mono text-xs">{exp.location}</span>
                    </div>
                  </div>

                  <span className="text-xs font-mono text-[#666666] bg-[#EFEDE7] px-3.5 py-1.5 rounded-full border border-[#E4E1D9] self-start sm:self-auto shrink-0 font-medium">
                    {exp.period}
                  </span>
                </div>

                {/* Description */}
                <p className="text-[#666666] text-sm sm:text-base leading-relaxed font-sans">
                  {exp.description}
                </p>

                {/* Highlights */}
                <div className="pt-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#8A8A8A] font-semibold block mb-2.5">
                    KEY HIGHLIGHTS
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#666666] font-sans">
                    {exp.highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5] shrink-0 mt-2" />
                        <span className="text-[#171717]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}
