import { useRef } from "react"
import type { Study } from "../../../interfaces/study"
import { useInView } from "framer-motion"
import { motion } from "framer-motion"
import { Icon } from "@iconify/react/dist/iconify.js"

export const StudyCard = ({
  study,
  index,
}: {
  study: Study
  index: number
}) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={cardRef}
      className={`w-full relative flex ${
        index % 2 === 0 ? "justify-center lg:justify-start" : "justify-center lg:justify-end"
      } mb-16`}
    >
      {/* Punto de conexión */}
      <div className="absolute -top-10 lg:top-8 lg:left-1/2 transform lg:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-gray-900 z-10 shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-ping opacity-75"></div>
      </div>

      {/* Tarjeta */}
      <motion.div
        className={`w-full max-w-md bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-gray-700/30 ${
          index % 2 === 0 ? "mr-0 lg:mr-8" : "ml-0 lg:ml-8"
        }`}
        whileHover={{
          scale: 1.02,
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
          background:
            "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%)",
        }}
        initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
        animate={
          isInView
            ? { opacity: 1, x: 0 }
            : { opacity: 0, x: index % 2 === 0 ? -100 : 100 }
        }
        transition={{ duration: 0.8, delay: index * 0.2 }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              {/* <Award className="w-6 h-6 text-white" /> */}
              <Icon icon="tabler:award" className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{study.name}</h3>
              <div className="flex items-center text-gray-400 text-sm">
                {/*  <Calendar className="w-4 h-4 mr-1" /> */}
                <Icon icon="tabler:calendar" className="w-4 h-4 mr-1" />
                {study.dateI} - {study.dateF} {study.dateYear}
              </div>
            </div>
          </div>
        </div>

        {/* Imagen */}
        <div className="relative mb-4 rounded-xl overflow-hidden group">
          <img
            src={study.src}
            alt={study.title}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Título */}
        <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
          {/* 
            <Code className="w-5 h-5 mr-2 text-blue-400" /> */}
          <Icon icon="tabler:code" className="w-5 h-5 mr-2 text-blue-400" />
          {study.title}
        </h4>

        {/* Descripción */}
        <p className="text-gray-300 text-sm leading-relaxed mb-4">
          {study.description}
        </p>

        {/* Tecnologías */}
        <div className="flex flex-wrap gap-2">
          {study.tecnologies.map((tech, techIndex) => (
            <motion.div
              key={techIndex}
              className="tech-icon relative group"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src={tech.src}
                alt={tech.name}
                className="w-8 h-8 transition-transform duration-200"
              />
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                {tech.name}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
