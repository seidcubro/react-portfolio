export type SkillGroup = {
  title: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming Languages",
    items: ["Python", "JavaScript", "TypeScript", "SQL", "Bash"],
  },
  {
    title: "Spoken Languages",
    items: ["English", "Bosnian", "Romanian", "Spanish"],
  },
  {
    title: "Web",
    items: ["React", "Vite", "Tailwind CSS", "REST APIs"],
  },
  {
    title: "Cloud & DevOps",
    items: ["Docker", "Linux", "Git/GitHub", "CI/CD (basics)", "Vercel"],
  },
  {
    title: "Data",
    items: ["Pandas", "Data Cleaning", "Exploratory Data Analysis", "ETL", "Data Modeling"],
  },
  {
    title: "Networking/Security (coursework)",
    items: ["TCP/IP fundamentals", "Subnets", "Trust boundaries", "Threat modeling"],
  },
]
