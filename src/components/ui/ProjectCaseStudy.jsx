import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink, CheckCircle2, Layers, Cpu, Database, Sparkles, Mail } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';
import { TechnologyBadge } from './TechnologyBadge';
import { ProjectBrowserMockup } from './ProjectBrowserMockup';
import { Button } from './Button';
import { getAdjacentProjects } from '../../data/projects';
import { socialLinks } from '../../data/socialLinks';

export function ProjectCaseStudy({ project }) {
  const shouldReduceMotion = useReducedMotion();
  const { previous, next } = getAdjacentProjects(project.slug);
  const projectNumber = `0${project.order}`;
  const accentColor = project.previewTheme?.accent || '#6366F1';

  useEffect(() => {
    // Dynamic SEO title as required by Section 28
    document.title = `${project.name} | Shubham Patel`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', `${project.title} - ${project.subtitle}. Case study and technical highlights by Shubham Patel.`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [project.slug, project.name, project.title, project.subtitle]);

  return (
    <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* 1. Top Navigation: Back Link */}
      <AnimatedSection>
        <Link 
          to="/projects" 
          className="inline-flex items-center gap-2 text-xs font-mono text-[#666666] hover:text-[#4F46E5] transition-colors group mb-8"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
          <span>BACK TO PROJECTS</span>
        </Link>

        {/* Case Study Header */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-[#4F46E5]">
              PROJECT {projectNumber}
            </span>
            <span className="w-8 h-[1px] bg-[#E4E1D9]" />
            <span className="text-xs font-mono text-[#666666] px-3 py-1 rounded-full bg-[#EFEDE7] border border-[#E4E1D9]">
              {project.category}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#171717] tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl font-heading font-medium text-[#4F46E5]">
            {project.subtitle}
          </p>

          <p className="text-base sm:text-lg text-[#666666] font-sans leading-relaxed max-w-3xl">
            {project.description}
          </p>

          {/* Technology Stack Badges */}
          <div className="pt-2 space-y-3">
            <span className="text-xs font-mono text-[#666666] uppercase tracking-wider block">
              Technology Stack
            </span>
            <div className="flex flex-wrap gap-2.5">
              {project.technologies.map((tech) => (
                <TechnologyBadge key={tech} name={tech} />
              ))}
            </div>
          </div>

          {/* Live URL Action (Only if verified live URL exists) */}
          {project.liveUrl && (
            <div className="pt-4">
              <Button
                href={project.liveUrl}
                variant="primary"
                size="lg"
                icon={ExternalLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Project
              </Button>
            </div>
          )}
        </div>
      </AnimatedSection>

      {/* 2. PROJECT PREVIEW (Realistic Browser Mockup) */}
      <AnimatedSection delay={0.1}>
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#666666] uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#4F46E5]" />
            <span>PROJECT PREVIEW</span>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <ProjectBrowserMockup project={project} isFeatured={true} />
          </motion.div>
        </div>
      </AnimatedSection>

      {/* 3. PROJECT OVERVIEW */}
      <AnimatedSection delay={0.15}>
        <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#E4E1D9] shadow-sm space-y-4">
          <h2 className="text-xs font-mono text-[#4F46E5] uppercase tracking-widest font-semibold">
            PROJECT OVERVIEW
          </h2>
          <p className="text-base sm:text-lg text-[#171717] font-sans leading-relaxed">
            {project.overview}
          </p>
        </div>
      </AnimatedSection>

      {/* 4. KEY CONTRIBUTIONS & WHAT I BUILT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Key Contributions */}
        <AnimatedSection delay={0.2} className="h-full">
          <div className="p-7 sm:p-8 rounded-2xl bg-white border border-[#E4E1D9] shadow-sm h-full space-y-5">
            <h3 className="text-xs font-mono text-[#4F46E5] uppercase tracking-widest font-semibold flex items-center gap-2">
              <Layers className="w-4 h-4" />
              KEY CONTRIBUTIONS
            </h3>
            <ul className="space-y-3.5">
              {project.contributions.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[#171717] text-sm sm:text-base font-sans">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>

        {/* What I Built */}
        <AnimatedSection delay={0.25} className="h-full">
          <div className="p-7 sm:p-8 rounded-2xl bg-white border border-[#E4E1D9] shadow-sm h-full space-y-5">
            <h3 className="text-xs font-mono text-[#4F46E5] uppercase tracking-widest font-semibold flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              WHAT I BUILT
            </h3>
            <ul className="space-y-3.5">
              {project.whatIBuilt.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[#171717] text-sm sm:text-base font-sans">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#4F46E5] shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>

      </div>

      {/* 5. TECHNICAL HIGHLIGHTS */}
      <AnimatedSection delay={0.3}>
        <div className="p-8 rounded-2xl bg-white border border-[#E4E1D9] shadow-sm space-y-5">
          <h3 className="text-xs font-mono text-[#4F46E5] uppercase tracking-widest font-semibold flex items-center gap-2">
            <Database className="w-4 h-4" />
            TECHNICAL HIGHLIGHTS
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            {project.highlights.map((highlight, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-xl bg-[#EFEDE7] border border-[#E4E1D9] flex items-start gap-3 text-[#171717] text-sm font-sans"
              >
                <div 
                  className="w-2 h-2 rounded-full shrink-0 mt-1.5 bg-[#4F46E5]" 
                />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* 6. PROJECT NAVIGATION (Strict Order: RS Education Solution → AgriTech AI → Food Delight) */}
      <AnimatedSection delay={0.35} className="pt-6 border-t border-[#E4E1D9]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* Previous Project */}
          {previous ? (
            <Link
              to={`/projects/${previous.slug}`}
              className="group p-5 rounded-xl bg-white border border-[#E4E1D9] hover:border-[#4F46E5]/40 hover:shadow-sm transition-all flex flex-col justify-between"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-[#666666] mb-2">
                <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                <span>PREVIOUS PROJECT</span>
              </div>
              <span className="text-base font-heading font-bold text-[#171717] group-hover:text-[#4F46E5] transition-colors">
                {previous.name}
              </span>
            </Link>
          ) : (
            <div className="p-5 rounded-xl bg-[#EFEDE7]/60 border border-[#E4E1D9]/60 opacity-60 select-none">
              <span className="text-xs font-mono text-[#8A8A8A] block mb-2">PREVIOUS PROJECT</span>
              <span className="text-xs font-mono text-[#8A8A8A]">First project in catalog</span>
            </div>
          )}

          {/* Next Project */}
          {next ? (
            <Link
              to={`/projects/${next.slug}`}
              className="group p-5 rounded-xl bg-white border border-[#E4E1D9] hover:border-[#4F46E5]/40 hover:shadow-sm transition-all flex flex-col justify-between text-right sm:items-end"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-[#666666] mb-2">
                <span>NEXT PROJECT</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
              <span className="text-base font-heading font-bold text-[#171717] group-hover:text-[#4F46E5] transition-colors">
                {next.name}
              </span>
            </Link>
          ) : (
            <div className="p-5 rounded-xl bg-[#EFEDE7]/60 border border-[#E4E1D9]/60 opacity-60 select-none text-right">
              <span className="text-xs font-mono text-[#8A8A8A] block mb-2">NEXT PROJECT</span>
              <span className="text-xs font-mono text-[#8A8A8A]">End of catalog</span>
            </div>
          )}

        </div>
      </AnimatedSection>

      {/* 7. FINAL CTA */}
      <AnimatedSection delay={0.4}>
        <div className="relative rounded-2xl bg-[#EFEDE7] border border-[#E4E1D9] p-8 sm:p-10 text-center overflow-hidden shadow-sm">
          <div className="relative z-10 max-w-xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#171717]">
              Interested in working together?
            </h2>
            <p className="text-[#666666] text-sm sm:text-base font-sans">
              I'm open to discussing web application projects, software engineering roles, and technical collaborations.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button to="/contact" variant="primary" size="lg" icon={ArrowRight}>
                Let's Talk
              </Button>
              <Button href={socialLinks.email} variant="outline" size="lg" icon={Mail}>
                Send Email Directly
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>

    </article>
  );
}
