import React from 'react';
import { Sparkles, Compass } from 'lucide-react';
import { exploringTechs } from '../../data/skills';
import { AnimatedSection } from '../ui/AnimatedSection';

export function LearningMindset() {
  return (
    <AnimatedSection className="py-8">
      <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#E4E1D9] shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF2FF] border border-[#4F46E5]/30 text-[#4F46E5] text-xs font-mono">
              <Compass className="w-3.5 h-3.5 text-[#4F46E5]" />
              <span>Learning Mindset</span>
            </div>
            
            <h3 className="text-2xl font-bold font-heading text-[#171717]">
              Always learning.
            </h3>

            <p className="text-[#666666] text-sm sm:text-base leading-relaxed font-sans">
              I continuously explore modern web technologies and better development practices to improve the applications I build.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="p-4 rounded-xl bg-[#EFEDE7] border border-[#E4E1D9] space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#666666] uppercase tracking-widest font-semibold border-b border-[#E4E1D9] pb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#4F46E5]" />
                <span>Currently Exploring</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                {exploringTechs.map((tech) => (
                  <div 
                    key={tech.name}
                    className="p-3 rounded-lg bg-white border border-[#E4E1D9] text-center flex flex-col justify-between shadow-xs"
                  >
                    <span className="text-xs font-bold text-[#171717] font-heading">
                      {tech.name}
                    </span>
                    <span className="text-[10px] text-[#4F46E5] font-mono mt-1">
                      {tech.focus}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </AnimatedSection>
  );
}
