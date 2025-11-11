import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { gsap } from "gsap"
import type { Project } from "../interfaces/project"

import ProjectJson from "../../assets/mooks/projects.json"
import { ProjectCard } from "./shared/home/project/ProjectCard"


const Projects = () => {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const projects = [...ProjectJson]
    .reverse()
    .map((project) => ({
      ...project,
      percentage: project.percentage ?? "",
    }))
  /* 
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 200]) */
  const textY = useTransform(scrollYProgress, [0, 1], [0, -100])

  useEffect(() => {
    const ctx = gsap.context(() => {
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
    className="min-h-screen py-20 px-4 relative overflow-hidden w-full bg-gradient-to-br from-slate-900 via-orange-900/20 to-red-900/20 panel"
      ref={sectionRef}
      id="projects"
    >
      {/* Efectos de fondo */}
      {/*    <motion.div
        className="absolute inset-0 overflow-hidden"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </motion.div> */}

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
            Experiencia en proyectos
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full"></div>
          <p className="text-gray-300 text-lg mt-6 max-w-3xl mx-auto">
            Estos son algunos de mis proyectos personales y profesionales
            destacados.
          </p>
        </motion.div>
        <div className="relative">
          {/* Experiencias */}
          <div className="space-y-12">
            {projects.map((project: Project, index) => (
              <ProjectCard
                key={crypto.randomUUID()}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Projects
