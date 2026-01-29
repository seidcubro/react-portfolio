import Reveal from "./Reveal"

type SectionProps = {
  id?: string
  title?: string
  children: React.ReactNode
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="mx-auto max-w-5xl scroll-mt-40 sm:scroll-mt-28 px-4 sm:px-6 py-14 sm:py-16">
      <Reveal>
        {title ? (
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
            <div className="mt-3 h-px w-24 bg-gradient-to-r from-red-400 to-teal-200 opacity-80" />
          </div>
        ) : null}

        <div className={title ? "mt-6" : ""}>{children}</div>
      </Reveal>
    </section>
  )
}
