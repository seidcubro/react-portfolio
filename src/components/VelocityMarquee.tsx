import { useRef } from "react"
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion"

type Props = { items: string[]; direction?: 1 | -1; dot?: "red" | "teal" }

/** A looping row of words that speeds up, and flips direction, with the scroll. */
export default function VelocityMarquee({ items, direction = 1, dot = "red" }: Props) {
  const reduce = useReducedMotion()
  const base = useMotionValue(0)
  const { scrollY } = useScroll()
  const velocity = useSpring(useVelocity(scrollY), { damping: 50, stiffness: 400 })
  const factor = useTransform(velocity, [-1500, 0, 1500], [-4, 0, 4], { clamp: false })
  const dir = useRef<number>(direction)

  // Each copy of the list is 25% of the track, so wrapping at -25% is seamless.
  const x = useTransform(base, (v) => `${(((v % 25) - 25) % 25)}%`)

  useAnimationFrame((_, delta) => {
    if (reduce) return
    const f = factor.get()
    if (f < 0) dir.current = -direction
    else if (f > 0) dir.current = direction
    base.set(base.get() + dir.current * (1.1 + Math.abs(f) * 1.1) * (delta / 1000))
  })

  const loop = [...items, ...items, ...items, ...items]

  return (
    <div className="overflow-hidden">
      <motion.div className="flex w-max" style={{ x }}>
        {loop.map((m, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center gap-6 pr-6 font-display text-3xl font-semibold tracking-tight text-white/30 sm:gap-10 sm:pr-10 sm:text-6xl"
          >
            {m}
            <span className={`h-2 w-2 rounded-full ${dot === "red" ? "bg-[var(--red)]" : "bg-[var(--teal)]"}`} />
          </span>
        ))}
      </motion.div>
    </div>
  )
}
