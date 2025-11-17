export type Project = {
  id: string;
  name: string;
  role: string;
  tagline: string;
  url: string;
  githubUrl?: string;
  status?: "live" | "wip" | "archived";
  highlights: string[];
  stackSummary?: string;
  aiSummary?: string;
  screenshot?: string; // path under /public, e.g. "/screenshots/zynvirtual.png"
};

export const projects: Project[] = [
  {
    id: "syrn-ai",
    name: "syrn.ai",
    role: "Founding AI Engineer & Full‑Stack Developer",
    tagline: "AI-native product experience powered by modern LLM tooling.",
    url: "https://syrn.ai/",
    status: "live",
    highlights: [
      "Designed end-to-end architecture for an AI-first product experience.",
      "Implemented scalable, cloud-native frontend and backend foundations.",
      "Integrated experimentation and analytics to iterate on AI features.",
    ],
    stackSummary:
      "Modern TypeScript full-stack stack with a React/Next.js style SPA, API layer, and cloud-native deployment pipeline.",
    aiSummary:
      "Leverages LLMs via API for core product workflows, including intelligent orchestration, prompt design, and safety filters. Additional details will be filled in from the GitHub repo.",
    screenshot: "/screenshots/syrn-ai.png",
  },
  {
    id: "sov-social",
    name: "sov.social",
    role: "AI Engineer & Platform Developer",
    tagline: "Experimental social platform exploring AI-augmented communities.",
    url: "https://sov.social/",
    status: "live",
    highlights: [
      "Built social features with focus on identity, feeds, and secure interactions.",
      "Explored AI-augmented discovery and content surfacing.",
    ],
    stackSummary:
      "Full-stack web stack with a modern frontend framework and API-driven backend, optimized for fast iteration.",
    aiSummary:
      "Uses AI to enrich user experience (recommendations, content insights, or moderation). Precise implementation details will be captured from the GitHub source.",
    screenshot: "/screenshots/sov-social.png",
  },
  {
    id: "zynvirtual",
    name: "Zyn Virtual",
    role: "Product Engineer & AI Integrator",
    tagline: "Virtual experiences powered by AI-driven UX.",
    url: "https://zynvirtual.vercel.app/",
    status: "live",
    highlights: [
      "Crafted a clean, responsive landing experience deployed on Vercel.",
      "Positioned the brand and product story around AI-native capabilities.",
    ],
    stackSummary:
      "Deployed as a modern React/Next.js app on Vercel with TypeScript and Tailwind-style utility-first styling.",
    aiSummary:
      "Focuses on communicating the AI capabilities of the platform; deeper implementation details will be populated from repository analysis.",
    screenshot: "/screenshots/zynvirtual.png",
  },
  {
    id: "zynspaces",
    name: "Zyn Spaces",
    role: "Full‑Stack & Product Engineer",
    tagline: "Spaces and collaboration tools built around AI workflows.",
    url: "https://zynspaces.vercel.app/",
    status: "live",
    highlights: [
      "Implemented fast, responsive UI for exploring AI-driven workflows.",
      "Deployed globally via Vercel for low-latency experiences.",
    ],
    stackSummary:
      "Likely shares a Next.js/TypeScript/Tailwind stack with Zyn Virtual, optimized for rapid iteration.",
    aiSummary:
      "Showcases AI-enabled space management or collaboration flows; the exact pipeline will be documented from the GitHub codebase.",
    screenshot: "/screenshots/zynspaces.png",
  },
  {
    id: "hadal-store",
    name: "The Hadal Store",
    role: "Full‑Stack Marketplace Engineer",
    tagline: "Premium multi-vendor marketplace with a curated catalog.",
    url: "https://lighthearted-figolla-69cd34.netlify.app/",
    status: "live",
    highlights: [
      "Built marketplace layout with categories (Electronics, Furniture, Fashion, At Home).",
      "Implemented marketing copy and trust markers (Secure Payment, Fast Delivery, Buyer Protection, 24/7 Support).",
      "Designed responsive information architecture for About, Categories, and Newsletter signup.",
    ],
    stackSummary:
      "Static/SPA marketplace frontend deployed on Netlify, likely built with React, a component library, and a headless commerce or custom backend.",
    aiSummary:
      "AI can be layered for product recommendations, search relevance, and personalized merchandising; concrete implementation details will be added after reviewing the repository.",
    screenshot: "/screenshots/hadal-store.png",
  },
  {
    id: "bsb-corporate-cleaning",
    name: "BSB Corporate Cleaning",
    role: "Technical Lead & Frontend Engineer",
    tagline: "Corporate cleaning brand site with clear service positioning.",
    url: "https://bsbcorporatecleaning.com/",
    status: "live",
    highlights: [
      "Delivered a professional marketing site optimized for clarity and trust.",
      "Emphasized conversion-oriented layout and clear calls to action.",
    ],
    stackSummary:
      "Modern static marketing stack (React/Next.js, or similar) deployed on a managed hosting platform.",
    aiSummary:
      "AI capabilities may include lead qualification, automated responses, or scheduling assistants; details will be accurately described once the GitHub repo is linked.",
    screenshot: "/screenshots/bsb-corporate-cleaning.png",
  },
  {
    id: "aurazen",
    name: "Aurazen",
    role: "AI Product Engineer",
    tagline: "Wellness or productivity-focused experience with AI assistance.",
    url: "https://aurazen.co/",
    status: "live",
    highlights: [
      "Delivered a visually polished brand presence around a wellness/productivity product.",
      "Likely integrates AI to personalize content or routines.",
    ],
    stackSummary:
      "Frontend built with a modern JavaScript framework and styled with a design-forward system, backed by serverless APIs or a headless CMS.",
    aiSummary:
      "Probable use of LLMs or recommendation models to tailor guidance; actual implementation will be described from the repository.",
    screenshot: "/screenshots/aurazen.png",
  },
  {
    id: "iching-ai",
    name: "I Ching AI",
    role: "Creator & AI Systems Designer",
    tagline: "Modern AI interpretation of the I Ching for reflective guidance.",
    url: "https://ichingai.app/",
    status: "live",
    highlights: [
      "Built an interactive experience combining tradition with modern AI.",
      "Handled prompt engineering to map symbolic systems into LLM-friendly structures.",
    ],
    stackSummary:
      "Likely a Next.js/React SPA with an API layer mediating requests to one or more LLM providers.",
    aiSummary:
      "Uses LLMs to generate context-aware interpretations of I Ching readings, wrapped with domain-specific prompting and safety rules; further technical detail will be extracted from the codebase.",
    screenshot: "/screenshots/iching-ai.png",
  },
  {
    id: "aquariusmaximus",
    name: "AquariusMaximus.com",
    role: "Personal Brand & Portfolio Site",
    tagline: "The central hub for Aquarius Maximus’ AI and engineering work.",
    url: "https://www.aquariusmaximus.com/",
    status: "live",
    highlights: [
      "Defines personal narrative, positioning, and core offerings.",
      "Showcases selected projects, writing, and AI experiments.",
    ],
    stackSummary:
      "Full-stack personal site built with a modern framework and deployed on a global edge network.",
    aiSummary:
      "Serves as the anchor for AI demos, experiments, and integrations; specific implementations will be documented from the GitHub repositories.",
    screenshot: "/screenshots/aquariusmaximus.png",
  },
  {
    id: "emotion-island",
    name: "Emotion Island",
    role: "Game Designer & Frontend Developer",
    tagline:
      "A playful, narrative-driven web game that teaches kids emotional regulation with Hue the Dragon.",
    url: "https://emotionisland.netlify.app/",
    status: "live",
    highlights: [
      "Designed a map-based experience where children explore regions like Angry Volcano, Sadness Swamp, and Fear Forest to learn coping skills.",
      "Implemented interactive mini-games to teach breathing exercises, reframing, and self-kindness in an accessible way.",
      "Crafted microcopy and UX flows tailored for younger players and caregivers.",
    ],
    stackSummary:
      "Single-page web application built with a modern JavaScript framework and component-based UI, deployed on Netlify for easy distribution.",
    aiSummary:
      "Primarily a design- and interaction-led experience rather than an AI-heavy system, but architected so future updates can layer in adaptive guidance or generative content.",
    screenshot: "/screenshots/emotion-island.png",
  },
  {
    id: "symphonious-liger",
    name: "KOWRII – Fintech Educational Simulator",
    role: "Product Designer & Frontend Engineer",
    tagline:
      "Interactive fintech simulator that helps users learn financial concepts through a playful, experimental interface.",
    url: "https://symphonious-liger-c12f0c.netlify.app/",
    status: "wip",
    highlights: [
      "Designed a simulation-style interface to teach key fintech and money-management ideas in an approachable way.",
      "Experimented with visual metaphors and interactive flows to make abstract financial concepts more tangible.",
      "Deployed on Netlify as a lightweight prototype for rapid iteration and user feedback.",
    ],
    stackSummary:
      "React-based static site or SPA bundled with a modern build tool and deployed via Netlify for fast preview and iteration.",
    aiSummary:
      "Can layer in AI tutors or scenario generators to adapt simulations to a learner’s level; exact stack and AI integrations will be documented once the codebase is linked.",
    screenshot: "/screenshots/symphonious-liger.png",
  },
];


