export type Project = {
  id: string;
  name: string;
  role: string;
  tagline: string;
  url: string;
  githubUrl?: string;
  status?: "live" | "wip" | "archived";
  platform?: "web" | "mobile";
  highlights: string[];
  stackSummary?: string;
  aiSummary?: string;
  screenshot?: string; // path under /public, e.g. "/screenshots/zynvirtual.png"
  screenshots?: string[]; // multiple screenshots, typically for mobile apps
};

export const projects: Project[] = [
  {
    id: "syrn-ai",
    name: "syrn.ai",
    role: "Founding Engineer",
    tagline:
      "Product site for an AI company — clean marketing surface introducing what the team is building.",
    url: "https://syrn.ai/",
    status: "live",
    platform: "web",
    highlights: [
      "Shipped the public-facing site from early sketches through production.",
      "Built the frontend, API layer, and deployment pipeline end-to-end.",
      "Set up analytics and experimentation so the team could iterate on real signals.",
    ],
    stackSummary:
      "Next.js / TypeScript / Tailwind on a cloud-native deployment pipeline.",
    aiSummary:
      "Core product (not the site) uses LLMs for orchestration, prompting, and safety rails.",
    screenshot: "/screenshots/syrn-ai.png",
  },
  {
    id: "sov-social",
    name: "sov.social",
    role: "Full‑Stack Engineer",
    tagline:
      "Social platform focused on identity, feeds, and secure interactions between members.",
    url: "https://sov.social/",
    status: "live",
    platform: "web",
    highlights: [
      "Implemented core social features: profiles, feeds, and messaging.",
      "Built auth and session flows with a focus on account safety.",
      "Shipped a responsive web interface built for rapid iteration.",
    ],
    stackSummary:
      "Next.js / TypeScript frontend with an API-driven backend.",
    screenshot: "/screenshots/sov-social.png",
  },
  {
    id: "zynvirtual",
    name: "Zyn Virtual",
    role: "Product Engineer",
    tagline:
      "Landing experience for Zyn Virtual — clear brand narrative and a fast, responsive launch page.",
    url: "https://zynvirtual.vercel.app/",
    status: "live",
    platform: "web",
    highlights: [
      "Designed and shipped a polished, responsive marketing site.",
      "Dialed in typography, hierarchy, and CTA flow for clarity.",
      "Deployed globally on Vercel with fast time-to-first-byte.",
    ],
    stackSummary: "Next.js on Vercel with TypeScript and Tailwind CSS.",
    screenshot: "/screenshots/zynvirtual.png",
  },
  {
    id: "zynspaces",
    name: "Zyn Spaces",
    role: "Frontend Engineer",
    tagline:
      "Spaces and collaboration site — the product story told through a fast, modern web experience.",
    url: "https://zynspaces.vercel.app/",
    status: "live",
    platform: "web",
    highlights: [
      "Built a clean, responsive interface that communicates the product clearly.",
      "Kept bundle size small and interactions snappy across devices.",
      "Deployed via Vercel for low-latency global delivery.",
    ],
    stackSummary: "Next.js / TypeScript / Tailwind on Vercel.",
    screenshot: "/screenshots/zynspaces.png",
  },
  {
    id: "hadal-store",
    name: "The Hadal Store",
    role: "Full‑Stack Marketplace Engineer",
    tagline:
      "Multi-vendor marketplace with a curated catalog across electronics, furniture, fashion, and home.",
    url: "https://lighthearted-figolla-69cd34.netlify.app/",
    status: "live",
    platform: "web",
    highlights: [
      "Built storefront with category navigation, product listings, and detail pages.",
      "Implemented trust markers — secure payment, fast delivery, buyer protection, 24/7 support.",
      "Structured information architecture for About, Categories, and newsletter signup.",
    ],
    stackSummary:
      "React-based storefront deployed on Netlify, backed by a commerce layer for catalog and checkout.",
    screenshot: "/screenshots/hadal-store.png",
  },
  {
    id: "bsb-corporate-cleaning",
    name: "BSB Corporate Cleaning",
    role: "Technical Lead & Frontend Engineer",
    tagline:
      "Marketing site for a corporate cleaning business — clear services, trust signals, and a direct path to book.",
    url: "https://bsbcorporatecleaning.com/",
    status: "live",
    platform: "web",
    highlights: [
      "Delivered a professional brand site optimized for clarity and conversions.",
      "Structured services, coverage, and contact flow so prospects can get a quote quickly.",
      "Shipped responsive pages that look polished on phone, tablet, and desktop.",
    ],
    stackSummary:
      "Static/SSG marketing stack with a modern framework and managed hosting.",
    screenshot: "/screenshots/bsb-corporate-cleaning.png",
  },
  {
    id: "aurazen",
    name: "Aurazen",
    role: "Product Engineer",
    tagline:
      "Wellness brand site — calm, design-forward presence for the Aurazen product and story.",
    url: "https://aurazen.co/",
    status: "live",
    platform: "web",
    highlights: [
      "Delivered a visually polished, brand-led web presence.",
      "Crafted typography, color, and motion that match the wellness positioning.",
      "Responsive from mobile up, with attention to pacing and whitespace.",
    ],
    stackSummary:
      "Modern JavaScript frontend with a design-forward system, backed by serverless APIs or a headless CMS.",
    screenshot: "/screenshots/aurazen.png",
  },
  {
    id: "iching-ai",
    name: "I Ching AI",
    role: "Creator & Engineer",
    tagline:
      "Digital I Ching reading — cast hexagrams and get thoughtful, context-aware interpretations.",
    url: "https://ichingai.app/",
    status: "live",
    platform: "web",
    highlights: [
      "Built the hexagram casting flow and a clean reading interface.",
      "Mapped the traditional 64-hexagram system into a structured data layer.",
      "Wrote prompt logic so interpretations stay grounded in the source material.",
    ],
    stackSummary:
      "Next.js / React app with an API layer that proxies requests to an LLM provider.",
    aiSummary:
      "Uses an LLM to generate interpretations, with domain-specific prompting and guardrails so responses remain faithful to the tradition.",
    screenshot: "/screenshots/iching-ai.png",
  },
  {
    id: "aquariusmaximus",
    name: "AquariusMaximus.com",
    role: "Personal Brand Site",
    tagline:
      "The central hub for my work — projects, writing, and things I'm exploring.",
    url: "https://www.aquariusmaximus.com/",
    status: "live",
    platform: "web",
    highlights: [
      "Defines the personal brand and positioning.",
      "Showcases selected projects and ongoing experiments.",
      "Deployed on a global edge network for fast loads anywhere.",
    ],
    stackSummary:
      "Modern full-stack framework deployed on a global edge CDN.",
    screenshot: "/screenshots/aquariusmaximus.png",
  },
  {
    id: "emotion-island",
    name: "Emotion Island",
    role: "Game Designer & Frontend Developer",
    tagline:
      "A playful, narrative-driven web game that helps kids learn emotional regulation with Hue the Dragon.",
    url: "https://emotionisland.netlify.app/",
    status: "live",
    platform: "web",
    highlights: [
      "Designed a map-based world where kids explore places like Angry Volcano, Sadness Swamp, and Fear Forest to learn coping skills.",
      "Built interactive mini-games for breathing exercises, reframing, and self-kindness.",
      "Crafted microcopy and UX flows tuned for younger players and caregivers.",
    ],
    stackSummary:
      "Single-page web game built with a modern JavaScript framework, deployed on Netlify.",
    screenshot: "/screenshots/emotion-island.png",
  },
  {
    id: "symphonious-liger",
    name: "KOWRII – Fintech Learning Simulator",
    role: "Product Designer & Frontend Engineer",
    tagline:
      "Interactive simulator that makes financial concepts tangible through a playful, experimental interface.",
    url: "https://symphonious-liger-c12f0c.netlify.app/",
    status: "wip",
    platform: "web",
    highlights: [
      "Designed a simulation-style interface to teach fintech and money-management concepts.",
      "Used visual metaphors and interactive flows to make abstract ideas concrete.",
      "Deployed on Netlify as a lightweight prototype for rapid feedback cycles.",
    ],
    stackSummary:
      "React-based SPA bundled with a modern build tool and deployed via Netlify.",
    screenshot: "/screenshots/symphonious-liger.png",
  },
];

