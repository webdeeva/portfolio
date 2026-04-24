import { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  children: ReactNode;
  wide?: boolean;
};

export function Section({ id, eyebrow, title, subtitle, children, wide }: SectionProps) {
  return (
    <section
      id={id}
      className="relative scroll-mt-24 py-16 md:py-24 border-b border-zinc-900/30 last:border-b-0"
    >
      <div className={`mx-auto ${wide ? "max-w-7xl" : "max-w-6xl"} px-4 sm:px-6 lg:px-8`}>
        <Reveal className="mb-10 max-w-3xl">
          {eyebrow && (
            <p className="font-[family-name:var(--font-geist-mono)] text-[10px] font-semibold uppercase tracking-[0.35em] text-pink-300">
              {eyebrow}
            </p>
          )}
          <h2 className="mt-4 font-[family-name:var(--font-fraunces)] text-3xl font-light leading-[1.05] tracking-tight text-zinc-50 sm:text-4xl md:text-5xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 max-w-2xl text-sm md:text-base text-zinc-400">{subtitle}</p>
          )}
        </Reveal>
        <Reveal delay={100}>{children}</Reveal>
      </div>
    </section>
  );
}
