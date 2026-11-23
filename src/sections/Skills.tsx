import { motion, useReducedMotion } from "framer-motion"
import Section from "../components/Section"
import Reveal from "../components/Reveal"
import SpotlightCard from "../components/SpotlightCard"
import { skillGroups } from "../data/skills"
import { easeOut } from "../lib/motion"

export default function Skills() {
  const reduce = useReducedMotion()

  return (
    <Section
      id="skills"
      index="04"
      label="Skills"
      title={
        <>
          Tools I use, <span className="text-white/45">not tools I have heard of.</span>
        </>
      }
    >
      <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={(i % 3) * 0.07} className="h-full">
            <SpotlightCard className="h-full">
              <div className="p-5 sm:p-7">
                <h3 className="font-display text-lg font-semibold tracking-tight">{g.title}</h3>
                <motion.div
                  className="mt-5 flex flex-wrap gap-2"
                  initial={reduce ? false : "hidden"}
                  whileInView="shown"
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ staggerChildren: 0.035, delayChildren: 0.15 }}
                >
                  {g.items.map((item) => (
                    <motion.span
                      key={item}
                      className="chip"
                      variants={{
                        hidden: { opacity: 0, scale: 0.9, y: 6 },
                        shown: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.35, ease: easeOut } },
                      }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
