import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

// Authentic, vibrant brand icons
function ReactIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="none">
      <circle cx="0" cy="0" r="2.05" fill="#00D8FF" />
      <g stroke="#00D8FF" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

function MongoLeafIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      {/* Right Leaf: Vibrant Atlas Green */}
      <path
        d="M12 1.5c-.32 0-.62.19-.77.49C9.7 5.2 7 9.8 7 13.9c0 3.8 2.3 6.9 5 7.6.2.02.4.03.6.03.2 0 .4-.01.6-.03 2.7-.7 5-3.8 5-7.6 0-4.1-2.7-8.7-4.23-11.91a.9.9 0 0 0-.77-.49z"
        fill="#00ED64"
      />
      {/* Left Leaf: Deep Forest Green */}
      <path
        d="M12 1.5v20c-.2 0-.4-.01-.6-.03-2.7-.7-5-3.8-5-7.6 0-4.1 2.7-8.7 4.23-11.91.15-.3.45-.49.77-.49.2 0 .4.04.6.03z"
        fill="#00684A"
      />
      {/* Spine Accent */}
      <path
        d="M12 2.5v18.8c.2-.05.4-.1.6-.16V3.8c-.2-.42-.4-.87-.6-1.3z"
        fill="#13AA52"
        opacity="0.85"
      />
      {/* Stem Base */}
      <path
        d="M12 22.5c-.25 0-.45-.15-.55-.38-.2-.5 0-1.1.35-1.42.1-.08.2-.1.2-.1v1.9z"
        fill="#023430"
      />
    </svg>
  );
}

function NodeIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none">
      <path
        d="M16 2.2l12 6.9v13.8L16 29.8 4 22.9V9.1L16 2.2z"
        fill="#5FA04E"
      />
      <path
        d="M16 2.2L4 9.1v13.8L16 29.8V2.2z"
        fill="#417E38"
        opacity="0.25"
      />
      <path
        d="M16 6.8l8.6 5v10.4L16 27.2l-8.6-5V11.8L16 6.8z"
        stroke="#FFFFFF"
        strokeWidth="1.2"
        fill="none"
        opacity="0.35"
      />
      {/* Node N glyph */}
      <path
        d="M11 19.5v-7h2.2l3.8 4.6v-4.6h2v7h-2.2l-3.8-4.6v4.6H11z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

function ExpressIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="22" height="22" x="1" y="1" rx="5.5" fill="#18181B" />
      {/* Stylized 'ex' emblem */}
      <path
        d="M5.5 8h4.2v1.5H7.3v1.5h2.2v1.4H7.3v1.6h2.5V16H5.5V8z"
        fill="#FAFAFA"
      />
      <path
        d="M12.5 16l2.1-3.8-2-3.8h2l1.1 2.3 1.1-2.3h1.9l-2.1 3.8 2.1 3.8h-1.9l-1.2-2.4-1.2 2.4h-1.9z"
        fill="#FAFAFA"
      />
    </svg>
  );
}

const techItems = [
  {
    name: "React.js",
    role: "Frontend UI Library",
    brandColor: "#00D8FF",
    hoverBg: "hover:bg-[#F0FBFF]",
    hoverBorder: "hover:border-[#00D8FF]/70",
    activeBorder: "border-[#00D8FF]",
    Icon: ReactIcon,
    // Top position on the circle (x=185, y=60)
    centerPos: "top-[40px] left-1/2 -translate-x-1/2",
    lineTarget: { x: 185, y: 64 },
    tooltipClass: "bottom-full mb-2 left-1/2 -translate-x-1/2"
  },
  {
    name: "Node.js",
    role: "JavaScript Runtime",
    brandColor: "#5FA04E",
    hoverBg: "hover:bg-[#F2FAF0]",
    hoverBorder: "hover:border-[#5FA04E]/70",
    activeBorder: "border-[#5FA04E]",
    Icon: NodeIcon,
    // Right position on the circle (x=310, y=185)
    centerPos: "right-[16px] top-1/2 -translate-y-1/2",
    lineTarget: { x: 306, y: 185 },
    tooltipClass: "top-full mt-2 right-0"
  },
  {
    name: "Express.js",
    role: "Backend Framework",
    brandColor: "#18181B",
    hoverBg: "hover:bg-[#F4F4F5]",
    hoverBorder: "hover:border-[#18181B]/50",
    activeBorder: "border-[#18181B]",
    Icon: ExpressIcon,
    // Bottom position on the circle (x=185, y=310)
    centerPos: "bottom-[40px] left-1/2 -translate-x-1/2",
    lineTarget: { x: 185, y: 306 },
    tooltipClass: "top-full mt-2 left-1/2 -translate-x-1/2"
  },
  {
    name: "MongoDB",
    role: "NoSQL Database",
    brandColor: "#00ED64",
    hoverBg: "hover:bg-[#F0FDF4]",
    hoverBorder: "hover:border-[#00ED64]/70",
    activeBorder: "border-[#00ED64]",
    Icon: MongoLeafIcon,
    // Left position on the circle (x=60, y=185)
    centerPos: "left-[16px] top-1/2 -translate-y-1/2",
    lineTarget: { x: 64, y: 185 },
    tooltipClass: "top-full mt-2 left-0"
  }
];

