"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const portfolioScreenshots = [
  "/screenshots/syrn-ai.png",
  "/screenshots/sov-social.png",
  "/screenshots/emotion-island.png",
  "/screenshots/iching-ai.png",
  "/screenshots/aurazen.png",
  "/screenshots/zynvirtual.png",
  "/screenshots/zynspaces.png",
  "/screenshots/hadal-store.png",
  "/screenshots/bsb-corporate-cleaning.png",
  "/screenshots/aquariusmaximus.png",
  "/screenshots/symphonious-liger.png",
];

export function HeroShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % portfolioScreenshots.length);
    }, 4000); // Change screenshot every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sticky top-24 rounded-3xl border border-pink-500/40 bg-gradient-to-b from-zinc-950/90 to-zinc-900/80 p-3 shadow-[0_0_40px_rgba(244,114,182,0.5)] transition-all duration-700 hover:shadow-[0_0_60px_rgba(244,114,182,0.7)]">
      {/* Browser chrome */}
      <div className="flex items-center justify-between rounded-2xl bg-zinc-950/95 px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/90" />
        </div>
        <div className="flex-1" />
        <div className="flex items-center gap-1.5">
          {portfolioScreenshots.map((_, index) => (
            <div
              key={index}
              className={`h-1 w-1 rounded-full transition-all duration-500 ${
                index === activeIndex
                  ? "w-6 bg-pink-400"
                  : "bg-zinc-600 hover:bg-zinc-500"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Screenshot viewport */}
      <div className="relative mt-3 h-[400px] overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/80">
        {portfolioScreenshots.map((screenshot, index) => (
          <div
            key={screenshot}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === activeIndex
                ? "translate-x-0 opacity-100"
                : index < activeIndex
                ? "-translate-x-full opacity-0"
                : "translate-x-full opacity-0"
            }`}
          >
            <Image
              src={screenshot}
              alt="Portfolio screenshot"
              fill
              className="object-cover object-top"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
}


