import { useEffect, useState } from "react"
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion"
import { links as site } from "../data/links"
import { easeOut, introDelay } from "../lib/motion"

const nav = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
]

export default function Navbar() {
  const [active, setActive] = useState("")
  const [open, setOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.4 })

  // Highlight the section that currently sits under the top third of the screen.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id)
      },
      { rootMargin: "-30% 0px -60% 0px" },
    )
    for (const n of nav) {
      const el = document.getElementById(n.id)
      if (el) io.observe(el)
    }
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
  }, [open])

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-gradient-to-r from-[var(--red)] to-[var(--teal)]"
        style={{ scaleX: progress }}
      />

      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: easeOut, delay: introDelay + 0.05 }}
        className="fixed inset-x-0 top-0 z-40 px-4 pt-4 sm:px-8"
      >
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full border border-white/10 bg-[#05070f]/70 pl-5 pr-2 backdrop-blur-xl">
          <a href="#top" className="flex min-h-11 items-center gap-2.5 font-display text-[15px] font-semibold tracking-tight">
            <span className="live" />
            Seid Cubro
          </a>

          <nav aria-label="Primary" className="hidden items-center md:flex">
            {nav.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                aria-current={active === n.id ? "true" : undefined}
                className={`relative rounded-full px-4 py-2 text-sm transition-colors duration-200 ${
                  active === n.id ? "text-white" : "text-white/60 hover:text-white"
                }`}
              >
                {active === n.id ? (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full border border-white/12 bg-white/8"
                    transition={{ type: "spring", duration: 0.5, bounce: 0.18 }}
                  />
                ) : null}
                <span className="relative">{n.label}</span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary !min-h-10 !px-4 text-sm"
            >
              Resume
            </a>
            <button
              type="button"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/12 md:hidden"
            >
              <span className="relative block h-3 w-4">
                <span
                  className={`absolute left-0 h-px w-4 bg-white transition-transform duration-200 ${open ? "top-1.5 rotate-45" : "top-0"}`}
                />
                <span
                  className={`absolute left-0 h-px w-4 bg-white transition-transform duration-200 ${open ? "top-1.5 -rotate-45" : "top-3"}`}
                />
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 flex flex-col justify-center bg-[#05070f]/95 px-8 backdrop-blur-xl md:hidden"
          >
            <nav aria-label="Mobile" className="flex flex-col gap-2">
              {nav.map((n, i) => (
                <motion.a
                  key={n.id}
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: easeOut, delay: 0.04 * i }}
                  className="py-3 font-display text-4xl font-semibold tracking-tight"
                >
                  {n.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
