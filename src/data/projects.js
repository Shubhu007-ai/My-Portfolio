// Single source of truth for all portfolio projects

export const projects = [
  {
    order: 1,
    id: 1,
    slug: "rs-education-solution",
    name: "RS Education Solution",
    title: "RS Education Solution",
    subtitle: "Educational Consultancy & Student Guidance Platform",
    category: "Full Stack Web Application",
    filterCategory: "Full Stack",
    stack: "MERN Stack",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Authentication"
    ],
    liveUrl: "https://rseducationsolution.in/",
    githubUrl: null,
    featured: true,
    displayUrl: "rseducationsolution.in",
    shortDescription: "An educational consultancy and student guidance platform designed to provide a structured digital counselling experience.",
    description: "An educational consultancy and student guidance platform built as a full-stack web application using the MERN stack.",
    overview: "An educational consultancy and student guidance platform built as a full-stack web application using the MERN stack.",
    contributions: [
      "Full-stack feature development",
      "Responsive React interfaces",
      "REST API development",
      "Authentication",
      "Secure user management",
      "MongoDB integration",
      "Responsive layouts"
    ],
    highlights: [
      "Full-stack counselling platform architecture",
      "Secure user management with authentication",
      "Scalable backend APIs using Node.js & Express.js",
      "Persistent data storage with MongoDB"
    ],
    whatIBuilt: [
      "Developed a full-stack counselling platform.",
      "Implemented authentication.",
      "Worked with secure user management.",
      "Built responsive layouts.",
      "Developed scalable backend APIs.",
      "Integrated MongoDB.",
      "Worked on full-stack features using the MERN stack."
    ],
    previewTheme: {
      accent: "#6366F1",
      badge: "MERN Consultancy Platform",
      tagline: "Educational Guidance & Student Counselling",
      stats: [
        { label: "Architecture", value: "Full Stack MERN" },
        { label: "Security", value: "Auth & User Management" },
        { label: "Interface", value: "Responsive React UI" }
      ]
    }
  },
  {
    order: 2,
    id: 2,
    slug: "agritech-ai",
    name: "AgriTech AI",
    title: "AgriTech AI",
    fullTitle: "AgriTech AI - Smart Farming Platform",
    subtitle: "Smart Farming & Crop Intelligence Platform",
    category: "Full Stack Web Application",
    filterCategory: "Full Stack",
    stack: "MERN Stack",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs"
    ],
    liveUrl: "https://www.agritechai.in/",
    githubUrl: null,
    featured: true,
    displayUrl: "agritechai.in",
    shortDescription: "An intelligent farming platform combining real-time weather monitoring with crop disease detection to support better farming decisions.",
    description: "A smart farming platform combining weather monitoring and crop disease detection with a responsive web experience.",
    overview: "A smart farming platform combining weather monitoring and crop disease detection with a responsive web experience.",
    contributions: [
      "Full-stack MERN development",
      "Real-time weather monitoring",
      "Crop disease detection",
      "REST API integration",
      "React dashboard",
      "Node.js backend"
    ],
    highlights: [
      "Full-stack smart farming platform architecture",
      "Real-time weather monitoring integration",
      "Crop disease detection interface",
      "Responsive React dashboard with REST API integration",
      "Backend services built with Node.js & Express"
    ],
    whatIBuilt: [
      "Built a full-stack smart farming platform.",
      "Implemented real-time weather monitoring.",
      "Worked on crop disease detection.",
      "Integrated REST APIs.",
      "Built a responsive React dashboard.",
      "Developed backend functionality using Node.js."
    ],
    previewTheme: {
      accent: "#10B981",
      badge: "Smart Farming Dashboard",
      tagline: "Weather Intelligence & Crop Health",
      stats: [
        { label: "Platform", value: "Full Stack MERN" },
        { label: "Weather", value: "Real-time Monitoring" },
        { label: "Dashboard", value: "Interactive React UI" }
      ]
    }
  },
  {
    order: 3,
    id: 3,
    slug: "food-delight",
    name: "Food Delight",
    title: "Food Delight",
    fullTitle: "Food Delight - Food Delivery Web App",
    subtitle: "Food Delivery Web App",
    category: "Frontend Web Application",
    filterCategory: "Frontend",
    stack: "Frontend",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript"
    ],
    liveUrl: null,
    githubUrl: null,
    featured: true,
    displayUrl: "fooddelight.local",
    shortDescription: "A responsive food delivery web interface built with reusable UI components and optimized across mobile, tablet and desktop screens.",
    description: "A responsive food delivery web interface focused on clean UI, reusable components and cross-device usability.",
    overview: "A responsive food delivery web interface focused on clean UI, reusable components and cross-device usability.",
    contributions: [
      "Responsive UI development",
      "Reusable UI components",
      "JavaScript development",
      "Modern CSS",
      "Mobile optimization",
      "Tablet optimization",
      "Desktop optimization"
    ],
    highlights: [
      "Cross-device layout optimization across mobile, tablet, and desktop",
      "Modular, reusable UI components structure",
      "Client-side interactions built with modern JavaScript",
      "Custom responsive styling with modern CSS3"
    ],
    whatIBuilt: [
      "Created responsive food delivery interface.",
      "Built reusable UI components.",
      "Optimized mobile layouts.",
      "Optimized tablet layouts.",
      "Optimized desktop layouts.",
      "Used modern JavaScript and CSS."
    ],
    previewTheme: {
      accent: "#F59E0B",
      badge: "Food Delivery Interface",
      tagline: "Cross-Device Responsive Experience",
      stats: [
        { label: "Stack", value: "HTML5 / CSS3 / JS" },
        { label: "Components", value: "Reusable UI Modules" },
        { label: "Layout", value: "Mobile / Tablet / Desktop" }
      ]
    }
  }
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug) {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return { previous: null, next: null };

  const previous = index > 0 ? projects[index - 1] : null;
  const next = index < projects.length - 1 ? projects[index + 1] : null;

  return { previous, next };
}
