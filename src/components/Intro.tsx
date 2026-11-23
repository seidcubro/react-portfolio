import { useState } from "react"
import { motion } from "framer-motion"
import { easeInOut, easeOut, playIntro } from "../lib/motion"

/** A short opening curtain: a line loads, then the panel lifts off the page. Once per session. */
export default function Intro() {
  const [gone, setGone] = useState(!playIntro)
  if (gone) return null

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-0 z-[70] grid place-items-center bg-[#05070f]"
      initial={{ clipPath: "inset(0 0 0% 0)" }}
      animate={{ clipPath: "inset(0 0 100% 0)" }}
      transition={{ duration: 0.8, ease: easeInOut, delay: 0.75 }}
      onAnimationComplete={() => setGone(true)}
    >
      <div className="w-56">
        <motion.p
          className="font-mono text-xs uppercase tracking-[0.3em] text-white/70"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: easeOut }}
        >
          seidcubro.com
        </motion.p>
        <div className="mt-3 h-px w-full bg-white/10">
          <motion.div
            className="h-px origin-left bg-gradient-to-r from-[var(--red)] to-[var(--teal)]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.65, ease: easeInOut }}
          />
        </div>
      </div>
    </motion.div>
  )
}
