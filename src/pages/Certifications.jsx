import React, { useEffect } from 'react';
import { ArrowUpRight, Sparkles, GraduationCap } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { PageLayout } from '../components/layout/PageLayout';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import { ContactCTA } from '../components/home/ContactCTA';
import { certifications } from '../data/certifications';

export function Certifications() {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    document.title = 'Certifications | Shubham Patel';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Certifications and learning programs completed by Shubham Patel in full-stack web engineering and frontend development.');
    }
    window.scrollTo({ top: 0, behavior: shouldReduceMotion ? 'auto' : 'smooth' });
  }, [shouldReduceMotion]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };

  return (
    <PageLayout>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
        
        {/* 1. Hero */}
        <AnimatedSection className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEF2FF] border border-[#4F46E5]/30 text-[#4F46E5] text-xs font-mono font-medium">
            CERTIFICATIONS
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#171717] tracking-tight leading-tight">
            Learning doesn't stop{' '}
            <span className="text-gradient">at the code editor.</span>
          </h1>

          <p className="text-[#666666] text-base sm:text-lg leading-relaxed font-sans max-w-2xl">
            Certifications and learning experiences that have helped strengthen my foundation across web development, full-stack engineering and UI/UX.
          </p>
        </AnimatedSection>

        {/* 2. Featured Learning Card */}
        <AnimatedSection delay={0.1}>
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E4E1D9] shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 blur-[80px] pointer-events-none rounded-full" />
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 relative z-10">
              <div className="p-3 rounded-xl bg-[#EEF2FF] border border-[#4F46E5]/30 text-[#4F46E5] shrink-0 self-start sm:self-auto">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-mono text-[#4F46E5] uppercase tracking-widest font-semibold block">
                  Continuous learning
                </span>
                <p className="text-[#171717] text-sm sm:text-base leading-relaxed font-sans max-w-2xl">
                  I use structured courses, internships and hands-on projects to continuously strengthen my development skills.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* 3. Refined Editorial List / Grid Hybrid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="divide-y divide-[#E4E1D9] border-t border-b border-[#E4E1D9]"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              className="group py-5 px-3 sm:px-6 rounded-xl transition-all duration-300 hover:translate-x-1.5 hover:bg-white hover:shadow-sm"
            >
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4 items-center">
                
                {/* Number & Subtle Icon */}
                <div className="sm:col-span-2 flex items-center gap-3">
                  <span className="font-mono text-sm sm:text-base font-bold text-[#8A8A8A] group-hover:text-[#4F46E5] transition-colors duration-200">
                    {cert.number}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#EFEDE7] border border-[#E4E1D9] flex items-center justify-center text-[#666666] group-hover:text-[#4F46E5] group-hover:bg-[#EEF2FF] group-hover:border-[#4F46E5]/40 transition-colors duration-200">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                </div>

                {/* Certificate Name & Provider */}
                <div className="sm:col-span-7 space-y-1">
                  <h2 className="text-base sm:text-lg font-heading font-bold text-[#171717] group-hover:text-[#4F46E5] transition-colors duration-200 flex items-center gap-2">
                    <span>{cert.title}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-[#4F46E5] shrink-0" />
                  </h2>
                  <p className="text-xs sm:text-sm font-sans text-[#4F46E5] font-medium">
                    {cert.provider}
                  </p>
                </div>

                {/* Year */}
                <div className="sm:col-span-3 flex items-center justify-start sm:justify-end">
                  <span className="font-mono text-xs text-[#666666] px-3 py-1 rounded-full bg-[#EFEDE7] border border-[#E4E1D9] group-hover:bg-white group-hover:border-[#E4E1D9] transition-colors">
                    {cert.year}
                  </span>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 4. Bottom Contact CTA */}
        <ContactCTA />

      </div>
    </PageLayout>
  );
}
