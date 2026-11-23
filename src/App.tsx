import type { CSSProperties } from "react"
import { MotionConfig } from "framer-motion"
import Navbar from "./components/Navbar"
import Intro from "./components/Intro"
import CursorGlow from "./components/CursorGlow"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Projects from "./sections/Projects"
import Experience from "./sections/Experience"
import Skills from "./sections/Skills"
import Contact from "./sections/Contact"

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative isolate min-h-screen bg-[#05070f] text-white">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-lg focus:bg-black focus:px-4 focus:py-2"
        >
          Skip to main content
        </a>

        <Intro />

        {/* The site's red and teal, drifting slowly behind everything */}
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div
            className="aurora left-[-12rem] top-[-14rem] h-[34rem] w-[40rem] bg-[rgba(239,68,68,0.2)]"
            style={{ "--dx": "14vw", "--dy": "12vh" } as CSSProperties}
          />
          <div
            className="aurora right-[-14rem] top-[-10rem] h-[30rem] w-[38rem] bg-[rgba(45,212,191,0.16)]"
            style={{ "--dx": "-12vw", "--dy": "16vh", animationDuration: "32s" } as CSSProperties}
          />
          <div
            className="aurora bottom-[-16rem] left-[30%] h-[26rem] w-[34rem] bg-[rgba(239,68,68,0.1)]"
            style={{ "--dx": "10vw", "--dy": "-10vh", animationDuration: "38s" } as CSSProperties}
          />
        </div>
        <CursorGlow />
        <div aria-hidden="true" className="grain pointer-events-none fixed inset-0 -z-10 opacity-[0.07] mix-blend-overlay" />

        <Navbar />

        <main id="main" tabIndex={-1} className="outline-none">
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Skills />
          <Contact />
        </main>
      </div>
    </MotionConfig>
  )
}
