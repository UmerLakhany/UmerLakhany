import type { Project } from "@/lib/types";

// ============================================================
// Real projects Umer has built — this is the exact, complete list he
// provided. Every entry below corresponds to one of his live project URLs.
// ============================================================

export const projects: Project[] = [
  {
    slug: "livido-usa",
    name: "Livido USA",
    tagline: "Nonprofit registration platform for the Dominican Vitilla League (NYC)",
    description:
      "A nonprofit website built for the Dominican Vitilla League in New York City, centered around a multi-step registration system for league participants.",
    categories: ["Nonprofit", "Client Work"],
    techStack: ["React", "Vite", "PayPal API", "Google Sheets API"],
    role: "Full-Stack Developer",
    status: "Completed",
    liveUrl: "https://lividousa-three.vercel.app",
    featured: true,
    caseStudy: {
      overview:
        "Livido USA needed a registration system for the Dominican Vitilla League that could replace manual, paper-based sign-ups with a guided digital flow — while still producing records the league's organizers could work with directly.",
      challenge:
        "League registration involved a long list of required information collected across many steps, plus a signature requirement, in a way that had to stay approachable for participants who aren't necessarily comfortable with long online forms. Payment and record-keeping also needed to plug into tools the league already used.",
      solution:
        "I built an 11-step guided registration flow that breaks the process into manageable stages, captures a digital signature as part of the flow, and integrates with Google Sheets so submissions land directly in a spreadsheet the organizers can review. PayPal was integrated to handle registration payments, and the site supports translation so it's accessible to a wider range of participants.",
      features: [
        "11-step multi-stage registration flow",
        "In-browser signature capture",
        "Google Sheets integration for submissions",
        "PayPal payment integration",
        "Translation support",
        "Fully responsive UI",
      ],
      role:
        "I worked as the full-stack developer on this project, building the registration flow, the signature capture, and the integrations with Google Sheets and PayPal.",
      challenges:
        "Breaking an 11-step form into a flow that feels manageable rather than overwhelming was the core UX challenge, while keeping each submission's data reliably synced to Google Sheets and correctly tied to its PayPal payment.",
      outcome:
        "The platform is live and used by the Dominican Vitilla League for participant registration.",
      learned:
        "This project pushed me to think carefully about multi-step form state, data integrity across third-party integrations (Sheets and PayPal), and designing forms for a non-technical audience.",
    },
  },
  {
    slug: "janet-adenusi",
    name: "Janet Adenusi",
    tagline: "Personal brand site for an author, speaker & medical practitioner",
    description:
      "A personal brand and portfolio site built for Janet Adenusi, positioned around her work as an author, speaker, and medical practitioner.",
    categories: ["Personal", "Client Work"],
    techStack: ["React", "Vite"],
    role: "Web Developer",
    status: "Completed",
    liveUrl: "http://janetadenusi.com",
  },
  {
    slug: "feel-this-not-that",
    name: "Feel This Not That",
    tagline: "Content site and book launch platform on emotional wellness",
    description:
      "A content site built around an emotional-wellness framework, with articles, topic categories, and email signup ahead of an upcoming book launch.",
    categories: ["Personal"],
    techStack: ["WordPress"],
    role: "Web Developer",
    status: "Completed",
    liveUrl: "https://feelthisnotthat.com",
  },
  {
    slug: "kevin-cripe-motivational-speaker",
    name: "Kevin Cripe",
    tagline: "Speaker & author site for a motivational speaker",
    description:
      "A speaker/author website for Kevin Cripe, a former elementary teacher turned motivational speaker, covering his keynote history, published books, and a podcast.",
    categories: ["Client Work", "Personal"],
    techStack: ["HTML", "CSS"],
    role: "Web Developer",
    status: "Completed",
    liveUrl: "https://kevincripemotivationalspeaker.com",
  },
  {
    slug: "weekly-team-fun",
    name: "WTF Lunch",
    tagline: "Social lunch-coordination app for teams",
    description:
      "A social lunch-coordination web app — location-based lunch deal discovery, group creation and voting, daily featured deals, and a weekly team challenge.",
    categories: ["Web Application"],
    techStack: ["React"],
    role: "Full-Stack Developer",
    status: "Completed",
    liveUrl: "https://weeklyteamfun.com",
  },
  {
    slug: "angel-transport",
    name: "Angel Transport",
    tagline: "Business site for a transport company",
    description: "A business website built and deployed for Angel Transport.",
    categories: ["Client Work"],
    techStack: ["Web Application"],
    role: "Web Developer",
    status: "Completed",
    liveUrl: "https://angeltransport.net",
  },
  {
    slug: "get4give",
    name: "Get 4 Give",
    tagline: "Nonprofit site for community safety, senior wellness & disaster preparedness programs",
    description:
      "A nonprofit website covering programs like fall prevention, wildfire defense, senior care advocacy, and community wellness, with donation and workshop-registration flows built in.",
    categories: ["Nonprofit", "Client Work"],
    techStack: ["WordPress"],
    role: "Web Developer",
    status: "Completed",
    liveUrl: "https://www.get4give.org",
  },
  {
    slug: "reconnecting-way",
    name: "Reconnecting Way",
    tagline: "Business website",
    description: "A business website built and deployed for Reconnecting Way.",
    categories: ["Client Work"],
    techStack: ["WordPress"],
    role: "Web Developer",
    status: "Completed",
    liveUrl: "https://www.reconnectingway.com",
  },
  {
    slug: "banerjee-co",
    name: "Banerjee.co",
    tagline: "Personal brand site",
    description: "A personal brand site built and deployed as a React application.",
    categories: ["Personal"],
    techStack: ["React", "Vite"],
    role: "Web Developer",
    status: "Completed",
    liveUrl: "https://www.banerjee.co",
  },
  {
    slug: "babbott-dentist",
    name: "Ben Abbott Dentist",
    tagline: "Site for a dental practice relocation",
    description:
      "A site for Dr. Ben Abbott's dental practice, sharing his professional background and capturing patient interest during a move to a new location.",
    categories: ["Client Work"],
    techStack: ["HTML", "CSS"],
    role: "Web Developer",
    status: "Completed",
    liveUrl: "https://www.babbottdentist.com",
  },
  {
    slug: "ecco-sphere",
    name: "Ecco-sphere",
    tagline: "Web application",
    description: "A React web application built and deployed on Vercel.",
    categories: ["Web Application"],
    techStack: ["React", "Vite"],
    role: "Web Developer",
    status: "Completed",
    liveUrl: "https://fresh-flow-omega.vercel.app",
  },
  {
    slug: "clean-sheet-ai",
    name: "CleanSheet AI",
    tagline: "AI Excel analyst that cleans, standardizes and explains spreadsheets",
    description:
      "A B2B SaaS product ('Finley') that acts as an AI Excel analyst — matching, deduplicating, mapping, and cleaning spreadsheet data, then surfacing insights and exporting a cleaned result.",
    categories: ["SaaS"],
    techStack: ["React"],
    role: "Full-Stack Developer",
    status: "Completed",
    liveUrl: "https://clean-sheet-ai.vercel.app",
    featured: true,
    caseStudy: {
      overview:
        "Spreadsheets accumulate inconsistencies fast — duplicate rows, mismatched schemas, unclear formulas. CleanSheet AI (branded as 'Finley') is built to automate that cleanup with an AI-driven analyst rather than manual review.",
      challenge:
        "Cleaning messy spreadsheet data by hand doesn't scale, and it's easy for hidden errors to slip through into reporting and analysis. The product needed to turn that manual, error-prone process into something automated and trustworthy for roles like finance, marketing ops, and business intelligence.",
      solution:
        "I built a SaaS landing experience and product around a set of AI-driven spreadsheet tools: a matching engine, duplicate detector, schema mapper, logic tracer, an insights layer, and an export cleaner — aimed at finance, marketing, sales-ops, BI, e-commerce, and admin teams.",
      features: [
        "Matching engine",
        "Duplicate detector",
        "Schema mapper",
        "Logic tracer",
        "Insights generation",
        "Export cleaner",
      ],
      role: "I built this as a full-stack SaaS project, covering the product build and deployment.",
      outcome: "The product is live and deployed on Vercel.",
    },
  },
  {
    slug: "mtest-labs",
    name: "Mtest Labs",
    tagline: "Site for an AI/ML testing & quality engineering consultancy",
    description:
      "A website for Mtest Labs, an AI/ML testing and quality-engineering consultancy operating across the UK, Europe, and USA, communicating their SC-cleared QA engineering services and client portfolio.",
    categories: ["Client Work"],
    techStack: ["React", "Vite"],
    role: "Web Developer",
    status: "Completed",
    liveUrl: "https://mtestlabs.com",
    featured: true,
    caseStudy: {
      overview:
        "Mtest Labs is an AI/ML testing and quality-engineering consultancy with SC-cleared QA engineers, working on LLM evaluation, GenAI testing, mobile app testing, and test automation for clients including Google, Snap, and Toyota, and listed as a G-Cloud 14 supplier based in London and Delaware.",
      challenge:
        "A specialist consultancy like this needs a site that communicates technical credibility quickly — positioning, service areas, and client portfolio all need to read as trustworthy to a technical, enterprise audience, without needing an oversized production.",
      solution:
        "I built a focused, brand-led site that leads with Mtest Labs' positioning as an AI/ML testing specialist, communicates their SC-cleared engineering team and service areas (LLM evaluation, GenAI testing, mobile testing, test automation), and reflects their London & Delaware presence and G-Cloud 14 supplier status.",
      features: [
        "Consultancy positioning and service breakdown",
        "Client/portfolio references",
        "Custom brand-led visual identity",
        "Responsive, production-ready site",
      ],
      role: "I built and deployed the site as a freelance web developer for Mtest Labs.",
      outcome: "The site is live in production at mtestlabs.com.",
    },
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
    status: "Completed",
    liveUrl: "https://launchokr.com",
    featured: true,
    caseStudy: {
      overview:
        "QA teams often spend a lot of time translating high-level goals into concrete OKRs and test checklists by hand. LaunchOKR turns that into an AI-assisted workflow: generate OKRs and checklists, compare how different AI models approach the same brief, refine through conversation, and export the result as an action plan.",
      challenge:
        "The product needed to make an inherently open-ended task — writing good OKRs and test plans — feel structured and fast, while still letting users steer and refine the AI's output rather than just accepting a single generated result.",
      solution:
        "I built a SaaS application that lets QA teams generate OKRs and test checklists with AI, compare results across multiple AI models side by side, refine outputs through a conversational interface, and export production-ready action plans. A free tier lowers the barrier for teams to try it.",
      features: [
        "AI-generated OKRs and test checklists",
        "Multi-model comparison",
        "Conversational refinement",
        "Exportable, production-ready action plans",
        "Free-to-start pricing tier",
      ],
      role: "I built this as a full-stack project, from the product concept through to the deployed application.",
      outcome: "LaunchOKR is live in production at launchokr.com.",
    },
  },
  {
    slug: "john-neeve",
    name: "John Neeve",
    tagline: "Art e-commerce storefront for an independent artist",
    description:
      "An e-commerce storefront for artist John Neeve's work, covering wall art, home décor, apparel, and stationery.",
    categories: ["E-commerce", "Client Work"],
    techStack: ["Fine Art America (Pixels)"],
    role: "Web Developer",
    status: "Completed",
    liveUrl: "https://johnneeve.com",
  },
  {
    slug: "snap-mark-portals",
    name: "Snap Mark Portals",
    tagline: "Site for a Dubai-based technology services company",
    description:
      "A site for a UAE-based technology services company covering web design, e-commerce development, mobile app development, IT infrastructure, cloud automation, and branding, across industries like e-commerce, real estate, hospitality, and logistics.",
    categories: ["Client Work"],
    techStack: ["React", "Vite"],
    role: "Web Developer",
    status: "Completed",
    liveUrl: "https://snapmark-nu.vercel.app",
    featured: true,
  },
  {
    slug: "hmvide-tech",
    name: "HMVide Tech",
    tagline: "Technology company site",
    description: "A site built and deployed for a technology company.",
    categories: ["Client Work"],
    techStack: ["React", "Vite"],
    role: "Web Developer",
    status: "Completed",
    liveUrl: "https://hmvide-tech-ltd.vercel.app",
  },
  {
    slug: "real-asset-management",
    name: "Real Asset Management",
    tagline: "Site for a commercial real estate finance & brokerage business",
    description:
      "A business site for a commercial real estate finance and asset brokerage operation, covering their brokerage and finance focus areas.",
    categories: ["Client Work"],
    techStack: ["Web Application"],
    role: "Web Developer",
    status: "Completed",
    liveUrl: "https://www.realassetmanagement.co",
  },
  {
    slug: "game-viral",
    name: "Game Viral",
    tagline: "Service site for AI-assisted viral game clips",
    description:
      "A landing and intake site for a service that produces short-form viral video clips from game footage, with a guided submission process and Stripe payment integration.",
    categories: ["SaaS", "Web Application"],
    techStack: ["React", "Vite", "Stripe"],
    role: "Full-Stack Developer",
    status: "Completed",
    liveUrl: "https://game-viral.vercel.app",
  },
  {
    slug: "launchokr-preview",
    name: "LaunchOKR (Preview)",
    tagline: "Preview deployment of the LaunchOKR AI OKR generator",
    description:
      "An earlier preview deployment of the LaunchOKR AI-powered OKR generator for QA teams, later published at launchokr.com.",
    categories: ["SaaS"],
    techStack: ["React", "Vite"],
    role: "Full-Stack Developer",
    status: "Completed",
    liveUrl: "https://launchokr.vercel.app",
  },
  {
    slug: "amir-portfolio",
    name: "Amir Portfolio",
    tagline: "Personal portfolio site",
    description: "A personal portfolio site built and deployed as a React application.",
    categories: ["Personal"],
    techStack: ["React"],
    role: "Web Developer",
    status: "Completed",
    liveUrl: "https://amir-portfolio-rho.vercel.app",
  },
  {
    slug: "sokoverse",
    name: "Sokoverse",
    tagline: "Site for an electronics reseller & refurbishment business",
    description:
      "A business site for an electronics resale and refurbishment company handling smartphones, tablets, and wearables across reseller, refurbisher, and liquidation service lines.",
    categories: ["E-commerce", "Client Work"],
    techStack: ["HTML", "CSS"],
    role: "Web Developer",
    status: "Completed",
    liveUrl: "https://sokoverse-eight.vercel.app",
  },
  {
    slug: "starcoins",
    name: "Starcoins",
    tagline: "Installable Progressive Web App",
    description:
      "A Progressive Web App built with React and Vite — installable and capable of working offline via a service worker.",
    categories: ["Web Application", "Personal"],
    techStack: ["React", "Vite", "PWA"],
    role: "Full-Stack Developer",
    status: "Completed",
    liveUrl: "https://starcoins.vercel.app",
  },
  {
    slug: "aithera",
    name: "Aithera",
    tagline: "Shopify storefront for an audio-accessories brand",
    description:
      "An e-commerce storefront for audio accessories (earbuds, headphones), with product filtering and a region/currency selector.",
    categories: ["E-commerce", "Client Work"],
    techStack: ["Shopify"],
    role: "Web Developer",
    status: "Completed",
    liveUrl: "https://aithera.vercel.app",
  },
  {
    slug: "transcontinental-seven-motors",
    name: "Transcontinental Seven Motors",
    tagline: "Web application",
    description: "A React web application built and deployed on Vercel.",
    categories: ["Client Work"],
    techStack: ["React", "Vite"],
    role: "Web Developer",
    status: "Completed",
    liveUrl: "https://transcontinental-seven-motors.vercel.app",
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
  "Client Work",
  "Web Application",
  "SaaS",
  "Nonprofit",
  "Marketplace",
  "E-commerce",
  "Personal",
] as const;
