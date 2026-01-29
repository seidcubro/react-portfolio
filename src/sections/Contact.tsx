import Section from "../components/Section"

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="text-slate-300">
        <p>
          Email:{" "}
          <a className="underline hover:text-white" href="mailto:seidcubro754@gmail.com">
            seidcubro754@gmail.com
          </a>
        </p>
        <p className="mt-2">
          GitHub:{" "}
          <a
            className="underline hover:text-white"
            href="https://github.com/seidcubro"
            target="_blank"
            rel="noreferrer"
          >
            github.com/seidcubro
          </a>
        </p>
      </div>
    </Section>
  )
}
