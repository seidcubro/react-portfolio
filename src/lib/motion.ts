export const easeOut = [0.23, 1, 0.32, 1] as const
export const easeInOut = [0.77, 0, 0.175, 1] as const

function shouldPlayIntro() {
  if (typeof window === "undefined") return false
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false
  try {
    if (sessionStorage.getItem("intro-seen")) return false
    sessionStorage.setItem("intro-seen", "1")
  } catch {
    return false
  }
  return true
}

/** The opening curtain plays once per browser session. */
export const playIntro = shouldPlayIntro()

/** Seconds the hero waits so its entrance starts as the curtain lifts. */
export const introDelay = playIntro ? 1.15 : 0
