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
  title: "Machine Learning Player Prop Analysis Platform",
  description:
    "Full-stack ML platform that analyzes NFL player prop performance using real statistical data. Built scalable data pipelines, backend APIs, and model workflows for automated analysis and prediction.",
  stack: [
    "Python", "SQL", "Pandas", "ETL","Machine Learning", "AWS", "DynamoDB"
  ],
  highlights: [
    "End-to-end data pipeline (ingestion → feature engineering → training)",
    "Backend API architecture for scalable analytics",
    "Automated model training using real-world sports data",
  ],
  repoUrl: "https://github.com/seidcubro/player-prop-machine-learning-analysis-platform",
  status: "Ongoing",
},

  {
    title: "IoT Cloud Telemetry Platform",
    description:
      "Seid Cubro and Charles Shoppel's IoT Cloud Telemetry Platform project for CS-361 Cloud Computing Practicum at Wilkes University",
    stack: ["IoT", "Networking", "Monitoring", "Data Logging", "Automation", "Security Fundamentals", "AWS"],
    highlights: [
      "Real-world CI/CD pipeline platform",
      "Designed for scalability",
      "Repository documents system architecture",
    ],
    repoUrl:
      "https://github.com/seidcubro/cs361-iot-cloud-telemetry-platform",
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
    status: "Complete",
  },
]
