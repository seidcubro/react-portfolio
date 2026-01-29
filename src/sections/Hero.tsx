export default function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <h1 className="text-5xl font-bold tracking-tight">Seid Cubro</h1>

      <p className="mt-6 max-w-2xl text-xl text-slate-300">
        Cloud Computing & Computer Science student building software, cloud, and data systems.
      </p>

      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href="https://github.com/seidcubro"
          target="_blank"
          rel="noreferrer"
          className="rounded-lg bg-slate-100 px-5 py-3 text-sm font-medium text-slate-900 hover:bg-white"
        >
          GitHub
        </a>

        <a
          href="/resume.pdf"
          className="rounded-lg border border-slate-700 px-5 py-3 text-sm font-medium text-slate-100 hover:bg-slate-900"
        >
          Resume (PDF)
        </a>

        <a
          href="#contact"
          className="rounded-lg border border-slate-700 px-5 py-3 text-sm font-medium text-slate-100 hover:bg-slate-900"
        >
          Contact
        </a>
      </div>
    </section>
  )
}
