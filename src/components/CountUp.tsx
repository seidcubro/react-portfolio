import { useEffect, useRef } from "react"
import { animate, useInView, useReducedMotion } from "framer-motion"
import { easeOut } from "../lib/motion"

/** Counts up to a value like "12,000+" or "340+" the first time it is seen. */
export default function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })
  const reduce = useReducedMotion()

  useEffect(() => {
    const el = ref.current
    const match = value.match(/^([\d,]+)(.*)$/)
    if (!el || !match || !inView || reduce) return

    const target = Number(match[1].replace(/,/g, ""))
    const suffix = match[2]
    const controls = animate(0, target, {
      duration: 1.6,
      ease: easeOut,
      onUpdate: (v) => {
        el.textContent = Math.round(v).toLocaleString("en-US") + suffix
      },
    })
    return () => controls.stop()
  }, [inView, reduce, value])

  return (
    <span ref={ref} className="tabular-nums">
      {value}
    </span>
  )
}
