"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Project } from "@/data/projects";

type Tab = "web" | "mobile" | "demos";

type DemoCard = {
  slug: string | null;
  name: string;
  tag: string;
  blurb: string;
  image: string | null;
  swatch: string;
};

type WorkTabsProps = {
  projects: Project[];
  mobileProjects: Project[];
  demos: DemoCard[];
};

const statusLabel: Record<"live" | "wip" | "archived", string> = {
  live: "Live",
  wip: "In Progress",
  archived: "Archived",
};

export function WorkTabs({ projects, mobileProjects, demos }: WorkTabsProps) {
  const [tab, setTab] = useState<Tab>("web");
  const railRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    const check = () => {
      setCanScrollLeft(rail.scrollLeft > 8);
      setCanScrollRight(rail.scrollLeft + rail.clientWidth < rail.scrollWidth - 8);
    };
    check();
    rail.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      rail.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [tab]);

  // reset scroll position on tab change
  useEffect(() => {
    if (railRef.current) railRef.current.scrollTo({ left: 0, behavior: "smooth" });
  }, [tab]);

  const scrollBy = (dir: 1 | -1) => {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 24 : rail.clientWidth * 0.85;
    rail.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const counts = {
    web: projects.length,
    mobile: mobileProjects.length,
    demos: demos.length,
  };

  return (
    <div className="relative">
      {/* Tabs */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div role="tablist" aria-label="Work categories" className="inline-flex rounded-full border border-pink-500/20 bg-zinc-950/60 p-1 backdrop-blur">
          {([
            { k: "web", label: "Web", count: counts.web },
            { k: "mobile", label: "Mobile", count: counts.mobile },
            { k: "demos", label: "Demos", count: counts.demos },
          ] as const).map((t) => (
            <button
              key={t.k}
              role="tab"
              aria-selected={tab === t.k}
              onClick={() => setTab(t.k)}
              className={`relative flex items-center gap-2 rounded-full px-5 py-2 text-xs font-medium uppercase tracking-[0.2em] transition ${
                tab === t.k
                  ? "bg-gradient-to-r from-pink-500 via-fuchsia-500 to-rose-400 text-white shadow-[0_0_28px_rgba(244,114,182,0.55)]"
                  : "text-zinc-400 hover:text-pink-200"
              }`}
            >
              <span>{t.label}</span>
              <span className={`rounded-full px-1.5 py-0.5 text-[10px] tracking-normal ${tab === t.k ? "bg-white/25" : "bg-zinc-800/80"}`}>
                {t.count}
              </span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            aria-label="Scroll left"
            onClick={() => scrollBy(-1)}
            disabled={!canScrollLeft}
            className="grid h-10 w-10 place-items-center rounded-full border border-pink-500/30 bg-zinc-950/60 text-zinc-300 transition hover:border-pink-400 hover:text-pink-200 disabled:cursor-not-allowed disabled:opacity-30"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 6l-6 6 6 6" /></svg>
          </button>
          <button
            aria-label="Scroll right"
            onClick={() => scrollBy(1)}
            disabled={!canScrollRight}
            className="grid h-10 w-10 place-items-center rounded-full border border-pink-500/30 bg-zinc-950/60 text-zinc-300 transition hover:border-pink-400 hover:text-pink-200 disabled:cursor-not-allowed disabled:opacity-30"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6" /></svg>
          </button>
        </div>
      </div>

      {/* Rail */}
      <div
        ref={railRef}
        key={tab}
        className="scrollbar-hidden -mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-6 pt-1 scroll-px-4 sm:-mx-6 sm:px-6 sm:scroll-px-6 lg:-mx-8 lg:px-8 lg:scroll-px-8"
        style={{ scrollbarWidth: "none" }}
      >
        <style jsx>{`
          .scrollbar-hidden::-webkit-scrollbar { display: none; }
        `}</style>

        {tab === "web" &&
          projects.map((p) => <WebCard key={p.id} project={p} />)}

        {tab === "mobile" &&
          mobileProjects.map((p) => <MobileCard key={p.id} project={p} />)}

        {tab === "demos" &&
          demos.map((d) => <DemoCardTile key={d.name} demo={d} />)}

        {/* trailing spacer so last card can snap flush */}
        <div className="flex-none w-1 snap-end" aria-hidden />
      </div>
    </div>
  );
}

function WebCard({ project }: { project: Project }) {
  const status = project.status ?? "live";
  return (
    <a
      data-card
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex w-[85vw] max-w-[380px] flex-none snap-start flex-col overflow-hidden rounded-2xl border border-zinc-800/70 bg-zinc-950/60 transition hover:-translate-y-0.5 hover:border-pink-400/70 hover:shadow-[0_20px_60px_-20px_rgba(244,114,182,0.5)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-zinc-900 to-black">
        {project.screenshot ? (
          <img
            src={project.screenshot}
            alt={project.name}
            className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-pink-500/30 to-fuchsia-600/30">
            <span className="font-[family-name:var(--font-fraunces)] text-5xl italic text-white/80">
              {project.name.charAt(0)}
            </span>
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent" />
        <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-pink-500/40 bg-black/60 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.2em] text-pink-100 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-pink-400 shadow-[0_0_10px_rgba(244,114,182,0.9)]" />
          {statusLabel[status]}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-[family-name:var(--font-fraunces)] text-xl font-medium text-zinc-50">{project.name}</p>
            <p className="mt-0.5 text-[11px] uppercase tracking-[0.2em] text-pink-300/80">{project.role}</p>
          </div>
        </div>
        <p className="text-sm text-zinc-400 line-clamp-3">{project.tagline}</p>
        {project.stackSummary && (
          <p className="mt-auto border-t border-zinc-900 pt-3 text-[11px] text-zinc-500 line-clamp-2">
            <span className="font-medium text-zinc-400">Stack · </span>
            {project.stackSummary}
          </p>
        )}
        <div className="flex items-center justify-between text-xs">
          <span className="text-zinc-500">{new URL(project.url).hostname.replace(/^www\./, "")}</span>
          <span className="rounded-full bg-pink-500/15 px-3 py-1 font-medium text-pink-200 transition group-hover:bg-pink-500 group-hover:text-white">
            Visit →
          </span>
        </div>
      </div>
    </a>
  );
}

function MobileCard({ project }: { project: Project }) {
  const screens = project.screenshots ?? (project.screenshot ? [project.screenshot] : []);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (screens.length < 2) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % screens.length), 2800);
    return () => clearInterval(t);
  }, [screens.length]);

  const status = project.status ?? "live";
  return (
    <article
      data-card
      className="group relative flex w-[85vw] max-w-[340px] flex-none snap-start flex-col overflow-hidden rounded-2xl border border-zinc-800/70 bg-gradient-to-b from-zinc-950/80 to-zinc-950/40 p-5 transition hover:-translate-y-0.5 hover:border-pink-400/70 hover:shadow-[0_20px_60px_-20px_rgba(244,114,182,0.5)]"
    >
      <div className="flex items-center gap-3">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-pink-500/40 bg-black/60 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.2em] text-pink-100">
          <span className="h-1.5 w-1.5 rounded-full bg-pink-400" />
          {statusLabel[status]}
        </span>
        <span className="rounded-full border border-zinc-700/70 bg-zinc-900/70 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-400">
          Mobile
        </span>
      </div>

      <div className="relative mx-auto mt-5 w-[200px]">
        <div className="relative aspect-[9/19.5] overflow-hidden rounded-[32px] border-[6px] border-zinc-950 bg-zinc-950 shadow-[0_20px_60px_-10px_rgba(244,114,182,0.35)]">
          <div className="pointer-events-none absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />
          {screens.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`${project.name} screen ${i + 1}`}
              className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
              style={{ opacity: i === idx ? 1 : 0 }}
            />
          ))}
        </div>
        {screens.length > 1 && (
          <div className="mt-3 flex justify-center gap-1.5">
            {screens.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Show screen ${i + 1}`}
                className={`h-1 rounded-full transition-all ${i === idx ? "w-5 bg-pink-400" : "w-1.5 bg-zinc-700"}`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="mt-5">
        <p className="font-[family-name:var(--font-fraunces)] text-xl font-medium text-zinc-50">{project.name}</p>
        <p className="mt-0.5 text-[11px] uppercase tracking-[0.2em] text-pink-300/80">{project.role}</p>
        <p className="mt-3 text-sm text-zinc-400 line-clamp-3">{project.tagline}</p>
      </div>
    </article>
  );
}

function DemoCardTile({ demo }: { demo: DemoCard }) {
  const body = (
    <>
      <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${demo.swatch}`}>
        {demo.image ? (
          <img
            src={demo.image}
            alt={demo.name}
            className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-[1.04] group-hover:opacity-100"
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center">
            <span className="font-[family-name:var(--font-fraunces)] text-6xl italic text-white/80">✦</span>
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent" />
        <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/55 px-2.5 py-0.5 text-[10px] uppercase tracking-[0.2em] text-white backdrop-blur">
          {demo.tag}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <p className="font-[family-name:var(--font-fraunces)] text-xl font-medium text-zinc-50">{demo.name}</p>
          <p className="mt-3 text-sm text-zinc-400 line-clamp-3">{demo.blurb}</p>
        </div>
        <div className="mt-auto flex items-center justify-between text-xs">
          <span className="text-zinc-500">
            {demo.slug ? `/demos/${demo.slug}` : "DM for a custom brief"}
          </span>
          <span className="rounded-full bg-pink-500/15 px-3 py-1 font-medium text-pink-200 transition group-hover:bg-pink-500 group-hover:text-white">
            {demo.slug ? "View demo →" : "Get in touch →"}
          </span>
        </div>
      </div>
    </>
  );

  const classes =
    "group relative flex w-[85vw] max-w-[380px] flex-none snap-start flex-col overflow-hidden rounded-2xl border border-zinc-800/70 bg-zinc-950/60 transition hover:-translate-y-0.5 hover:border-pink-400/70 hover:shadow-[0_20px_60px_-20px_rgba(244,114,182,0.5)]";

  return demo.slug ? (
    <Link data-card href={`/demos/${demo.slug}`} className={classes}>
      {body}
    </Link>
  ) : (
    <Link data-card href="/contact" className={classes}>
      {body}
    </Link>
  );
}
