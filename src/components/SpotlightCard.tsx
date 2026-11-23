import type { PointerEvent, ReactNode } from "react"
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion"

type Props = {
  children: ReactNode
  className?: string
  /** Lean the card a few degrees toward the pointer. */
  tilt?: boolean
}

/** A card whose glow and border follow the pointer. */
export default function SpotlightCard({ children, className = "", tilt = false }: Props) {
  const reduce = useReducedMotion()
  const rx = useSpring(useMotionValue(0), { stiffness: 160, damping: 18 })
  const ry = useSpring(useMotionValue(0), { stiffness: 160, damping: 18 })

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = e.currentTarget
    const r = el.getBoundingClientRect()
    const px = e.clientX - r.left
    const py = e.clientY - r.top
    el.style.setProperty("--mx", `${px}px`)
    el.style.setProperty("--my", `${py}px`)
    if (tilt && !reduce && e.pointerType === "mouse") {
      ry.set((px / r.width - 0.5) * 3.2)
      rx.set((0.5 - py / r.height) * 3.2)
    }
  }
  const onLeave = () => {
    rx.set(0)
    ry.set(0)
  }

  return (
    <motion.div
      className={`spot ${className}`}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={tilt ? { rotateX: rx, rotateY: ry, transformPerspective: 1400 } : undefined}
    >
      {children}
    </motion.div>
  )
}
