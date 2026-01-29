export default function Hero() {
  const ring =
    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black hover:ring-2 hover:ring-offset-2 hover:ring-offset-black"

  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-24">
      <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs text-white/85">
            <span className="h-2 w-2 rounded-full bg-red-400" />
            Cloud • Software • Data
            <span className="h-1 w-1 rounded-full bg-white/30" />
            <span className="text-teal-200">Open to internships</span>
          </p>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            <span className="text-white">Seid</span>{" "}
            <span className="bg-gradient-to-r from-red-400 to-teal-200 bg-clip-text text-transparent">
              Cubro
            </span>
          </h1>

          <p className="mt-5 text-lg sm:text-xl leading-relaxed text-white/85">
            Cloud Computing & Computer Science student building software, cloud, and data systems.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-3">
            <a
              href="https://github.com/seidcubro"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full sm:w-auto text-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90 ${ring} hover:ring-red-400 focus:ring-red-400`}
            >
              GitHub
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open resume PDF in a new tab"
              className={`w-full sm:w-auto text-center rounded-lg border border-white/15 bg-black/20 px-5 py-3 text-sm font-semibold text-white hover:bg-black/35 ${ring} hover:ring-teal-300 focus:ring-teal-300`}
            >
              Resume (PDF)
            </a>

            <a
              href="#contact"
              className={`w-full sm:w-auto text-center rounded-lg border border-white/15 bg-black/20 px-5 py-3 text-sm font-semibold text-white hover:bg-black/35 ${ring} hover:ring-red-400 focus:ring-red-400`}
            >
              Contact
            </a>
          </div>
        </div>

        <div className="shrink-0 self-start md:self-auto">
          <div className="rounded-3xl border border-white/30 bg-black/20 p-2 shadow-2xl">
            <img
              src="/headshot.png"
              alt="Portrait of Seid Cubro"
              className="h-44 w-44 rounded-2xl border-2 border-white object-cover md:h-56 md:w-56"
              loading="lazy"
            />
          </div>

          <div className="mt-4 text-center text-xs text-white/70">
            <span className="font-mono">seidcubro</span>
          </div>
        </div>
      </div>
    </section>
  )
}
