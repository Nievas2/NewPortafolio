import { useEffect, useRef, useState } from "react"
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import StudiesJson from "../../assets/mooks/studies.json"
import { StudyCard } from "./shared/study/StudyCard"

// Registrar ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const Studies = () => {
  const [showContent, setShowContent] = useState(false)
  const sectionRef = useRef(null)
  const timelineRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  // Este hook controla cuándo el componente debe ser visible
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v > 0.01 && v < 0.99) {
      setShowContent(true)
    } else {
      setShowContent(false)
    }
  })

  const studys = StudiesJson

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.9, 1], [0, 1, 1, 0])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación de la línea de tiempo
      gsap.set(".timeline-line", { scaleY: 0, transformOrigin: "top" })

      ScrollTrigger.create({
        trigger: timelineRef.current,
        start: "top 80%",
        end: "bottom 50%",
        scrub: 1,
        onUpdate: (self) => {
          gsap.to(".timeline-line", {
            scaleY: self.progress,
            duration: 0.3,
            ease: "none",
          })
        },
      })

      // Animaciones de las tarjetas
      gsap.fromTo(
        ".study-card",
        {
          opacity: 0,
          y: 100,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".study-card",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      )

      // Animación de las tecnologías
      gsap.fromTo(
        ".tech-icon",
        {
          opacity: 0,
          scale: 0,
          rotation: -180,
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".tech-icon",
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="min-h-screen w-full py-20 px-4 overflow-hidden"
      style={{
        // Aplica los estilos para ocultar sin desmontar
        visibility: showContent ? "visible" : "hidden",
        pointerEvents: showContent ? "auto" : "none",
      }}
    >
      <>
        {/* Efectos de fondo */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        </div>

        <motion.div
          className="max-w-6xl mx-auto relative z-10"
          style={{ y, opacity }}
        >
          {/* Título */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
              Mi Formación
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
              Un recorrido por mi crecimiento profesional y las instituciones
              que han sido parte de mi desarrollo como desarrollador
            </p>
          </motion.div>

          {/* Timeline */}
          <div ref={timelineRef} className="relative">
            {/* Línea central */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 timeline-line"></div>

            {/* Estudios */}
            <div className="space-y-8">
              {studys.map((study, index) => (
                <StudyCard key={study.id} study={study} index={index} />
              ))}
            </div>
          </div>

          {/* Estadísticas */}
          <motion.div
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-center p-6 bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-sm rounded-2xl border border-gray-700/30">
              <div className="text-3xl font-bold text-white mb-2">4</div>
              <div className="text-gray-300">Formaciones Completadas</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-500/20 to-pink-600/20 backdrop-blur-sm rounded-2xl border border-gray-700/30">
              <div className="text-3xl font-bold text-white mb-2">12+</div>
              <div className="text-gray-300">Tecnologías Aprendidas</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-pink-500/20 to-blue-600/20 backdrop-blur-sm rounded-2xl border border-gray-700/30">
              <div className="text-3xl font-bold text-white mb-2">+2</div>
              <div className="text-gray-300">Años de Formación</div>
            </div>
          </motion.div>
        </motion.div>
      </>
    </section>
  )
}

export default Studies
