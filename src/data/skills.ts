export type SkillGroup = {
  title: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "SQL", "Bash"],
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
    items: ["Pandas", "Data Cleaning", "Exploratory Data Analysis", "ETL (basics)", "Data Modeling (basics)"],
  },
  {
    title: "Networking/Security (coursework)",
    items: ["TCP/IP fundamentals", "Subnets (basics)", "Trust boundaries", "Threat modeling (basics)"],
  },
]
