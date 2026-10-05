import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { skillCategories } from '../../data/skills';
import { TechnologyBadge } from '../ui/TechnologyBadge';
import { AnimatedSection } from '../ui/AnimatedSection';

export function CapabilityCards() {
  return (
    <div className="space-y-4">
      <AnimatedSection>
        <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#171717] mb-8">
          Core capabilities.
        </h3>
      </AnimatedSection>

      <div className="divide-y divide-[#E4E1D9] border-t border-b border-[#E4E1D9]">
        {skillCategories.map((cat, idx) => (
          <AnimatedSection key={cat.id} delay={idx * 0.1}>
            <div className="group relative py-8 px-4 sm:px-6 transition-all duration-300 rounded-xl hover:bg-white hover:shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* Number & Title */}
                <div className="lg:col-span-4 flex items-start gap-4">
                  <span className="text-xl sm:text-2xl font-mono font-bold text-[#8A8A8A] group-hover:text-[#4F46E5] transition-colors duration-200">
                    {cat.number}
                  </span>
                  <div>
                    <h4 className="text-xl font-heading font-bold text-[#171717] group-hover:text-[#4F46E5] transition-colors duration-200 flex items-center gap-2">
                      {cat.title}
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 text-[#4F46E5]" />
                    </h4>
                  </div>
                </div>

                {/* Description & Tech Badges */}
                <div className="lg:col-span-8 space-y-4">
                  <p className="text-[#666666] text-sm sm:text-base leading-relaxed font-sans">
                    {cat.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2 transition-transform duration-200 group-hover:translate-x-1">
                    {cat.technologies.map((tech) => (
                      <TechnologyBadge
                        key={tech.name}
                        name={tech.name}
                        icon={tech.icon}
                      />
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
