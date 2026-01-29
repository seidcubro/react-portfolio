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
    title: "React Portfolio (this site)",
    description:
      "Single-scroll portfolio built with React + TypeScript and deployed on Vercel.",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Vercel"],
    highlights: [
      "Data-driven project cards and clean section layout",
      "Responsive UI with consistent spacing and typography",
      "Simple deployment workflow (push to deploy)",
    ],
    repoUrl: "https://github.com/seidcubro/react-portfolio",
    liveUrl: "", 
    status: "Ongoing",
  },
  {
    title: "Cloud Computing Practicum Coursework",
    description:
      "Coursework repository covering containerization, services, and cloud toolchain labs.",
    stack: ["Linux", "Docker", "Git", "Networking", "Cloud Fundamentals"],
    highlights: [
      "Lab deliverables with reports and evidence",
      "Containerized services and local testing workflow",
      "Repository structure designed for iterative labs",
    ],
    repoUrl: "https://github.com/seidcubro/cloud-computing-practicum",
    status: "Ongoing",
  },
  {
    title: "Data Systems Projects",
    description:
      "Data-focused projects covering analysis, pipelines, and structured datasets.",
    stack: ["Python", "SQL", "Pandas", "ETL", "Data Modeling"],
    highlights: [
      "Dataset exploration and comparative analysis",
      "Cleaned datasets and documented workflows",
      "Projects organized for reproducibility",
    ],
    repoUrl: "https://github.com/seidcubro/data-systems-projects",
    status: "Ongoing",
  },
]
