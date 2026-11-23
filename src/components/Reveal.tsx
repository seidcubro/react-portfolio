import type { ReactNode } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { easeOut } from "../lib/motion"

type Props = {
  children: ReactNode
  delay?: number
  className?: string
  y?: number
}

/** Fades and lifts content in once, the first time it scrolls into view. */
export default function Reveal({ children, delay = 0, className, y = 22 }: Props) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: easeOut, delay }}
    >
      {children}
    </motion.div>
  )
}
