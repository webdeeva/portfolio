"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function LeatherDemo() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount] = useState(0);

  const [bagIndex, setBagIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setBagIndex((i) => (i + 1) % 3), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0c0805] text-[#f3ece0] font-[var(--font-geist-sans)]">
      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(22px)} to{opacity:1;transform:translateY(0)} }
        @keyframes slowZoom { 0%,100%{transform:scale(1)} 50%{transform:scale(1.06)} }
        @keyframes grain {
          0%,100% { background-position: 0 0 }
          20% { background-position: -5% -10% }
          40% { background-position: 8% 5% }
          60% { background-position: -8% 8% }
          80% { background-position: 5% -5% }
        }
        .serif { font-family: 'Cormorant Garamond', 'Didot', 'Playfair Display', serif; letter-spacing: -0.02em; font-weight: 300; }
        .display { font-family: 'Marcellus', 'Cormorant Garamond', serif; letter-spacing: 0.1em; text-transform: uppercase; }
        .mono { font-family: var(--font-geist-mono), ui-monospace, monospace; }
        .card-rise { animation: fadeUp 1s ease-out both; }
        .divider-line { background: linear-gradient(90deg, transparent, rgba(217,186,141,.4), transparent); }
        .gold { color: #d9ba8d; }
        .gold-border { border-color: rgba(217,186,141,.3); }
        .film-grain::after {
          content: ""; position: absolute; inset: 0; pointer-events: none; opacity: .08; mix-blend-mode: overlay;
          background-image: radial-gradient(rgba(255,255,255,.7) 1px, transparent 1px);
          background-size: 2px 2px;
          animation: grain 8s steps(8) infinite;
        }
      `}</style>

      {/* NAV */}
      <header className="relative z-50 border-b gold-border">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 sm:px-10">
          <div className="flex items-center gap-6">
            <button aria-label="menu" onClick={() => setMenuOpen((v) => !v)} className="hidden rounded-sm border gold-border px-3 py-2 text-[10px] uppercase tracking-[0.35em] text-[#d9ba8d] md:inline-block">
              Menu
            </button>
            <button aria-label="search" className="hidden text-[10px] uppercase tracking-[0.35em] text-[#d9ba8d]/70 md:inline-block">Search</button>
          </div>

          <Link href="/demos/leather" className="display text-2xl tracking-[0.4em] text-[#d9ba8d] sm:text-3xl">
            Maison Oro
          </Link>

          <div className="flex items-center gap-4">
            <a href="#" className="hidden text-[10px] uppercase tracking-[0.35em] text-[#d9ba8d]/70 md:inline-block">Account</a>
            <a href="#cart" className="flex items-center gap-2 text-[10px] uppercase tracking-[0.35em] text-[#d9ba8d]/70">
              Bag
              <span className="grid h-5 w-5 place-items-center rounded-full border gold-border text-[#d9ba8d]">{cartCount}</span>
            </a>

            <button aria-label="menu" onClick={() => setMenuOpen((v) => !v)} className="md:hidden">
              <div className="relative h-4 w-6">
                <span className={`absolute left-0 h-[1px] w-full bg-[#d9ba8d] transition ${menuOpen ? "top-1/2 rotate-45" : "top-0"}`} />
                <span className={`absolute left-0 top-1/2 h-[1px] w-full bg-[#d9ba8d] transition ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`absolute left-0 h-[1px] w-full bg-[#d9ba8d] transition ${menuOpen ? "top-1/2 -rotate-45" : "bottom-0"}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Category line */}
        <nav className="display hidden justify-center gap-12 border-t gold-border py-3 text-[10px] text-[#d9ba8d]/80 md:flex">
          <a href="#collection" className="transition hover:text-[#f3ece0]">Collection</a>
          <a href="#outerwear" className="transition hover:text-[#f3ece0]">Outerwear</a>
          <a href="#bags" className="transition hover:text-[#f3ece0]">Bags</a>
          <a href="#atelier" className="transition hover:text-[#f3ece0]">Atelier</a>
          <a href="#journal" className="transition hover:text-[#f3ece0]">Journal</a>
          <a href="#stores" className="transition hover:text-[#f3ece0]">Stores</a>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 bg-[#0c0805]/97 md:hidden ${menuOpen ? "opacity-100" : "pointer-events-none opacity-0"} transition`}>
        {["Collection", "Outerwear", "Bags", "Atelier", "Journal", "Stores"].map((i) => (
          <a key={i} href={`#${i.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="serif text-5xl italic text-[#f3ece0]">
            {i}
          </a>
        ))}
      </div>

      {/* HERO */}
      <section className="relative">
        <div className="film-grain relative h-[88vh] min-h-[720px] overflow-hidden">
          <Image src="/images/demos/leather/hero.jpg" alt="Maison Oro F/W26" fill className="object-cover" priority style={{ animation: "slowZoom 16s ease-in-out infinite" }} />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/10 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0805] via-transparent to-transparent" />

          <div className="relative mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-20 sm:px-10">
            <p className="mono text-xs uppercase tracking-[0.4em] text-[#d9ba8d] card-rise">FALL · WINTER · 2026</p>
            <h1 className="serif mt-6 text-[clamp(3.5rem,10vw,8rem)] font-light leading-[0.9] text-[#f3ece0] card-rise" style={{ animationDelay: ".1s" }}>
              An ode to
              <br />
              <span className="italic gold">quiet leather</span>.
            </h1>
            <p className="serif mt-6 max-w-lg text-xl italic text-[#f3ece0]/80 card-rise" style={{ animationDelay: ".2s" }}>
              The F/W26 collection. Hand‑cut in Florence, dyed by sun, worn into a lifetime.
            </p>

            <div className="mono mt-10 flex flex-wrap items-center gap-4 card-rise" style={{ animationDelay: ".3s" }}>
              <a href="#collection" className="group inline-flex items-center gap-3 rounded-sm border border-[#d9ba8d] bg-[#d9ba8d] px-10 py-4 text-[10px] uppercase tracking-[0.4em] text-[#0c0805] transition hover:bg-[#f3ece0]">
                Shop the Collection
                <span className="transition group-hover:translate-x-1">→</span>
              </a>
              <a href="#atelier" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] gold-border border-b pb-1 gold transition hover:text-[#f3ece0]">
                Visit the Atelier
              </a>
            </div>
          </div>

          {/* Numbered ticker */}
          <div className="absolute bottom-6 right-8 hidden items-end gap-4 text-right md:flex">
            <div className="h-px w-40 divider-line" />
            <div>
              <p className="mono text-[10px] uppercase tracking-[0.4em] text-[#d9ba8d]/70">Look</p>
              <p className="serif text-3xl italic text-[#f3ece0]">01 / 32</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED / split */}
      <section id="collection" className="relative mx-auto max-w-[1400px] px-6 py-24 sm:px-10">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="mono text-[10px] uppercase tracking-[0.4em] gold">Featured</p>
            <h2 className="serif mt-6 text-6xl font-light leading-[0.95] sm:text-7xl">
              The <span className="italic gold">Oro Trench</span>.
            </h2>
            <p className="mt-6 max-w-md text-[#f3ece0]/70 leading-relaxed">
              Hand cut from a single hide of vegetable‑tanned Tuscan calfskin. A silhouette that softens only with time. Numbered, one of sixty.
            </p>

            <dl className="mt-10 space-y-4 border-t gold-border pt-6 text-sm">
              {[
                ["Hide", "Italian vegetable-tanned calfskin"],
                ["Lining", "Raw Belgian linen"],
                ["Production", "Florence · 3 makers · ~32 hours"],
                ["Edition", "60 numbered pieces"],
              ].map(([k, v]) => (
                <div key={k} className="grid grid-cols-[140px_1fr] items-start gap-4 border-b gold-border pb-4">
                  <dt className="mono text-[10px] uppercase tracking-[0.3em] gold">{k}</dt>
                  <dd className="text-[#f3ece0]/85">{v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <p className="serif text-3xl">€ 2,480</p>
              <a href="#" className="inline-flex items-center gap-3 rounded-sm border border-[#d9ba8d] px-8 py-3 text-[10px] uppercase tracking-[0.35em] gold transition hover:bg-[#d9ba8d] hover:text-[#0c0805]">
                Add to bag
              </a>
            </div>
          </div>

          <div className="relative lg:col-span-7">
            <div className="film-grain relative aspect-[4/5] overflow-hidden border gold-border">
              <Image src="/images/demos/leather/pair.jpg" alt="Oro trench" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0805]/60 via-transparent to-transparent" />
              <p className="mono absolute bottom-6 left-6 text-[10px] uppercase tracking-[0.4em] text-[#d9ba8d]">F/W26 · Look 04</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section id="outerwear" className="relative border-y gold-border bg-[#0f0a06] py-24">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mono text-[10px] uppercase tracking-[0.4em] gold">Outerwear</p>
              <h2 className="serif mt-3 text-5xl italic sm:text-6xl">The Collection.</h2>
            </div>
            <div className="mono flex gap-3 text-[10px] uppercase tracking-[0.35em] text-[#d9ba8d]/70">
              <button className="rounded-sm border gold-border px-4 py-2 text-[#f3ece0]">All</button>
              <button className="rounded-sm px-4 py-2 hover:text-[#f3ece0]">Jackets</button>
              <button className="rounded-sm px-4 py-2 hover:text-[#f3ece0]">Trenches</button>
              <button className="rounded-sm px-4 py-2 hover:text-[#f3ece0]">Accessories</button>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { n: "Oxblood Trench", p: "€ 2,480", src: "/images/demos/leather/hero.jpg" },
              { n: "Matte Biker", p: "€ 1,860", src: "/images/demos/leather/product.jpg" },
              { n: "Cognac Overcoat", p: "€ 2,120", src: "/images/demos/leather/pair.jpg" },
              { n: "Nero Blazer", p: "€ 1,540", src: "/images/demos/leather/product.jpg" },
              { n: "Atelier Gloves", p: "€ 320", src: "/images/demos/leather/hero.jpg" },
              { n: "Monogram Belt", p: "€ 280", src: "/images/demos/leather/pair.jpg" },
            ].map((p) => (
              <article key={p.n} className="group">
                <div className="relative aspect-[3/4] overflow-hidden border gold-border">
                  <Image src={p.src} alt={p.n} fill className="object-cover transition duration-700 group-hover:scale-[1.04]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0805]/50 via-transparent" />
                  <button className="mono absolute bottom-4 left-4 rounded-sm border gold-border bg-[#0c0805]/60 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-[#f3ece0] opacity-0 backdrop-blur transition group-hover:opacity-100">
                    Quick view
                  </button>
                </div>
                <div className="mt-5 flex items-start justify-between">
                  <div>
                    <p className="serif text-xl italic">{p.n}</p>
                    <p className="mono mt-1 text-[10px] uppercase tracking-[0.3em] text-[#d9ba8d]/70">Outerwear · F/W26</p>
                  </div>
                  <p className="serif text-lg">{p.p}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ATELIER / story */}
      <section id="atelier" className="relative mx-auto max-w-[1400px] px-6 py-28 sm:px-10">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="relative order-2 overflow-hidden border gold-border lg:order-1">
            <div className="relative aspect-[4/5]">
              <Image src="/images/demos/leather/product.jpg" alt="Atelier" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0805]/70 via-transparent" />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <p className="mono text-[10px] uppercase tracking-[0.4em] gold">The Atelier</p>
            <h2 className="serif mt-4 text-5xl italic leading-[0.95] sm:text-7xl">
              Three makers.
              <br />
              One piece at a time.
            </h2>
            <p className="mt-6 max-w-lg leading-relaxed text-[#f3ece0]/75">
              Every garment from Maison Oro passes through the hands of Luca, Chiara, and Silvano — third‑generation leather artisans in our Florence workshop. No automation, no outsourcing. The result is a quiet kind of luxury you can feel in the seams.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t gold-border pt-8">
              {[
                { n: "32 hrs", l: "To hand‑make a trench" },
                { n: "60", l: "Pieces per season" },
                { n: "∞", l: "Lifetime repair pledge" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="serif text-4xl italic gold">{s.n}</p>
                  <p className="mono mt-2 text-[10px] uppercase tracking-[0.3em] text-[#d9ba8d]/70">{s.l}</p>
                </div>
              ))}
            </div>

            <a href="#" className="mono mt-10 inline-flex items-center gap-2 border-b gold-border pb-1 text-[10px] uppercase tracking-[0.4em] gold transition hover:text-[#f3ece0]">
              Book a private atelier visit →
            </a>
          </div>
        </div>
      </section>

      {/* BAGS / rotating showcase */}
      <section id="bags" className="relative overflow-hidden bg-[#120d08] py-24">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <p className="mono text-[10px] uppercase tracking-[0.4em] gold">Edition One</p>
              <h2 className="serif mt-4 text-5xl italic leading-[0.95] sm:text-6xl">
                The <span className="gold">Bag</span>, reissued.
              </h2>
              <p className="mt-6 max-w-md text-[#f3ece0]/70 leading-relaxed">
                After a season-long waitlist, The Oro Bag returns in three patinas. Hand‑stitched with natural thread. Will develop a unique patina on your terms.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <p className="serif text-3xl">€ 1,240</p>
                <a href="#" className="mono rounded-sm border border-[#d9ba8d] px-6 py-3 text-[10px] uppercase tracking-[0.35em] gold transition hover:bg-[#d9ba8d] hover:text-[#0c0805]">
                  Reserve
                </a>
              </div>

              <div className="mt-10 flex gap-3">
                {["Nero", "Cognac", "Oxblood"].map((c, i) => (
                  <button key={c} onClick={() => setBagIndex(i)} className={`group flex flex-col items-start gap-2`}>
                    <span className={`block h-12 w-12 rounded-sm border transition ${bagIndex === i ? "border-[#f3ece0] scale-110" : "border-transparent"}`}
                      style={{ background: i === 0 ? "#1d1410" : i === 1 ? "#8b5a3c" : "#5e1220" }} />
                    <span className="mono text-[10px] uppercase tracking-[0.3em] text-[#d9ba8d]/80">{c}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="relative lg:col-span-7">
              <div className="film-grain relative aspect-[4/3] overflow-hidden border gold-border">
                <Image src="/images/demos/leather/product.jpg" alt="The Bag" fill className="object-cover transition-all duration-700" style={{ filter: bagIndex === 0 ? "brightness(.75)" : bagIndex === 1 ? "sepia(.4) saturate(1.4) brightness(.95)" : "hue-rotate(-10deg) saturate(1.6) brightness(.75)" }} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0805]/60 via-transparent" />
                <p className="mono absolute bottom-6 left-6 text-[10px] uppercase tracking-[0.4em] text-[#d9ba8d]">Look 0{bagIndex + 1} · {["Nero", "Cognac", "Oxblood"][bagIndex]}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNAL */}
      <section id="journal" className="relative mx-auto max-w-[1400px] px-6 py-24 sm:px-10">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mono text-[10px] uppercase tracking-[0.4em] gold">Journal</p>
            <h2 className="serif mt-3 text-5xl italic sm:text-6xl">Field notes.</h2>
          </div>
          <a href="#" className="mono border-b gold-border pb-1 text-[10px] uppercase tracking-[0.4em] gold">All entries →</a>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { t: "How we dye by sun, not chemistry", c: "Atelier", img: "/images/demos/leather/product.jpg" },
            { t: "A day with Silvano", c: "Makers", img: "/images/demos/leather/pair.jpg" },
            { t: "The philosophy of patina", c: "Essay", img: "/images/demos/leather/hero.jpg" },
          ].map((a) => (
            <article key={a.t} className="group">
              <div className="relative aspect-[4/5] overflow-hidden border gold-border">
                <Image src={a.img} alt={a.t} fill className="object-cover transition duration-700 group-hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0805]/60 via-transparent" />
              </div>
              <p className="mono mt-5 text-[10px] uppercase tracking-[0.3em] gold">{a.c}</p>
              <p className="serif mt-2 text-2xl italic">{a.t}</p>
            </article>
          ))}
        </div>
      </section>

      {/* NEWSLETTER / stores */}
      <section id="stores" className="relative border-t gold-border bg-[#09060b] py-24">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="mono text-[10px] uppercase tracking-[0.4em] gold">Invitation</p>
              <h2 className="serif mt-3 text-5xl italic leading-[0.95] sm:text-6xl">Be the first to know.</h2>
              <p className="mt-5 max-w-md text-[#f3ece0]/70">Private drops, atelier invitations, and quiet goods — sent when there is something worth saying.</p>
              <form className="mt-8 flex max-w-md items-center gap-3 border-b gold-border pb-3" onSubmit={(e) => e.preventDefault()}>
                <input placeholder="your@email.com" className="mono flex-1 bg-transparent text-sm text-[#f3ece0] placeholder-[#d9ba8d]/40 outline-none" />
                <button className="mono text-[10px] uppercase tracking-[0.4em] gold">Subscribe →</button>
              </form>
            </div>
            <div>
              <p className="mono text-[10px] uppercase tracking-[0.4em] gold">Flagships</p>
              <h2 className="serif mt-3 text-5xl italic leading-[0.95] sm:text-6xl">Come visit.</h2>
              <div className="mt-8 grid grid-cols-2 gap-6 text-sm text-[#f3ece0]/85">
                {[
                  { c: "Firenze", a: "Via dei Serragli 44" },
                  { c: "Paris", a: "12 rue de Sévigné" },
                  { c: "New York", a: "83 Bond St" },
                  { c: "Tokyo", a: "5-11-16 Minami-Aoyama" },
                ].map((s) => (
                  <div key={s.c}>
                    <p className="serif text-xl italic">{s.c}</p>
                    <p className="mono mt-1 text-[10px] uppercase tracking-[0.3em] text-[#d9ba8d]/70">{s.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t gold-border py-12 text-center">
        <p className="serif text-3xl italic gold">Maison Oro</p>
        <p className="mono mt-3 text-[10px] uppercase tracking-[0.4em] text-[#d9ba8d]/70">© 2026 · Florence · New York · Paris · Tokyo</p>
        <p className="mono mt-4 text-[10px] uppercase tracking-[0.4em] text-[#d9ba8d]/50">
          <Link href="/" className="hover:text-[#f3ece0]">↶ back to aquariusmaximus.dev</Link>
        </p>
      </footer>
    </div>
  );
}
