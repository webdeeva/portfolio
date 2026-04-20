"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const webScreenshots = [
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

const mobileScreenshots = [
  "/screenshots/mobile/dateable-home.png",
  "/screenshots/mobile/cardology-home.png",
  "/screenshots/mobile/guapcoin-wallet.png",
  "/screenshots/mobile/dateable-match.png",
  "/screenshots/mobile/cardology-yearly.png",
  "/screenshots/mobile/guapcoin-send.png",
  "/screenshots/mobile/dateable-agent.png",
  "/screenshots/mobile/cardology-spreads.png",
  "/screenshots/mobile/guapcoin-receive.png",
  "/screenshots/mobile/cardology-glossary.png",
];

export function HeroShowcase() {
  const [webIndex, setWebIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);

  useEffect(() => {
    const webInterval = setInterval(() => {
      setWebIndex((prev) => (prev + 1) % webScreenshots.length);
    }, 4000);
    return () => clearInterval(webInterval);
  }, []);

  useEffect(() => {
    const mobileInterval = setInterval(() => {
      setMobileIndex((prev) => (prev + 1) % mobileScreenshots.length);
    }, 2800);
    return () => clearInterval(mobileInterval);
  }, []);

  return (
    <div className="relative sticky top-24">
      {/* Browser preview */}
      <div className="rounded-3xl border border-pink-500/40 bg-gradient-to-b from-zinc-950/90 to-zinc-900/80 p-3 shadow-[0_0_40px_rgba(244,114,182,0.5)] transition-all duration-700 hover:shadow-[0_0_60px_rgba(244,114,182,0.7)]">
        {/* Browser chrome */}
        <div className="flex items-center justify-between rounded-2xl bg-zinc-950/95 px-4 py-2.5">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400/90" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300/90" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/90" />
          </div>
          <div className="flex-1" />
          <div className="flex items-center gap-1.5">
            {webScreenshots.map((_, index) => (
              <div
                key={index}
                className={`h-1 rounded-full transition-all duration-500 ${
                  index === webIndex
                    ? "w-6 bg-pink-400"
                    : "w-1 bg-zinc-600 hover:bg-zinc-500"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Screenshot viewport */}
        <div className="relative mt-3 h-[400px] overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/80">
          {webScreenshots.map((screenshot, index) => (
            <div
              key={screenshot}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === webIndex
                  ? "translate-x-0 opacity-100"
                  : index < webIndex
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
                sizes="(max-width: 1024px) 100vw, 600px"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Floating phone frame - positioned to overlap the browser */}
      <div className="pointer-events-none absolute -bottom-10 -right-2 hidden w-[150px] md:block lg:-right-6 lg:w-[170px]">
        <div className="pointer-events-auto relative aspect-[9/19] rounded-[1.8rem] border border-fuchsia-500/50 bg-zinc-950 p-[5px] shadow-[0_0_40px_rgba(217,70,239,0.55)] rotate-3 transition-transform duration-500 hover:rotate-0 hover:scale-105">
          {/* Bezel glow */}
          <div className="absolute inset-0 rounded-[1.8rem] bg-gradient-to-b from-fuchsia-500/25 via-transparent to-pink-500/25 pointer-events-none" />
          {/* Inner screen */}
          <div className="relative h-full w-full overflow-hidden rounded-[1.55rem] bg-black">
            {/* Notch */}
            <div className="absolute left-1/2 top-1 z-10 h-3 w-14 -translate-x-1/2 rounded-full bg-black shadow-inner" />
            {mobileScreenshots.map((src, index) => (
              <div
                key={src}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === mobileIndex
                    ? "translate-y-0 opacity-100"
                    : index < mobileIndex
                    ? "-translate-y-full opacity-0"
                    : "translate-y-full opacity-0"
                }`}
              >
                <Image
                  src={src}
                  alt="Mobile app screenshot"
                  fill
                  className="object-cover object-top"
                  sizes="170px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
