# Seid Cubro — Portfolio

Personal portfolio site showcasing my work in Cloud Computing, Software Development, and Data Systems. Built as a clean, single-scroll experience with a strong focus on accessibility, performance, and mobile usability. This site is designed to evolve alongside my coursework and projects and serve as a central reference for internships and professional opportunities.

## Live Site

Deploying on Vercel. Once deployed, the site will be available at:
https://seidcubro.vercel.app

The resume will be accessible directly at:
https://seidcubro.vercel.app/resume.pdf

## Resume

The resume is hosted directly on the site, opens in a new browser tab, and does not rely on any third-party storage or permissions.

Location:
public/resume.pdf

## Tech Stack

Frontend:
- React (TypeScript)
- Vite
- Tailwind CSS (v4)

Styling and UX:
- Mobile-first responsive design
- Custom red, teal, and dark color palette
- Subtle grid and glow background
- Consistent hover and focus states
- Smooth scrolling with reduced-motion support

Accessibility:
- WCAG 2.1 AA–aligned structure
- Semantic landmarks (header, main, nav)
- Keyboard navigation with skip link
- Visible focus indicators
- Reduced motion respected
- Screen-reader friendly navigation state
- Improved color contrast for readability

Tooling and Hosting:
- Git and GitHub
- Vercel for deployment

## Project Structure

react-portfolio/
├─ public/
│  ├─ headshot.png
│  └─ resume.pdf
├─ src/
│  ├─ components/
│  │  ├─ Navbar.tsx
│  │  ├─ Section.tsx
│  │  ├─ ProjectCard.tsx
│  │  ├─ SkillGroupCard.tsx
│  │  └─ Reveal.tsx
│  ├─ sections/
│  │  ├─ Hero.tsx
│  │  ├─ About.tsx
│  │  ├─ Projects.tsx
│  │  ├─ Skills.tsx
│  │  └─ Contact.tsx
│  ├─ data/
│  │  ├─ projects.ts
│  │  └─ skills.ts
│  ├─ App.tsx
│  ├─ main.tsx
│  └─ index.css
└─ README.md

## Featured Content

Projects:
- React Portfolio (this site)
- Cloud Computing Practicum
- Data Systems Projects
- Networking and Security Labs
- Garage Environmental Monitoring System (IoT)

Skills:
- Programming Languages
- Cloud and DevOps
- Data Systems
- Networking and Security
- Spoken Languages

## Mobile Support

The site is fully responsive, optimized for small screens (320px and up), mobile Safari–friendly with safe-area handling and reduced blur, includes large tap targets and wrapped navigation, and does not rely on hover-only interactions.

## Development

Install dependencies:
npm install

Run locally:
npm run dev

Build for production:
npm run build

## Deployment

Deployment is handled via Vercel with automatic builds from the main branch, public assets served from the public directory, and the resume available instantly at /resume.pdf.

## Contact

Email: seidcubro754@gmail.com
GitHub: https://github.com/seidcubro

## Roadmap

Planned improvements include SEO and OpenGraph metadata, an optional custom domain, additional project write-ups, a performance and Lighthouse audit, and expanded data visualizations.

## License

This project is for personal and professional use. Content should not be reused verbatim.

