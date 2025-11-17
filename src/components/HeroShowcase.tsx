"use client";

import { useEffect, useRef, useState } from "react";

const heroSites = [
  {
    id: "syrn-ai",
    name: "syrn.ai",
    label: "AI-native SaaS",
    screenshot: "/screenshots/syrn-ai.png",
  },
  {
    id: "emotion-island",
    name: "Emotion Island",
    label: "Kids emotional learning game",
    screenshot: "/screenshots/emotion-island.png",
  },
  {
    id: "iching-ai",
    name: "I Ching AI",
    label: "Reflective AI experience",
    screenshot: "/screenshots/iching-ai.png",
  },
  {
    id: "aurazen",
    name: "Aurazen",
    label: "Wellness / ritual product",
    screenshot: "/screenshots/aurazen.png",
  },
  {
    id: "sov-social",
    name: "sov.social",
    label: "Experimental social platform",
    screenshot: "/screenshots/sov-social.png",
  },
];

export function HeroShowcase() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Start at the top (technical layout), then scroll to screenshot
    el.scrollTo({ top: 0 });

    const firstTimeout = window.setTimeout(() => {
      el.scrollTo({
        top: el.scrollHeight,
        behavior: "smooth",
      });
    }, 1600);

    return () => {
      window.clearTimeout(firstTimeout);
    };
  }, [activeIndex]);

  return (
    <div className="rounded-3xl border border-pink-500/40 bg-gradient-to-b from-zinc-950/90 to-zinc-900/80 p-3 shadow-[0_0_40px_rgba(244,114,182,0.5)]">
      {/* Fake browser chrome */}
      <div className="flex items-center justify-between rounded-2xl bg-zinc-950/95 px-4 py-2">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/90" />
        </div>
        <div className="mx-4 flex-1 truncate rounded-full bg-zinc-900/80 px-3 py-1 text-[10px] text-zinc-400">
          aquariusmaximus.dev / system-layout
        </div>
        <div className="text-[10px] font-medium uppercase tracking-[0.16em] text-emerald-300">
          ● Live
        </div>
      </div>

      <div
        ref={scrollRef}
        className="mt-3 h-64 overflow-y-auto rounded-2xl border border-zinc-800/80 bg-zinc-950/80 p-4 backdrop-blur-sm"
      >
        {/* Technical layout (top) */}
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pink-300">
            AI-NATIVE PRODUCT BLUEPRINT
          </p>
          <p className="text-xs text-zinc-300">
            A typical layout I use across projects like{" "}
            <span className="font-medium">syrn.ai</span>,{" "}
            <span className="font-medium">I Ching AI</span>,{" "}
            <span className="font-medium">Emotion Island</span>, and{" "}
            <span className="font-medium">Aurazen</span>.
          </p>

          <div className="grid gap-3 text-[11px] text-zinc-300 sm:grid-cols-2">
            <div className="space-y-1.5">
              <p className="font-semibold text-zinc-100">Frontend</p>
              <ul className="space-y-1 text-zinc-400">
                <li>· Next.js / React with TypeScript</li>
                <li>· Tailwind CSS for rapid, expressive styling</li>
                <li>· Motion & micro-interactions for UX clarity</li>
              </ul>
            </div>
            <div className="space-y-1.5">
              <p className="font-semibold text-zinc-100">Backend & Infra</p>
              <ul className="space-y-1 text-zinc-400">
                <li>· Node/TypeScript APIs & serverless functions</li>
                <li>· Vercel / Netlify edge deployments</li>
                <li>· Observability, logging & feature flags</li>
              </ul>
            </div>
            <div className="space-y-1.5">
              <p className="font-semibold text-zinc-100">AI Layer</p>
              <ul className="space-y-1 text-zinc-400">
                <li>· LLM APIs with structured prompts</li>
                <li>· RAG & vector search where context matters</li>
                <li>· Tool-using agents for multi-step flows</li>
              </ul>
            </div>
            <div className="space-y-1.5">
              <p className="font-semibold text-zinc-100">Product Loop</p>
              <ul className="space-y-1 text-zinc-400">
                <li>· Analytics-informed iteration</li>
                <li>· A/B testing on critical flows</li>
                <li>· Tight feedback between UX & infra</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-pink-500/70 to-transparent" />

        {/* Screenshot (bottom) */}
        <div className="mt-6 space-y-2">
          <div className="flex items-center justify-between gap-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-400">
              UI PREVIEW · {heroSites[activeIndex].name}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {heroSites.map((site, index) => (
                <button
                  key={site.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`rounded-full border px-2.5 py-1 text-[10px] transition ${
                    index === activeIndex
                      ? "border-pink-400/80 bg-pink-500/20 text-pink-100"
                      : "border-zinc-700/80 bg-zinc-900/80 text-zinc-400 hover:border-pink-400/50 hover:text-pink-100"
                  }`}
                >
                  {site.name}
                </button>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-900/80">
            <img
              src={heroSites[activeIndex].screenshot}
              alt={`${heroSites[activeIndex].name} screenshot`}
              className="h-full w-full object-cover"
            />
          </div>
          <p className="text-[11px] text-zinc-500">
            First you see the system layout; then the window scrolls to the live
            UI — mirroring how I think about AI products from architecture down
            to pixels. Use the pills above to switch between different shipped
            experiences.
          </p>
        </div>
      </div>
    </div>
  );
}