export const mobileProjects: Project[] = [
  {
    id: "dateable",
    name: "Dateable",
    role: "Founding Mobile Engineer",
    tagline:
      "Dating app with an in-app assistant that helps users reflect on matches and craft better conversations.",
    url: "https://dateable.app/",
    status: "live",
    platform: "mobile",
    highlights: [
      "Built the matching and messaging experience with a native-feeling mobile UI.",
      "Shipped onboarding, discovery, and chat flows tuned for clarity and emotional safety.",
      "Integrated an in-app assistant that offers reply suggestions and coaching on demand.",
    ],
    stackSummary:
      "Cross-platform mobile stack (React Native / Expo) with a TypeScript API layer, auth, and realtime messaging.",
    aiSummary:
      "Assistant uses an LLM for reply suggestions and contextual coaching while preserving the user's own voice.",
    screenshots: [
      "/screenshots/mobile/dateable-home.png",
      "/screenshots/mobile/dateable-match.png",
      "/screenshots/mobile/dateable-agent.png",
    ],
  },
  {
    id: "cardology",
    name: "Cardology",
    role: "Creator & Mobile Engineer",
    tagline:
      "Modern mobile companion for the Cards of Destiny system — daily cards, yearly spreads, and a readable glossary.",
    url: "https://cardology.app/",
    status: "live",
    platform: "mobile",
    highlights: [
      "Designed a clean, mobile-first interface for daily cards, yearly forecasts, and traditional spreads.",
      "Built a glossary that makes the symbolic system approachable for new users.",
      "Structured the data layer around traditional Cards of Destiny meanings as the source of truth.",
    ],
    stackSummary:
      "Cross-platform mobile app (React Native / Expo) backed by TypeScript APIs and a structured card/meaning dataset.",
    screenshot: "/screenshots/mobile/cardology-home.png",
    screenshots: [
      "/screenshots/mobile/cardology-home.png",
      "/screenshots/mobile/cardology-yearly.png",
      "/screenshots/mobile/cardology-spreads.png",
      "/screenshots/mobile/cardology-glossary.png",
    ],
  },
  {
    id: "guapcoin",
    name: "Guapcoin Wallet",
    role: "Mobile Engineer",
    tagline:
      "Mobile crypto wallet with a clean send / receive flow and clear balance visibility.",
    url: "https://guapcoin.com/",
    status: "live",
    platform: "mobile",
    highlights: [
      "Implemented core wallet flows: viewing balances, receiving via address or QR, and sending with validation.",
      "Focused on clarity — users should always know what they hold, what they're sending, and to whom.",
      "Built with a trust-first UX for a community-driven token economy.",
    ],
    stackSummary:
      "Cross-platform mobile wallet integrating on-chain RPC, secure key storage, and transaction signing.",
    screenshots: [
      "/screenshots/mobile/guapcoin-wallet.png",
      "/screenshots/mobile/guapcoin-send.png",
      "/screenshots/mobile/guapcoin-receive.png",
    ],
  },
];
