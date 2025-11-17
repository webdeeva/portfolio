import Link from "next/link";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

const statusLabel: Record<Project["status"] extends undefined ? "live" : NonNullable<Project["status"]>, string> = {
  live: "Live",
  wip: "In Progress",
  archived: "Archived",
};

export function ProjectCard({ project }: ProjectCardProps) {
  const {
    name,
    role,
    tagline,
    url,
    highlights,
    stackSummary,
    aiSummary,
    status = "live",
    screenshot,
  } = project;

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-5 sm:p-6 transition hover:border-pink-400/70 hover:bg-zinc-900">
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-pink-500/40 bg-zinc-900/80 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-200">
              <span className="h-1.5 w-1.5 rounded-full bg-pink-400 shadow-[0_0_12px_rgba(244,114,182,0.9)]" />
              <span>{statusLabel[status]}</span>
            </div>
            <span className="text-xs text-zinc-500">{role}</span>
          </div>

          <h3 className="mt-3 text-lg sm:text-xl font-semibold text-zinc-50">
            {name}
          </h3>
          <p className="mt-1 text-sm text-zinc-400">{tagline}</p>

          {url && (
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              <Link
                href={url}
                target="_blank"
                className="inline-flex items-center gap-1 rounded-full border border-pink-500/40 bg-zinc-900/80 px-3 py-1 text-zinc-200 transition group-hover:border-pink-400/80 group-hover:text-pink-100"
              >
                <span>View live</span>
                <span aria-hidden>↗</span>
              </Link>
            </div>
          )}

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
                    AI & ML
                  </p>
                  <p>{aiSummary}</p>
                </div>
              )}
            </div>
          )}
        </div>

        {screenshot && (
          <div className="relative mt-4 w-full max-w-xs self-start overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-900/60 sm:mt-0 sm:ml-4">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
            <img
              src={screenshot}
              alt={`${name} screenshot`}
              className="h-full w-full object-cover"
            />
          </div>
        )}
      </div>
    </article>
  );
}


