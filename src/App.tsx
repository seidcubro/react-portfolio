import Hero from "./sections/Hero"
import Projects from "./sections/Projects"
import Skills from "./sections/Skills"
import Contact from "./sections/Contact"

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}
