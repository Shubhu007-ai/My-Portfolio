import React from 'react';
import { ArrowRight, GraduationCap } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { AnimatedSection } from '../ui/AnimatedSection';

const selectedCertifications = [
  {
    number: "01",
    title: "React & HTML/CSS Bootcamps",
    provider: "LetsUpgrade",
    year: "2025"
  },
  {
    number: "02",
    title: "Intro to Front End Development",
    provider: "Simplilearn",
    year: "2025"
  },
  {
    number: "03",
    title: "Web Development Internship",
    provider: "CodSoft",
    year: "2025"
  }
];

export function CertificationsPreview() {
  const shouldReduceMotion = useReducedMotion();

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
    <section className="py-20 bg-[#F7F5F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <SectionHeading
              number="CERTIFICATIONS"
              title="Continuous learning & verified foundations."
              description="Structured bootcamps and certifications that help strengthen my technical abilities across web development."
            />
            <Button
              to="/certifications"
              variant="outline"
              size="md"
              icon={ArrowRight}
              className="self-start md:self-auto shrink-0"
            >
              View All Certifications
            </Button>
          </div>
        </AnimatedSection>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="divide-y divide-[#E4E1D9] border-t border-b border-[#E4E1D9] mb-10"
        >
          {selectedCertifications.map((cert) => (
            <motion.div
              key={cert.number}
              variants={itemVariants}
              className="group py-5 px-3 sm:px-6 rounded-xl transition-all duration-300 hover:translate-x-1.5 hover:bg-white hover:shadow-sm"
            >
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4 items-center">
                
                {/* Number & Icon */}
                <div className="sm:col-span-2 flex items-center gap-3">
                  <span className="font-mono text-sm sm:text-base font-bold text-[#8A8A8A] group-hover:text-[#4F46E5] transition-colors duration-200">
                    {cert.number}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#EFEDE7] border border-[#E4E1D9] flex items-center justify-center text-[#666666] group-hover:text-[#4F46E5] group-hover:bg-[#EEF2FF] group-hover:border-[#4F46E5]/40 transition-colors duration-200">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                </div>

                {/* Certificate Name & Provider */}
                <div className="sm:col-span-8 space-y-0.5">
                  <h3 className="text-base sm:text-lg font-heading font-bold text-[#171717] group-hover:text-[#4F46E5] transition-colors duration-200">
                    {cert.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-sans text-[#4F46E5] font-medium">
                    {cert.provider}
                  </p>
                </div>

                {/* Year */}
                <div className="sm:col-span-2 flex items-center justify-start sm:justify-end">
                  <span className="font-mono text-xs text-[#666666] px-3 py-1 rounded-full bg-[#EFEDE7] border border-[#E4E1D9] group-hover:bg-white group-hover:border-[#E4E1D9] transition-colors">
                    {cert.year}
                  </span>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center">
          <Button
            to="/certifications"
            variant="primary"
            size="md"
            icon={ArrowRight}
          >
            View All Certifications
          </Button>
        </div>

      </div>
    </section>
  );
}
