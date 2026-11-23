export const links = {
  email: "seidcubro754@gmail.com",
  github: "https://github.com/seidcubro",
  linkedin: "https://www.linkedin.com/in/seid-cubro/",
  resume: "/resume.pdf",
  priorline: "https://priorline.io",
}

export type Role = {
  title: string
  org: string
  place: string
  dates: string
  current?: boolean
  points: string[]
}

export const roles: Role[] = [
  {
    title: "Information Technology Coordinator",
    org: "Evercor Facility Management",
    place: "Wyoming, PA",
    dates: "May 2026 to now",
    current: true,
    points: [
      "Manage IT infrastructure and security for the company.",
      "Run virtualized servers, including a PostgreSQL environment with automated ingestion and BI dashboards.",
      "Build Python and REST API integrations that connect business systems and deliver scheduled reports.",
      "Handle networking, endpoint protection, patching, provisioning, and access control.",
    ],
  },
  {
    title: "B.S. Cloud Computing",
    org: "Wilkes University",
    place: "Wilkes-Barre, PA",
    dates: "Graduating December 2026",
    points: [
      "Minors in Computer Science and Data Science.",
      "Senior capstone: cloud infrastructure lead for an RF signal classification system with industry stakeholders.",
    ],
  },
  {
    title: "Package Handler and Trainer",
    org: "FedEx Ground",
    place: "Pittston, PA",
    dates: "March 2022 to May 2026",
    points: [
      "Four years in high-volume logistics, including a year onboarding and coaching new employees as a trainer.",
    ],
  },
]
