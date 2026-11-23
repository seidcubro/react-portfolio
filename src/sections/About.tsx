import Section from "../components/Section"
import Reveal from "../components/Reveal"
import SpotlightCard from "../components/SpotlightCard"
import WordReveal from "../components/WordReveal"
import VelocityMarquee from "../components/VelocityMarquee"
import { marqueeA, marqueeB } from "../data/skills"

const facts = [
  ["Role", "IT Coordinator, Evercor Facility Management"],
  ["Degree", "B.S. Cloud Computing, Wilkes University, December 2026"],
  ["Minors", "Computer Science and Data Science"],
  ["Focus", "Cloud infrastructure, automation and data systems"],
  ["Based in", "Northeastern Pennsylvania"],
]

export default function About() {
  return (
    <>
      <Section
        id="about"
        index="01"
        label="About"
        title={
          <>
            I like systems that keep running <span className="text-white/45">after I close the laptop.</span>
          </>
        }
      >
        <WordReveal
          className="max-w-4xl font-display text-2xl font-medium leading-snug tracking-tight sm:text-4xl sm:leading-[1.2]"
          text="I run IT infrastructure for a living, built a machine learning platform that retrains and grades itself every week, and led the cloud side of a sensor pipeline on AWS."
        />

        <div className="mt-12 grid gap-10 sm:mt-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <Reveal className="space-y-5 text-lg leading-relaxed text-white/75">
            <p>
              At <span className="text-white">Evercor</span> I look after the infrastructure, the network and the
              automations that move data between business systems. It's where I learned what it means for real people
              to depend on something you set up.
            </p>
            <p>
              <span className="text-white">PriorLine</span> is what I build for myself: a platform that ingests data,
              retrains its models and publishes its own results on a schedule, with nobody touching it.
            </p>
            <p>
              I'd rather measure than guess. I size servers from real memory numbers, make jobs fail loudly when their
              data is stale, and automate anything I've done twice.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <SpotlightCard>
              <dl className="divide-y divide-white/8">
                {facts.map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[84px_1fr] gap-4 px-5 py-4 sm:grid-cols-[104px_1fr] sm:px-6">
                    <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/45">{k}</dt>
                    <dd className="text-sm leading-relaxed text-white/90">{v}</dd>
                  </div>
                ))}
              </dl>
            </SpotlightCard>
          </Reveal>
        </div>
      </Section>

      <div
        aria-hidden="true"
        className="space-y-3 border-y border-white/8 py-6 [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)] sm:space-y-5 sm:py-9"
      >
        <VelocityMarquee items={marqueeA} direction={-1} dot="red" />
        <VelocityMarquee items={marqueeB} direction={1} dot="teal" />
      </div>
    </>
  )
}
