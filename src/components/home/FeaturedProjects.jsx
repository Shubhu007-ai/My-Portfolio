import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { projects } from '../../data/projects';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { ProjectBrowserMockup } from '../ui/ProjectBrowserMockup';
import { AnimatedSection } from '../ui/AnimatedSection';
import { DURATION, EASING } from '../../utils/motion';

export function FeaturedProjects() {
  const shouldReduceMotion = useReducedMotion();

  // Exact fixed project order: 1: RS Education Solution, 2: AgriTech AI, 3: Food Delight
  const p1 = projects.find(p => p.order === 1) || projects[0];
  const p2 = projects.find(p => p.order === 2) || projects[1];
  const p3 = projects.find(p => p.order === 3) || projects[2];

  // Alternating directional reveals with subtle X offsets (24px max)
  const revealLeft = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -24, y: shouldReduceMotion ? 0 : 12 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: DURATION.NORMAL, ease: EASING.PREMIUM }
    }
  };

  const revealRight = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : 24, y: shouldReduceMotion ? 0 : 12 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: DURATION.NORMAL, ease: EASING.PREMIUM }
    }
  };

  return (
    <section id="featured-projects" className="py-24 sm:py-32 lg:py-40 bg-[#EFEDE7] relative overflow-hidden border-t border-[#E4E1D9]">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#4F46E5]/4 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-24 gap-6">
            <SectionHeading
              number="05 / SELECTED WORK"
              title="SELECTED PROJECTS"
              description="Engineered web applications delivering practical user experiences, clean component architecture, and dependable full-stack implementations."
            />
            <Button to="/projects" variant="outline" size="md" icon={ArrowRight} className="self-start md:self-auto shrink-0 bg-white">
              View All Projects
            </Button>
          </div>
        </AnimatedSection>

        <div className="space-y-16 sm:space-y-24 lg:space-y-32">
          
          {/* ====================================================
              FEATURED PROJECT 1: RS Education Solution
              Asymmetric layout: Left details, Right large preview
             ==================================================== */}
          {p1 && (
            <motion.div 
              className="group p-6 sm:p-10 lg:p-12 rounded-2xl bg-white border border-[#E4E1D9] hover:border-[#4F46E5]/40 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left Column: Details (Reveals from Left) */}
                <motion.div 
                  className="lg:col-span-5 space-y-6 order-2 lg:order-1"
                  variants={revealLeft}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-[#4F46E5] tracking-widest uppercase">
                      01 / PROJECT
                    </span>
                    <span className="w-8 h-[1px] bg-[#E4E1D9]" />
                    <span className="text-[11px] font-mono text-[#666666] px-2.5 py-0.5 rounded-sm bg-[#F7F5F0] border border-[#E4E1D9]">
                      {p1.category}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-[#171717] group-hover:text-[#4F46E5] transition-colors tracking-tight">
                      {p1.title}
                    </h3>
                    <p className="text-sm sm:text-base font-heading font-medium text-[#4F46E5]">
                      {p1.subtitle}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-[#666666] font-sans leading-relaxed">
                    {p1.shortDescription}
                  </p>

                  {/* Compact Technical Stack Badges */}
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-2">
                      {p1.technologies.map(tech => (
                        <span 
                          key={tech} 
                          className="px-2.5 py-1 text-xs font-mono font-medium rounded-sm bg-[#F7F5F0] text-[#171717] border border-[#E4E1D9] hover:border-[#4F46E5]/40 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#E4E1D9]">
                    <Button to={`/projects/${p1.slug}`} variant="outline" size="md" icon={ArrowRight}>
                      View Project →
                    </Button>
                    {p1.liveUrl && (
                      <Button 
                        href={p1.liveUrl} 
                        variant="primary" 
                        size="md" 
                        icon={ExternalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Website
                      </Button>
                    )}
                  </div>
                </motion.div>

                {/* Right Column: Large Browser Mockup (Reveals from Right) */}
                <motion.div 
                  className="lg:col-span-7 order-1 lg:order-2 overflow-hidden rounded-xl sm:rounded-2xl"
                  variants={revealRight}
                >
                  <motion.div
                    whileHover={{ scale: shouldReduceMotion ? 1 : 1.025 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  >
                    <ProjectBrowserMockup project={p1} isFeatured={true} />
                  </motion.div>
                </motion.div>

              </div>
            </motion.div>
          )}

          {/* ====================================================
              FEATURED PROJECT 2: AgriTech AI
              Reversed Alternating layout: Left preview, Right details
             ==================================================== */}
          {p2 && (
            <motion.div 
              className="group p-6 sm:p-10 lg:p-12 rounded-2xl bg-white border border-[#E4E1D9] hover:border-[#059669]/40 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left Column: Large Browser Mockup (Reveals from Left) */}
                <motion.div 
                  className="lg:col-span-7 order-1 overflow-hidden rounded-xl sm:rounded-2xl"
                  variants={revealLeft}
                >
                  <motion.div
                    whileHover={{ scale: shouldReduceMotion ? 1 : 1.025 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  >
                    <ProjectBrowserMockup project={p2} isFeatured={true} />
                  </motion.div>
                </motion.div>

                {/* Right Column: Details (Reveals from Right) */}
                <motion.div 
                  className="lg:col-span-5 space-y-6 order-2"
                  variants={revealRight}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-[#059669] tracking-widest uppercase">
                      02 / PROJECT
                    </span>
                    <span className="w-8 h-[1px] bg-[#E4E1D9]" />
                    <span className="text-[11px] font-mono text-[#666666] px-2.5 py-0.5 rounded-sm bg-[#F7F5F0] border border-[#E4E1D9]">
                      {p2.category}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-[#171717] group-hover:text-[#059669] transition-colors tracking-tight">
                      {p2.title}
                    </h3>
                    <p className="text-sm sm:text-base font-heading font-medium text-[#059669]">
                      {p2.subtitle}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-[#666666] font-sans leading-relaxed">
                    {p2.shortDescription}
                  </p>

                  {/* Compact Technical Stack Badges */}
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-2">
                      {p2.technologies.map(tech => (
                        <span 
                          key={tech} 
                          className="px-2.5 py-1 text-xs font-mono font-medium rounded-sm bg-[#F7F5F0] text-[#171717] border border-[#E4E1D9] hover:border-[#059669]/40 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#E4E1D9]">
                    <Button to={`/projects/${p2.slug}`} variant="outline" size="md" icon={ArrowRight}>
                      View Project →
                    </Button>
                    {p2.liveUrl && (
                      <Button 
                        href={p2.liveUrl} 
                        variant="primary" 
                        size="md" 
                        icon={ExternalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#059669] hover:bg-[#047857]"
                      >
                        Live Website
                      </Button>
                    )}
                  </div>
                </motion.div>

              </div>
            </motion.div>
          )}

          {/* ====================================================
              FEATURED PROJECT 3: Food Delight
              Clean asymmetric layout, NO fake live URL button
             ==================================================== */}
          {p3 && (
            <motion.div 
              className="group p-6 sm:p-10 lg:p-12 rounded-2xl bg-white border border-[#E4E1D9] hover:border-[#D97706]/40 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left Column: Details (Reveals from Left) */}
                <motion.div 
                  className="lg:col-span-6 space-y-6 order-2 lg:order-1"
                  variants={revealLeft}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-[#D97706] tracking-widest uppercase">
                      03 / PROJECT
                    </span>
                    <span className="w-8 h-[1px] bg-[#E4E1D9]" />
                    <span className="text-[11px] font-mono text-[#666666] px-2.5 py-0.5 rounded-sm bg-[#F7F5F0] border border-[#E4E1D9]">
                      {p3.category}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-[#171717] group-hover:text-[#D97706] transition-colors tracking-tight">
                      {p3.title}
                    </h3>
                    <p className="text-sm sm:text-base font-heading font-medium text-[#D97706]">
                      {p3.subtitle}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-[#666666] font-sans leading-relaxed">
                    {p3.shortDescription}
                  </p>

                  {/* Compact Technical Stack Badges */}
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-2">
                      {p3.technologies.map(tech => (
                        <span 
                          key={tech} 
                          className="px-2.5 py-1 text-xs font-mono font-medium rounded-sm bg-[#F7F5F0] text-[#171717] border border-[#E4E1D9] hover:border-[#D97706]/40 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions - Strictly no fake live link */}
                  <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#E4E1D9]">
                    <Button to={`/projects/${p3.slug}`} variant="outline" size="md" icon={ArrowRight}>
                      View Project →
                    </Button>
                    <span className="text-xs font-mono text-[#8A8A8A]">
                      Local UI / Component Architecture
                    </span>
                  </div>
                </motion.div>

                {/* Right Column: Preview (Reveals from Right) */}
                <motion.div 
                  className="lg:col-span-6 order-1 lg:order-2 overflow-hidden rounded-xl sm:rounded-2xl"
                  variants={revealRight}
                >
                  <motion.div
                    whileHover={{ scale: shouldReduceMotion ? 1 : 1.025 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  >
                    <ProjectBrowserMockup project={p3} />
                  </motion.div>
                </motion.div>

              </div>
            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
}


