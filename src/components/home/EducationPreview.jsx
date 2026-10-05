import React from 'react';
import { GraduationCap, MapPin, Calendar, BookOpen } from 'lucide-react';
import { education } from '../../data/education';
import { SectionHeading } from '../ui/SectionHeading';
import { AnimatedSection } from '../ui/AnimatedSection';

export function EducationPreview() {
  return (
    <section className="py-24 sm:py-32 bg-[#EFEDE7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimatedSection>
          <SectionHeading
            number="03 / EDUCATION"
            title="Academic background & technical foundation."
            description="Formal university education supporting my software engineering capabilities."
          />
        </AnimatedSection>

        <div className="mt-12 sm:mt-16 max-w-4xl">
          {education.map((edu, idx) => (
            <AnimatedSection key={edu.id || idx} delay={idx * 0.1}>
              <div className="p-7 sm:p-9 rounded-2xl bg-white border border-[#E4E1D9] shadow-xs relative overflow-hidden">
                
                {/* Subtle top architectural accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED]" />

                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-[#E4E1D9]">
                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-[#171717]">
                      {edu.degree}
                    </h3>
                    <p className="text-sm sm:text-base font-semibold text-[#4F46E5]">
                      {edu.institution}
                    </p>
                    <p className="text-xs text-[#8A8A8A] font-mono flex items-center gap-1.5 pt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-[#4F46E5]" />
                      <span>{edu.location}</span>
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-3 self-start lg:self-auto shrink-0">
                    {edu.cgpa && (
                      <span className="text-xs font-mono text-[#4F46E5] bg-[#EEF2FF] px-3.5 py-1.5 rounded-full border border-[#4F46E5]/20 font-bold">
                        CGPA: {edu.cgpa}
                      </span>
                    )}
                    <span className="text-xs font-mono text-[#666666] bg-[#EFEDE7] px-3.5 py-1.5 rounded-full border border-[#E4E1D9] flex items-center gap-1.5 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-[#4F46E5]" />
                      <span>{edu.period}</span>
                    </span>
                  </div>
                </div>

                <div className="pt-4">
                  <p className="text-[#666666] text-sm sm:text-base leading-relaxed font-sans">
                    {edu.details}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}
