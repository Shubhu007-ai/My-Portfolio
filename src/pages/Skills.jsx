import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { PageLayout } from '../components/layout/PageLayout';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import { Button } from '../components/ui/Button';
import { ContactCTA } from '../components/home/ContactCTA';
import { TechOrbit } from '../components/skills/TechOrbit';
import { CapabilityCards } from '../components/skills/CapabilityCards';
import { HowIBuild } from '../components/skills/HowIBuild';
import { LearningMindset } from '../components/skills/LearningMindset';

export function Skills() {
  useEffect(() => {
    document.title = 'Skills | Shubham Patel';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Technical skills and toolkit of Shubham Patel: React.js, Node.js, Express.js, MongoDB, JavaScript (ES6+), Next.js, and modern web development tools.');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
        
        {/* Skills Page Hero */}
        <AnimatedSection className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEF2FF] border border-[#4F46E5]/30 text-[#4F46E5] text-xs font-mono font-medium">
            SKILLS & TECHNOLOGIES
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#171717] tracking-tight leading-tight">
            Technologies behind the{' '}
            <span className="text-gradient">experiences I build.</span>
          </h1>

          <p className="text-[#666666] text-base sm:text-lg leading-relaxed font-sans max-w-2xl mx-auto">
            My toolkit covers modern frontend development, backend APIs, databases and the tools I use to turn ideas into reliable web applications.
          </p>
        </AnimatedSection>

        {/* 1. Interactive Tech Orbit Visual */}
        <AnimatedSection delay={0.2}>
          <TechOrbit />
        </AnimatedSection>

        {/* 2. Core Capabilities Editorial List */}
        <CapabilityCards />

        {/* 3. How I Build Development Process */}
        <HowIBuild />

        {/* 4. Learning Mindset Section */}
        <LearningMindset />

        {/* 5. Natural CTA Flowing to Projects */}
        <AnimatedSection className="text-center pt-8">
          <div className="inline-flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-2xl bg-white border border-[#E4E1D9] shadow-sm max-w-2xl mx-auto w-full">
            <div className="text-left space-y-1">
              <h3 className="text-lg font-heading font-bold text-[#171717]">
                Want to see these technologies in action?
              </h3>
              <p className="text-[#666666] text-xs sm:text-sm">
                Explore real projects built with React, Node.js, Express & MongoDB.
              </p>
            </div>
            <Button to="/projects" variant="primary" size="lg" icon={ArrowRight} className="shrink-0">
              Explore My Projects
            </Button>
          </div>
        </AnimatedSection>

        {/* 6. Contact CTA */}
        <ContactCTA />

      </div>
    </PageLayout>
  );
}
