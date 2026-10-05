import React from 'react';
import { Lock, ExternalLink, Sparkles, Layers, ShieldCheck, Database, Cpu, Layout } from 'lucide-react';

export function ProjectBrowserMockup({ project, className = '', isFeatured = false }) {
  const { title, subtitle, category, displayUrl, previewTheme, technologies, liveUrl } = project;
  const accentColor = previewTheme?.accent || '#6366F1';

  return (
    <div 
      className={`relative rounded-xl sm:rounded-2xl bg-white border border-[#E4E1D9] shadow-sm hover:shadow-md overflow-hidden transition-all duration-300 ${className}`}
    >
      {/* Browser Chrome Header */}
      <div className="flex items-center justify-between px-3.5 sm:px-4 py-2.5 sm:py-3 bg-[#EFEDE7] border-b border-[#E4E1D9] select-none">
        {/* Window Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-400 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
        </div>

        {/* Browser URL Bar */}
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-[#E4E1D9] text-[10px] sm:text-xs font-mono text-[#666666] max-w-[240px] sm:max-w-xs w-full justify-center truncate shadow-xs">
          <Lock className="w-3 h-3 text-[#059669] shrink-0" />
          <span className="text-[#8A8A8A]">https://</span>
          <span className="text-[#171717] font-medium truncate">{displayUrl}</span>
        </div>

        {/* Live Indicator or Window Action */}
        <div className="flex items-center gap-2">
          {liveUrl ? (
            <span className="flex items-center gap-1 text-[10px] font-mono text-[#059669] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
              <span className="hidden md:inline">Online</span>
            </span>
          ) : (
            <span className="text-[10px] font-mono text-[#8A8A8A] hidden sm:inline">Local Build</span>
          )}
        </div>
      </div>

      {/* Browser Content Area: Neutral High-Fidelity Interface Preview */}
      <div className="relative p-5 sm:p-7 bg-[#FAF9F5] min-h-[260px] sm:min-h-[300px] flex flex-col justify-between overflow-hidden">
        
        {/* Subtle Ambient Radial Glow */}
        <div 
          className="absolute -top-16 -right-16 w-56 h-56 rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ backgroundColor: accentColor }}
        />
        <div 
          className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ backgroundColor: accentColor }}
        />

        {/* Simulated Internal App Navigation */}
        <div className="flex items-center justify-between pb-4 border-b border-[#E4E1D9] relative z-10">
          <div className="flex items-center gap-2">
            <span 
              className="w-2.5 h-2.5 rounded-sm"
              style={{ backgroundColor: accentColor }}
            />
            <span className="text-xs font-heading font-bold text-[#171717] tracking-tight">
              {title}
            </span>
          </div>
          <span className="px-2 py-0.5 rounded text-[10px] font-mono text-[#666666] bg-white border border-[#E4E1D9] shadow-xs">
            {category}
          </span>
        </div>

        {/* Center Canvas: Core Project Identity & Architecture */}
        <div className="py-6 sm:py-8 space-y-4 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono border"
            style={{ 
              borderColor: `${accentColor}30`, 
              backgroundColor: `${accentColor}10`,
              color: accentColor 
            }}
          >
            <Sparkles className="w-3 h-3" />
            <span>{previewTheme?.badge || title}</span>
          </div>

          <h4 className="text-lg sm:text-xl font-heading font-extrabold text-[#171717] tracking-tight max-w-sm">
            {subtitle}
          </h4>

          {/* Key Architectural Blocks / Metrics */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-2">
            {previewTheme?.stats?.map((stat, i) => (
              <div 
                key={i}
                className="p-2.5 rounded-lg bg-white border border-[#E4E1D9] text-left transition-colors hover:border-[#4F46E5]/40 shadow-xs"
              >
                <span className="text-[10px] font-mono text-[#8A8A8A] block truncate">
                  {stat.label}
                </span>
                <span className="text-xs font-heading font-bold text-[#171717] block truncate mt-0.5">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar: Stack pills */}
        <div className="pt-3 border-t border-[#E4E1D9] flex items-center justify-between relative z-10">
          <div className="flex flex-wrap gap-1.5">
            {technologies.slice(0, 4).map((tech) => (
              <span 
                key={tech}
                className="px-2 py-0.5 rounded text-[10px] font-mono bg-white text-[#666666] border border-[#E4E1D9]"
              >
                {tech}
              </span>
            ))}
          </div>

          <span className="text-[11px] font-mono text-[#8A8A8A] flex items-center gap-1">
            <span>Project Preview</span>
          </span>
        </div>

      </div>
    </div>
  );
}
