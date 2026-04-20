import Link from "next/link";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { MobileProjectCard } from "@/components/MobileProjectCard";
import { ContactForm } from "@/components/ContactForm";
import { projects, mobileProjects } from "@/data/projects";
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
                Full‑Stack Engineer · Web, Mobile &amp; AI
              </p>
            </div>
          </div>

          <nav className="hidden gap-6 text-xs font-medium text-zinc-400 sm:flex">
            <a href="#projects" className="hover:text-pink-300">
              Web
            </a>
            <a href="#mobile" className="hover:text-pink-300">
              Mobile
            </a>
            <a href="#stack" className="hover:text-pink-300">
              Stack
            </a>
            <a href="#about" className="hover:text-pink-300">
              About
            </a>
            <Link href="/contact" className="hover:text-pink-300">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <section
          id="hero"
          className="relative scroll-mt-24 py-12 md:py-16 border-b border-zinc-900/30"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 max-w-lg">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-300">
                FULL‑STACK ENGINEER · WEB, MOBILE &amp; AI
              </p>
              <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-zinc-50">
                Designing and shipping polished products end‑to‑end.
              </h2>
              <p className="mt-3 text-sm md:text-base text-zinc-400">
                I design, build, and ship web and mobile products — brand
                sites, marketplaces, consumer apps, and AI‑powered tools when
                the problem genuinely calls for it.
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">
            <div className="space-y-5 max-w-md">
              <p className="text-sm md:text-base text-zinc-300">
                I work across the stack: crisp frontends in{" "}
                <span className="font-medium text-zinc-50">
                  Next.js and React Native
                </span>
                , TypeScript backends, and{" "}
                <span className="font-medium text-zinc-50">
                  LLM integrations
                </span>{" "}
                where they add real value. My work spans marketplaces, social
                platforms, wellness brands, kids&rsquo; games, crypto wallets,
                and AI‑assisted products.
              </p>
              <p className="text-sm md:text-base text-zinc-400">
                Below is a selection of live projects — all deployed to real
                users and tuned for fast iteration.
              </p>

              <div className="mt-4 flex flex-wrap gap-3 text-xs">
                <Link
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-rose-400 px-4 py-2 font-semibold text-white shadow-[0_0_32px_rgba(244,114,182,0.9)] transition hover:brightness-110"
                >
                  View featured work
                </Link>
                <Link
                  href="#mobile"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-pink-500/40 bg-zinc-950/60 px-4 py-2 font-medium text-zinc-100 transition hover:border-pink-400/80 hover:text-pink-100"
                >
                  Mobile apps
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-pink-500/40 bg-zinc-950/60 px-4 py-2 font-medium text-zinc-100 transition hover:border-pink-400/80 hover:text-pink-100"
                >
                  Get in touch
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
          eyebrow="FEATURED WEB WORK"
          title="Production web products & experiments"
          subtitle="A cross‑section of marketplaces, brand sites, and digital experiences deployed across Netlify, Vercel, and custom domains."
        >
          <div className="grid gap-5 md:gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Section>

        <Section
          id="mobile"
          eyebrow="MOBILE APPS"
          title="Mobile products in users’ pockets"
          subtitle="Cross‑platform mobile apps spanning dating, esoteric guidance, and community crypto — each shipped to real users on real devices."
        >
          <div className="grid gap-6 md:gap-8">
            {mobileProjects.map((project, index) => (
              <MobileProjectCard
                key={project.id}
                project={project}
                reverse={index % 2 === 1}
              />
            ))}
          </div>
        </Section>

        <Section
          id="stack"
          eyebrow="HOW I WORK"
          title="Crisp frontends, boring backends, calm deploys."
          subtitle="I favor small, well-chosen tools over heavy stacks — so things stay easy to change and fast to ship."
        >
          <div className="grid gap-8 md:grid-cols-3">
            <div className="space-y-3 md:col-span-2">
              <h3 className="text-sm font-semibold text-zinc-100">
                End‑to‑end product engineering
              </h3>
              <p className="text-sm text-zinc-300">
                I move across{" "}
                <span className="font-medium">
                  design, frontend, backend, and deploy
                </span>
                , which means fewer handoffs and tighter iteration loops. I
                care a lot about typography, micro‑interactions, and the small
                details that make a product feel finished.
              </p>
              <p className="text-sm text-zinc-300">
                On the backend I prefer{" "}
                <span className="font-medium">
                  TypeScript‑first services (Next.js / Node)
                </span>{" "}
                with managed databases and serverless functions where they
                make sense — shipped to Vercel, Netlify, or custom cloud
                setups depending on the project. When a project calls for AI,
                I treat the model as one component in a larger system, with
                clear interfaces and guardrails around it.
              </p>
            </div>
            <div className="space-y-3 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4 text-xs text-zinc-300">
              <p className="font-semibold text-zinc-100">Core toolkit</p>
              <ul className="mt-2 space-y-1.5">
                <li>· Frontend: Next.js, React, TypeScript, Tailwind CSS</li>
                <li>· Mobile: React Native / Expo</li>
                <li>· Backend: Node/TypeScript APIs, serverless functions</li>
                <li>· Data: Postgres, managed databases, vector stores when needed</li>
                <li>· When it fits: LLM APIs with domain prompting and guardrails</li>
                <li>· IDEs: Cursor, Windsurf, and good old Terminal :-)</li>
                <li>· Infra: Vercel, Netlify, CI/CD, observability tooling</li>
              </ul>
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
              . Whether it&rsquo;s a consumer app, a brand site, a
              marketplace, or an internal tool, I prioritize crisp UX,
              reliable infrastructure, and a code base future contributors
              will actually enjoy working in.
            </p>
            <p className="text-sm md:text-base text-zinc-300">
              This portfolio highlights shipped work — not just prototypes.
              Every project above represents{" "}
              <span className="font-medium">
                real users, real constraints, and real iteration cycles
              </span>
              , which is where I do my best work.
            </p>
          </div>
        </Section>

        <Section
          id="contact"
          eyebrow="GET IN TOUCH"
          title="Let’s build something together."
          subtitle="Available for select collaborations, advisory, and hands‑on engineering."
        >
          <div className="grid gap-8 lg:grid-cols-5 lg:items-start">
            <div className="space-y-4 lg:col-span-2">
              <p className="text-sm text-zinc-300">
                Share a bit about your product, where it is today, and what
                you&rsquo;d like help with. I read every message and reply
                personally.
              </p>
              <p className="text-xs text-zinc-500">
                Prefer email?{" "}
                <a
                  href="mailto:aquariusmaximusiam@gmail.com"
                  className="text-pink-300 hover:text-pink-200"
                >
                  aquariusmaximusiam@gmail.com
                </a>
              </p>
            </div>
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
}

