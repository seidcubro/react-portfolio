import { useEffect, useRef } from "react"
import { useInView, useReducedMotion } from "framer-motion"

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/<>_"

/** Decodes its text from random characters, left to right, the first time it is seen. */
export default function Scramble({ text }: { text: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const reduce = useReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el || !inView || reduce) return

    const start = performance.now()
    const duration = 700
    let raf = 0
    const tick = (now: number) => {
      const done = Math.min(1, (now - start) / duration)
      const settled = Math.floor(done * text.length)
      let out = text.slice(0, settled)
      for (let i = settled; i < text.length; i++) {
        out += text[i] === " " ? " " : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
      }
      el.textContent = out
      if (done < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(raf)
      el.textContent = text
    }
  }, [inView, reduce, text])

  return (
    <span ref={ref} aria-label={text}>
      {text}
    </span>
  )
}
