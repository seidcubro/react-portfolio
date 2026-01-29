import Reveal from "./Reveal"

type SectionProps = {
  id?: string
  title?: string
  children: React.ReactNode
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="mx-auto max-w-5xl scroll-mt-24 px-6 py-16">
      <Reveal>
        {title ? (
          <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        ) : null}

        <div className={title ? "mt-6" : ""}>{children}</div>
      </Reveal>
    </section>
  )
}
