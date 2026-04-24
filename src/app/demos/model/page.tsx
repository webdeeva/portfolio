"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ModelDemo() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [marqueeIndex, setMarqueeIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setMarqueeIndex((i) => (i + 1) % 4), 2600);
    return () => clearInterval(t);
  }, []);

  const words = ["COUTURE", "STREETWEAR", "EDITORIAL", "MUSIC VIDEO"];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#120008] text-white font-[var(--font-geist-sans)]">
      <style>{`
        @keyframes floatY { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-18px)} }
        @keyframes slowspin { to { transform: rotate(360deg) } }
        @keyframes shimmer { 0%{background-position:-200% 0} 100%{background-position:200% 0} }
        @keyframes fadeUp { from { opacity:0; transform:translateY(24px) } to { opacity:1; transform:translateY(0) } }
        @keyframes slidein { from { opacity:0; transform:translateY(120%) } to { opacity:1; transform:translateY(0) } }
        .grain::before {
          content:""; position:absolute; inset:0; pointer-events:none; opacity:.08; mix-blend-mode:overlay;
          background-image: radial-gradient(rgba(255,255,255,.5) 1px, transparent 1px);
          background-size: 3px 3px;
        }
        .serif { font-family: 'Didot', 'Playfair Display', 'Times New Roman', serif; letter-spacing: -0.03em; }
        .mono { font-family: var(--font-geist-mono), ui-monospace, monospace; }
        .kiya-stroke {
          -webkit-text-stroke: 1.5px #ff46a0;
          color: transparent;
        }
        .pink-gradient {
          background: linear-gradient(110deg, #ff4ea1 0%, #ff8cc8 40%, #ffc1de 100%);
          -webkit-background-clip: text; background-clip: text; color: transparent;
          background-size: 200% 200%; animation: shimmer 6s linear infinite;
        }
        .card-rise { animation: fadeUp .8s ease-out both; }
        .marquee-track { animation: marquee 28s linear infinite; }
        @keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
      `}</style>

      {/* Ambient neon glows */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-pink-500/30 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full bg-fuchsia-600/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-rose-500/20 blur-3xl" />

      {/* NAV */}
      <header className="relative z-50 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 sm:px-10">
        <Link href="/demos/model" className="serif text-3xl tracking-tight">
          <span className="pink-gradient">KIYA</span>
          <span className="ml-0.5 text-white">.</span>
        </Link>

        <nav className="mono hidden items-center gap-10 text-xs uppercase tracking-[0.3em] md:flex">
          <a href="#work" className="transition hover:text-pink-300">Work</a>
          <a href="#campaigns" className="transition hover:text-pink-300">Campaigns</a>
          <a href="#press" className="transition hover:text-pink-300">Press</a>
          <a href="#contact" className="transition hover:text-pink-300">Book</a>
        </nav>

        <div className="hidden md:block">
          <a href="#contact" className="mono rounded-full border border-pink-400/70 bg-pink-500/10 px-5 py-2 text-xs uppercase tracking-[0.25em] text-pink-200 transition hover:bg-pink-500 hover:text-white">
            Book
          </a>
        </div>

        {/* Mobile icon trigger */}
        <button
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-pink-300/40 bg-white/5 backdrop-blur md:hidden"
        >
          <span className={`h-[2px] w-5 bg-pink-200 transition-all ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`h-[2px] w-5 bg-pink-200 transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`h-[2px] w-5 bg-pink-200 transition-all ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </header>

      {/* Mobile full overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-gradient-to-b from-[#1a0010] via-[#2a0019] to-[#120008] transition-all md:hidden ${menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
      >
        {["Work", "Campaigns", "Press", "Book"].map((i) => (
          <a
            key={i}
            href={`#${i.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            className="serif text-5xl tracking-tight text-white transition hover:text-pink-300"
          >
            {i}
          </a>
        ))}
      </div>

      {/* HERO */}
      <section className="relative mx-auto mt-4 max-w-7xl px-6 pb-24 sm:px-10">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="relative order-2 lg:order-1 lg:col-span-7">
            <p className="mono text-xs uppercase tracking-[0.5em] text-pink-300 card-rise">Issue 024 · Spring 2026</p>
            <h1 className="serif mt-6 text-[clamp(3.2rem,11vw,9rem)] font-semibold leading-[0.85] tracking-tighter card-rise" style={{ animationDelay: ".1s" }}>
              <span className="block">SOFT</span>
              <span className="block kiya-stroke pink-gradient" style={{ WebkitTextStroke: "0" }}>POWER.</span>
              <span className="block">LOUD</span>
              <span className="pink-gradient block">ENERGY.</span>
            </h1>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-pink-50/80 card-rise" style={{ animationDelay: ".2s" }}>
              KIYA is a Brooklyn‑born hip‑hop street model redefining the line between couture and culture. Campaigns for the labels shaping tomorrow — and the artists writing its soundtrack.
            </p>

            <div className="mono mt-10 flex flex-wrap items-center gap-3 card-rise" style={{ animationDelay: ".3s" }}>
              <a href="#work" className="group inline-flex items-center gap-2 rounded-full bg-pink-500 px-7 py-3 text-xs uppercase tracking-[0.25em] text-black transition hover:bg-pink-300">
                View the Work
                <span className="transition group-hover:translate-x-1">→</span>
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-pink-300/40 px-7 py-3 text-xs uppercase tracking-[0.25em] text-pink-200 transition hover:border-pink-200">
                Book KIYA
              </a>
            </div>

            <div className="mono mt-14 grid max-w-md grid-cols-3 gap-6 text-xs uppercase tracking-[0.25em] text-pink-100/60 card-rise" style={{ animationDelay: ".4s" }}>
              <div>
                <div className="serif text-3xl text-white">42</div>
                <div className="mt-2">Campaigns</div>
              </div>
              <div>
                <div className="serif text-3xl text-white">7</div>
                <div className="mt-2">Covers</div>
              </div>
              <div>
                <div className="serif text-3xl text-white">1.2M</div>
                <div className="mt-2">Community</div>
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2 lg:col-span-5">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-[32px] border border-pink-300/20 shadow-[0_30px_90px_-10px_rgba(255,70,160,0.35)]" style={{ animation: "floatY 8s ease-in-out infinite" }}>
              <Image src="/images/demos/model/hero.jpg" alt="KIYA hero" fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                <div>
                  <p className="mono text-[10px] uppercase tracking-[0.4em] text-pink-200">Cover 07</p>
                  <p className="serif text-2xl text-white">Neon Bloom</p>
                </div>
                <div className="mono rounded-full border border-pink-200/40 bg-black/50 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-pink-100">New</div>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-8 hidden h-32 w-32 items-center justify-center rounded-full border border-pink-300/40 bg-black/60 backdrop-blur md:flex" style={{ animation: "slowspin 22s linear infinite" }}>
              <svg viewBox="0 0 200 200" className="h-full w-full">
                <defs>
                  <path id="circlePath" d="M 100,100 m -70,0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0" />
                </defs>
                <text className="mono text-[14px] uppercase tracking-[0.3em]" fill="#ffc1de">
                  <textPath href="#circlePath">KIYA · KIYA · KIYA · KIYA ·</textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>

        {/* rotating keyword strip */}
        <div className="mt-20 overflow-hidden border-y border-pink-300/20 py-6">
          <div className="mono flex items-center gap-10 whitespace-nowrap text-2xl uppercase tracking-[0.4em] text-pink-100/70 marquee-track">
            {[...words, ...words, ...words, ...words].map((w, i) => (
              <span key={i} className="flex items-center gap-10">
                <span>{w}</span>
                <span className="text-pink-400">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="relative mx-auto max-w-7xl px-6 pb-24 sm:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mono text-xs uppercase tracking-[0.5em] text-pink-300">Selected Work</p>
            <h2 className="serif mt-3 text-5xl tracking-tight sm:text-7xl">
              Recent <span className="pink-gradient">campaigns</span>.
            </h2>
          </div>
          <p className="mono max-w-sm text-sm uppercase tracking-[0.25em] text-pink-100/60">
            Editorial, runway, music, and brand work — shot from NYC to Paris to LA.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-6">
          <div className="relative aspect-[3/4] overflow-hidden rounded-3xl md:col-span-4">
            <Image src="/images/demos/model/editorial.jpg" alt="Editorial spread" fill className="object-cover transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-black/60" />
            <div className="absolute bottom-6 left-6">
              <p className="mono text-[10px] uppercase tracking-[0.4em] text-pink-200">Vogue Italia</p>
              <p className="serif text-3xl text-white">Neon Alleys</p>
            </div>
          </div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-3xl md:col-span-2">
            <Image src="/images/demos/model/studio.jpg" alt="Studio portrait" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="mono text-[10px] uppercase tracking-[0.4em] text-pink-200">Beauty</p>
              <p className="serif text-2xl text-white">Soft Magenta</p>
            </div>
          </div>

          {/* Key moments grid */}
          <div className="relative overflow-hidden rounded-3xl border border-pink-300/20 bg-gradient-to-br from-pink-500/10 via-black/60 to-black/80 p-8 md:col-span-3">
            <p className="mono text-xs uppercase tracking-[0.4em] text-pink-300">Cover Story</p>
            <h3 className="serif mt-6 text-4xl leading-tight">
              “When the streets dress you, fashion starts to listen.”
            </h3>
            <p className="mt-6 text-pink-100/70">— Dazed, 03 / 2026</p>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl md:col-span-3">
            <Image src="/images/demos/model/hero.jpg" alt="Cover portrait" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
              <div>
                <p className="mono text-[10px] uppercase tracking-[0.4em] text-pink-200">Campaign</p>
                <p className="serif text-3xl text-white">Rose District F/W26</p>
              </div>
              <span className="mono rounded-full border border-pink-200/40 bg-black/50 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-pink-100">2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* CAMPAIGNS / logos */}
      <section id="campaigns" className="relative border-y border-pink-300/10 bg-gradient-to-r from-[#1a0010] via-[#28001a] to-[#1a0010] py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <p className="mono text-center text-xs uppercase tracking-[0.5em] text-pink-200/70">Seen in</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-16 gap-y-6 text-center">
            {["VOGUE", "DAZED", "i‑D", "HYPEBAE", "COMPLEX", "NYLON", "HIGHSNOBIETY"].map((n) => (
              <span key={n} className="serif text-2xl tracking-wider text-pink-100/70 transition hover:text-pink-200">{n}</span>
            ))}
          </div>
        </div>
      </section>

      {/* PRESS / story */}
      <section id="press" className="relative mx-auto max-w-7xl px-6 py-24 sm:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px]">
            <Image src="/images/demos/model/studio.jpg" alt="Studio" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent" />
          </div>
          <div>
            <p className="mono text-xs uppercase tracking-[0.5em] text-pink-300">The story</p>
            <h2 className="serif mt-4 text-5xl leading-[0.9] tracking-tight sm:text-6xl">
              Built on <span className="pink-gradient">pavement</span>. Polished in <span className="pink-gradient">pink</span>.
            </h2>
            <p className="mt-6 max-w-lg text-pink-50/75">
              Kiyana grew up between bodega linoleum and basement studios. By 19 she was front row at Fashion Week; by 23, walking the shows. Her work has shaped campaigns for independent labels and major houses — always refusing to trade edge for polish.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-6 text-sm text-pink-100/80">
              <div>
                <p className="mono text-[10px] uppercase tracking-[0.4em] text-pink-300">Representation</p>
                <p className="mt-2">IMG Worldwide · New York · Paris</p>
              </div>
              <div>
                <p className="mono text-[10px] uppercase tracking-[0.4em] text-pink-300">Residency</p>
                <p className="mt-2">Brooklyn · LA · Seoul</p>
              </div>
              <div>
                <p className="mono text-[10px] uppercase tracking-[0.4em] text-pink-300">Height</p>
                <p className="mt-2">5′10″ · 178cm</p>
              </div>
              <div>
                <p className="mono text-[10px] uppercase tracking-[0.4em] text-pink-300">Languages</p>
                <p className="mt-2">EN · ES · KO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOOK */}
      <section id="contact" className="relative mx-auto max-w-5xl px-6 pb-24 sm:px-10">
        <div className="relative overflow-hidden rounded-[32px] border border-pink-400/30 bg-gradient-to-br from-pink-500/20 via-black/60 to-black/80 p-10 sm:p-16">
          <div className="pointer-events-none absolute -top-40 -right-20 h-[380px] w-[380px] rounded-full bg-pink-400/30 blur-3xl" />
          <p className="mono text-xs uppercase tracking-[0.5em] text-pink-200">Bookings</p>
          <h2 className="serif mt-4 text-5xl leading-[0.95] tracking-tight sm:text-7xl">
            Ready when <span className="pink-gradient">you are</span>.
          </h2>
          <p className="mt-6 max-w-lg text-pink-50/80">
            For campaigns, covers, music visuals, and select brand partnerships — contact agency directly. Response within 24 hrs.
          </p>

          <div className="mono mt-10 flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.25em]">
            <a href="mailto:book@kiya.studio" className="rounded-full bg-pink-500 px-7 py-3 text-black transition hover:bg-pink-300">book@kiya.studio</a>
            <a href="#" className="rounded-full border border-pink-300/40 px-7 py-3 text-pink-100 transition hover:border-pink-200">@kiya</a>
            <span className="text-pink-200/70">· Brooklyn · Paris · LA</span>
          </div>

          <div className="mt-12 flex items-end justify-between">
            <p className="mono text-[10px] uppercase tracking-[0.4em] text-pink-300 transition">
              Now booking F/W 2026
              <span className="ml-2 inline-block h-2 w-2 animate-pulse rounded-full bg-pink-400" />
            </p>
            <span className="serif text-pink-100/60">— {words[marqueeIndex]}</span>
          </div>
        </div>
      </section>

      <footer className="border-t border-pink-300/10 py-10 text-center">
        <p className="mono text-[10px] uppercase tracking-[0.4em] text-pink-200/60">© 2026 KIYA STUDIO. All rights reserved.</p>
        <p className="mono mt-3 text-[10px] uppercase tracking-[0.4em] text-pink-300/50">
          <Link href="/" className="hover:text-pink-200">↶ back to aquariusmaximus.dev</Link>
        </p>
      </footer>
    </div>
  );
}
