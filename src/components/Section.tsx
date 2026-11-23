import type { ReactNode } from "react"
import Reveal from "./Reveal"
import Scramble from "./Scramble"

type Props = {
  id: string
  index: string
  label: string
  title: ReactNode
  children: ReactNode
}

export default function Section({ id, index, label, title, children }: Props) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-white/50">
          <span className="text-[var(--teal)]">{index}</span>
          <span className="h-px w-10 bg-white/20" />
          <Scramble text={label} />
        </p>
        <h2 className="mt-5 max-w-3xl font-display text-[2rem] font-semibold leading-[1.08] tracking-tight text-balance sm:text-5xl">
          {title}
        </h2>
      </Reveal>
      <div className="mt-10 sm:mt-16">{children}</div>
    </section>
  )
}
