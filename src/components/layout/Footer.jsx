import React from 'react';
import { NavLink } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';
import { socialLinks } from '../../data/socialLinks';

export function Footer() {
  const currentYear = 2026;

  const navigationLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-[#EFEDE7] border-t border-[#E4E1D9] pt-14 pb-10 mt-12 sm:mt-16 text-[#666666] relative overflow-hidden">
      {/* Subtle grid continuation */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12">
          
          {/* LEFT: Brand Identity */}
          <div className="md:col-span-5 space-y-3">
            <NavLink
              to="/"
              className="inline-flex items-center text-3xl sm:text-4xl font-extrabold font-heading text-[#171717] tracking-tighter group"
              aria-label="Home"
            >
              <span>SP</span>
              <span className="text-[#4F46E5] group-hover:scale-125 transition-transform duration-200">.</span>
            </NavLink>

            <div className="space-y-0.5">
              <p className="text-[#171717] font-heading font-extrabold text-base sm:text-lg tracking-tight">
                Shubham Patel
              </p>
              <p className="text-xs sm:text-sm font-sans text-[#4F46E5] font-semibold">
                MERN Stack Developer
              </p>
            </div>

            <p className="text-xs text-[#666666] font-mono pt-0.5">
              {socialLinks.location}
            </p>
          </div>

          {/* CENTER: Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-xs font-mono tracking-widest text-[#171717] uppercase font-semibold">
              Navigation
            </h3>
            <ul className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-sm font-sans">
              {navigationLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `transition-colors duration-200 hover:text-[#4F46E5] ${
                        isActive ? 'text-[#171717] font-semibold' : 'text-[#666666]'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT: Social & Contact */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-mono tracking-widest text-[#171717] uppercase font-semibold">
              Connect
            </h3>
            
            <div className="flex items-center gap-3">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-xl bg-white border border-[#E4E1D9] text-[#666666] hover:text-[#4F46E5] hover:border-[#4F46E5]/50 hover:bg-[#EEF2FF] hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
              >
                <Github className="w-4 h-4 text-[#4F46E5]" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-xl bg-white border border-[#E4E1D9] text-[#666666] hover:text-[#4F46E5] hover:border-[#4F46E5]/50 hover:bg-[#EEF2FF] hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
              >
                <Linkedin className="w-4 h-4 text-[#4F46E5]" />
              </a>
              <a
                href={socialLinks.email}
                aria-label="Send Email"
                className="p-2.5 rounded-xl bg-white border border-[#E4E1D9] text-[#666666] hover:text-[#4F46E5] hover:border-[#4F46E5]/50 hover:bg-[#EEF2FF] hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
              >
                <Mail className="w-4 h-4 text-[#4F46E5]" />
              </a>
            </div>

            <div className="pt-1">
              <a
                href={socialLinks.email}
                className="text-xs font-mono text-[#666666] hover:text-[#4F46E5] transition-colors break-all block"
              >
                {socialLinks.emailAddress}
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM: Copyright & Built with React */}
        <div className="pt-6 border-t border-[#E4E1D9] flex flex-col sm:flex-row items-center justify-between text-xs text-[#8A8A8A] gap-3">
          <p>© {currentYear} Shubham Patel</p>
          <p className="font-mono text-[#8A8A8A] text-[11px]">
            Built with React
          </p>
        </div>
      </div>
    </footer>
  );
}
