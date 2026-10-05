import React from 'react';

export function TechBadge({ text, className = '' }) {
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-[#141B28] text-indigo-300 border border-indigo-500/20 ${className}`}>
      {text}
    </span>
  );
}
