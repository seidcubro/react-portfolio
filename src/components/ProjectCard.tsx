import type { Project } from "../data/projects"

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold tracking-tight">
            {project.title}
          </h3>
          <p className="mt-2 text-sm text-slate-300">{project.description}</p>
        </div>

        <span className="shrink-0 rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-200">
          {project.status}
        </span>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-slate-800/60 px-3 py-1 text-xs text-slate-200"
          >
            {tag}
          </span>
        ))}
      </div>

      <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-300">
        {project.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-red-400"
          aria-label={`Open repository for ${project.title}`}
        >
          Repo
        </a>

        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-300"
            aria-label={`Open live site for ${project.title}`}
          >
            Live
          </a>
        ) : null}
      </div>
    </div>
  )
}
