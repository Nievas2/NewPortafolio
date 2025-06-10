import { ReactLenis } from "lenis/react"
import type { LenisRef } from "lenis/react"
import { cancelFrame, frame } from "framer-motion"
import { useEffect, useRef } from "react"
import Hero from "./components/Hero"
import About from "./components/About"
import WorkExperience from "./components/WorkExperience"

function App() {
  const lenisRef = useRef<LenisRef>(null)

  useEffect(() => {
    function update(data: { timestamp: number }) {
      const time = data.timestamp
      lenisRef.current?.lenis?.raf(time)
    }

    frame.update(update, true)

    return () => cancelFrame(update)
  }, [])

  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      <main className="flex flex-col items-center bg-black">
        <Hero />
        <About />
        <WorkExperience />
      </main>
    </ReactLenis>
  )
}

export default App
