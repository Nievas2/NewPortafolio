import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Route, Routes } from "react-router-dom"
import type { LenisRef } from "lenis/react"
import { useEffect, useRef } from "react"
import { ReactLenis } from "lenis/react"
import Projects from "./pages/Projects"
import { useGSAP } from "@gsap/react"
import Home from "./pages/Home"
import { gsap } from "gsap"

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
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/proyectos" element={<Projects />} />
      </Routes>
    </ReactLenis>
  )
}

export default App
