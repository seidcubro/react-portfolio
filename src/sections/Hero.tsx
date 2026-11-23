import type { CSSProperties } from "react"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import NetworkCanvas from "../components/NetworkCanvas"
import Terminal from "../components/Terminal"
import CountUp from "../components/CountUp"
import Magnetic from "../components/Magnetic"
import { links } from "../data/links"
import { easeOut, introDelay } from "../lib/motion"

const stats = [
  { value: "340+", label: "commits on PriorLine" },
  { value: "12,000+", label: "predictions graded in public" },
  { value: "11", label: "models retrained every week" },
  { value: "150", label: "virtual users in load test" },
]

function Arrow() {
  return (
    <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3 11 11 3M5 3h6v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Hero() {
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  const fade = useTransform(scrollY, [0, 500], [1, 0])
  const lift = useTransform(scrollY, [0, 600], [0, -70])
  const d = introDelay

  const rise = (delay: number) => ({
    initial: reduce ? false : ({ opacity: 0, y: 26, filter: "blur(8px)" } as const),
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 0.9, ease: easeOut, delay: d + delay },
  })
  const word = (delay: number) => ({
    initial: reduce ? false : ({ y: "110%", rotate: 5 } as const),
    animate: { y: 0, rotate: 0 },
    transition: { duration: 1.1, ease: easeOut, delay: d + delay },
  })

  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col overflow-hidden">
      <motion.div className="absolute inset-0" style={{ opacity: fade }}>
        <NetworkCanvas />
      </motion.div>

      <div className="relative mx-auto grid w-full max-w-6xl flex-1 items-center gap-10 px-5 pb-8 pt-28 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:pt-28">
        <motion.div style={reduce ? undefined : { y: lift }}>
          <motion.p
            {...rise(0.1)}
            className="inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-white/80 backdrop-blur"
          >
            <span className="live" />
            Cloud · Infrastructure · Data
          </motion.p>

          <h1 className="mt-6 font-display text-[clamp(4.2rem,21vw,8.5rem)] font-extrabold leading-[0.88] tracking-[-0.045em] sm:text-[clamp(5rem,11vw,8.5rem)]">
            <span className="block overflow-hidden pb-[0.08em]">
              <motion.span className="block origin-bottom-left" {...word(0.15)}>
                Seid
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.14em]">
              <motion.span
                className="sheen block origin-bottom-left"
                style={{ "--sheen-delay": `${d + 1.2}s` } as CSSProperties}
                {...word(0.26)}
              >
                Cubro
              </motion.span>
            </span>
          </h1>

          <motion.p {...rise(0.5)} className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-white/75 sm:text-xl">
            I build and run production systems on <span className="text-white">AWS, Kubernetes and Linux</span>.
            Creator of{" "}
            <a href={links.priorline} target="_blank" rel="noopener noreferrer" className="draw text-white">
              priorline.io
            </a>
            , a machine learning platform that operates itself.
          </motion.p>

          <motion.div {...rise(0.62)} className="mt-8 grid grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:gap-3">
            <Magnetic className="col-span-3">
              <a href="#work" className="btn btn-primary w-full sm:w-auto">
                See the work
                <Arrow />
              </a>
            </Magnetic>
            <a href={links.resume} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !px-3 sm:!px-6">
              Resume
            </a>
            <a href={links.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !px-3 sm:!px-6">
              GitHub
            </a>
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !px-3 sm:!px-6">
              LinkedIn
            </a>
          </motion.div>
        </motion.div>

        <motion.div {...rise(0.75)} className="relative lg:pt-16">
          <div className="relative z-10 mb-[-26px] ml-auto mr-5 w-fit lg:absolute lg:-top-6 lg:right-4 lg:mb-0 lg:mr-0">
            <div className="frame shadow-[0_20px_60px_-20px_rgba(0,0,0,0.9)]">
              <div className="overflow-hidden rounded-[26.5px]">
                <img
                  src="/headshot.jpg"
                  alt="Portrait of Seid Cubro"
                  width={144}
                  height={144}
                  className="h-24 w-24 object-cover sm:h-36 sm:w-36"
                />
              </div>
            </div>
          </div>
          <Terminal />
        </motion.div>
      </div>

      <motion.dl
        {...rise(0.9)}
        className="relative mx-auto grid w-full max-w-6xl grid-cols-2 gap-x-5 gap-y-6 border-t border-white/10 px-5 py-7 sm:px-8 lg:grid-cols-4"
      >
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col-reverse justify-end gap-1">
            <dt className="text-xs text-white/55 sm:text-sm">{s.label}</dt>
            <dd className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              <CountUp value={s.value} />
            </dd>
          </div>
        ))}
      </motion.dl>
    </section>
  )
}
