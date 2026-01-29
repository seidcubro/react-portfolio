import type { Project } from "../data/projects"

export default function ProjectCard({ project }: { project: Project }) {
  const ring =
    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black hover:ring-2 hover:ring-offset-2 hover:ring-offset-black"

  return (
    <div className="rounded-2xl border border-white/12 bg-black/30 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-white">
            {project.title}
          </h3>
          <p className="mt-2 text-sm text-white/85">{project.description}</p>
        </div>

        <span className="shrink-0 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs text-white/85">
          {project.status}
        </span>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/12 bg-black/35 px-3 py-1 text-xs text-white/85"
          >
            {tag}
          </span>
        ))}
      </div>

      <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-white/85">
        {project.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`rounded-lg border border-white/18 bg-black/35 px-4 py-2 text-sm font-semibold text-white hover:bg-black/55 ${ring} hover:ring-teal-300 focus:ring-teal-300`}
          aria-label={`Open repository for ${project.title} (opens in a new tab)`}
        >
          Repo <span className="sr-only">(opens in new tab)</span>
        </a>

        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white hover:bg-red-400 ${ring} hover:ring-red-300 focus:ring-red-300`}
            aria-label={`Open live site for ${project.title} (opens in a new tab)`}
          >
            Live <span className="sr-only">(opens in new tab)</span>
          </a>
        ) : null}
      </div>
    </div>
  )
}
