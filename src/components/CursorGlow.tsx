import { useEffect, useRef } from "react"

/**
 * A dot grid that is only visible in a soft circle around the pointer.
 * Desktop pointers only; touch devices never mount the listener.
 */
export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (!fine || reduce) return

    let x = window.innerWidth / 2
    let y = window.innerHeight / 3
    let tx = x
    let ty = y
    let raf = 0

    const paint = () => {
      x += (tx - x) * 0.12
      y += (ty - y) * 0.12
      const mask = `radial-gradient(280px circle at ${x}px ${y}px, black, transparent 72%)`
      el.style.maskImage = mask
      el.style.webkitMaskImage = mask
      raf = Math.abs(tx - x) + Math.abs(ty - y) > 0.5 ? requestAnimationFrame(paint) : 0
    }
    const onMove = (e: PointerEvent) => {
      tx = e.clientX
      ty = e.clientY
      el.style.opacity = "1"
      if (!raf) raf = requestAnimationFrame(paint)
    }

    window.addEventListener("pointermove", onMove, { passive: true })
    return () => {
      window.removeEventListener("pointermove", onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 opacity-0 transition-opacity duration-500"
      style={{
        backgroundImage: "radial-gradient(rgba(94,234,212,0.55) 1px, transparent 1.4px)",
        backgroundSize: "26px 26px",
      }}
    />
  )
}
