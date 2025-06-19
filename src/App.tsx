import { ReactLenis } from "lenis/react"
import type { LenisRef } from "lenis/react"
import { useEffect, useRef } from "react"
import Hero from "./components/Hero"
import About from "./components/About"
import WorkExperience from "./components/WorkExperience"
import Projects from "./components/Projects"
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Icon } from "@iconify/react/dist/iconify.js"
import { Tooltip } from 'react-tooltip'
import Courses from "./components/Courses"

gsap.registerPlugin(ScrollTrigger)

function App() {
  const lenisRef = useRef<LenisRef>(null)

  useEffect(() => {
    let animationFrameId: number
    function raf(time: number) {
      lenisRef.current?.lenis?.raf(time)
      animationFrameId = requestAnimationFrame(raf)
    }
    animationFrameId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  useGSAP(
    () => {
      ScrollTrigger.defaults({
        trigger: ".wrapper",
      })
      // --- ANIMACIÓN DE BULLETS CORREGIDA ---
      gsap.utils.toArray(".panel").forEach((panel, index) => {
        // Corrección del selector: Seleccionamos el elemento que tiene la clase .bullet-X
        const targetBullet = `.bullet-${index + 1}`

        gsap.to(targetBullet, {
          color: "#fff",
          borderBottomColor: "#fff",
          fontWeight: "bold",
          scrollTrigger: {
            trigger: panel as HTMLElement,
            toggleActions: "play reverse play reverse",
          },
        })
      })
    },
    { dependencies: [lenisRef] }
  )

  

  return (
    <ReactLenis root ref={lenisRef}>
      <main className="flex flex-col items-center bg-black wrapper">
        <Hero />
        <About />
        <WorkExperience />
        <Projects />
        <Courses />
      </main>
      <div className="fixed top-2/6 right-8 z-50 flex flex-col justify-center items-center gap-1 p-2 rounded-full bg-black/25 backdrop-blur-md">
        <a
          href="#home"
          className="text-white/25 border-b-[1px] border-b-white/25 pb-1 bullet-1 hover:scale-110"
           data-tooltip-id="home" data-tooltip-content="Inicio"
        >
          {/* home */}
          <Icon icon="mdi:home" className="size-6" aria-hidden="true" />
        </a>
        <Tooltip place="left" id="home" />

        <a
          href="#about"
          className="text-white/25 border-b-[1px] border-b-white/25 pb-1 hover:scale-110 bullet-2"
          data-tooltip-id="about" data-tooltip-content="Sobre mi"
        >
          {/* about */}
          <Icon icon="material-symbols:info-outline" className="size-6" aria-hidden="true" />
        </a>
        <Tooltip place="left" id="about" />

        <a
          href="#work-experience"
          className="text-white/25 border-b-[1px] border-b-white/25 pb-1 hover:scale-110 bullet-3"
          data-tooltip-id="work-experience" data-tooltip-content="Experiencia"
        >
          {/* Experience */}
          <Icon icon="ix:work-case" className="size-6" aria-hidden="true" />
        </a>
        <Tooltip place="left" id="work-experience" />

        <a
          href="#projects"
          className="text-white/25 border-b-[1px] border-b-white/25 pb-1 hover:scale-110 bullet-4"
          data-tooltip-id="projects" data-tooltip-content="Proyectos"
        >
          {/* Projects */}
          <Icon icon="mdi:folder" className="size-6" aria-hidden="true" />
        </a>
        <Tooltip place="left" id="projects" />

        <a
          href="#courses"
          className="text-white/25 border-b-[1px] border-b-white/25 pb-1 hover:scale-110 bullet-5"
          data-tooltip-id="courses" data-tooltip-content="Cursos"
        >
          {/* courses */}
          <Icon icon="mdi:learn-outline" className="size-6" aria-hidden="true" />
        </a>
        <Tooltip place="left" id="courses" />
      </div>
    </ReactLenis>
  )
}

export default App
