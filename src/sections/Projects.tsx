import Section from "../components/Section"
import ProjectCard from "../components/ProjectCard"
import { featuredProjects } from "../data/projects"

export default function Projects() {
  return (
    <Section id="projects" title="Featured Projects">
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {featuredProjects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </Section>
  )
}
