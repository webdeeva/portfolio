import { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, subtitle, children }: SectionProps) {
  return (
    <section
      id={id}
      className="relative scroll-mt-24 py-12 md:py-16 border-b border-zinc-900/30 last:border-b-0"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-2xl">
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-300">
              {eyebrow}
            </p>
          )}
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-zinc-50">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-sm md:text-base text-zinc-400">{subtitle}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}


