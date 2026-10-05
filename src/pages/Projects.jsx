import React, { useState, useEffect } from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { PageLayout } from '../components/layout/PageLayout';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import { ProjectCard } from '../components/ui/ProjectCard';
import { Button } from '../components/ui/Button';
import { ContactCTA } from '../components/home/ContactCTA';
import { projects } from '../data/projects';
import { socialLinks } from '../data/socialLinks';

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    document.title = 'Projects | Shubham Patel';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Selected web development projects by Shubham Patel: RS Education Solution, AgriTech AI, and Food Delight.');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const filterTabs = ['All', 'Full Stack', 'Frontend'];

  // Keep strict project order (1: RS Education Solution, 2: AgriTech AI, 3: Food Delight)
  const sortedProjects = [...projects].sort((a, b) => a.order - b.order);

  const filteredProjects = activeFilter === 'All'
    ? sortedProjects
    : sortedProjects.filter((p) => p.filterCategory === activeFilter);

  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
        
        {/* Projects Hero */}
        <AnimatedSection className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEF2FF] border border-[#4F46E5]/30 text-[#4F46E5] text-xs font-mono font-medium">
            PROJECTS
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#171717] tracking-tight leading-tight">
            Selected work,{' '}
            <span className="text-gradient">built with purpose.</span>
          </h1>

          <p className="text-[#666666] text-base sm:text-lg leading-relaxed font-sans max-w-2xl">
            A collection of web applications and interfaces I've worked on across frontend and full-stack development.
          </p>
        </AnimatedSection>

        {/* Filter Categories */}
        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap items-center gap-2.5 pb-2">
            {filterTabs.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-xl text-xs font-medium font-mono transition-all duration-200 ${
                  activeFilter === filter
                    ? 'bg-[#4F46E5] text-white shadow-sm border border-[#4F46E5]'
                    : 'bg-white text-[#666666] hover:text-[#171717] hover:border-[#4F46E5]/40 border border-[#E4E1D9]'
                }`}
              >
                {filter}
                <span className="ml-2 text-[10px] opacity-60">
                  {filter === 'All' 
                    ? sortedProjects.length 
                    : sortedProjects.filter(p => p.filterCategory === filter).length}
                </span>
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={idx}
            />
          ))}
        </div>

        {/* Bottom Contact CTA */}
        <ContactCTA />

      </div>
    </PageLayout>
  );
}
