import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Projects from "./sections/Projects"
import Skills from "./sections/Skills"
import Contact from "./sections/Contact"

export default function App() {
  return (
    <div className="relative isolate min-h-screen bg-slate-950 text-slate-100">
      <a
        href="#projects"
        className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-slate-900 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage:
            "radial-gradient(70rem 45rem at 15% 10%, rgba(248,113,113,0.20), transparent 60%)," +
            "radial-gradient(50rem 35rem at 85% 15%, rgba(239,68,68,0.18), transparent 55%)",
        }}
      />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  )
}
