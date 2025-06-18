// App.tsx MODIFICADO

import { ReactLenis } from "lenis/react"
import type { LenisRef } from "lenis/react"
// Se elimina `cancelFrame` y `frame` ya que no se usarán de esa manera
import { useEffect, useRef } from "react"
import Hero from "./components/Hero"
import About from "./components/About"
import Studies from "./components/Studies"
import WorkExperience from "./components/WorkExperience"
import Projects from "./components/Projects"
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Icon } from "@iconify/react/dist/iconify.js"

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
          background: "#fff",
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
        <Studies />
      </main>
      <div className="fixed top-1/2 right-10 z-50 flex flex-col justify-center items-center">
        <div className="rounded-full bg-white/25 bullet-1">
          {/* home */}
          <Icon icon="mdi:home" className="size-6" aria-hidden="true" />
        </div>
        <div className="rounded-full bg-white/25 bullet-2">
          {/* about */}
          <Icon icon="mdi:account" className="size-6" aria-hidden="true" />
        </div>
        <div className="rounded-full bg-white/25 bullet-3">
          {/* Experience */}
          <Icon icon="mdi:briefcase" className="size-6" aria-hidden="true" />
        </div>
        <div className="rounded-full bg-white/25 bullet-4">
          {/* Projects */}
          <Icon icon="mdi:folder" className="size-6" aria-hidden="true" />
        </div>
        <div className="rounded-full bg-white/25 bullet-5">
          {/* studies */}
          <Icon icon="mdi:book" className="size-6" aria-hidden="true" />
        </div>
      </div>
    </ReactLenis>
  )
}

export default App