export function TechOrbit() {
  const [hoveredTech, setHoveredTech] = useState(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative w-full max-w-xl mx-auto py-2 sm:py-4 px-4 flex flex-col items-center justify-center select-none">
      
      {/* Supporting Badge */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEF2FF] border border-[#4F46E5]/25 text-[#4F46E5] text-[11px] font-mono font-medium tracking-widest uppercase mb-4">
        CORE STACK
      </div>

      {/* DESKTOP / TABLET PERFECT CIRCULAR ORBIT (370px x 370px) */}
      <div className="hidden sm:flex relative w-[370px] h-[370px] items-center justify-center">
        
        {/* Soft Radial Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 rounded-full bg-gradient-to-br from-[#4F46E5]/8 via-[#7C3AED]/4 to-transparent blur-2xl pointer-events-none -z-10" />

        {/* Pure Circular SVG Geometry */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 370 370">
          {/* Outer True Orbit Circle (Radius = 125px) */}
          <circle
            cx="185"
            cy="185"
            r="125"
            fill="none"
            stroke="#E4E1D9"
            strokeWidth="1.2"
            opacity="0.85"
          />

          {/* Inner True Orbit Circle (Radius = 75px, dashed) */}
          <circle
            cx="185"
            cy="185"
            r="75"
            fill="none"
            stroke="#4F46E5"
            strokeWidth="1"
            strokeOpacity="0.22"
            strokeDasharray="4 4"
          />

          {/* Symmetrical Cardinal Connecting Lines (Equal 125px radius from 185, 185) */}
          {techItems.map((tech) => {
            const isHovered = hoveredTech === tech.name;
            return (
              <line
                key={tech.name}
                x1="185"
                y1="185"
                x2={tech.lineTarget.x}
                y2={tech.lineTarget.y}
                stroke={isHovered ? tech.brandColor : "#D9D6FF"}
                strokeWidth={isHovered ? "2.2" : "1.2"}
                strokeDasharray={isHovered ? "none" : "3 3"}
                className="transition-all duration-200"
              />
            );
          })}
        </svg>

        {/* Central Element: MERN FULL STACK Anchor (At exact center 185, 185) */}
        <div className="z-20 flex flex-col items-center justify-center px-4 py-3 rounded-xl bg-white border border-[#4F46E5]/30 shadow-sm text-center transition-all duration-200 hover:scale-[1.03] hover:shadow-md cursor-default">
          <span className="text-base font-mono font-extrabold tracking-widest text-[#4F46E5]">
            MERN
          </span>
          <span className="text-[9px] font-mono font-medium text-[#666666] tracking-wider uppercase mt-0.5">
            FULL STACK
          </span>
        </div>

        {/* 4 Technology Nodes positioned on the True Circular Orbit */}
        {techItems.map((tech, idx) => {
          const isHovered = hoveredTech === tech.name;
          const TechIcon = tech.Icon;

          return (
            <div key={tech.name} className={`absolute ${tech.centerPos} z-30`}>
              <motion.div
                animate={
                  shouldReduceMotion
                    ? {}
                    : {
                        y: isHovered ? 0 : [0, idx % 2 === 0 ? -2 : 2, 0],
                      }
                }
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: idx * 0.6,
                }}
                onMouseEnter={() => setHoveredTech(tech.name)}
                onMouseLeave={() => setHoveredTech(null)}
                className="relative cursor-pointer"
              >
                {/* Tech Badge Card with Visual Icon */}
                <div 
                  className={`flex items-center gap-2.5 px-3.5 py-2 rounded-lg border bg-white backdrop-blur-md transition-all duration-200 shadow-sm ${tech.hoverBg} ${tech.hoverBorder} ${
                    isHovered
                      ? `${tech.activeBorder} text-[#171717] shadow-md -translate-y-0.5`
                      : 'border-[#E4E1D9] text-[#171717]'
                  }`}
                >
                  <TechIcon className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:scale-110" />
                  <span className="text-xs font-heading font-semibold tracking-wide whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>

                {/* Technical Tooltip on Hover */}
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.12 }}
                    className={`absolute ${tech.tooltipClass} px-2.5 py-1 rounded-md bg-white border border-[#4F46E5]/30 text-center whitespace-nowrap z-50 shadow-md pointer-events-none`}
                  >
                    <span className="text-[11px] font-heading font-bold text-[#171717] block">
                      {tech.name}
                    </span>
                    <span className="text-[9px] font-mono text-[#4F46E5] block">
                      {tech.role}
                    </span>
                  </motion.div>
                )}
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* MOBILE COMPACT RESPONSIVE LAYOUT */}
      <div className="flex sm:hidden flex-col items-center space-y-3 w-full">
        {/* Center Label */}
        <div className="flex flex-col items-center justify-center px-5 py-2.5 rounded-xl bg-white border border-[#4F46E5]/35 text-center shadow-sm">
          <span className="text-sm font-mono font-extrabold text-[#4F46E5] tracking-widest">MERN</span>
          <span className="text-[9px] text-[#666666] font-mono tracking-tight uppercase">FULL STACK</span>
        </div>

        {/* 2x2 Clean Compact Technology Grid with Visual Icons */}
        <div className="grid grid-cols-2 gap-2.5 w-full max-w-xs">
          {techItems.map((tech) => {
            const TechIcon = tech.Icon;
            return (
              <div 
                key={tech.name}
                className={`flex items-center gap-2.5 p-2.5 rounded-lg bg-white border border-[#E4E1D9] text-left transition-colors shadow-sm ${tech.hoverBg} ${tech.hoverBorder}`}
              >
                <TechIcon className="w-4 h-4 shrink-0" />
                <div className="min-w-0">
                  <div className="text-xs font-bold text-[#171717] font-heading truncate">{tech.name}</div>
                  <div className="text-[9px] text-[#666666] font-mono truncate">{tech.role}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
