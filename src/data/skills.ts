export type SkillGroup = {
  title: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Cloud & Infrastructure",
    items: ["AWS", "S3", "EC2", "IAM", "SQS", "DynamoDB", "EKS", "Kubernetes", "Docker", "Linux", "systemd", "Caddy", "Vercel"],
  },
  {
    title: "Automation & Data",
    items: ["Python", "pandas", "SQL", "PostgreSQL", "FastAPI", "REST APIs", "ETL pipelines", "BI dashboards"],
  },
  {
    title: "Development & Delivery",
    items: ["Git/GitHub", "GitHub Actions", "Bash", "PowerShell", "TypeScript", "React", "k6 load testing"],
  },
  {
    title: "Networking & Security",
    items: ["TCP/IP", "Subnetting", "Least-privilege IAM", "TLS", "Endpoint protection", "Patch management", "Encryption"],
  },
  {
    title: "Machine Learning",
    items: ["scikit-learn", "Feature engineering", "Walk-forward validation", "Calibration"],
  },
  {
    title: "Spoken Languages",
    items: ["English", "Bosnian", "Romanian", "Spanish"],
  },
]

export const marqueeA = ["AWS", "Kubernetes", "Docker", "Linux", "Python", "PostgreSQL", "FastAPI", "systemd"]
export const marqueeB = ["GitHub Actions", "TypeScript", "React", "DynamoDB", "SQS", "Caddy", "scikit-learn", "k6"]
