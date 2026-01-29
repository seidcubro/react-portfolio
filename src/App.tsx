import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import Projects from "./sections/Projects"
import Skills from "./sections/Skills"
import Contact from "./sections/Contact"

export default function App() {
  return (
    <div className="relative isolate min-h-screen bg-slate-950 text-slate-100">
      {/* background glow */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage:
            "radial-gradient(70rem 45rem at 15% 10%, rgba(56,189,248,0.22), transparent 60%)," +
            "radial-gradient(50rem 35rem at 85% 15%, rgba(168,85,247,0.20), transparent 55%)",
        }}
      />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  )
}
