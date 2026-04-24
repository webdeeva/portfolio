"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CreatorDemo() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [tab, setTab] = useState<"youtube" | "tiktok" | "instagram">("youtube");

  // rotating testimonial
  const quotes = [
    { q: "Sunday is the easiest partner we've ever worked with — calm on set, wild in the edit.", by: "NARS Cosmetics" },
    { q: "Our campaign view-through more than doubled after her deliverables dropped.", by: "Notion" },
    { q: "She gets the brief in five minutes and the brand in five seconds.", by: "Our Place" },
  ];
  const [qi, setQi] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setQi((i) => (i + 1) % quotes.length), 4000);
    return () => clearInterval(t);
  }, [quotes.length]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#fff6ee] text-stone-900 font-[var(--font-geist-sans)]">
      <style>{`
        @keyframes blobA { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(30px,-10px) scale(1.08)} }
        @keyframes blobB { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(-20px,20px) scale(1.05)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(22px)} to{opacity:1;transform:translateY(0)} }
        @keyframes tickerRight { from { transform:translateX(0) } to { transform:translateX(-50%) } }
        .sm-display { font-family: 'Fraunces', 'Cormorant Garamond', ui-serif, serif; letter-spacing: -0.03em; }
        .sm-hand { font-family: 'Caveat', 'Homemade Apple', cursive; }
        .card-rise { animation: fadeUp .8s ease-out both; }
        .pill { background: linear-gradient(90deg, #ffd2c2 0%, #ffc7e6 60%, #c8e8ff 100%); }
        .chip { background:#fff; box-shadow: 0 2px 0 0 rgba(0,0,0,.08), 0 8px 20px -8px rgba(0,0,0,.1); }
      `}</style>

      {/* ambient blobs */}
      <div className="pointer-events-none absolute top-10 -left-20 h-[500px] w-[500px] rounded-full bg-[#ffd1be] opacity-60 blur-3xl" style={{ animation: "blobA 10s ease-in-out infinite" }} />
      <div className="pointer-events-none absolute top-60 -right-20 h-[500px] w-[500px] rounded-full bg-[#c8e8ff] opacity-60 blur-3xl" style={{ animation: "blobB 12s ease-in-out infinite" }} />
      <div className="pointer-events-none absolute bottom-20 left-1/3 h-[400px] w-[400px] rounded-full bg-[#d5f3db] opacity-50 blur-3xl" style={{ animation: "blobA 9s ease-in-out infinite reverse" }} />

      {/* NAV */}
      <header className="relative z-50 mx-auto flex max-w-6xl items-center justify-between px-6 py-6 sm:px-10">
        <Link href="/demos/creator" className="sm-display text-3xl">
          Sunday Mira<span className="text-[#ff7dac]">.</span>
        </Link>

        <nav className="hidden items-center gap-9 text-sm text-stone-700 md:flex">
          <a href="#work" className="transition hover:text-[#ff7dac]">Work</a>
          <a href="#channels" className="transition hover:text-[#ff7dac]">Channels</a>
          <a href="#gear" className="transition hover:text-[#ff7dac]">Gear</a>
          <a href="#press" className="transition hover:text-[#ff7dac]">Press</a>
          <a href="#contact" className="transition hover:text-[#ff7dac]">Contact</a>
        </nav>

        <a href="#contact" className="pill hidden rounded-full px-5 py-2.5 text-sm font-medium text-stone-900 shadow-sm ring-1 ring-stone-900/5 md:inline-block">
          Work with me →
        </a>

        <button onClick={() => setMenuOpen((v) => !v)} aria-label="menu" className="relative z-50 grid h-11 w-11 place-items-center rounded-full border border-stone-300 bg-white shadow-sm md:hidden">
          <div className="relative h-4 w-5">
            <span className={`absolute left-0 h-[2px] w-full bg-stone-900 transition ${menuOpen ? "top-1/2 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 top-1/2 h-[2px] w-full bg-stone-900 transition ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 h-[2px] w-full bg-stone-900 transition ${menuOpen ? "top-1/2 -rotate-45" : "bottom-0"}`} />
          </div>
        </button>
      </header>

      <div className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 bg-white/95 backdrop-blur transition md:hidden ${menuOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}>
        {["Work", "Channels", "Gear", "Press", "Contact"].map((i) => (
          <a key={i} href={`#${i.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="sm-display text-5xl text-stone-900">
            {i}
          </a>
        ))}
      </div>

      {/* HERO */}
      <section className="relative mx-auto max-w-6xl px-6 pb-20 sm:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <div className="chip card-rise inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs text-stone-700">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" /> Open for Q3 partnerships
            </div>
            <h1 className="sm-display card-rise mt-6 text-[clamp(3rem,8vw,6.5rem)] leading-[0.95]" style={{ animationDelay: ".1s" }}>
              Bright ideas,
              <br />
              <span className="italic text-[#ff7dac]">softly</span> made.
            </h1>
            <p className="card-rise mt-6 max-w-xl text-lg leading-relaxed text-stone-700" style={{ animationDelay: ".2s" }}>
              I'm Sunday — a creator, host and editor making short-form content that actually feels like something. Brand work with labels I use, how‑to series, and the occasional recipe reel that goes a little too viral.
            </p>

            <div className="card-rise mt-10 flex flex-wrap items-center gap-3" style={{ animationDelay: ".3s" }}>
              <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-800">
                Start a project <span className="transition group-hover:translate-x-1">→</span>
              </a>
              <a href="#work" className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-6 py-3 text-sm text-stone-800 transition hover:border-stone-500">
                ▶ Watch the reel
              </a>
            </div>

            {/* Stats */}
            <div className="card-rise mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4" style={{ animationDelay: ".4s" }}>
              {[
                { n: "480K", l: "YouTube" },
                { n: "1.2M", l: "TikTok" },
                { n: "210K", l: "Instagram" },
                { n: "32", l: "Brand deals" },
              ].map((s) => (
                <div key={s.l} className="chip rounded-2xl p-4">
                  <p className="sm-display text-3xl text-stone-900">{s.n}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-stone-500">{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero image */}
          <div className="relative lg:col-span-5">
            <div className="relative rotate-[-3deg] overflow-hidden rounded-[28px] border-4 border-white shadow-2xl shadow-stone-400/40">
              <Image src="/images/demos/creator/hero.jpg" alt="Sunday Mira" width={900} height={1100} className="aspect-[4/5] object-cover" priority />
            </div>
            <span className="sm-hand absolute -right-2 top-10 rotate-6 rounded-full bg-[#ffe7b2] px-4 py-1 text-xl text-stone-900 shadow ring-1 ring-black/5">
              new vlog ↓
            </span>

            <div className="chip absolute -left-6 bottom-6 rotate-[-4deg] rounded-2xl p-3">
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-xl">
                  <Image src="/images/demos/creator/deskflat.jpg" alt="thumbnail" fill className="object-cover" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Latest</p>
                  <p className="text-sm font-medium">a cozy week in my home studio</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Brand ticker */}
        <div className="relative mt-20 overflow-hidden rounded-3xl border border-white bg-white/70 py-6 shadow-sm backdrop-blur">
          <div className="flex items-center gap-14 whitespace-nowrap text-xl text-stone-500" style={{ animation: "tickerRight 30s linear infinite" }}>
            {Array.from({ length: 4 }).map((_, i) => (
              <span key={i} className="sm-display flex items-center gap-14 italic">
                <span>Notion</span><span>·</span>
                <span>NARS</span><span>·</span>
                <span>Arc</span><span>·</span>
                <span>Aesop</span><span>·</span>
                <span>Our Place</span><span>·</span>
                <span>Squarespace</span><span>·</span>
                <span>Le Creuset</span><span>·</span>
                <span>Google Pixel</span><span>·</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* WORK grid */}
      <section id="work" className="relative mx-auto max-w-6xl px-6 pb-24 sm:px-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-stone-500">Selected work</p>
            <h2 className="sm-display mt-3 text-5xl sm:text-6xl">
              Recent <span className="italic text-[#ff7dac]">projects</span>
            </h2>
          </div>
          <p className="max-w-md text-stone-600">
            From long-form YouTube documentary to 30‑second TikTok placements — everything shot, edited, and posted by me or my tiny team.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-6">
          <article className="group relative overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-stone-200 md:col-span-4">
            <div className="relative aspect-[16/10]">
              <Image src="/images/demos/creator/onphone.jpg" alt="Campaign" fill className="object-cover transition duration-700 group-hover:scale-[1.02]" />
            </div>
            <div className="flex items-start justify-between p-6">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-stone-500">Notion · Campaign</p>
                <h3 className="sm-display mt-2 text-3xl">A gentler way to plan the week</h3>
                <p className="mt-2 text-sm text-stone-600">3 pieces · 4.8M views · 12.4% CTR</p>
              </div>
              <span className="pill rounded-full px-3 py-1 text-xs">2026</span>
            </div>
          </article>

          <article className="group relative overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-stone-200 md:col-span-2">
            <div className="relative aspect-[4/5]">
              <Image src="/images/demos/creator/deskflat.jpg" alt="NARS" fill className="object-cover" />
            </div>
            <div className="p-6">
              <p className="text-xs uppercase tracking-[0.25em] text-stone-500">NARS · 3 reels</p>
              <h3 className="sm-display mt-2 text-2xl">Light Reflections</h3>
            </div>
          </article>

          <article className="group relative overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-stone-200 md:col-span-3">
            <div className="relative aspect-[4/3]">
              <Image src="/images/demos/creator/hero.jpg" alt="Arc" fill className="object-cover" />
            </div>
            <div className="p-6">
              <p className="text-xs uppercase tracking-[0.25em] text-stone-500">Arc Browser · Review</p>
              <h3 className="sm-display mt-2 text-2xl">A browser that dreams</h3>
            </div>
          </article>

          <article className="group relative overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-stone-200 md:col-span-3">
            <div className="relative aspect-[4/3]">
              <Image src="/images/demos/creator/onphone.jpg" alt="Aesop" fill className="object-cover" />
            </div>
            <div className="p-6">
              <p className="text-xs uppercase tracking-[0.25em] text-stone-500">Aesop · Store film</p>
              <h3 className="sm-display mt-2 text-2xl">Quiet rituals, every morning</h3>
            </div>
          </article>
        </div>
      </section>

      {/* CHANNELS */}
      <section id="channels" className="relative border-y border-stone-200 bg-gradient-to-br from-[#fff0e2] via-[#fff] to-[#e7f6ff] py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <p className="text-xs uppercase tracking-[0.35em] text-stone-500">Live on all platforms</p>
          <h2 className="sm-display mt-3 text-5xl sm:text-6xl">Where to <span className="italic text-[#ff7dac]">watch</span>.</h2>

          <div className="mt-8 flex flex-wrap gap-2 rounded-full border border-stone-200 bg-white p-1 text-sm shadow-sm">
            {([
              { k: "youtube", l: "YouTube · 480K" },
              { k: "tiktok", l: "TikTok · 1.2M" },
              { k: "instagram", l: "Instagram · 210K" },
            ] as const).map((t) => (
              <button
                key={t.k}
                onClick={() => setTab(t.k)}
                className={`rounded-full px-5 py-2.5 transition ${tab === t.k ? "bg-stone-900 text-white" : "text-stone-600 hover:text-stone-900"}`}
              >
                {t.l}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {(tab === "youtube"
              ? [
                  { t: "A Cozy Week in My Home Studio", views: "2.4M", img: "/images/demos/creator/hero.jpg" },
                  { t: "I bought every viral planner for a year", views: "1.1M", img: "/images/demos/creator/deskflat.jpg" },
                  { t: "my calm morning routine (no bs)", views: "3.8M", img: "/images/demos/creator/onphone.jpg" },
                ]
              : tab === "tiktok"
                ? [
                    { t: "this notion template changed my life", views: "8.1M", img: "/images/demos/creator/deskflat.jpg" },
                    { t: "chill desk tour ✨", views: "4.5M", img: "/images/demos/creator/onphone.jpg" },
                    { t: "answering dms with coffee", views: "2.9M", img: "/images/demos/creator/hero.jpg" },
                  ]
                : [
                    { t: "Sunday morning carousel", views: "340K", img: "/images/demos/creator/hero.jpg" },
                    { t: "Behind the NARS shoot", views: "280K", img: "/images/demos/creator/onphone.jpg" },
                    { t: "Planner restock tour", views: "410K", img: "/images/demos/creator/deskflat.jpg" },
                  ]
            ).map((v) => (
              <div key={v.t} className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-stone-200">
                <div className="relative aspect-video">
                  <Image src={v.img} alt={v.t} fill className="object-cover transition duration-500 group-hover:scale-[1.03]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent" />
                  <span className="absolute bottom-3 right-3 rounded-full bg-black/60 px-2.5 py-1 text-xs text-white backdrop-blur">{v.views} views</span>
                </div>
                <div className="p-5">
                  <p className="sm-display text-xl leading-snug text-stone-900">{v.t}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.25em] text-stone-500">Sunday Mira</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GEAR */}
      <section id="gear" className="relative mx-auto max-w-6xl px-6 py-24 sm:px-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative overflow-hidden rounded-[28px] shadow-lg">
            <Image src="/images/demos/creator/deskflat.jpg" alt="Desk flatlay" width={1200} height={900} className="w-full object-cover" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-stone-500">On my desk</p>
            <h2 className="sm-display mt-3 text-5xl sm:text-6xl">Gear <span className="italic text-[#ff7dac]">I actually use</span>.</h2>
            <p className="mt-5 max-w-md text-stone-600">Affiliate links — I only keep something on the list if I'd still reach for it after a month.</p>

            <ul className="mt-8 divide-y divide-stone-200 border-y border-stone-200">
              {[
                { n: "Sony a7C II", p: "$2,198" },
                { n: "Godox SL60W Key Light", p: "$145" },
                { n: "DJI Mic 2", p: "$349" },
                { n: "Notion (annual)", p: "$96" },
                { n: "Leuchtturm planner", p: "$28" },
              ].map((g) => (
                <li key={g.n} className="group flex items-center justify-between py-4">
                  <span className="text-stone-900">{g.n}</span>
                  <span className="flex items-center gap-4">
                    <span className="text-stone-500">{g.p}</span>
                    <span className="opacity-0 transition group-hover:opacity-100">↗</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PRESS / testimonials */}
      <section id="press" className="relative mx-auto max-w-6xl px-6 pb-24 sm:px-10">
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#ffe7b2] via-[#ffd4e1] to-[#c8e8ff] p-10 sm:p-16">
          <p className="text-xs uppercase tracking-[0.35em] text-stone-700">Brands say</p>
          <blockquote key={qi} className="sm-display mt-4 max-w-3xl text-3xl leading-snug text-stone-900 sm:text-5xl card-rise">
            “{quotes[qi].q}”
          </blockquote>
          <p className="mt-6 text-stone-700">— {quotes[qi].by}</p>
          <div className="mt-8 flex gap-2">
            {quotes.map((_, i) => (
              <button key={i} onClick={() => setQi(i)} aria-label={`quote ${i + 1}`} className={`h-2 rounded-full transition-all ${qi === i ? "w-10 bg-stone-900" : "w-2 bg-stone-900/30"}`} />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative mx-auto max-w-6xl px-6 pb-24 sm:px-10">
        <div className="grid gap-10 overflow-hidden rounded-[32px] bg-stone-900 p-10 text-white sm:p-14 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-stone-400">Let's work together</p>
            <h2 className="sm-display mt-4 text-5xl leading-[0.95] sm:text-7xl">
              Have a <span className="italic text-[#ffc1de]">brief</span>?
            </h2>
            <p className="mt-5 max-w-sm text-stone-300">I book 2–3 partnerships a month. Tell me what you're building and where you want to go with it.</p>

            <div className="mt-8 space-y-3 text-stone-300">
              <p>hello@sundaymira.studio</p>
              <p>Rates & media kit available on request</p>
              <p>Based in Brooklyn · travels often</p>
            </div>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <input className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm placeholder-stone-400 outline-none transition focus:border-[#ffc1de]" placeholder="Your name" />
              <input className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm placeholder-stone-400 outline-none transition focus:border-[#ffc1de]" placeholder="Brand / company" />
            </div>
            <input className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm placeholder-stone-400 outline-none transition focus:border-[#ffc1de]" placeholder="Email" type="email" />
            <input className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm placeholder-stone-400 outline-none transition focus:border-[#ffc1de]" placeholder="Budget range" />
            <textarea rows={4} className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm placeholder-stone-400 outline-none transition focus:border-[#ffc1de]" placeholder="Tell me about the project" />
            <button className="group inline-flex items-center gap-2 rounded-full bg-[#ffc1de] px-6 py-3 text-sm font-medium text-stone-900 transition hover:bg-white">
              Send brief <span className="transition group-hover:translate-x-1">→</span>
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-stone-200 py-10 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-stone-500">© 2026 Sunday Mira Studio</p>
        <p className="mt-3 text-xs uppercase tracking-[0.3em] text-stone-400">
          <Link href="/" className="hover:text-stone-900">↶ back to aquariusmaximus.dev</Link>
        </p>
      </footer>
    </div>
  );
}
