import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Projects from "./sections/Projects"
import Skills from "./sections/Skills"
import Contact from "./sections/Contact"

export default function App() {
  return (
    <div className="relative isolate min-h-screen bg-[#05070f] text-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-black/90 focus:px-4 focus:py-2 focus:text-white focus:ring-2 focus:ring-red-400"
      >
        Skip to main content
      </a>

      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage:
            "radial-gradient(60rem 40rem at 15% 10%, rgba(239,68,68,0.22), transparent 60%)," +
            "radial-gradient(55rem 35rem at 85% 15%, rgba(45,212,191,0.18), transparent 58%)," +
            "radial-gradient(40rem 30rem at 50% 95%, rgba(239,68,68,0.12), transparent 55%)",
        }}
      />

      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.08] sm:opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), " +
            "linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(70% 60% at 50% 20%, black 40%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(70% 60% at 50% 20%, black 40%, transparent 75%)",
        }}
      />

      <div className="relative z-10">
        <Navbar />

        <main id="main" className="outline-none" tabIndex={-1}>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
      </div>
    </div>
  )
}
