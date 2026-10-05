import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { ProjectBrowserMockup } from './ProjectBrowserMockup';

export function ProjectCard({ project, index, className = '' }) {
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const { order, title, subtitle, category, shortDescription, technologies, liveUrl, slug } = project;
  const projectNumber = `0${order}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative flex flex-col rounded-2xl bg-white border border-[#E4E1D9] 
                 transition-all duration-300 ease-out overflow-hidden shadow-sm
                 hover:-translate-y-1 hover:border-[#4F46E5]/40 
                 hover:shadow-md ${className}`}
    >
      {/* Top Browser Preview */}
      <div className="relative overflow-hidden p-4 sm:p-5 pb-0 bg-[#F7F5F0] border-b border-[#E4E1D9]">
        <motion.div
          animate={{ scale: isHovered && !shouldReduceMotion ? 1.03 : 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <ProjectBrowserMockup project={project} />
        </motion.div>
      </div>

      {/* Card Content Area */}
      <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow space-y-5">
        
        {/* Header: Project Number & Category */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs font-bold text-[#4F46E5] tracking-wider uppercase">
              {projectNumber} / PROJECT
            </span>
            <span className="text-[11px] font-mono text-[#666666] px-2.5 py-0.5 rounded-sm bg-[#F7F5F0] border border-[#E4E1D9]">
              {category}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-[#171717] group-hover:text-[#4F46E5] transition-colors tracking-tight">
            {title}
          </h3>

          <p className="text-xs sm:text-sm text-[#4F46E5] font-medium font-heading">
            {subtitle}
          </p>

          <p className="text-xs sm:text-sm text-[#666666] font-sans leading-relaxed line-clamp-3">
            {shortDescription}
          </p>
        </div>

        {/* Compact Technology Tags */}
        <div className="pt-1">
          <div className="flex flex-wrap gap-1.5">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 rounded-sm text-[11px] font-mono text-[#171717] bg-[#F7F5F0] border border-[#E4E1D9]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Actions Footer */}
        <div className="pt-4 border-t border-[#E4E1D9] flex items-center justify-between gap-3">
          <Link
            to={`/projects/${slug}`}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold font-heading text-[#171717] group-hover:text-[#4F46E5] transition-colors group/link"
          >
            <span>View Project</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 ease-out group-hover/link:translate-x-1.5" />
          </Link>

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-[#F7F5F0] border border-[#E4E1D9] text-xs font-mono text-[#171717] hover:bg-[#EEF2FF] hover:border-[#4F46E5]/40 hover:text-[#4F46E5] transition-all"
              aria-label={`Open live project for ${title}`}
            >
              <span>Live Website</span>
              <ExternalLink className="w-3 h-3 text-[#4F46E5]" />
            </a>
          )}
        </div>

      </div>
    </motion.div>
  );
}

