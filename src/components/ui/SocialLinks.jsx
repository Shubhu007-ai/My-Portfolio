import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { socialLinks } from '../../data/socialLinks';

export function SocialLinks({ className = '', iconSize = 20 }) {
  const links = [
    { name: 'GitHub', href: socialLinks.github, icon: Github, external: true },
    { name: 'LinkedIn', href: socialLinks.linkedin, icon: Linkedin, external: true },
    { name: 'Email', href: socialLinks.email, icon: Mail, external: false },
  ];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.name}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            aria-label={link.name}
            className="p-2.5 rounded-lg bg-white border border-[#E4E1D9] text-[#666666] 
                       hover:text-[#4F46E5] hover:border-[#4F46E5] hover:bg-[#EEF2FF] 
                       hover:-translate-y-0.5 shadow-sm transition-all duration-200"
          >
            <Icon size={iconSize} />
          </a>
        );
      })}
    </div>
  );
}
