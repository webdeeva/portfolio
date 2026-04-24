"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function RapperDemo() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (!playing) return;
    const t = setInterval(() => setTime((s) => (s + 1) % 220), 1000);
    return () => clearInterval(t);
  }, [playing]);

  const fmt = (t: number) => `${Math.floor(t / 60)}:${(t % 60).toString().padStart(2, "0")}`;

  const tracks = [
    { n: "01", t: "Blue Smoke (intro)", d: "2:14" },
    { n: "02", t: "Cobalt Crown", d: "3:42" },
    { n: "03", t: "Midnight Garage", d: "4:01" },
    { n: "04", t: "Pressure (skit)", d: "1:11" },
    { n: "05", t: "Cyan Rain", d: "3:28" },
    { n: "06", t: "Empire State of Blue", d: "4:35" },
    { n: "07", t: "Static & Chrome", d: "2:58" },
    { n: "08", t: "North (outro)", d: "3:12" },
  ];

  const dates = [
    { city: "New York, NY", venue: "Terminal 5", date: "MAY 02" },
    { city: "Atlanta, GA", venue: "Tabernacle", date: "MAY 08" },
    { city: "Chicago, IL", venue: "House of Blues", date: "MAY 15" },
    { city: "Los Angeles, CA", venue: "The Novo", date: "MAY 22" },
    { city: "London, UK", venue: "O2 Academy Brixton", date: "JUN 04" },
    { city: "Paris, FR", venue: "Bataclan", date: "JUN 09" },
    { city: "Berlin, DE", venue: "Huxleys", date: "JUN 13" },
    { city: "Tokyo, JP", venue: "Zepp Haneda", date: "JUN 22" },
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#04060d] font-[var(--font-geist-sans)] text-white">
      <style>{`
        @keyframes scanline { 0%{transform:translateY(-100%)} 100%{transform:translateY(100%)} }
        @keyframes flicker { 0%,100%{opacity:1} 50%{opacity:.92} 52%{opacity:.75} 54%{opacity:1} }
        @keyframes glowpulse { 0%,100%{box-shadow:0 0 60px rgba(36,120,255,.35)} 50%{box-shadow:0 0 120px rgba(36,120,255,.6)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(22px)} to{opacity:1;transform:translateY(0)} }
        @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        @keyframes noise {
          0%, 100% { background-position: 0 0 }
          10% { background-position: -5% -10% }
          20% { background-position: -15% 5% }
          30% { background-position: 7% -25% }
          40% { background-position: 20% 25% }
          50% { background-position: -25% 10% }
          60% { background-position: 15% 5% }
          70% { background-position: 0 15% }
          80% { background-position: 25% 35% }
          90% { background-position: -10% 10% }
        }
        .mono { font-family: var(--font-geist-mono), ui-monospace, monospace; }
        .display { font-family: 'Bebas Neue', 'Oswald', 'Helvetica Neue', sans-serif; letter-spacing: 0.01em; }
        .text-chrome {
          background: linear-gradient(180deg,#f5faff 0%, #8ab7ff 45%, #1f4dff 55%, #0a1f66 100%);
          -webkit-background-clip: text; background-clip: text; color: transparent;
        }
        .text-cyan-glow { color: #7ad9ff; text-shadow: 0 0 20px rgba(122,217,255,.45); }
        .scanlines::before {
          content:""; position:absolute; inset:0; pointer-events:none;
          background: repeating-linear-gradient(transparent 0, transparent 2px, rgba(122,217,255,0.05) 2px, rgba(122,217,255,0.05) 3px);
          mix-blend-mode: screen;
        }
        .card-rise { animation: fadeUp .9s ease-out both; }
      `}</style>

      {/* Backdrop glows */}
      <div className="pointer-events-none absolute -top-60 -left-40 h-[700px] w-[700px] rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/2 -right-60 h-[700px] w-[700px] rounded-full bg-cyan-500/15 blur-[120px]" />

      {/* NAV */}
      <header className="relative z-50 mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 sm:px-10">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded border border-cyan-400/50 bg-gradient-to-br from-blue-600/30 to-cyan-500/10">
            <span className="display text-lg text-cyan-200">N</span>
          </div>
          <span className="display text-3xl tracking-[0.1em] text-chrome">NXRTH</span>
        </div>

        <nav className="mono hidden gap-10 text-xs uppercase tracking-[0.3em] md:flex">
          <a href="#album" className="transition hover:text-cyan-300">Album</a>
          <a href="#tour" className="transition hover:text-cyan-300">Tour</a>
          <a href="#videos" className="transition hover:text-cyan-300">Videos</a>
          <a href="#merch" className="transition hover:text-cyan-300">Merch</a>
        </nav>

        <a href="#tour" className="mono hidden rounded-sm border border-cyan-400/60 bg-cyan-500/10 px-5 py-2 text-xs uppercase tracking-[0.3em] text-cyan-200 transition hover:bg-cyan-500 hover:text-black md:inline-block">
          Tickets ›
        </a>

        <button onClick={() => setMenuOpen((v) => !v)} aria-label="menu" className="relative z-50 flex h-11 w-11 items-center justify-center rounded border border-cyan-400/30 bg-white/5 md:hidden">
          <div className="relative h-4 w-5">
            <span className={`absolute left-0 h-[2px] w-full bg-cyan-200 transition ${menuOpen ? "top-1/2 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 top-1/2 h-[2px] w-full bg-cyan-200 transition ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 h-[2px] w-full bg-cyan-200 transition ${menuOpen ? "top-1/2 -rotate-45" : "bottom-0"}`} />
          </div>
        </button>
      </header>

      <div className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-gradient-to-b from-[#050b1c] to-[#020308] transition-all md:hidden ${menuOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}>
        {["Album", "Tour", "Videos", "Merch"].map((i) => (
          <a key={i} href={`#${i.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="display text-6xl tracking-wider text-chrome">
            {i}
          </a>
        ))}
      </div>

      {/* HERO */}
      <section className="relative mx-auto max-w-[1400px] px-6 pb-24 sm:px-10">
        <div className="relative grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
          <div className="relative lg:col-span-7">
            <p className="mono text-xs uppercase tracking-[0.5em] text-cyan-300 card-rise">New album · 04.20.2026</p>
            <h1 className="display card-rise mt-6 text-[clamp(4rem,14vw,12rem)] leading-[0.8] tracking-tight" style={{ animationDelay: ".1s" }}>
              <span className="text-chrome block">BLUE</span>
              <span className="block text-cyan-glow" style={{ animation: "flicker 5s infinite" }}>SMOKE</span>
            </h1>
            <p className="mono mt-6 max-w-lg text-sm uppercase tracking-[0.2em] text-blue-100/70 card-rise" style={{ animationDelay: ".2s" }}>
              The sophomore record from NXRTH. 14 tracks. Produced between Brooklyn, London, and Tokyo. Out everywhere.
            </p>

            <div className="mono mt-10 flex flex-wrap gap-3 card-rise" style={{ animationDelay: ".3s" }}>
              <a href="#album" className="group inline-flex items-center gap-3 rounded-sm bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 text-xs uppercase tracking-[0.3em] text-white transition hover:brightness-125">
                Stream now
                <span className="transition group-hover:translate-x-1">►</span>
              </a>
              <a href="#tour" className="inline-flex items-center gap-2 rounded-sm border border-cyan-400/40 px-8 py-4 text-xs uppercase tracking-[0.3em] text-cyan-100 transition hover:border-cyan-200">
                Tour dates
              </a>
            </div>

            {/* Mini player */}
            <div className="mono card-rise mt-12 max-w-lg overflow-hidden rounded-lg border border-cyan-400/20 bg-gradient-to-br from-[#07122c]/90 to-black/80 p-4 backdrop-blur" style={{ animationDelay: ".4s" }}>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setPlaying((p) => !p)}
                  className="grid h-14 w-14 place-items-center rounded-full border border-cyan-300/40 bg-cyan-500/10 text-cyan-100 transition hover:bg-cyan-500/30"
                  style={{ animation: playing ? "glowpulse 2s infinite" : undefined }}
                >
                  {playing ? "❚❚" : "▶"}
                </button>
                <div className="flex-1">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-300">Now playing</p>
                  <p className="mt-1 text-white">Cobalt Crown — NXRTH</p>
                  <div className="mt-3 h-1 w-full rounded-full bg-blue-900/60">
                    <div className="h-full rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 transition-all" style={{ width: `${(time / 220) * 100}%` }} />
                  </div>
                  <div className="mt-2 flex justify-between text-[10px] text-blue-100/50">
                    <span>{fmt(time)}</span>
                    <span>3:40</span>
                  </div>
                </div>
              </div>
              {/* EQ */}
              <div className="mt-4 flex h-10 items-end gap-[3px]">
                {Array.from({ length: 48 }).map((_, i) => {
                  const h = playing ? 20 + Math.abs(Math.sin((i + time) * 0.55)) * 80 : 10 + (i % 5) * 4;
                  return <span key={i} className="flex-1 rounded-sm bg-gradient-to-t from-blue-600 to-cyan-300 transition-all" style={{ height: `${h}%`, opacity: 0.35 + (i % 5) * 0.15 }} />;
                })}
              </div>
            </div>
          </div>

          {/* Hero image panel */}
          <div className="relative lg:col-span-5">
            <div className="scanlines relative overflow-hidden rounded-lg border border-cyan-400/20 shadow-2xl" style={{ animation: "glowpulse 4s infinite" }}>
              <div className="relative aspect-[3/4]">
                <Image src="/images/demos/rapper/hero.jpg" alt="NXRTH hero" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020510] via-transparent to-transparent" />
              </div>
              <div className="absolute left-0 right-0 top-0 h-[140%] bg-gradient-to-b from-cyan-300/10 via-transparent to-transparent" style={{ animation: "scanline 6s linear infinite" }} />
              <div className="mono absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] uppercase tracking-[0.35em] text-cyan-200">
                <span>REC 04:20:26</span>
                <span className="flex items-center gap-2"><span className="inline-block h-2 w-2 animate-pulse rounded-full bg-red-500" /> LIVE</span>
              </div>
            </div>
            <div className="mono mt-6 flex items-center justify-between rounded-sm border border-cyan-400/20 bg-black/60 px-5 py-3 text-[10px] uppercase tracking-[0.35em] text-blue-100/70">
              <span>LP 02</span>
              <span>Blue Note / Atlantic</span>
              <span>2026</span>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="mt-16 overflow-hidden border-y border-cyan-400/10 py-4">
          <div className="display flex items-center gap-14 whitespace-nowrap text-5xl tracking-wide text-blue-100/70" style={{ animation: "marquee 40s linear infinite" }}>
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} className="flex items-center gap-14">
                <span>BLUE SMOKE</span>
                <span className="text-cyan-400">◆</span>
                <span className="text-chrome">OUT NOW</span>
                <span className="text-cyan-400">◆</span>
                <span>WORLD TOUR 2026</span>
                <span className="text-cyan-400">◆</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ALBUM / tracklist */}
      <section id="album" className="relative mx-auto max-w-[1400px] px-6 pb-24 sm:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="relative overflow-hidden rounded-xl border border-cyan-400/20 lg:col-span-5">
            <Image src="/images/demos/rapper/cover.jpg" alt="Album cover" width={900} height={900} className="aspect-square w-full object-cover" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
              <div>
                <p className="mono text-[10px] uppercase tracking-[0.4em] text-cyan-200">LP 02</p>
                <p className="display text-3xl">BLUE SMOKE</p>
              </div>
              <a href="#" className="mono rounded-sm border border-cyan-300/40 bg-black/60 px-3 py-1 text-[10px] uppercase tracking-[0.35em]">
                Vinyl pre‑order
              </a>
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className="mono text-xs uppercase tracking-[0.5em] text-cyan-300">Tracklist</p>
            <h2 className="display mt-3 text-5xl tracking-wide text-chrome sm:text-7xl">14 TRACKS.</h2>
            <p className="mt-4 max-w-md text-blue-100/70">Features from Denzel Curry, Little Simz, Smino, and more. Produced by Kenny Beats, The Alchemist, Kaytranada.</p>

            <ul className="mono mt-10 divide-y divide-cyan-400/10 border-y border-cyan-400/10">
              {tracks.map((t) => (
                <li key={t.n} className="group flex items-center justify-between gap-4 py-4 text-sm transition hover:bg-cyan-500/5">
                  <div className="flex items-center gap-5">
                    <span className="w-8 text-cyan-400">{t.n}</span>
                    <span className="text-white">{t.t}</span>
                  </div>
                  <div className="flex items-center gap-5 text-blue-100/60">
                    <span>{t.d}</span>
                    <span className="opacity-0 transition group-hover:opacity-100">▶</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* VIDEO / stage */}
      <section id="videos" className="relative mx-auto max-w-[1400px] px-6 pb-24 sm:px-10">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="mono text-xs uppercase tracking-[0.5em] text-cyan-300">Visuals</p>
            <h2 className="display mt-3 text-5xl tracking-wide text-chrome sm:text-7xl">NEW VIDEOS</h2>
          </div>
          <a href="#" className="mono hidden rounded-sm border border-cyan-400/30 px-5 py-2 text-[10px] uppercase tracking-[0.35em] text-cyan-100 sm:inline-block">Watch all →</a>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="relative aspect-video overflow-hidden rounded-xl border border-cyan-400/20">
            <Image src="/images/demos/rapper/stage.jpg" alt="Stage video" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent" />
            <div className="mono absolute top-4 left-4 text-[10px] uppercase tracking-[0.4em] text-cyan-200">Live — Tokyo</div>
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
              <p className="display text-3xl">COBALT CROWN (LIVE)</p>
              <button className="grid h-12 w-12 place-items-center rounded-full border border-white/40 bg-black/40 text-white backdrop-blur">▶</button>
            </div>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-xl border border-cyan-400/20">
            <Image src="/images/demos/rapper/cover.jpg" alt="Official video" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent" />
            <div className="mono absolute top-4 left-4 text-[10px] uppercase tracking-[0.4em] text-cyan-200">Official video</div>
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
              <p className="display text-3xl">BLUE SMOKE</p>
              <button className="grid h-12 w-12 place-items-center rounded-full border border-white/40 bg-black/40 text-white backdrop-blur">▶</button>
            </div>
          </div>
        </div>
      </section>

      {/* TOUR */}
      <section id="tour" className="relative border-y border-cyan-400/15 bg-gradient-to-br from-[#040a1f] to-[#020308] py-24">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mono text-xs uppercase tracking-[0.5em] text-cyan-300">World Tour 26</p>
              <h2 className="display mt-3 text-5xl tracking-wide text-chrome sm:text-7xl">LIVE DATES</h2>
            </div>
            <p className="mono max-w-md text-xs uppercase tracking-[0.3em] text-blue-100/60">Tickets open to the newsletter list 48 hrs before public sale.</p>
          </div>

          <ul className="mono mt-12 divide-y divide-cyan-400/10 border-y border-cyan-400/10">
            {dates.map((d) => (
              <li key={d.city} className="group grid grid-cols-[120px_1fr_auto] items-center gap-6 py-6 transition hover:bg-cyan-500/5 sm:grid-cols-[160px_1fr_1fr_auto]">
                <span className="display text-3xl text-cyan-200">{d.date}</span>
                <span className="text-white">{d.city}</span>
                <span className="hidden text-blue-100/70 sm:block">{d.venue}</span>
                <a href="#" className="rounded-sm border border-cyan-300/30 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-cyan-100 transition group-hover:border-cyan-200 group-hover:bg-cyan-500/20">
                  Tickets →
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* MERCH */}
      <section id="merch" className="relative mx-auto max-w-[1400px] px-6 py-24 sm:px-10">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="mono text-xs uppercase tracking-[0.5em] text-cyan-300">Store</p>
            <h2 className="display mt-3 text-5xl tracking-wide text-chrome sm:text-7xl">BLUE SMOKE GOODS</h2>
          </div>
          <a href="#" className="mono hidden rounded-sm border border-cyan-400/30 px-5 py-2 text-[10px] uppercase tracking-[0.3em] text-cyan-100 sm:inline-block">Shop all →</a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { img: "/images/demos/rapper/cover.jpg", name: "Cobalt Hoodie", price: "$110" },
            { img: "/images/demos/rapper/stage.jpg", name: "Tour Tee 26", price: "$48" },
            { img: "/images/demos/rapper/hero.jpg", name: "Blue Smoke LP Vinyl", price: "$38" },
            { img: "/images/demos/rapper/cover.jpg", name: "North Cap", price: "$42" },
          ].map((p) => (
            <div key={p.name} className="group relative overflow-hidden rounded-xl border border-cyan-400/20 bg-gradient-to-b from-[#060f2a] to-black/60">
              <div className="relative aspect-square overflow-hidden">
                <Image src={p.img} alt={p.name} fill className="object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent" />
              </div>
              <div className="mono flex items-center justify-between p-4 text-sm">
                <span className="text-white">{p.name}</span>
                <span className="text-cyan-300">{p.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-cyan-400/10 py-10 text-center">
        <p className="mono text-[10px] uppercase tracking-[0.4em] text-cyan-200/70">© 2026 NXRTH — Blue Note / Atlantic.</p>
        <p className="mono mt-3 text-[10px] uppercase tracking-[0.4em] text-cyan-300/50">
          <Link href="/" className="hover:text-cyan-200">↶ back to aquariusmaximus.dev</Link>
        </p>
      </footer>
    </div>
  );
}
