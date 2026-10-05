import React, { useEffect } from 'react';
import { Mail, MapPin, Sparkles, Github, Linkedin } from 'lucide-react';
import { PageLayout } from '../components/layout/PageLayout';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import { ContactForm } from '../components/ui/ContactForm';
import { socialLinks } from '../data/socialLinks';

export function Contact() {
  useEffect(() => {
    document.title = 'Contact | Shubham Patel';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Get in touch with Shubham Patel, MERN Stack Developer based in New Delhi, India. Open to opportunities, web projects, and software collaborations.');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 space-y-12">
        
        {/* Section Header */}
        <AnimatedSection className="max-w-3xl space-y-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-[#4F46E5] tracking-widest uppercase">
              06 / CONTACT
            </span>
            <span className="w-10 h-[1.5px] bg-[#E4E1D9]" />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#171717] tracking-tight leading-[1.12]">
            Let's build something{' '}
            <span className="text-gradient">worth talking about.</span>
          </h1>

          <p className="text-[#666666] text-base sm:text-lg leading-relaxed font-sans max-w-2xl">
            Have an engineering opportunity, full-stack project idea, or simply want to connect? Feel free to reach out.
          </p>
        </AnimatedSection>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* LEFT COLUMN: Contact Details & Quick Info */}
          <AnimatedSection className="lg:col-span-5 space-y-6" delay={0.1}>
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E4E1D9] space-y-7 shadow-sm">
              
              <div>
                <h2 className="text-xl font-heading font-extrabold text-[#171717] tracking-tight mb-1.5">
                  Let's Connect
                </h2>
                <p className="text-[#666666] text-sm font-sans">
                  Choose your preferred channel or send an email directly.
                </p>
              </div>

              {/* Three Compact Information Blocks */}
              <div className="space-y-3.5">
                
                {/* 1. Direct Email */}
                <div className="p-4 rounded-xl bg-[#F7F5F0] border border-[#E4E1D9] flex items-start gap-3.5 group hover:border-[#4F46E5]/40 transition-colors">
                  <div className="p-2.5 rounded-lg bg-[#EEF2FF] text-[#4F46E5] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] font-mono text-[#8A8A8A] uppercase tracking-wider block">
                      Email
                    </span>
                    <a
                      href={socialLinks.email}
                      className="text-xs sm:text-sm font-mono text-[#171717] group-hover:text-[#4F46E5] transition-colors font-medium break-all block mt-0.5"
                    >
                      {socialLinks.emailAddress}
                    </a>
                  </div>
                </div>

                {/* 2. Location */}
                <div className="p-4 rounded-xl bg-[#F7F5F0] border border-[#E4E1D9] flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-[#EEF2FF] text-[#4F46E5] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#8A8A8A] uppercase tracking-wider block">
                      Location
                    </span>
                    <span className="text-xs sm:text-sm font-mono text-[#171717] font-medium block mt-0.5">
                      {socialLinks.location}
                    </span>
                  </div>
                </div>

                {/* 3. Availability */}
                <div className="p-4 rounded-xl bg-[#F7F5F0] border border-[#E4E1D9] flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-600 shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#8A8A8A] uppercase tracking-wider block">
                      Availability
                    </span>
                    <span className="text-xs sm:text-sm font-mono text-[#171717] font-medium block mt-0.5">
                      {socialLinks.availability}
                    </span>
                  </div>
                </div>

              </div>

              {/* Direct "Email Me →" Button */}
              <div className="pt-1">
                <a
                  href={socialLinks.email}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-sans font-semibold text-xs text-white bg-[#4F46E5] hover:bg-[#3730A3] shadow-sm transition-all duration-200"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email Me Directly →</span>
                </a>
              </div>

              {/* Social Profiles */}
              <div className="pt-4 border-t border-[#E4E1D9] space-y-3">
                <span className="text-[10px] font-mono text-[#8A8A8A] uppercase tracking-widest block font-medium">
                  Social Profiles
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white border border-[#E4E1D9] text-xs font-mono text-[#171717] hover:text-[#4F46E5] hover:border-[#4F46E5]/40 transition-all shadow-xs"
                  >
                    <Github className="w-3.5 h-3.5 text-[#4F46E5]" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white border border-[#E4E1D9] text-xs font-mono text-[#171717] hover:text-[#4F46E5] hover:border-[#4F46E5]/40 transition-all shadow-xs"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-[#4F46E5]" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

            </div>
          </AnimatedSection>

          {/* RIGHT COLUMN: Contact Form */}
          <AnimatedSection className="lg:col-span-7" delay={0.2}>
            <ContactForm />
          </AnimatedSection>

        </div>

      </div>
    </PageLayout>
  );
}

