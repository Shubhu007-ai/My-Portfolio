import React, { useEffect } from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { SectionHeading } from '../components/ui/SectionHeading';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import { SocialLinks } from '../components/ui/SocialLinks';
import { Button } from '../components/ui/Button';
import { ContactCTA } from '../components/home/ContactCTA';
import { ArrowRight, MapPin, Mail, Code2, Server, Sparkles } from 'lucide-react';
import { socialLinks } from '../data/socialLinks';

export function About() {
  useEffect(() => {
    document.title = 'About | Shubham Patel';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'About Shubham Patel - MERN Stack Developer based in New Delhi, India. Hands-on experience building responsive web applications and full-stack software.');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        <AnimatedSection className="max-w-3xl space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-[#4F46E5] uppercase tracking-widest block">
              01 / ABOUT
            </span>
            <span className="w-10 h-[1.5px] bg-[#E4E1D9]" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#171717] tracking-tight leading-[1.08]">
            "Building thoughtful digital experiences, one component at a time."
          </h1>
          <p className="text-lg sm:text-xl font-heading text-[#4F46E5] font-medium">
            Shubham Patel — MERN Stack Developer
          </p>
        </AnimatedSection>

        {/* Editorial Metadata Stats Bar */}
        <AnimatedSection delay={0.1}>
          <div className="rounded-2xl bg-white border border-[#E4E1D9] p-6 sm:p-8 shadow-xs">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#E4E1D9]">
              
              <div className="pt-4 sm:pt-0 sm:px-4 first:pt-0 first:px-0">
                <span className="text-2xl sm:text-3xl font-extrabold font-heading text-[#171717] block">
                  06 MONTHS
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-[#4F46E5] font-semibold mt-1 block">
                  MERN INTERNSHIP
                </span>
                <span className="text-xs text-[#666666] mt-0.5 block">CodSoft &amp; Bootcamps</span>
              </div>

              <div className="pt-4 sm:pt-0 sm:px-6">
                <span className="text-2xl sm:text-3xl font-extrabold font-heading text-[#171717] block">
                  03+
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-[#4F46E5] font-semibold mt-1 block">
                  MAJOR PROJECTS
                </span>
                <span className="text-xs text-[#666666] mt-0.5 block">Full-Stack &amp; Web Apps</span>
              </div>

              <div className="pt-4 sm:pt-0 sm:px-6">
                <span className="text-2xl sm:text-3xl font-extrabold font-heading text-[#171717] block">
                  MERN
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-[#4F46E5] font-semibold mt-1 block">
                  PRIMARY STACK
                </span>
                <span className="text-xs text-[#666666] mt-0.5 block">React, Node, Express, Mongo</span>
              </div>

              <div className="pt-4 sm:pt-0 sm:px-6">
                <span className="text-2xl sm:text-3xl font-extrabold font-heading text-[#171717] block">
                  NEW DELHI
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-[#4F46E5] font-semibold mt-1 block">
                  LOCATION
                </span>
                <span className="text-xs text-[#666666] mt-0.5 block">India (Open to Remote/Relo)</span>
              </div>

            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          <AnimatedSection className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E4E1D9] space-y-4 shadow-sm">
              <h2 className="text-lg font-heading font-bold text-[#171717]">Professional Background</h2>
              <p className="text-[#171717] text-sm sm:text-base leading-relaxed font-sans">
                I am a Web Developer based in New Delhi, India with hands-on experience building responsive web applications and solid MERN stack knowledge, including React.js, Node.js, Express.js, and MongoDB.
              </p>
              <p className="text-[#666666] text-sm sm:text-base leading-relaxed font-sans">
                My work centers on developing component-driven frontend interfaces, integrating clean RESTful APIs, and implementing reliable data persistence and authentication.
              </p>
            </div>

            {/* Three Core Engineering Pillars */}
            <div className="space-y-3.5">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#4F46E5] font-semibold">
                Core Principles
              </h3>
              
              <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#E4E1D9] space-y-1.5 transition-all hover:border-[#4F46E5]/40 shadow-xs">
                <div className="flex items-center gap-2.5">
                  <Code2 className="w-5 h-5 text-[#4F46E5] shrink-0" />
                  <h4 className="text-sm sm:text-base font-heading font-semibold text-[#171717]">Clean Interfaces</h4>
                </div>
                <p className="text-xs sm:text-sm text-[#666666] font-sans leading-relaxed">
                  Crafting accessible, intuitive interfaces with responsive layouts and modern design tokens.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#E4E1D9] space-y-1.5 transition-all hover:border-[#4F46E5]/40 shadow-xs">
                <div className="flex items-center gap-2.5">
                  <Server className="w-5 h-5 text-[#4F46E5] shrink-0" />
                  <h4 className="text-sm sm:text-base font-heading font-semibold text-[#171717]">Scalable Code</h4>
                </div>
                <p className="text-xs sm:text-sm text-[#666666] font-sans leading-relaxed">
                  Building modular REST APIs, standardizing request middleware, and designing maintainable database models.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#E4E1D9] space-y-1.5 transition-all hover:border-[#4F46E5]/40 shadow-xs">
                <div className="flex items-center gap-2.5">
                  <Sparkles className="w-5 h-5 text-[#4F46E5] shrink-0" />
                  <h4 className="text-sm sm:text-base font-heading font-semibold text-[#171717]">Continuous Learning</h4>
                </div>
                <p className="text-xs sm:text-sm text-[#666666] font-sans leading-relaxed">
                  Actively evaluating modern tools, studying industry standards, and strengthening full-stack competencies.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <Button to="/skills" variant="primary" size="md" icon={ArrowRight}>
                View Technical Skills
              </Button>
              <Button to="/contact" variant="secondary" size="md">
                Get In Touch
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection className="lg:col-span-5 space-y-6" delay={0.2}>
            <div className="p-6 rounded-xl bg-white border border-[#E4E1D9] space-y-4 shadow-sm">
              <h3 className="text-sm font-mono uppercase tracking-widest text-[#171717] font-semibold border-b border-[#E4E1D9] pb-3">
                Quick Info
              </h3>

              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 text-[#171717]">
                  <MapPin className="w-4 h-4 text-[#4F46E5] shrink-0" />
                  <span>New Delhi, India</span>
                </div>
                <div className="flex items-center gap-3 text-[#171717]">
                  <Mail className="w-4 h-4 text-[#4F46E5] shrink-0" />
                  <a href={socialLinks.email} className="text-[#666666] hover:text-[#4F46E5] transition-colors font-mono text-xs">
                    {socialLinks.emailAddress}
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E4E1D9]">
                <span className="text-xs text-[#666666] font-mono block mb-2">Connect online:</span>
                <SocialLinks />
              </div>
            </div>
          </AnimatedSection>

        </div>

        {/* Contact CTA */}
        <ContactCTA />

      </div>
    </PageLayout>
  );
}
