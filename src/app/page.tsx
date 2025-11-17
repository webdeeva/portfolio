import Link from "next/link";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { HeroShowcase } from "@/components/HeroShowcase";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-black text-zinc-50">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(236,72,153,0.16),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(168,85,247,0.16),_transparent_55%)]" />

      <header className="sticky top-0 z-20 border-b border-zinc-800/60 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-xl bg-gradient-to-br from-rose-400 via-fuchsia-500 to-purple-500 shadow-[0_0_26px_rgba(244,114,182,0.9)]" />
            <div>
              <p className="text-xs font-semibold tracking-wide text-zinc-200">
                Aquarius Maximus
              </p>
              <p className="text-[11px] text-zinc-500">
                AI Engineer · Full‑Stack Developer
              </p>
            </div>
          </div>

          <nav className="hidden gap-6 text-xs font-medium text-zinc-400 sm:flex">
            <a href="#projects" className="hover:text-pink-300">
              Projects
            </a>
            <a href="#ai-stack" className="hover:text-pink-300">
              AI & Stack
            </a>
            <a href="#about" className="hover:text-pink-300">
              About
            </a>
            <a href="#contact" className="hover:text-pink-300">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section
          id="hero"
          className="relative scroll-mt-24 py-12 md:py-16 border-b border-zinc-900/30"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-300">
                AI ENGINEER · FULL‑STACK DEVELOPER
              </p>
              <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-zinc-50">
                Designing and shipping AI‑native products end‑to‑end.
              </h2>
              <p className="mt-3 text-sm md:text-base text-zinc-400">
                From LLM systems design to production‑ready web apps, I help teams turn ambiguous ideas into deployed, measurable products.
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">
            <div className="space-y-5 max-w-lg">
              <p className="text-sm md:text-base text-zinc-300">
                I specialize in{" "}
                <span className="font-medium text-zinc-50">
                  AI‑driven product experiences
                </span>{" "}
                – architecting LLM workflows, building full‑stack web
                applications, and iterating quickly with real users. My work
                spans SaaS, marketplaces, and experimental social platforms.
              </p>
              <p className="text-sm md:text-base text-zinc-400">
                Below is a selection of live projects across AI, marketplaces,
                brand sites, and experimental apps — all deployed to production
                and optimized for fast iteration.
              </p>

              <div className="mt-4 flex flex-wrap gap-3 text-xs">
                <Link
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-rose-400 px-4 py-2 font-semibold text-white shadow-[0_0_32px_rgba(244,114,182,0.9)] transition hover:brightness-110"
                >
                  View featured work
                </Link>
                <Link
                  href="#ai-stack"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-pink-500/40 bg-zinc-950/60 px-4 py-2 font-medium text-zinc-100 transition hover:border-pink-400/80 hover:text-pink-100"
                >
                  AI & technical stack
                </Link>
              </div>
            </div>

            <div className="-mt-42">
              <HeroShowcase />
            </div>
          </div>
          </div>
        </section>

        <Section
          id="projects"
          eyebrow="FEATURED WORK"
          title="Production projects & experiments"
          subtitle="A cross‑section of marketplaces, AI tools, and digital experiences deployed across Netlify, Vercel, and custom domains."
        >
          <div className="grid gap-5 md:gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Section>

        <Section
          id="ai-stack"
          eyebrow="AI ENGINEERING"
          title="How I build AI‑native products"
          subtitle="Practical systems that turn large language models into reliable features users actually value."
        >
          <div className="grid gap-8 md:grid-cols-3">
            <div className="space-y-3 md:col-span-2">
              <h3 className="text-sm font-semibold text-zinc-100">
                End‑to‑end AI systems design
              </h3>
              <p className="text-sm text-zinc-300">
                I treat LLMs as one component in a larger system. That means
                designing{" "}
                <span className="font-medium">
                  clear interfaces, safety rails, and feedback loops
                </span>{" "}
                around model calls — from retrieval‑augmented generation (RAG)
                to multi‑step tool‑using agents. I favor composable prompts,
                schema‑driven tooling, and high‑signal telemetry instead of
                one‑off hacks.
              </p>
              <p className="text-sm text-zinc-300">
                On the infrastructure side, I prefer{" "}
                <span className="font-medium">
                  TypeScript‑first backends (Next.js / Node)
                </span>{" "}
                with vector stores, queueing, and serverless functions where
                they make sense — shipped to providers like Vercel, Netlify, or
                custom cloud setups depending on the project.
              </p>
            </div>
            <div className="space-y-3 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4 text-xs text-zinc-300">
              <p className="font-semibold text-zinc-100">Core toolkit</p>
              <ul className="mt-2 space-y-1.5">
                <li>· Frontend: Next.js, React, TypeScript, Tailwind CSS</li>
                <li>· Backend: Node/TypeScript APIs, serverless functions</li>
                <li>· AI: LLM APIs, RAG, vector search, tool‑using agents</li>
                <li>· Infra: Vercel, Netlify, CI/CD, observability tooling</li>
              </ul>
              <p className="mt-3 text-zinc-400">
                For each project above, I can provide a deeper breakdown of the
                exact stack and AI architecture once we link the GitHub
                repositories.
              </p>
            </div>
          </div>
        </Section>

        <Section
          id="about"
          eyebrow="ABOUT"
          title="A builder comfortable at every layer of the stack."
        >
          <div className="grid gap-8 md:grid-cols-2">
            <p className="text-sm md:text-base text-zinc-300">
              I move comfortably between{" "}
              <span className="font-medium">
                product thinking, systems design, and implementation
              </span>
              . Whether it's an AI‑powered SaaS, a brand site, or an internal
              tool, I prioritize crisp UX, reliable infrastructure, and a code
              base that future contributors will actually enjoy working in.
            </p>
            <p className="text-sm md:text-base text-zinc-300">
              This portfolio highlights shipped, deployed work — not just
              prototypes. Every project above represents{" "}
              <span className="font-medium">
                real users, real constraints, and real iteration cycles
              </span>
              , which is where I do my best work.
            </p>
          </div>
        </Section>

        <Section
          id="contact"
          eyebrow="COLLABORATION"
          title="Let’s build your next AI‑native product."
          subtitle="Available for select collaborations, advisory, and hands‑on engineering."
        >
          <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-300">
            <p>
              Share a bit about your product, where it is today, and what you
              want AI to unlock — I can help design and ship the path from idea
              to production.
            </p>
          </div>
        </Section>
      </main>
    </div>
  );
}

