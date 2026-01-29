export default function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold tracking-tight">
            Seid Cubro
          </h1>

          <p className="mt-6 text-xl text-slate-300">
            Cloud Computing & Computer Science student building software, cloud, and data systems.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="https://github.com/seidcubro"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-slate-100 px-5 py-3 text-sm font-medium text-slate-900 hover:bg-white focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              GitHub
            </a>

            <a
              href="/resume.pdf"
              className="rounded-lg border border-slate-700 px-5 py-3 text-sm font-medium text-slate-100 hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              Resume (PDF)
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-slate-700 px-5 py-3 text-sm font-medium text-slate-100 hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="shrink-0">
          <img
            src="/headshot.png"
            alt="Portrait of Seid Cubro"
            className="h-40 w-40 rounded-2xl border border-slate-800 object-cover shadow-lg md:h-48 md:w-48"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
