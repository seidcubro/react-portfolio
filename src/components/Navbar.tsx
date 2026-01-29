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
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return
    e.preventDefault()

    const id = href.slice(1)
    const el = document.getElementById(id)
    if (!el) return

    el.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "start" })
    history.replaceState(null, "", href)
  }

  return (
    <header className="sticky top-0 z-20 border-b border-slate-800/60 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <span className="text-sm font-semibold tracking-tight">
          Seid Cubro
        </span>

        <nav aria-label="Primary" className="flex gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleNav(e, l.href)}
              className="text-sm text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
