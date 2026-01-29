import Section from "../components/Section"

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="text-white/85">
        <p className="max-w-2xl leading-relaxed">
          Best way to reach me is email. I’m also active on GitHub.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <a
            className="rounded-xl border border-white/15 bg-black/30 p-4 hover:bg-black/45 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-teal-300"
            href="mailto:seidcubro754@gmail.com"
          >
            <div className="text-xs text-white/70">Email</div>
            <div className="mt-1 font-semibold text-white">seidcubro754@gmail.com</div>
          </a>

          <a
            className="rounded-xl border border-white/15 bg-black/30 p-4 hover:bg-black/45 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-red-400"
            href="https://github.com/seidcubro"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open GitHub profile (opens in a new tab)"
          >
            <div className="text-xs text-white/70">GitHub</div>
            <div className="mt-1 font-semibold text-white">github.com/seidcubro</div>
            <span className="sr-only">(opens in new tab)</span>
          </a>
        </div>
      </div>
    </Section>
  )
}
