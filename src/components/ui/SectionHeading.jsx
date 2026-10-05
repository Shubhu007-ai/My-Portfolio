import React from 'react';

export function SectionHeading({ 
  number, 
  title, 
  subtitle, 
  description, 
  align = 'left',
  className = '' 
}) {
  return (
    <div className={`mb-12 sm:mb-16 ${align === 'center' ? 'text-center max-w-2xl mx-auto' : 'max-w-3xl'} ${className}`}>
      {number && (
        <div className={`flex items-center gap-3 mb-4 ${align === 'center' ? 'justify-center' : ''}`}>
          <span className="text-xs font-mono tracking-widest text-[#4F46E5] font-semibold uppercase">
            {number}
          </span>
          <span className="w-10 h-[1.5px] bg-[#E4E1D9]" />
        </div>
      )}
      
      {title && (
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#171717] font-heading leading-[1.12]">
          {title}
        </h2>
      )}

      {subtitle && (
        <p className="text-lg sm:text-xl font-heading font-medium text-[#4F46E5] mt-2.5">
          {subtitle}
        </p>
      )}

      {description && (
        <p className="mt-4 text-[#666666] text-base sm:text-lg leading-relaxed font-sans">
          {description}
        </p>
      )}
    </div>
  );
}
