import type { Project } from "@/lib/types";

// ============================================================
// CV projects first (keep in sync with the PDF in /public), then the rest.
// ============================================================

export const projects: Project[] = [
  {
    slug: "zeno-esim",
    name: "Zeno eSIM",
    tagline: "eSIM Web Platform",
    description:
      "A production eSIM platform — contributed across frontend, backend, and admin panel development.",
    categories: ["Platform"],
    techStack: ["Frontend", "Backend", "Admin Panel"],
    role: "Full-Stack Developer",
    status: "Live",
    liveUrl: "https://zenoesim.com",
    featured: true,
    highlights: [
      "Contributed to a production eSIM platform across frontend, backend, and admin panel development.",
      "Built and integrated core application features and user workflows for eSIM management and platform operations.",
      "Developed admin-side functionality for managing platform data and application content.",
    ],
  },
  {
    slug: "saudagran",
    name: "Saudagran",
    tagline: "Full-Stack Web Application",
    description:
      "A full-stack web application built with React/Next.js, Node.js, Express.js, PostgreSQL, and Sequelize.",
    categories: ["Full-Stack"],
    techStack: ["React", "Next.js", "Node.js", "Express.js", "PostgreSQL", "Sequelize"],
    role: "Full-Stack Developer",
    status: "Live",
    liveUrl: "https://saudagran.app",
    featured: true,
    highlights: [
      "Developed full-stack features using React/Next.js, Node.js, Express.js, PostgreSQL, and Sequelize.",
      "Built and integrated REST APIs, database operations, authentication, and application workflows.",
      "Developed responsive frontend interfaces and connected them with backend services for end-to-end functionality.",
    ],
  },
  {
    slug: "weekly-team-fun",
    name: "Weekly Team Fun",
    tagline: "Interactive Team Engagement Platform",
    description:
      "An interactive platform featuring team engagement activities and collaborative experiences.",
    categories: ["Web Application"],
    techStack: ["React"],
    role: "Developer",
    status: "Live",
    liveUrl: "https://weeklyteamfun.com",
    featured: true,
    highlights: [
      "Developed an interactive platform featuring team engagement activities and collaborative experiences.",
      "Built responsive user interfaces and interactive features to enhance team participation.",
    ],
  },
  {
    slug: "livido-usa",
    name: "LIVIDOUSA",
    tagline: "Nonprofit Registration & Donation Platform",
    description:
      "A full-stack nonprofit platform featuring a multi-step registration system, online donations, and PayPal integration.",
    categories: ["Nonprofit"],
    techStack: ["React", "PayPal", "Google Sheets API"],
    role: "Full-Stack Developer",
    status: "Live",
    liveUrl: "https://lividousa.org",
    featured: true,
    highlights: [
      "Developed a full-stack nonprofit platform featuring a multi-step registration system, online donations, and PayPal integration.",
      "Integrated Google Sheets for registration data management and implemented multilingual support to serve a diverse audience.",
      "Built interactive forms with digital signatures to streamline the participant registration process.",
    ],
  },
  {
    slug: "janet-adenusi",
    name: "Janet Adenusi",
    tagline: "Professional Author Website",
    description:
      "A responsive author website featuring book showcases, author information, and a professional portfolio.",
    categories: ["Website"],
    techStack: ["React"],
    role: "Developer",
    status: "Live",
    liveUrl: "http://janetadenusi.com",
    highlights: [
      "Developed a responsive author website featuring book showcases, author information, and a professional portfolio.",
      "Integrated interactive UI components and optimized the website for seamless navigation across desktop and mobile devices.",
    ],
  },

  // ---- Other projects ----
  {
    slug: "feel-this-not-that",
    name: "Feel This Not That",
    tagline: "Content site and book launch platform on emotional wellness",
    description:
      "A content site built around an emotional-wellness framework, with articles, topic categories, and email signup ahead of an upcoming book launch.",
    categories: ["Personal"],
    techStack: ["WordPress"],
    role: "Web Developer",
    status: "Live",
    liveUrl: "https://feelthisnotthat.com",
    highlights: [],
  },
  {
    slug: "kevin-cripe-motivational-speaker",
    name: "Kevin Cripe",
    tagline: "Speaker & author site for a motivational speaker",
    description:
      "A speaker/author website for Kevin Cripe, a former elementary teacher turned motivational speaker, covering his keynote history, published books, and a podcast.",
    categories: ["Website", "Personal"],
    techStack: ["HTML", "CSS"],
    role: "Web Developer",
    status: "Live",
    liveUrl: "https://kevincripemotivationalspeaker.com",
    highlights: [],
  },
  {
    slug: "angel-transport",
    name: "Angel Transport",
    tagline: "Business site for a transport company",
    description: "A business website built and deployed for Angel Transport.",
    categories: ["Website"],
    techStack: ["Web Application"],
    role: "Web Developer",
    status: "Live",
    liveUrl: "https://angeltransport.net",
    highlights: [],
  },
  {
    slug: "get4give",
    name: "Get 4 Give",
    tagline: "Nonprofit site for community safety, senior wellness & disaster preparedness programs",
    description:
      "A nonprofit website covering programs like fall prevention, wildfire defense, senior care advocacy, and community wellness, with donation and workshop-registration flows built in.",
    categories: ["Nonprofit", "Website"],
    techStack: ["WordPress"],
    role: "Web Developer",
    status: "Live",
    liveUrl: "https://www.get4give.org",
    highlights: [],
  },
  {
    slug: "reconnecting-way",
    name: "Reconnecting Way",
    tagline: "Business website",
    description: "A business website built and deployed for Reconnecting Way.",
    categories: ["Website"],
    techStack: ["WordPress"],
    role: "Web Developer",
    status: "Live",
    liveUrl: "https://www.reconnectingway.com",
    highlights: [],
  },
  {
    slug: "banerjee-co",
    name: "Banerjee.co",
    tagline: "Personal brand site",
    description: "A personal brand site built and deployed as a React application.",
    categories: ["Personal"],
    techStack: ["React", "Vite"],
    role: "Web Developer",
    status: "Live",
    liveUrl: "https://www.banerjee.co",
    highlights: [],
  },
  {
    slug: "babbott-dentist",
    name: "Ben Abbott Dentist",
    tagline: "Site for a dental practice relocation",
    description:
      "A site for Dr. Ben Abbott's dental practice, sharing his professional background and capturing patient interest during a move to a new location.",
    categories: ["Website"],
    techStack: ["HTML", "CSS"],
    role: "Web Developer",
    status: "Live",
    liveUrl: "https://www.babbottdentist.com",
    highlights: [],
  },
  {
    slug: "mtest-labs",
    name: "Mtest Labs",
    tagline: "Site for an AI/ML testing & quality engineering consultancy",
    description:
      "A website for Mtest Labs, an AI/ML testing and quality-engineering consultancy operating across the UK, Europe, and USA, communicating their SC-cleared QA engineering services and client portfolio.",
    categories: ["Website"],
    techStack: ["React", "Vite"],
    role: "Web Developer",
    status: "Live",
    liveUrl: "https://mtestlabs.com",
    highlights: [
      "Consultancy positioning and service breakdown",
      "Client/portfolio references",
      "Custom brand-led visual identity",
      "Responsive, production-ready site",
    ],
  },
  {
    slug: "launchokr",
    name: "LaunchOKR",
    tagline: "AI-powered OKR generator for QA teams",
    description:
      "A SaaS tool that generates OKRs (Objectives & Key Results) and test checklists for QA teams using AI, lets users compare outputs across multiple AI models, refine them conversationally, and export production-ready action plans.",
    categories: ["SaaS"],
    techStack: ["React", "Vite"],
    role: "Full-Stack Developer",
    status: "Live",
    liveUrl: "https://launchokr.com",
    highlights: [
      "AI-generated OKRs and test checklists",
      "Multi-model comparison",
      "Conversational refinement",
      "Exportable, production-ready action plans",
      "Free-to-start pricing tier",
    ],
  },
  {
    slug: "john-neeve",
    name: "John Neeve",
    tagline: "Art e-commerce storefront for an independent artist",
    description:
      "An e-commerce storefront for artist John Neeve's work, covering wall art, home décor, apparel, and stationery.",
    categories: ["E-commerce", "Website"],
    techStack: ["Fine Art America (Pixels)"],
    role: "Web Developer",
    status: "Live",
    liveUrl: "https://johnneeve.com",
    highlights: [],
  },
  {
    slug: "real-asset-management",
    name: "Real Asset Management",
    tagline: "Site for a commercial real estate finance & brokerage business",
    description:
      "A business site for a commercial real estate finance and asset brokerage operation, covering their brokerage and finance focus areas.",
    categories: ["Website"],
    techStack: ["Web Application"],
    role: "Web Developer",
    status: "Live",
    liveUrl: "https://www.realassetmanagement.co",
    highlights: [],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export const projectCategories = [
  "All",
  "Platform",
  "Full-Stack",
  "Web Application",
  "SaaS",
  "Nonprofit",
  "E-commerce",
  "Website",
  "Personal",
] as const;
