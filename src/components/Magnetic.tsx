import type { PointerEvent, ReactNode } from "react"
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion"

/** Pulls its child a little toward the pointer, and springs back when it leaves. */
export default function Magnetic({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion()
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const x = useSpring(mx, { stiffness: 220, damping: 16, mass: 0.4 })
  const y = useSpring(my, { stiffness: 220, damping: 16, mass: 0.4 })

  const onMove = (e: PointerEvent<HTMLSpanElement>) => {
    if (reduce || e.pointerType !== "mouse") return
    const r = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - (r.left + r.width / 2)) * 0.28)
    my.set((e.clientY - (r.top + r.height / 2)) * 0.28)
  }
  const reset = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <motion.span className={`inline-flex ${className ?? ""}`} style={{ x, y }} onPointerMove={onMove} onPointerLeave={reset}>
      {children}
    </motion.span>
  )
}
