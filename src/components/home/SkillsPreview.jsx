import React from 'react';
import { ArrowRight } from 'lucide-react';
import { skillCategories } from '../../data/skills';
import { SectionHeading } from '../ui/SectionHeading';
import { TechnologyBadge } from '../ui/TechnologyBadge';
import { Button } from '../ui/Button';
import { AnimatedSection } from '../ui/AnimatedSection';

export function SkillsPreview() {
  return (
    <section id="tech-stack-preview" className="py-24 sm:py-32 bg-[#F7F5F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <AnimatedSection>
          <SectionHeading
            number="04 / SKILLS"
            title="Technical ecosystem & core stack."
            description="A structured full-stack toolkit focused on modern frontend engineering, robust backend APIs, databases, and development workflows."
          />
        </AnimatedSection>

        {/* 3-Column Structured Technical System */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 sm:mt-16">
          {skillCategories.map((cat, idx) => (
            <AnimatedSection key={cat.id} delay={idx * 0.1} className="h-full">
              <div className="p-7 sm:p-8 rounded-2xl bg-white border border-[#E4E1D9] hover:border-[#4F46E5]/40 transition-all duration-300 shadow-xs hover:shadow-sm h-full flex flex-col justify-between">
                
                {/* Column Header */}
                <div className="space-y-3 pb-6 border-b border-[#E4E1D9]">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#4F46E5]">
                      {cat.number}
                    </span>
                    <span className="text-[11px] font-mono text-[#8A8A8A] uppercase">
                      {cat.technologies.length} TECHNOLOGIES
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-heading font-extrabold text-[#171717] tracking-tight">
                    {cat.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#666666] font-sans leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                {/* Technology Badges List */}
                <div className="pt-6 flex flex-wrap gap-2.5 flex-grow content-start">
                  {cat.technologies.map((tech) => (
                    <TechnologyBadge
                      key={tech.name}
                      name={tech.name}
                      icon={tech.icon}
                    />
                  ))}
                </div>

              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom CTA Flowing to Projects */}
        <AnimatedSection delay={0.35} className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center justify-between gap-6 p-6 sm:p-7 rounded-2xl bg-white border border-[#E4E1D9] max-w-xl mx-auto w-full shadow-xs">
            <div className="text-left space-y-0.5">
              <p className="text-[#171717] font-heading font-bold text-sm sm:text-base">
                Want to see these technologies in action?
              </p>
              <p className="text-[#666666] text-xs font-sans">
                Explore real projects built with React, Node.js, Express &amp; MongoDB.
              </p>
            </div>
            <Button to="/projects" variant="primary" size="md" icon={ArrowRight} className="shrink-0">
              Explore Projects
            </Button>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}

