import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { gsap } from "gsap"

import ExperienceJson from "../../assets/mooks/experience.json"
import { ExperienceCard } from "./shared/workExperience/ExperienceCard"
import type { Experience } from "../interfaces/experience"


const WorkExperience = () => {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const experiences: Experience[] = ExperienceJson.map((exp: any) => ({
    ...exp,
    typeWork: exp.typeWork === "FREELANCE" ? "FREELANCE" : "EMPLOYMENT",
  }))
  /* 
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 200]) */
  const textY = useTransform(scrollYProgress, [0, 1], [0, -100])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación de entrada para las tarjetas

      // Animación de los elementos internos
      gsap.fromTo(
        ".card-content",
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".card-content",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      )

      // Animación para las barras de progreso
      gsap.fromTo(
        ".progress-bar",
        {
          scaleX: 0,
          transformOrigin: "left",
        },
        {
          scaleX: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".progress-bar",
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
    className="min-h-screen py-20 px-4 relative overflow-hidden w-full panel"
    ref={sectionRef}
    id="work-experience"
    >
      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        style={{ y: textY }}
      >
        {/* Título */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-6xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent mb-6">
            Experiencia Profesional
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full"></div>
          <p className="text-gray-300 text-lg mt-6 max-w-3xl mx-auto">
            Proyectos reales donde he aplicado mis conocimientos para crear
            soluciones digitales que impactan en el mundo real
          </p>
        </motion.div>

        {/* Timeline de experiences */}
        <div className="relative">
          {/* Línea vertical principal */}
          <div className="hidden sm:static absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-red-500 to-pink-600"></div>

          {/* Experiencias */}
          <div className="space-y-12">
            {experiences.map((experience: Experience, index) => (
              <ExperienceCard
                key={crypto.randomUUID()}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Métricas de experience */}
        <motion.div
          className="flex flex-col md:flex-row justify-center items-center gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center p-6 bg-gradient-to-br from-orange-500/20 to-red-600/20 backdrop-blur-sm rounded-2xl border border-slate-700/30">
            <div className="text-3xl font-bold text-white mb-2">2</div>
            <div className="text-gray-300">Proyectos Completados</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-pink-500/20 to-orange-600/20 backdrop-blur-sm rounded-2xl border border-slate-700/30">
            <div className="text-3xl font-bold text-white mb-2">6+</div>
            <div className="text-gray-300">Tecnologías Utilizadas</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-orange-500/20 to-red-600/20 backdrop-blur-sm rounded-2xl border border-slate-700/30">
            <div className="text-3xl font-bold text-white mb-2">8</div>
            <div className="text-gray-300">Meses de Experiencia</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default WorkExperience
