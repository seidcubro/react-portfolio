export type Project = {
  title: string
  description: string
  stack: string[]
  highlights: string[]
  repoUrl: string
  liveUrl?: string
  status: "Ongoing" | "Complete"
}

export const featuredProjects: Project[] = [
  {
    title: "React Portfolio",
    description:
      "Single-scroll personal portfolio built with React and TypeScript, focused on clarity, accessibility, and clean design.",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Vercel"],
    highlights: [
      "Single-page layout with smooth navigation",
      "Accessible focus states and reduced-motion support",
      "Designed to scale as a long-term portfolio",
    ],
    repoUrl: "https://github.com/seidcubro/react-portfolio",
    status: "Ongoing",
  },
  {
    title: "Cloud Computing Practicum",
    description:
      "Coursework repository covering containerization, services, and cloud tooling fundamentals.",
    stack: ["Linux", "Docker", "Git", "Cloud Fundamentals", "Networking"],
    highlights: [
      "Lab-based development with reports and evidence",
      "Containerized services and local testing",
      "Clean repository structure for iterative coursework",
    ],
    repoUrl: "https://github.com/seidcubro/cloud-computing-practicum",
    status: "Ongoing",
  },
  {
    title: "Data Systems Projects",
    description:
      "Data-focused projects involving analysis, structured datasets, and system workflows.",
    stack: ["Python", "SQL", "Pandas", "ETL", "Data Modeling"],
    highlights: [
      "Dataset analysis and transformation",
      "Emphasis on clean data and reproducibility",
      "Organized project structure for future expansion",
    ],
    repoUrl: "https://github.com/seidcubro/data-systems-projects",
    status: "Ongoing",
  },
  {
    title: "Networking & Security Labs",
    description:
      "Hands-on networking and security labs with documentation, diagrams, and written reports.",
    stack: ["Networking", "Security Fundamentals", "Linux", "Git", "Documentation"],
    highlights: [
      "Threat modeling and trust boundary analysis",
      "Structured lab submissions",
      "Security concepts applied in practice",
    ],
    repoUrl: "https://github.com/seidcubro/network-security-labs",
    status: "Ongoing",
  },
  {
    title: "Garage Environmental Monitoring System (IoT)",
    description:
      "IoT system for monitoring and logging environmental conditions in a real-world garage environment.",
    stack: ["IoT", "Sensors", "Monitoring", "Data Logging", "Automation"],
    highlights: [
      "Real-world environmental data tracking",
      "Designed for expansion and alerts",
      "Repository documents system architecture",
    ],
    repoUrl:
      "https://github.com/seidcubro/Seid-Cubro-Garage-Environmental-Monitoring-System",
    status: "Ongoing",
  },
]
