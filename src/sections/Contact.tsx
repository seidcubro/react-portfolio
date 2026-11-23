import { useRef, useState } from "react"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import Reveal from "../components/Reveal"
import Magnetic from "../components/Magnetic"
import { links } from "../data/links"

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const slide = useTransform(scrollYProgress, [0, 1], ["8%", "-28%"])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(links.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${links.email}`
    }
  }

  return (
    <section id="contact" className="mx-auto w-full max-w-6xl scroll-mt-24 px-5 pb-8 pt-20 sm:px-8 sm:pt-28">
      <Reveal>
        <div
          ref={ref}
          className="relative overflow-hidden rounded-[28px] border border-white/10 px-5 py-16 text-center sm:rounded-[32px] sm:px-12 sm:py-24"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-20"
            style={{
              background:
                "radial-gradient(50rem 26rem at 20% 0%, rgba(248,113,113,0.2), transparent 60%)," +
                "radial-gradient(46rem 26rem at 85% 100%, rgba(94,234,212,0.18), transparent 60%), #070a14",
            }}
          />
          {/* Oversized outlined words that slide sideways as the card scrolls past */}
          <motion.p
            aria-hidden="true"
            style={reduce ? undefined : { x: slide }}
            className="pointer-events-none absolute inset-x-0 bottom-[-0.12em] -z-10 whitespace-nowrap font-display text-[22vw] font-extrabold leading-none tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.07)] lg:text-[15rem]"
          >
            say hello say hello
          </motion.p>

          <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/55">
            <span className="text-[var(--teal)]">05</span> · Contact
          </p>
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-[2.5rem] font-semibold leading-[1.02] tracking-tight text-balance sm:text-6xl">
            Want to talk cloud, data, or PriorLine?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            I'm always up for a conversation about infrastructure and the things people are building. Email is the
            fastest way to reach me.
          </p>

          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Magnetic>
              <a href={`mailto:${links.email}`} className="btn btn-primary w-full">
                {links.email}
              </a>
            </Magnetic>
            <button type="button" onClick={copy} className="btn btn-ghost min-w-[9.5rem]" aria-live="polite">
              {copied ? "Copied" : "Copy address"}
            </button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-1 text-sm text-white/70">
            {[
              ["LinkedIn", links.linkedin],
              ["GitHub", links.github],
              ["Resume", links.resume],
              ["priorline.io", links.priorline],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="draw inline-flex min-h-11 items-center hover:text-white"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </Reveal>

      <footer className="flex flex-col items-center justify-between gap-2 py-8 font-mono text-[11px] text-white/40 sm:flex-row">
        <p>© 2026 Seid Cubro</p>
        <p>Built with React and TypeScript, deployed on Vercel</p>
      </footer>
    </section>
  )
}
