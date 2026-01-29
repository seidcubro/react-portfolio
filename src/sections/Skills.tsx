import Section from "../components/Section"
import SkillGroupCard from "../components/SkillGroupCard"
import { skillGroups } from "../data/skills"

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {skillGroups.map((g) => (
          <SkillGroupCard key={g.title} group={g} />
        ))}
      </div>
    </Section>
  )
}
