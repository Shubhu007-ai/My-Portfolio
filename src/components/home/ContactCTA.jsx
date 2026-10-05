import React from 'react';
import { Mail, MapPin, Sparkles, Github, Linkedin, ArrowRight } from 'lucide-react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { ContactForm } from '../ui/ContactForm';
import { socialLinks } from '../../data/socialLinks';

export function ContactCTA({ className = '' }) {
  return (
    <section id="contact-cta" className={`py-24 sm:py-32 lg:py-40 bg-[#EFEDE7] relative overflow-hidden border-t border-[#E4E1D9] ${className}`}>
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#4F46E5]/4 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* LEFT COLUMN: Large Closing Statement & Info */}
            <div className="lg:col-span-6 space-y-8">
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-[#4F46E5] tracking-widest uppercase">
                    06 / CONTACT
                  </span>
                  <span className="w-10 h-[1.5px] bg-[#E4E1D9]" />
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#171717] tracking-tight leading-[1.12]">
                  Let's build something{' '}
                  <span className="text-gradient">worth talking about.</span>
                </h2>

                <p className="text-[#666666] text-base sm:text-lg font-sans leading-relaxed max-w-lg">
                  Whether you're looking for a dedicated MERN Stack Developer, discussing a new web application, or exploring collaboration opportunities, my inbox is open.
                </p>
              </div>

              {/* Verified Contact Metadata */}
              <div className="space-y-3.5 pt-2 max-w-md">
                
                {/* Email Item */}
                <div className="p-4 rounded-xl bg-white border border-[#E4E1D9] flex items-start gap-3.5 group hover:border-[#4F46E5]/40 transition-colors shadow-xs">
                  <div className="p-2.5 rounded-lg bg-[#EEF2FF] text-[#4F46E5] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] font-mono text-[#8A8A8A] uppercase tracking-wider block">
                      Direct Email
                    </span>
                    <a
                      href={socialLinks.email}
                      className="text-xs sm:text-sm font-mono text-[#171717] group-hover:text-[#4F46E5] transition-colors font-medium break-all block mt-0.5"
                    >
                      {socialLinks.emailAddress}
                    </a>
                  </div>
                </div>

                {/* Location & Availability */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-white border border-[#E4E1D9] flex items-center gap-3 shadow-xs">
                    <div className="p-2 rounded-lg bg-[#EEF2FF] text-[#4F46E5] shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-[#8A8A8A] uppercase tracking-wider block">
                        Location
                      </span>
                      <span className="text-xs font-mono text-[#171717] font-medium block mt-0.5">
                        {socialLinks.location}
                      </span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-[#E4E1D9] flex items-center gap-3 shadow-xs">
                    <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 shrink-0">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-[#8A8A8A] uppercase tracking-wider block">
                        Status
                      </span>
                      <span className="text-xs font-mono text-[#171717] font-medium block mt-0.5">
                        {socialLinks.availability}
                      </span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Social Link Badges */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-[#E4E1D9] text-xs font-mono text-[#171717] hover:text-[#4F46E5] hover:border-[#4F46E5]/40 transition-colors shadow-xs"
                >
                  <Github className="w-3.5 h-3.5 text-[#4F46E5]" />
                  <span>GitHub</span>
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-[#E4E1D9] text-xs font-mono text-[#171717] hover:text-[#4F46E5] hover:border-[#4F46E5]/40 transition-colors shadow-xs"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#4F46E5]" />
                  <span>LinkedIn</span>
                </a>
              </div>

            </div>

            {/* RIGHT COLUMN: Contact Form */}
            <div className="lg:col-span-6">
              <ContactForm />
            </div>

          </div>

        </AnimatedSection>
      </div>
    </section>
  );
}

