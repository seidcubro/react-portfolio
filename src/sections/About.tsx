import Section from "../components/Section"

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="space-y-4 text-white/85 leading-relaxed">
        <p>
          I’m a Cloud Computing & Computer Science student who enjoys building things and understanding
          how they work end-to-end — from code, to infrastructure, to data and monitoring.
        </p>

        <p>
          I’m drawn to cloud computing because it combines problem solving with real systems:
          services, deployments, reliability, security, and performance. I like programming in general —
          the thinking part, the iteration, and turning an idea into something usable.
        </p>

        <p>
          Outside tech, I’m into football (Liverpool FC), American football (Steelers), speedcubing,
          playing piano, music, hiking, concerts, traveling, and pro wrestling. I’m big on experiences —
          new places, new environments, and anything that feels like a story worth having.
        </p>
      </div>
    </Section>
  )
}
