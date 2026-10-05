// Single source of truth for all technical skills & capabilities

export const categories = [
  {
    id: "frontend",
    number: "01",
    title: "Frontend Development",
    previewTitle: "Frontend Development",
    description: "Responsive web interfaces built with component-based architecture, modern JavaScript, and clean state management.",
    technologies: [
      { name: "React.js", icon: "Atom", category: "frontend", description: "Frontend UI Library", featured: true },
      { name: "JavaScript (ES6+)", icon: "FileCode2", category: "frontend", description: "Modern JavaScript", featured: true },
      { name: "HTML5 / CSS3", icon: "Layout", category: "frontend", description: "Semantic Markup & Styling", featured: true },
      { name: "Tailwind CSS", icon: "Wind", category: "frontend", description: "Utility-First CSS", featured: true },
      { name: "Redux Toolkit", icon: "Cpu", category: "frontend", description: "State Management", featured: true },
      { name: "Next.js", icon: "Layers", category: "frontend", description: "React Framework", featured: true },
      { name: "Framer Motion", icon: "Sparkles", category: "frontend", description: "Declarative UI Animations", featured: true },
    ]
  },
  {
    id: "backend",
    number: "02",
    title: "Backend Development",
    previewTitle: "Backend Development",
    description: "Server-side web services, RESTful API endpoints, and authentication workflows using Node.js and Express.",
    technologies: [
      { name: "Node.js", icon: "Server", category: "backend", description: "JavaScript Runtime", featured: true },
      { name: "Express.js", icon: "Cpu", category: "backend", description: "Backend Framework", featured: true },
      { name: "REST APIs", icon: "Network", category: "backend", description: "Scalable API Architecture", featured: true },
      { name: "JWT Authentication", icon: "ShieldCheck", category: "backend", description: "Token-Based Security", featured: true },
      { name: "Middleware Architecture", icon: "Workflow", category: "backend", description: "Modular Request Handling", featured: true },
    ]
  },
  {
    id: "database_tools",
    number: "03",
    title: "Databases & Tools",
    previewTitle: "Databases & Tools",
    description: "Database modeling with MongoDB, distributed version control with Git/GitHub, and modern build tooling.",
    technologies: [
      { name: "MongoDB", icon: "Database", category: "database", description: "Document NoSQL Database", featured: true },
      { name: "Mongoose", icon: "Workflow", category: "database", description: "Object Data Modeling", featured: true },
      { name: "Git / GitHub", icon: "Github", category: "tools", description: "Version Control & Collaboration", featured: true },
      { name: "Vite / Webpack", icon: "Zap", category: "tools", description: "Frontend Bundling & Dev Tools", featured: true },
      { name: "Postman", icon: "Send", category: "tools", description: "API Testing & Debugging", featured: true },
    ]
  }
];

// Alias export for backwards compatibility
export const skillCategories = categories;

export const orbitTechs = [
  { name: "React.js", role: "Frontend UI Library", color: "#61DAFB", glow: "rgba(97, 218, 251, 0.35)" },
  { name: "Node.js", role: "JavaScript Runtime", color: "#68A063", glow: "rgba(104, 160, 99, 0.35)" },
  { name: "Express.js", role: "Backend Framework", color: "#818CF8", glow: "rgba(129, 140, 248, 0.35)" },
  { name: "MongoDB", role: "NoSQL Database", color: "#10B981", glow: "rgba(16, 185, 129, 0.35)" },
];

export const developmentProcess = [
  {
    step: "01",
    title: "Understand",
    description: "Understand the problem, users and requirements."
  },
  {
    step: "02",
    title: "Design",
    description: "Plan components, data flow and interface structure."
  },
  {
    step: "03",
    title: "Build",
    description: "Develop reusable frontend components and backend APIs."
  },
  {
    step: "04",
    title: "Connect",
    description: "Integrate APIs, authentication and databases."
  },
  {
    step: "05",
    title: "Refine",
    description: "Test responsiveness, performance and usability."
  }
];

export const exploringTechs = [
  { name: "Next.js", focus: "App Router & SSR" },
  { name: "TypeScript", focus: "Static Type Safety" },
  { name: "Modern React Patterns", focus: "Custom Hooks & Architecture" }
];
