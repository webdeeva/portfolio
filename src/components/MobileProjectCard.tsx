"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Project } from "@/data/projects";

type MobileProjectCardProps = {
  project: Project;
  /**
   * When true, reverse the image/content layout so the phone appears on the right.
   * Useful for zig-zag feature rows.
   */
  reverse?: boolean;
};

const statusLabel: Record<NonNullable<Project["status"]>, string> = {
  live: "Live",
  wip: "In Progress",
  archived: "Archived",
};

export function MobileProjectCard({ project, reverse = false }: MobileProjectCardProps) {
  const {
    name,
    role,
    tagline,
    highlights,
    stackSummary,
    aiSummary,
    status = "live",
    screenshots = [],
    screenshot,
  } = project;

  const allScreens = screenshots.length > 0 ? screenshots : screenshot ? [screenshot] : [];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (allScreens.length <= 1) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % allScreens.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [allScreens.length]);

  return (
    <article
      className={`group relative overflow-hidden rounded-3xl border border-zinc-800/70 bg-zinc-900/40 p-5 sm:p-6 transition hover:border-pink-400/70 hover:bg-zinc-900`}
    >
      <div
        className={`flex flex-col gap-6 lg:gap-10 ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } lg:items-center`}
      >
        {/* Phone frame with carousel */}
        <div className="relative mx-auto w-full max-w-[260px] flex-none lg:mx-0">
          <div className="relative aspect-[9/19] w-full rounded-[2.2rem] border border-zinc-700/70 bg-zinc-950 p-[6px] shadow-[0_0_50px_rgba(244,114,182,0.25)] transition-all duration-500 group-hover:shadow-[0_0_60px_rgba(244,114,182,0.45)]">
            {/* Outer bezel highlight */}
            <div className="absolute inset-0 rounded-[2.2rem] bg-gradient-to-b from-pink-500/20 via-transparent to-fuchsia-500/20 opacity-60 pointer-events-none" />

            {/* Inner screen */}
            <div className="relative h-full w-full overflow-hidden rounded-[1.9rem] bg-black">
              {/* Notch */}
              <div className="absolute left-1/2 top-1.5 z-10 h-4 w-20 -translate-x-1/2 rounded-full bg-black shadow-inner" />

              {allScreens.map((src, index) => (
                <div
                  key={src}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === activeIndex
                      ? "translate-x-0 opacity-100"
                      : index < activeIndex
                      ? "-translate-x-full opacity-0"
                      : "translate-x-full opacity-0"
                  }`}
                >
                  <Image
                    src={src}
                    alt={`${name} screen ${index + 1}`}
                    fill
                    className="object-cover object-top"
                    priority={index === 0}
                    sizes="(max-width: 1024px) 260px, 300px"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Carousel dots */}
          {allScreens.length > 1 && (
            <div className="mt-4 flex items-center justify-center gap-1.5">
              {allScreens.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Show screen ${index + 1}`}
                  onClick={() => setActiveIndex(index)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    index === activeIndex
                      ? "w-6 bg-pink-400"
                      : "w-1.5 bg-zinc-600 hover:bg-zinc-500"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-pink-500/40 bg-zinc-900/80 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-200">
              <span className="h-1.5 w-1.5 rounded-full bg-pink-400 shadow-[0_0_12px_rgba(244,114,182,0.9)]" />
              <span>{statusLabel[status]}</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-500/30 bg-zinc-900/60 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-fuchsia-200">
              <span>Mobile</span>
            </div>
            <span className="text-xs text-zinc-500">{role}</span>
          </div>

          <h3 className="mt-3 text-xl sm:text-2xl font-semibold text-zinc-50">
            {name}
          </h3>
          <p className="mt-1 text-sm md:text-base text-zinc-400">{tagline}</p>

          {highlights?.length > 0 && (
            <ul className="mt-4 space-y-1.5 text-sm text-zinc-300">
              {highlights.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-pink-400/80" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}

          {(stackSummary || aiSummary) && (
            <div className="mt-4 grid gap-3 text-xs text-zinc-400 sm:grid-cols-2">
              {stackSummary && (
                <div>
                  <p className="mb-1 font-semibold text-[11px] uppercase tracking-[0.16em] text-zinc-500">
                    Technical Stack
                  </p>
                  <p>{stackSummary}</p>
                </div>
              )}
              {aiSummary && (
                <div>
                  <p className="mb-1 font-semibold text-[11px] uppercase tracking-[0.16em] text-zinc-500">
                    AI &amp; ML
                  </p>
                  <p>{aiSummary}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
