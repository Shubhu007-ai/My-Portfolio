import React, { useState } from 'react';
import {
  Atom,
  Layers,
  FileCode2,
  Layout,
  Palette,
  Wind,
  Sparkles,
  Server,
  Cpu,
  Network,
  ShieldCheck,
  Database,
  Workflow,
  Github,
  GitBranch,
  Zap,
  Terminal,
  Bug,
  Send,
  Code2
} from 'lucide-react';

const icons = {
  Atom,
  Layers,
  FileCode2,
  Layout,
  Palette,
  Wind,
  Sparkles,
  Server,
  Cpu,
  Network,
  ShieldCheck,
  Database,
  Workflow,
  Github,
  GitBranch,
  Zap,
  Terminal,
  Bug,
  Send,
  Code2
};

const nameToIconMap = {
  "React.js": "Atom",
  "Next.js": "Layers",
  "Next.js · Good Knowledge": "Layers",
  "JavaScript": "FileCode2",
  "JavaScript (ES6+)": "FileCode2",
  "JavaScript ES6+": "FileCode2",
  "HTML5": "Layout",
  "CSS3": "Palette",
  "HTML5 / CSS3": "Layout",
  "Redux Toolkit": "Cpu",
  "Tailwind CSS": "Wind",
  "Framer Motion": "Sparkles",
  "Node.js": "Server",
  "Express.js": "Cpu",
  "REST APIs": "Network",
  "RESTful APIs": "Network",
  "JWT Authentication": "ShieldCheck",
  "Authentication": "ShieldCheck",
  "Middleware Architecture": "Workflow",
  "MongoDB": "Database",
  "Mongoose": "Workflow",
  "Git / GitHub": "Github",
  "Git": "GitBranch",
  "GitHub": "Github",
  "Vite / Webpack": "Zap",
  "Vite": "Zap",
  "Postman": "Send",
  "VS Code": "Terminal",
  "Chrome DevTools": "Bug"
};

const techColorMap = {
  "React.js": { color: "#61DAFB", glow: "rgba(97, 218, 251, 0.2)" },
  "Next.js": { color: "#F8FAFC", glow: "rgba(248, 250, 252, 0.15)" },
  "Next.js · Good Knowledge": { color: "#F8FAFC", glow: "rgba(248, 250, 252, 0.15)" },
  "JavaScript": { color: "#F7DF1E", glow: "rgba(247, 223, 30, 0.18)" },
  "JavaScript (ES6+)": { color: "#F7DF1E", glow: "rgba(247, 223, 30, 0.18)" },
  "JavaScript ES6+": { color: "#F7DF1E", glow: "rgba(247, 223, 30, 0.18)" },
  "HTML5": { color: "#E34F26", glow: "rgba(227, 79, 38, 0.2)" },
  "CSS3": { color: "#38BDF8", glow: "rgba(56, 189, 248, 0.2)" },
  "HTML5 / CSS3": { color: "#38BDF8", glow: "rgba(56, 189, 248, 0.2)" },
  "Tailwind CSS": { color: "#38BDF8", glow: "rgba(56, 189, 248, 0.2)" },
  "Redux Toolkit": { color: "#A855F7", glow: "rgba(168, 85, 247, 0.22)" },
  "Framer Motion": { color: "#F472B6", glow: "rgba(244, 114, 182, 0.22)" },
  "Node.js": { color: "#68A063", glow: "rgba(104, 160, 99, 0.22)" },
  "Express.js": { color: "#A5B4FC", glow: "rgba(165, 180, 252, 0.22)" },
  "REST APIs": { color: "#60A5FA", glow: "rgba(96, 165, 250, 0.2)" },
  "RESTful APIs": { color: "#60A5FA", glow: "rgba(96, 165, 250, 0.2)" },
  "JWT Authentication": { color: "#F59E0B", glow: "rgba(245, 158, 11, 0.2)" },
  "Authentication": { color: "#F59E0B", glow: "rgba(245, 158, 11, 0.2)" },
  "Middleware Architecture": { color: "#818CF8", glow: "rgba(129, 140, 248, 0.2)" },
  "MongoDB": { color: "#10B981", glow: "rgba(16, 185, 129, 0.2)" },
  "Mongoose": { color: "#F87171", glow: "rgba(248, 113, 113, 0.2)" },
  "Git / GitHub": { color: "#F1F5F9", glow: "rgba(241, 245, 249, 0.15)" },
  "Git": { color: "#F97316", glow: "rgba(249, 115, 22, 0.2)" },
  "GitHub": { color: "#F1F5F9", glow: "rgba(241, 245, 249, 0.15)" },
  "Vite / Webpack": { color: "#C084FC", glow: "rgba(192, 132, 252, 0.22)" },
  "Vite": { color: "#C084FC", glow: "rgba(192, 132, 252, 0.22)" },
  "Postman": { color: "#FF6C37", glow: "rgba(255, 108, 55, 0.22)" },
  "VS Code": { color: "#38BDF8", glow: "rgba(56, 189, 248, 0.2)" },
  "Chrome DevTools": { color: "#60A5FA", glow: "rgba(96, 165, 250, 0.2)" }
};

const defaultColor = { color: "#818CF8", glow: "rgba(129, 140, 248, 0.2)" };

export function TechnologyBadge({ name, icon, description, showDescription = false, className = '' }) {
  const [isHovered, setIsHovered] = useState(false);
  const iconKey = icon || nameToIconMap[name] || "Code2";
  const IconComponent = icons[iconKey] || icons[nameToIconMap[name]] || Code2;
  const brand = techColorMap[name] || defaultColor;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxShadow: isHovered ? '0 2px 10px -2px rgba(79, 70, 229, 0.12)' : 'none',
      }}
      className={`group relative inline-flex items-center gap-2.5 px-3.5 py-2 rounded-lg 
                 bg-white border border-[#E4E1D9] 
                 text-[#171717] text-xs font-medium font-sans
                 transition-all duration-200 ease-out
                 hover:-translate-y-1 hover:border-[#4F46E5]/60 hover:bg-[#EEF2FF]
                 cursor-default select-none ${className}`}
    >
      <IconComponent 
        className="w-4 h-4 text-[#666666] transition-colors duration-200 shrink-0" 
        style={{ color: isHovered ? (brand.color === '#F8FAFC' || brand.color === '#F1F5F9' ? '#4F46E5' : brand.color) : undefined }}
      />
      <span className="text-[#171717] group-hover:text-[#4F46E5] transition-colors duration-200 whitespace-nowrap">
        {name}
      </span>

      {showDescription && description && (
        <span className="hidden sm:inline-block text-xs text-[#8A8A8A] font-normal pl-1.5 border-l border-[#E4E1D9]">
          {description}
        </span>
      )}
    </div>
  );
}
