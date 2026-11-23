export type Project = {
  slug: string
  title: string
  kicker: string
  description: string
  stack: string[]
  highlights: string[]
  pipeline?: string[]
  stats?: { value: string; label: string }[]
  repoUrl: string
  liveUrl?: string
  liveLabel?: string
  status: "Live" | "Complete" | "In progress"
}

export const featured: Project[] = [
  {
    slug: "priorline",
    title: "PriorLine",
    kicker: "Machine learning platform · built and run solo",
    description:
      "NFL player prop projections, in production with no manual steps. It pulls every line the books post, projects what each player will do, and grades every pick against the price it was offered at. The full record is public, losing weeks included.",
    stack: ["Python", "FastAPI", "PostgreSQL", "scikit-learn", "React", "TypeScript", "Docker Compose", "Caddy", "GitHub Actions", "Vercel"],
    highlights: [
      "Five systemd timers ingest, rebuild features, retrain, grade, and audit data freshness. A stale input fails the run.",
      "Each market's model is chosen by walk-forward cross-validation and only replaced on a win larger than one standard error.",
      "Server sized from measured memory: peak ingest cut from 4.2 GB to 3.6 GB.",
    ],
    pipeline: ["nflverse", "Features", "Models", "Board", "API", "Web"],
    stats: [
      { value: "340+", label: "commits" },
      { value: "12,000+", label: "graded picks" },
      { value: "11", label: "models, retrained weekly" },
      { value: "5", label: "seasons of data" },
    ],
    repoUrl: "https://github.com/seidcubro/priorline",
    liveUrl: "https://priorline.io",
    liveLabel: "Visit priorline.io",
    status: "Live",
  },
  {
    slug: "telemetry",
    title: "IoT Telemetry Platform",
    kicker: "Cloud, infrastructure and security lead · two-person team",
    description:
      "An event-driven sensor pipeline on AWS. An ESP32 streams temperature and humidity through three containerized Python services running on Kubernetes.",
    stack: ["AWS", "Kubernetes", "SQS", "DynamoDB", "ECR", "Docker", "Python", "k6"],
    highlights: [
      "A queue separates ingestion from storage, so a traffic spike never hits the database directly.",
      "API-key-protected ingestion, threshold alerts, and an OpenAPI contract.",
      "Validated on a local cluster with autoscaling, then load-tested with k6 to 150 concurrent virtual users.",
    ],
    pipeline: ["ESP32", "Ingest", "SQS", "Worker", "DynamoDB", "API"],
    stats: [
      { value: "3", label: "containerized services" },
      { value: "150", label: "virtual users in load test" },
    ],
    repoUrl: "https://github.com/seidcubro/cs361-iot-cloud-telemetry-platform",
    status: "Complete",
  },
]

export const more: Project[] = [
  {
    slug: "capstone",
    title: "RF Signal Classification",
    kicker: "Senior capstone · cloud infrastructure lead",
    description:
      "Cloud architecture for a three-person team with industry stakeholders: versioned S3 storage for large RF datasets, EC2 compute for training, least-privilege IAM, and secure lab-to-cloud connectivity.",
    stack: ["Amazon S3", "EC2", "IAM", "CI/CD"],
    highlights: [],
    repoUrl: "",
    status: "In progress",
  },
  {
    slug: "portfolio",
    title: "This site",
    kicker: "React portfolio",
    description:
      "React and TypeScript, built with Vite and Tailwind, animated with Motion, and deployed on Vercel with a custom domain.",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Motion", "Vercel"],
    highlights: [],
    repoUrl: "https://github.com/seidcubro/react-portfolio",
    status: "Live",
  },
]
