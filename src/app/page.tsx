import Link from "next/link";
import { Section } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";
import { projects, mobileProjects } from "@/data/projects";
import { HeroShowcase } from "@/components/HeroShowcase";
import { WorkTabs } from "@/components/WorkTabs";
import { Reveal } from "@/components/Reveal";

const demos = [
  {
    slug: "model",
    name: "Model · KIYA",
    tag: "Editorial · High fashion",
    swatch: "from-pink-500 via-fuchsia-500 to-rose-400",
    image: "/images/demos/model/hero.jpg",
    blurb:
      "Neon editorial portfolio for a street-hip-hop model. Pink high-impact typography, booking flow, press grid.",
  },
  {
    slug: "rapper",
    name: "Rapper · NXRTH",
    tag: "Music · Tour · Merch",
    swatch: "from-blue-600 via-cyan-400 to-indigo-500",
    image: "/images/demos/rapper/hero.jpg",
    blurb:
      "Album + world-tour hub with animated EQ player, tracklist, dates ticker, and merch store.",
  },
  {
    slug: "creator",
    name: "Creator · Sunday Mira",
    tag: "Influencer · Partnerships",
    swatch: "from-orange-300 via-pink-300 to-sky-300",
    image: "/images/demos/creator/hero.jpg",
    blurb:
      "Bright editorial creator site with brand ticker, channel tabs, gear list, and an inbound project brief.",
  },
  {
    slug: "streamer",
    name: "Streamer · VYPR",
    tag: "Gaming · Live · Members",
    swatch: "from-fuchsia-500 via-purple-500 to-cyan-400",
    image: "/images/demos/streamer/hero.jpg",
    blurb:
      "Neon HUD with live viewer counter, fake chat, schedule, clips, battlestation, and membership tiers.",
  },
  {
    slug: "leather",
    name: "Leather · Maison Oro",
    tag: "E-commerce · Luxury",
    swatch: "from-amber-500 via-yellow-600 to-orange-900",
    image: "/images/demos/leather/hero.jpg",
    blurb:
      "Florence atelier storefront: product grid, color swatches, journal, newsletter, and flagship map.",
  },
  {
    slug: null,
    name: "Custom for you",
    tag: "Your brand · Your vibe",
    swatch: "from-zinc-400 via-zinc-600 to-zinc-900",
    image: null,
    blurb:
      "Not seeing a fit? I design each bundle from scratch — brand, site, and mobile app built around your goals.",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#070209] text-zinc-50">
      {/* Ambient gradients */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,_rgba(236,72,153,0.18),_transparent_55%),radial-gradient(circle_at_90%_10%,_rgba(168,85,247,0.15),_transparent_55%),radial-gradient(circle_at_50%_100%,_rgba(244,114,182,0.12),_transparent_55%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.65)_60%,#000_100%)]" />

      <style>{`
        @keyframes floatY { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-10px) } }
        @keyframes shimmer {
          0% { background-position: 0% 50% }
          100% { background-position: 200% 50% }
        }
        @keyframes marqueeLeft {
          from { transform: translateX(0) }
          to { transform: translateX(-50%) }
        }
        .shimmer-text {
          background: linear-gradient(110deg, #ff7ab6 0%, #f9a8d4 30%, #d8b4fe 50%, #f472b6 70%, #ff7ab6 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text; background-clip: text;
          color: transparent;
          animation: shimmer 8s linear infinite;
        }
      `}</style>

      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-zinc-900/70 bg-[#070209]/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="relative h-8 w-8 rounded-xl bg-gradient-to-br from-rose-400 via-fuchsia-500 to-purple-500 shadow-[0_0_28px_rgba(244,114,182,0.9)]">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/30 to-transparent" />
            </div>
            <div>
              <p className="font-[family-name:var(--font-fraunces)] text-base font-medium tracking-tight text-zinc-50">
                Aquarius Maximus
              </p>
              <p className="font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                Full-Stack · Web · Mobile · AI
              </p>
            </div>
          </Link>

          <nav className="hidden gap-8 text-xs font-medium text-zinc-400 md:flex">
            <a href="#work" className="transition hover:text-pink-200">Work</a>
            <a href="#deals" className="transition hover:text-pink-200">Deals</a>
            <a href="#stack" className="transition hover:text-pink-200">Stack</a>
            <a href="#about" className="transition hover:text-pink-200">About</a>
            <Link href="/contact" className="transition hover:text-pink-200">Contact</Link>
          </nav>

          <Link
            href="/contact"
            className="hidden rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-rose-400 px-4 py-2 text-xs font-semibold text-white shadow-[0_0_22px_rgba(244,114,182,0.55)] transition hover:brightness-110 md:inline-flex"
          >
            Start a project →
          </Link>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section id="hero" className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28">
          <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[520px] w-[880px] -translate-x-1/2 rounded-full bg-pink-500/15 blur-3xl" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="relative lg:col-span-7">
                <Reveal>
                  <div className="inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-black/40 px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.3em] text-pink-200 backdrop-blur">
                    <span className="h-1.5 w-1.5 rounded-full bg-pink-400 shadow-[0_0_10px_rgba(244,114,182,0.9)]" />
                    Available for select projects · 2026
                  </div>
                </Reveal>

                <Reveal delay={80}>
                  <h1 className="mt-6 font-[family-name:var(--font-fraunces)] text-[clamp(3rem,8.5vw,6.5rem)] font-light leading-[0.95] tracking-tight text-zinc-50">
                    Designing and
                    <br />
                    <span className="italic shimmer-text">shipping</span> polished
                    <br />
                    products <span className="italic text-pink-300">end‑to‑end</span>.
                  </h1>
                </Reveal>

                <Reveal delay={180}>
                  <p className="mt-7 max-w-xl text-base leading-relaxed text-zinc-300 md:text-lg">
                    I&rsquo;m a full-stack engineer building{" "}
                    <span className="font-medium text-zinc-50">web apps, mobile apps, and AI-powered tools</span>
                    —brand sites, marketplaces, consumer apps, and everything between. Crisp frontends in{" "}
                    <span className="text-pink-200">Next.js and React Native</span>, TypeScript backends, and{" "}
                    <span className="text-pink-200">LLM integrations</span> when they add real value.
                  </p>
                </Reveal>

                <Reveal delay={260}>
                  <div className="mt-9 flex flex-wrap items-center gap-3">
                    <a
                      href="#work"
                      className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-rose-400 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_36px_rgba(244,114,182,0.6)] transition hover:brightness-110"
                    >
                      View featured work
                      <span className="transition group-hover:translate-x-1">→</span>
                    </a>
                    <a
                      href="#deals"
                      className="inline-flex items-center gap-2 rounded-full border border-pink-500/40 bg-zinc-950/60 px-6 py-3 text-sm font-medium text-zinc-100 backdrop-blur transition hover:border-pink-400 hover:text-pink-100"
                    >
                      Website + app deals
                    </a>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/40 px-6 py-3 text-sm font-medium text-zinc-300 transition hover:border-zinc-600 hover:text-zinc-100"
                    >
                      Say hi
                    </Link>
                  </div>
                </Reveal>

                {/* Stats strip */}
                <Reveal delay={340}>
                  <dl className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-zinc-900 pt-6">
                    {[
                      { n: `${projects.length + mobileProjects.length}`, l: "Shipped projects" },
                      { n: "5", l: "Demo landings" },
                      { n: "∞", l: "Iteration loops" },
                    ].map((s) => (
                      <div key={s.l}>
                        <dt className="font-[family-name:var(--font-fraunces)] text-3xl font-light text-zinc-50">{s.n}</dt>
                        <dd className="mt-1 font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.25em] text-zinc-500">{s.l}</dd>
                      </div>
                    ))}
                  </dl>
                </Reveal>
              </div>

              <div className="lg:col-span-5">
                <div style={{ animation: "floatY 8s ease-in-out infinite" }}>
                  <HeroShowcase />
                </div>
              </div>
            </div>
          </div>

          {/* Marquee */}
          <div className="mt-20 overflow-hidden border-y border-zinc-900 py-4">
            <div className="flex whitespace-nowrap" style={{ animation: "marqueeLeft 40s linear infinite" }}>
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex items-center gap-10 pr-10 font-[family-name:var(--font-fraunces)] text-2xl italic text-zinc-500 md:text-3xl">
                  <span>Next.js</span><span className="text-pink-500">✦</span>
                  <span>React Native</span><span className="text-pink-500">✦</span>
                  <span>TypeScript</span><span className="text-pink-500">✦</span>
                  <span>Tailwind</span><span className="text-pink-500">✦</span>
                  <span>Node</span><span className="text-pink-500">✦</span>
                  <span>Postgres</span><span className="text-pink-500">✦</span>
                  <span>OpenAI</span><span className="text-pink-500">✦</span>
                  <span>Anthropic</span><span className="text-pink-500">✦</span>
                  <span>Vercel</span><span className="text-pink-500">✦</span>
                  <span>Netlify</span><span className="text-pink-500">✦</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WORK — tabbed horizontal rail */}
        <Section
          id="work"
          wide
          eyebrow="Selected Work"
          title={
            <>
              Real products,
              <br />
              <span className="italic text-pink-300">live and iterating</span>.
            </>
          }
          subtitle="Marketplaces, brand sites, consumer apps, demos — browse by category. Scroll sideways for more."
        >
          <WorkTabs projects={projects} mobileProjects={mobileProjects} demos={demos} />
        </Section>

        {/* DEALS */}
        <Section
          id="deals"
          wide
          eyebrow="Website + App Deals"
          title={
            <>
              Launch-ready sites
              <br />
              <span className="italic text-pink-300">for creators, artists &amp; brands</span>.
            </>
          }
          subtitle="Bundle packages — a fully custom website plus a matching mobile app — built, designed, and deployed by me. Each demo is a working landing page in its own style."
        >
          <div className="grid gap-4 rounded-3xl border border-pink-500/20 bg-gradient-to-br from-pink-500/10 via-zinc-950/70 to-fuchsia-500/10 p-6 md:grid-cols-[1.3fr_1fr] md:items-center md:gap-10 md:p-10">
            <div>
              <p className="font-[family-name:var(--font-geist-mono)] text-[10px] font-semibold uppercase tracking-[0.35em] text-pink-300">
                Bundle pricing
              </p>
              <h3 className="mt-3 font-[family-name:var(--font-fraunces)] text-3xl font-light leading-tight text-zinc-50 md:text-4xl">
                Website + mobile app, launched in <span className="italic text-pink-300">4–6 weeks</span>.
              </h3>
              <p className="mt-3 text-sm text-zinc-400 md:text-base">
                Brand, copy, design, web build, and a matching React Native / Expo app on both stores. One project at a time — so yours gets real attention.
              </p>
              <ul className="mt-5 grid gap-2 text-sm text-zinc-300 sm:grid-cols-2">
                <li>· Custom website like the demos in Work</li>
                <li>· Matching iOS + Android app</li>
                <li>· Booking / contact / commerce integrations</li>
                <li>· Deploy + domain setup included</li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-rose-400 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_32px_rgba(244,114,182,0.6)] transition hover:brightness-110"
              >
                Book a bundle <span className="transition group-hover:translate-x-1">→</span>
              </Link>
              <a
                href="mailto:aquariusmaximusiam@gmail.com?subject=Website+%26+App+bundle"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-pink-500/40 bg-zinc-950/60 px-5 py-3 text-sm font-medium text-zinc-100 transition hover:border-pink-400 hover:text-pink-100"
              >
                Email a brief
              </a>
              <p className="mt-1 text-center text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                5 demo looks · infinite variations
              </p>
            </div>
          </div>
        </Section>

        {/* STACK */}
        <Section
          id="stack"
          eyebrow="How I Work"
          title={
            <>
              Crisp frontends, boring backends,{" "}
              <span className="italic text-pink-300">calm deploys</span>.
            </>
          }
          subtitle="I favor small, well-chosen tools over heavy stacks — so things stay easy to change and fast to ship."
        >
          <div className="grid gap-6 md:grid-cols-12">
            <div className="md:col-span-7">
              <div className="space-y-5 rounded-3xl border border-zinc-900 bg-zinc-950/60 p-6 md:p-8">
                <p className="text-base text-zinc-300">
                  I move across{" "}
                  <span className="font-medium text-zinc-50">design, frontend, backend, and deploy</span>
                  , which means fewer handoffs and tighter iteration loops. I care about typography, micro-interactions, and the small details that make a product feel finished.
                </p>
                <p className="text-base text-zinc-300">
                  On the backend I prefer{" "}
                  <span className="font-medium text-zinc-50">TypeScript-first services (Next.js / Node)</span>{" "}
                  with managed databases and serverless functions where they make sense — shipped to Vercel, Netlify, or custom cloud setups. When a project calls for AI, I treat the model as one component in a larger system, with clear interfaces and guardrails around it.
                </p>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="rounded-3xl border border-pink-500/20 bg-gradient-to-br from-pink-500/5 to-zinc-950/80 p-6 md:p-8">
                <p className="font-[family-name:var(--font-geist-mono)] text-[10px] font-semibold uppercase tracking-[0.35em] text-pink-300">
                  Core toolkit
                </p>
                <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                  {[
                    ["Frontend", "Next.js · React · TypeScript · Tailwind"],
                    ["Mobile", "React Native / Expo"],
                    ["Backend", "Node/TS APIs · serverless"],
                    ["Data", "Postgres · managed DBs · vector stores"],
                    ["AI", "LLM APIs with prompting + guardrails"],
                    ["Tools", "Cursor · Windsurf · Terminal"],
                    ["Infra", "Vercel · Netlify · CI/CD · observability"],
                  ].map(([k, v]) => (
                    <li key={k} className="flex items-start gap-3 border-b border-zinc-900 pb-2 last:border-b-0 last:pb-0">
                      <span className="w-20 flex-none font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.25em] text-pink-300/70">
                        {k}
                      </span>
                      <span className="text-zinc-300">{v}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* ABOUT */}
        <Section
          id="about"
          eyebrow="About"
          title={
            <>
              A builder comfortable at{" "}
              <span className="italic text-pink-300">every layer</span> of the stack.
            </>
          }
        >
          <div className="grid gap-8 md:grid-cols-2">
            <p className="text-base text-zinc-300 md:text-lg">
              I move comfortably between{" "}
              <span className="font-medium text-zinc-50">product thinking, systems design, and implementation</span>. Whether it&rsquo;s a consumer app, a brand site, a marketplace, or an internal tool, I prioritize crisp UX, reliable infrastructure, and a code base future contributors will actually enjoy working in.
            </p>
            <p className="text-base text-zinc-300 md:text-lg">
              This portfolio highlights shipped work — not just prototypes. Every project above represents{" "}
              <span className="font-medium text-zinc-50">real users, real constraints, and real iteration cycles</span>, which is where I do my best work.
            </p>
          </div>
        </Section>

        {/* CONTACT */}
        <Section
          id="contact"
          eyebrow="Get in touch"
          title={
            <>
              Let&rsquo;s{" "}
              <span className="italic text-pink-300">build</span> something together.
            </>
          }
          subtitle="Available for select collaborations, advisory, and hands-on engineering."
        >
          <div className="grid gap-8 lg:grid-cols-5 lg:items-start">
            <div className="space-y-4 lg:col-span-2">
              <p className="text-base text-zinc-300">
                Share a bit about your product, where it is today, and what you&rsquo;d like help with. I read every message and reply personally.
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
              <div className="mt-6 rounded-2xl border border-pink-500/20 bg-gradient-to-br from-pink-500/10 to-zinc-950/80 p-5">
                <p className="font-[family-name:var(--font-geist-mono)] text-[10px] font-semibold uppercase tracking-[0.35em] text-pink-300">
                  Reply window
                </p>
                <p className="mt-2 font-[family-name:var(--font-fraunces)] text-2xl italic text-zinc-50">
                  Within 24 hours, usually same day.
                </p>
              </div>
            </div>
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </Section>
      </main>

      <footer className="border-t border-zinc-900 py-10 text-center">
        <p className="font-[family-name:var(--font-fraunces)] text-lg italic text-zinc-400">
          Aquarius Maximus — <span className="text-pink-300">full-stack by hand</span>.
        </p>
        <p className="mt-2 font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.3em] text-zinc-600">
          © 2026 · built in the open
        </p>
      </footer>
    </div>
  );
}
