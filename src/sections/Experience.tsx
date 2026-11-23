import { useRef } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import Section from "../components/Section"
import Reveal from "../components/Reveal"
import { roles } from "../data/links"

export default function Experience() {
  const ref = useRef<HTMLOListElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] })
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 26 })

  return (
    <Section
      id="experience"
      index="03"
      label="Experience"
      title={
        <>
          Real infrastructure, <span className="text-white/45">real people depending on it.</span>
        </>
      }
    >
      <ol ref={ref} className="relative space-y-12 pl-7 sm:pl-12">
        <span aria-hidden="true" className="absolute left-[5px] top-2 bottom-2 w-px bg-white/10 sm:left-[9px]" />
        <motion.span
          aria-hidden="true"
          style={{ scaleY: fill }}
          className="absolute left-[5px] top-2 bottom-2 w-px origin-top bg-gradient-to-b from-[var(--red)] to-[var(--teal)] sm:left-[9px]"
        />

        {roles.map((r) => (
          <li key={r.title} className="relative">
            <span
              aria-hidden="true"
              className={`absolute -left-7 top-2 h-[11px] w-[11px] rounded-full border-2 border-[#05070f] sm:-left-12 sm:ml-1 ${
                r.current ? "bg-[var(--teal)] shadow-[0_0_0_4px_rgba(94,234,212,0.18)]" : "bg-white/50"
              }`}
            />
            <Reveal>
              <div className="grid gap-4 lg:grid-cols-[280px_1fr] lg:gap-10">
                <div>
                  <p className="font-mono text-xs text-[var(--teal)]">{r.dates}</p>
                  <h3 className="mt-2 font-display text-2xl font-semibold leading-tight tracking-tight">{r.title}</h3>
                  <p className="mt-1 text-sm text-white/60">
                    {r.org} · {r.place}
                  </p>
                </div>
                <ul className="space-y-3 leading-relaxed text-white/75">
                  {r.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--red)]" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
