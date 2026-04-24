"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

export default function StreamerDemo() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [viewers, setViewers] = useState(18432);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const v = setInterval(() => setViewers((n) => n + Math.floor(Math.random() * 17 - 6)), 1500);
    const t = setInterval(() => setTick((i) => i + 1), 80);
    return () => { clearInterval(v); clearInterval(t); };
  }, []);

  const bars = useMemo(() => Array.from({ length: 36 }, () => Math.random()), []);

  const chat = [
    { u: "nightowl99", c: "insane clutch 🔥", color: "text-purple-300" },
    { u: "mochi_bot", c: "!drop", color: "text-teal-300" },
    { u: "drippypixel", c: "HOW did you hit that", color: "text-fuchsia-300" },
    { u: "vypr_mod", c: "[MOD] welcome to the raid 👋", color: "text-amber-300" },
    { u: "saltynate", c: "loading next round...", color: "text-sky-300" },
    { u: "lagmachine", c: "fps went up to 240 instantly", color: "text-pink-300" },
    { u: "kawaii_kxng", c: "drop that sens again pls", color: "text-indigo-300" },
  ];

  const schedule = [
    { d: "MON", time: "7:00 PM ET", what: "Ranked grind — Valorant" },
    { d: "TUE", time: "8:00 PM ET", what: "Co-stream with @NIGHTFALL" },
    { d: "WED", time: "OFF", what: "Editing day" },
    { d: "THU", time: "7:30 PM ET", what: "Warzone w/ subs" },
    { d: "FRI", time: "9:00 PM ET", what: "Just Chatting → IRL" },
    { d: "SAT", time: "5:00 PM ET", what: "Tournament prep" },
    { d: "SUN", time: "6:00 PM ET", what: "Variety night" },
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#06050f] text-white font-[var(--font-geist-sans)]">
      <style>{`
        @keyframes gridpan { from { background-position: 0 0 } to { background-position: 80px 80px } }
        @keyframes scan { 0%{transform:translateY(-120%)} 100%{transform:translateY(120%)} }
        @keyframes live { 0%,100%{opacity:1; transform:scale(1)} 50%{opacity:.5; transform:scale(1.15)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(22px)} to{opacity:1;transform:translateY(0)} }
        @keyframes glitch {
          0%,100% { transform: translate(0,0) }
          20% { transform: translate(-1px, 1px) }
          40% { transform: translate(1px, -1px) }
          60% { transform: translate(-2px, 0) }
          80% { transform: translate(2px, 1px) }
        }
        @keyframes neonflicker {
          0%,19%,21%,23%,25%,54%,56%,100% { opacity: 1; text-shadow: 0 0 10px #c4b5fd, 0 0 20px #7c3aed, 0 0 40px #7c3aed; }
          20%,24%,55% { opacity: .35; text-shadow: none; }
        }
        .mono { font-family: var(--font-geist-mono), ui-monospace, monospace; }
        .display { font-family: 'Orbitron', 'Rajdhani', 'Bebas Neue', sans-serif; letter-spacing: 0.06em; }
        .glass { background: rgba(18,14,45,.55); backdrop-filter: blur(10px); border: 1px solid rgba(167,139,250,.18); }
        .grid-bg {
          background-image:
            linear-gradient(rgba(168,85,247,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168,85,247,0.15) 1px, transparent 1px);
          background-size: 80px 80px;
          animation: gridpan 12s linear infinite;
        }
        .card-rise { animation: fadeUp .8s ease-out both; }
        .neon {
          color: #fff;
          text-shadow: 0 0 6px #c4b5fd, 0 0 18px #7c3aed, 0 0 35px #4f46e5;
        }
        .neon-cyan { text-shadow: 0 0 6px #67e8f9, 0 0 18px #06b6d4, 0 0 35px #0891b2; }
      `}</style>

      {/* ambient glows */}
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
      <div className="pointer-events-none absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-purple-600/30 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 -right-40 h-[700px] w-[700px] rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-3xl" />

      {/* NAV */}
      <header className="relative z-50 mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-10">
        <div className="flex items-center gap-3">
          <span className="display flex h-10 items-center rounded border border-purple-400/60 bg-purple-500/10 px-3 text-lg text-purple-200" style={{ animation: "neonflicker 6s infinite" }}>
            VYPR
          </span>
          <span className="mono hidden rounded bg-red-500/80 px-2 py-0.5 text-[10px] uppercase tracking-[0.3em] text-white md:inline-flex">
            <span className="mr-1 inline-block h-2 w-2 rounded-full bg-white" style={{ animation: "live 1.4s infinite" }} />
            LIVE
          </span>
        </div>

        <nav className="mono hidden gap-8 text-xs uppercase tracking-[0.3em] text-purple-100/80 md:flex">
          <a href="#live" className="transition hover:text-white">Live</a>
          <a href="#schedule" className="transition hover:text-white">Schedule</a>
          <a href="#clips" className="transition hover:text-white">Clips</a>
          <a href="#setup" className="transition hover:text-white">Setup</a>
          <a href="#member" className="transition hover:text-white">Members</a>
        </nav>

        <a href="#member" className="mono hidden rounded-md bg-gradient-to-r from-purple-500 to-fuchsia-500 px-5 py-2 text-xs uppercase tracking-[0.3em] text-white shadow-[0_0_25px_rgba(192,132,252,0.5)] transition hover:brightness-125 md:inline-flex">
          Subscribe
        </a>

        <button aria-label="menu" onClick={() => setMenuOpen((v) => !v)} className="relative z-50 grid h-11 w-11 place-items-center rounded border border-purple-400/40 bg-black/50 md:hidden">
          <div className="relative h-4 w-5">
            <span className={`absolute left-0 h-[2px] w-full bg-purple-200 transition ${menuOpen ? "top-1/2 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 top-1/2 h-[2px] w-full bg-purple-200 transition ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 h-[2px] w-full bg-purple-200 transition ${menuOpen ? "top-1/2 -rotate-45" : "bottom-0"}`} />
          </div>
        </button>
      </header>

      <div className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 bg-[#06050f]/95 backdrop-blur md:hidden ${menuOpen ? "opacity-100" : "pointer-events-none opacity-0"} transition`}>
        {["Live", "Schedule", "Clips", "Setup", "Members"].map((i) => (
          <a key={i} href={`#${i.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="display text-5xl neon">
            {i}
          </a>
        ))}
      </div>

      {/* HERO */}
      <section className="relative mx-auto max-w-7xl px-6 pb-24 sm:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <p className="mono text-xs uppercase tracking-[0.5em] text-purple-300 card-rise">Streaming nightly · Since 2020</p>
            <h1 className="display card-rise mt-6 text-[clamp(3.2rem,11vw,9rem)] leading-[0.85]" style={{ animationDelay: ".1s" }}>
              <span className="neon block" style={{ animation: "glitch 4s infinite" }}>NEVER</span>
              <span className="block text-transparent bg-gradient-to-r from-fuchsia-300 via-purple-300 to-cyan-300 bg-clip-text">OFFLINE.</span>
            </h1>
            <p className="mono mt-6 max-w-md text-sm uppercase leading-relaxed tracking-[0.2em] text-purple-100/70 card-rise" style={{ animationDelay: ".2s" }}>
              I'm VYPR — ranked grinder, variety streamer, and certified 3AM pizza enthusiast. Catch the chaos live six nights a week.
            </p>

            <div className="mono mt-10 flex flex-wrap gap-3 card-rise" style={{ animationDelay: ".3s" }}>
              <a href="#live" className="group inline-flex items-center gap-3 rounded-md bg-gradient-to-r from-purple-500 to-fuchsia-500 px-7 py-3.5 text-xs uppercase tracking-[0.3em] text-white shadow-[0_0_30px_rgba(192,132,252,0.5)] transition hover:brightness-125">
                Watch live
                <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-white" />
              </a>
              <a href="#member" className="inline-flex items-center gap-2 rounded-md border border-purple-400/40 bg-white/5 px-7 py-3.5 text-xs uppercase tracking-[0.3em] text-purple-100 transition hover:border-purple-200">
                Become a member
              </a>
            </div>

            {/* Quick stats */}
            <div className="mono mt-12 grid grid-cols-3 gap-4 card-rise" style={{ animationDelay: ".4s" }}>
              {[
                { n: viewers.toLocaleString(), l: "Live viewers" },
                { n: "58K", l: "Followers" },
                { n: "240 hz", l: "Avg FPS" },
              ].map((s) => (
                <div key={s.l} className="glass rounded-lg p-4">
                  <p className="display text-2xl text-white">{s.n}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-purple-200/70">{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Live panel */}
          <div className="relative lg:col-span-6">
            <div id="live" className="relative overflow-hidden rounded-2xl border border-purple-400/30 shadow-[0_0_60px_rgba(139,92,246,0.35)]">
              <div className="relative aspect-video">
                <Image src="/images/demos/streamer/hero.jpg" alt="Live feed" fill className="object-cover" priority />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06050f] via-transparent to-transparent" />
                <div className="pointer-events-none absolute left-0 right-0 top-0 h-[130%] bg-gradient-to-b from-cyan-400/10 via-transparent to-transparent" style={{ animation: "scan 5s linear infinite" }} />
              </div>
              {/* overlays */}
              <div className="mono absolute left-4 top-4 flex items-center gap-2 rounded-md bg-red-500/90 px-2.5 py-1 text-[10px] uppercase tracking-[0.3em] text-white">
                <span className="h-2 w-2 rounded-full bg-white" style={{ animation: "live 1.4s infinite" }} />
                LIVE
              </div>
              <div className="mono absolute right-4 top-4 rounded-md bg-black/60 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-purple-100">
                {viewers.toLocaleString()} watching
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                <div>
                  <p className="mono text-[10px] uppercase tracking-[0.3em] text-purple-300">Playing</p>
                  <p className="display text-2xl neon-cyan">VALORANT · RADIANT GRIND</p>
                </div>
                <button className="grid h-12 w-12 place-items-center rounded-full border border-white/40 bg-black/50 text-white backdrop-blur hover:bg-purple-500/40">▶</button>
              </div>
            </div>

            {/* Chat overlay */}
            <div className="glass absolute -bottom-6 -right-6 hidden w-80 rounded-xl p-4 md:block">
              <div className="mono flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-purple-200">
                <span>Stream chat</span>
                <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-emerald-400" /> {viewers.toLocaleString()}</span>
              </div>
              <div className="mono mt-3 space-y-1.5 text-xs">
                {chat.map((m, i) => (
                  <p key={i}>
                    <span className={`${m.color} font-semibold`}>{m.u}</span>
                    <span className="text-purple-100/80">: {m.c}</span>
                  </p>
                ))}
              </div>
              <div className="mt-3 flex gap-2 rounded-md border border-purple-400/20 bg-black/40 p-2">
                <input placeholder="Send a message…" className="mono flex-1 bg-transparent text-xs text-purple-100 placeholder-purple-400/60 outline-none" />
                <button className="rounded bg-purple-500/60 px-3 py-1 text-[10px] uppercase tracking-[0.2em]">Chat</button>
              </div>
            </div>
          </div>
        </div>

        {/* FPS Bars */}
        <div className="mono mt-20 flex items-end gap-[3px] rounded-xl glass p-4">
          {bars.map((b, i) => (
            <span
              key={i}
              className="flex-1 rounded-t bg-gradient-to-t from-fuchsia-500 via-purple-400 to-cyan-300"
              style={{ height: `${20 + Math.abs(Math.sin((i + tick) * 0.35)) * 70 * (0.5 + b)}%` }}
            />
          ))}
          <span className="ml-4 text-[10px] uppercase tracking-[0.3em] text-purple-200">Live audio</span>
        </div>
      </section>

      {/* SCHEDULE */}
      <section id="schedule" className="relative mx-auto max-w-7xl px-6 pb-24 sm:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mono text-xs uppercase tracking-[0.5em] text-purple-300">Stream schedule</p>
            <h2 className="display mt-3 text-5xl neon sm:text-6xl">THIS WEEK</h2>
          </div>
          <p className="mono max-w-md text-xs uppercase tracking-[0.3em] text-purple-100/60">Subs get 24hr advance notice of surprise streams.</p>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-7">
          {schedule.map((s) => (
            <div key={s.d} className="glass rounded-xl p-5 transition hover:-translate-y-0.5 hover:border-purple-300/60">
              <p className="display text-3xl text-cyan-300">{s.d}</p>
              <p className="mono mt-3 text-[10px] uppercase tracking-[0.3em] text-purple-200">{s.time}</p>
              <p className="mt-3 text-sm text-white">{s.what}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CLIPS */}
      <section id="clips" className="relative mx-auto max-w-7xl px-6 pb-24 sm:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mono text-xs uppercase tracking-[0.5em] text-purple-300">Recent highlights</p>
            <h2 className="display mt-3 text-5xl neon sm:text-6xl">TOP CLIPS</h2>
          </div>
          <a href="#" className="mono rounded-md border border-purple-400/30 px-5 py-2 text-[10px] uppercase tracking-[0.3em] text-purple-100 transition hover:border-purple-200">See all →</a>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { t: "INSANE 1v5 WITH A PISTOL", img: "/images/demos/streamer/webcam.jpg", v: "1.4M" },
            { t: "tilted all the way into radiant", img: "/images/demos/streamer/battlestation.jpg", v: "842K" },
            { t: "THE RAID FROM @NIGHTFALL", img: "/images/demos/streamer/hero.jpg", v: "612K" },
            { t: "setup tour — finally done", img: "/images/demos/streamer/battlestation.jpg", v: "384K" },
            { t: "caught a hacker on stream??", img: "/images/demos/streamer/webcam.jpg", v: "2.1M" },
            { t: "sub train to the moon 🚀", img: "/images/demos/streamer/hero.jpg", v: "501K" },
          ].map((c) => (
            <div key={c.t} className="group relative overflow-hidden rounded-xl border border-purple-400/20 bg-black/40">
              <div className="relative aspect-video">
                <Image src={c.img} alt={c.t} fill className="object-cover transition duration-500 group-hover:scale-[1.04]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4">
                <p className="display text-lg tracking-wide text-white">{c.t}</p>
                <span className="mono rounded bg-black/60 px-2 py-0.5 text-[10px] text-purple-200">{c.v}</span>
              </div>
              <button className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-white/40 bg-black/60 text-white backdrop-blur">▶</button>
            </div>
          ))}
        </div>
      </section>

      {/* SETUP */}
      <section id="setup" className="relative border-y border-purple-400/10 bg-[#09071a]/60 py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="relative overflow-hidden rounded-2xl border border-purple-400/30">
              <Image src="/images/demos/streamer/battlestation.jpg" alt="Battlestation" width={1200} height={900} className="aspect-[4/3] w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent" />
            </div>
            <div>
              <p className="mono text-xs uppercase tracking-[0.5em] text-purple-300">The battlestation</p>
              <h2 className="display mt-3 text-5xl neon sm:text-6xl">THE SETUP</h2>
              <p className="mt-4 max-w-lg text-purple-100/70">Built for 240Hz + 0ms vibes. Every link is a real affiliate — supports the stream at no extra cost to you.</p>
              <div className="mono mt-8 divide-y divide-purple-400/10 border-y border-purple-400/10 text-sm">
                {[
                  { k: "CPU", v: "Ryzen 9 7950X3D" },
                  { k: "GPU", v: "RTX 4090 Founders" },
                  { k: "Display", v: "Alienware 34″ QD‑OLED · 240Hz" },
                  { k: "Keyboard", v: "Wooting 60HE" },
                  { k: "Mouse", v: "Logitech G Pro X Superlight 2" },
                  { k: "Mic", v: "Shure SM7B → GoXLR Mini" },
                  { k: "Cam", v: "Sony ZV‑E10 + Elgato Cam Link" },
                ].map((r) => (
                  <div key={r.k} className="flex items-center justify-between py-3">
                    <span className="text-purple-200/70">{r.k}</span>
                    <span className="text-white">{r.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MEMBER / tiers */}
      <section id="member" className="relative mx-auto max-w-7xl px-6 py-24 sm:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mono text-xs uppercase tracking-[0.5em] text-purple-300">Join the raid</p>
            <h2 className="display mt-3 text-5xl neon sm:text-6xl">MEMBERSHIPS</h2>
          </div>
          <p className="mono max-w-md text-xs uppercase tracking-[0.3em] text-purple-100/60">Subs get emotes, priority chat, and exclusive Discord channels.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { name: "Tier 1", price: "$4.99", perks: ["Ad-free stream", "Tier 1 emotes", "Sub badge"], gradient: "from-purple-500/40 to-fuchsia-500/20" },
            { name: "Tier 2", price: "$9.99", perks: ["Everything in T1", "Tier 2 emotes", "Members-only VOD archive", "Monthly game night"], gradient: "from-fuchsia-500/50 to-cyan-400/20", featured: true },
            { name: "Tier 3", price: "$24.99", perks: ["Everything in T2", "Tier 3 animated emotes", "Private Discord channel", "Signed poster drop"], gradient: "from-cyan-400/40 to-purple-500/20" },
          ].map((p) => (
            <div key={p.name} className={`glass relative overflow-hidden rounded-2xl p-6 ${p.featured ? "ring-2 ring-purple-400/70 shadow-[0_0_50px_rgba(192,132,252,0.35)]" : ""}`}>
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-60`} />
              <div className="relative">
                <p className="mono text-[10px] uppercase tracking-[0.4em] text-purple-200">{p.name}</p>
                <p className="display mt-3 text-5xl text-white">{p.price}<span className="ml-1 text-sm text-purple-200/60">/mo</span></p>
                <ul className="mono mt-6 space-y-2 text-sm text-purple-100/90">
                  {p.perks.map((k) => <li key={k} className="flex items-center gap-2"><span className="text-cyan-300">◇</span>{k}</li>)}
                </ul>
                <button className="mt-8 w-full rounded-md bg-gradient-to-r from-purple-500 to-fuchsia-500 py-3 text-xs uppercase tracking-[0.3em] text-white transition hover:brightness-125">
                  Join {p.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-purple-400/10 py-10 text-center">
        <p className="mono text-[10px] uppercase tracking-[0.4em] text-purple-200/60">© 2026 VYPR STREAMS · Not affiliated with any game studio.</p>
        <p className="mono mt-3 text-[10px] uppercase tracking-[0.4em] text-purple-300/50">
          <Link href="/" className="hover:text-purple-200">↶ back to aquariusmaximus.dev</Link>
        </p>
      </footer>
    </div>
  );
}
