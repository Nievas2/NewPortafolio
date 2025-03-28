import { motion } from "framer-motion"
import Link from "next/link"
import { useEffect, useRef } from "react"
import Typed from "typed.js"

const HeroSection = () => {
  const downloadCV = () => {
    const url = "/archives/Cv Angel Gabriel Nievas.pdf"
    const link = document.createElement("a")
    link.href = url
    link.setAttribute("download", "Cv Angel Gabriel Nievas.pdf")
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Frontend Developer"],
      typeSpeed: 50,
      backSpeed: 50,
      showCursor: false,
    })

    return () => {
      typed.destroy()
    }
  }, [])
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container relative z-10 px-4"
      >
        <h1 className="text-6xl leading-tight md:text-8xl md:leading-[130px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
          Angel Gabriel Nievas
        </h1>
        <p className="mt-4 text-2xl md:text-4xl text-blue-200" ref={el}></p>
        <div className="mt-8">
          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="#contact"
              className="px-6 py-3 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition-colors"
            >
              Contáctame
            </Link>
            <Link
              href="#projects"
              className="px-6 py-3 border border-blue-600 rounded-full text-white hover:bg-blue-600 transition-colors"
            >
              Ver proyectos
            </Link>
            <button
              onClick={downloadCV}
              className="px-6 py-3 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition-colors w-fit"
            >
              Descargar CV
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
export default HeroSection
