import { useEffect, useState } from "react"

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
]

function prefersReducedMotion() {
  return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

export default function Navbar() {
  const [active, setActive] = useState<string>("#about")

  useEffect(() => {
    const sections = links
      .map((l) => ({ href: l.href, el: document.getElementById(l.href.slice(1)) }))
      .filter((x): x is { href: string; el: HTMLElement } => Boolean(x.el))

    const getNavOffset = () => {
      const header = document.getElementById("site-header")
      const h = header?.getBoundingClientRect().height ?? 96
      return Math.min(Math.max(h + 16, 96), 160) // clamp
    }

    const computeActive = () => {
      const nearBottom =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 60
      if (nearBottom) return "#contact"

      const NAV_OFFSET = getNavOffset()

      let current = sections[0]?.href ?? "#about"
      for (const s of sections) {
        const top = s.el.getBoundingClientRect().top
        if (top - NAV_OFFSET <= 0) current = s.href
      }
      return current
    }

    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(() => {
        setActive(computeActive())
        ticking = false
      })
    }

    setActive(computeActive())
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)

    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return
    e.preventDefault()

    const id = href.slice(1)
    const el = document.getElementById(id)
    if (!el) return

    el.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "start" })
    history.replaceState(null, "", href)
    setActive(href)
  }

  const ring =
    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black hover:ring-2 hover:ring-offset-2 hover:ring-offset-black"

  return (
    <header
      id="site-header"
      className="sticky top-0 z-20 border-b border-white/10 bg-black/75 sm:bg-black/45 sm:backdrop-blur"
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-0 sm:px-6 sm:py-4">
        <a
          href="#about"
          onClick={(e) => handleNav(e, "#about")}
          className={`w-fit rounded-md px-2 py-1 text-sm font-semibold tracking-tight text-white ${ring} hover:ring-red-400 focus:ring-red-400`}
        >
          Seid Cubro
        </a>

        <nav aria-label="Primary" className="flex flex-wrap justify-start gap-2 sm:justify-end sm:gap-4">
          {links.map((l) => {
            const isActive = active === l.href
            return (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleNav(e, l.href)}
                aria-current={isActive ? "page" : undefined}
                className={[
                  "rounded-md px-3 py-2 text-sm",
                  "text-white/85 hover:text-white",
                  "border border-transparent",
                  isActive ? "bg-white/7 border-white/15" : "hover:bg-white/5",
                  ring,
                  "hover:ring-teal-300 focus:ring-teal-300",
                ].join(" ")}
              >
                {l.label}
              </a>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
