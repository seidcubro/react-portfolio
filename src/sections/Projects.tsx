import Section from "../components/Section"
import Reveal from "../components/Reveal"
import SpotlightCard from "../components/SpotlightCard"
import Pipeline from "../components/Pipeline"
import CountUp from "../components/CountUp"
import { featured, more } from "../data/projects"
import type { Project } from "../data/projects"

function Status({ status }: { status: Project["status"] }) {
  return (
    <span className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-white/12 bg-black/30 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-white/80">
      {status === "Complete" ? <span className="h-2 w-2 rounded-full bg-white/40" /> : <span className="live" />}
      {status}
    </span>
  )
}

function Arrow() {
  return (
    <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3 11 11 3M5 3h6v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Links({ p }: { p: Project }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      {p.liveUrl ? (
        <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          {p.liveLabel ?? "Open live site"}
          <Arrow />
        </a>
      ) : null}
      {p.repoUrl ? (
        <a href={p.repoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
          View the code
          <Arrow />
          <span className="sr-only"> for {p.title}</span>
        </a>
      ) : null}
    </div>
  )
}

function Featured({ p, n }: { p: Project; n: string }) {
  return (
    <Reveal>
      <SpotlightCard tilt>
        <div className="grid gap-8 p-5 sm:p-10 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col">
            <div className="flex items-center justify-between gap-4">
              <span className="font-mono text-xs text-white/40">{n}</span>
              <Status status={p.status} />
            </div>
            <h3 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              {p.title}
            </h3>
            <p className="mt-2 font-mono text-xs leading-relaxed text-[var(--teal)]">{p.kicker}</p>
            <p className="mt-5 leading-relaxed text-white/75">{p.description}</p>

            {p.stats ? (
              <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/8 bg-white/8">
                {p.stats.map((s) => (
                  <div key={s.label} className="flex flex-col-reverse justify-end gap-1 bg-[#080b15] p-4">
                    <dt className="text-xs text-white/50">{s.label}</dt>
                    <dd className="font-display text-2xl font-semibold tracking-tight">
                      <CountUp value={s.value} />
                    </dd>
                  </div>
                ))}
              </dl>
            ) : null}

            <div className="mt-8 lg:mt-auto lg:pt-8">
              <Links p={p} />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {p.pipeline ? <Pipeline steps={p.pipeline} label={`${p.title} data flow`} /> : null}

            <ul className="space-y-3 text-sm leading-relaxed text-white/75">
              {p.highlights.map((h) => (
                <li key={h} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--red)]" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {p.stack.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </SpotlightCard>
    </Reveal>
  )
}

function Small({ p, delay }: { p: Project; delay: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <SpotlightCard className="h-full">
        <div className="flex h-full flex-col p-5 sm:p-8">
          <Status status={p.status} />
          <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight">{p.title}</h3>
          <p className="mt-1 font-mono text-[11px] text-[var(--teal)]">{p.kicker}</p>
          <p className="mt-4 leading-relaxed text-white/70">{p.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {p.stack.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>
          {p.repoUrl ? (
            <a
              href={p.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="draw mt-auto inline-flex min-h-11 w-fit items-center gap-2 pt-6 pb-1 text-sm font-semibold"
            >
              View the code <Arrow />
              <span className="sr-only"> for {p.title}</span>
            </a>
          ) : null}
        </div>
      </SpotlightCard>
    </Reveal>
  )
}

export default function Projects() {
  return (
    <Section
      id="work"
      index="02"
      label="Selected work"
      title={
        <>
          Things I built that <span className="text-white/45">run on their own.</span>
        </>
      }
    >
      <div className="space-y-5 sm:space-y-6">
        {featured.map((p, i) => (
          <Featured key={p.slug} p={p} n={`0${i + 1}`} />
        ))}
      </div>

      <div className="mt-5 grid gap-5 sm:mt-6 sm:gap-6 md:grid-cols-2">
        {more.map((p, i) => (
          <Small key={p.slug} p={p} delay={i * 0.07} />
        ))}
      </div>
    </Section>
  )
}
