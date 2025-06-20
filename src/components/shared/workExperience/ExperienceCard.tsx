import { useRef, useState } from "react"
import type { Experience } from "../../../interfaces/experience"
import { motion } from "framer-motion"
import { ImageModal } from "../ImageModal"


export const ExperienceCard = ({
  experience,
  index,
}: {
  experience: Experience
  index: number
}) => {
  const cardRef = useRef(null)
  const [showDetails, setShowDetails] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const getRoleColor = (role: string) => {
    switch (role) {
      case "FRONTEND":
        return "from-green-500 to-teal-600"
      case "BACKEND":
        return "from-blue-500 to-indigo-600"
      case "FULL STACK":
        return "from-purple-500 to-pink-600"
      default:
        return "from-gray-500 to-gray-600"
    }
  }

  // Manejar tecla ESC para cerrar modal
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsModalOpen(false)
    }
  }

  // Agregar/remover event listener para tecla ESC
  useState(() => {
    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown)
      // Prevenir scroll del body cuando el modal está abierto
      document.body.style.overflow = 'hidden'
    } else {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  })
  return (
    <>
      <motion.div
        ref={cardRef}
        className="experience-card relative mb-8"
        transition={{ duration: 1.2, delay: index * 0.3 }}
      >
        {/* Tarjeta principal */}
        <motion.div
          className="bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-slate-700/50 relative overflow-hidden"
        >
          {/* Efecto de brillo */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Columna izquierda - Info principal */}
            <div className="lg:col-span-2 space-y-6">
              {/* Header */}
              <div className="card-content">
                <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`px-4 py-2 bg-gradient-to-r ${getRoleColor(
                        experience.role
                      )} rounded-full flex items-center space-x-2 text-white font-semibold text-sm shadow-lg`}
                    >
                      <span>{experience.role}</span>
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      {experience.dateI} - {experience.dateF}{" "}
                      {experience.dateYear}
                    </div>
                  </div>
                  {experience.link && (
                    <motion.a
                      href={experience.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg text-white font-medium hover:shadow-lg transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span>Ver Proyecto</span>
                    </motion.a>
                  )}
                </div>

                <h3 className="text-3xl font-bold text-white mb-2">
                  {experience.name}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {experience.description}
                </p>
              </div>

              {/* Tecnologías */}
              <div className="card-content">
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  Stack Tecnológico
                </h4>
                <div className="flex flex-wrap gap-3">
                  {experience.tecnologies.map((tech) => (
                    <motion.div
                      key={crypto.randomUUID()}
                      className="flex items-center space-x-2 bg-slate-800/80 px-4 py-2 rounded-lg border border-slate-600/50 hover:border-orange-500/50 transition-all duration-300 cursor-pointer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <img src={tech.src} alt={tech.name} className="w-6 h-6" />
                      <span className="text-gray-300 font-medium">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Detalles expandibles */}
              <div className="card-content">
                <motion.button
                  onClick={() => setShowDetails(!showDetails)}
                  className="flex items-center space-x-2 text-orange-400 hover:text-orange-300 font-semibold transition-colors duration-300 cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  <span>Ver Detalles del Proyecto</span>
                  <motion.div
                    animate={{ rotate: showDetails ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </motion.button>

                <motion.div
                  initial={false}
                  animate={{
                    height: showDetails ? "auto" : 0,
                    opacity: showDetails ? 1 : 0,
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pt-6 grid md:grid-cols-2 gap-6">
                    {/* Frontend Tasks */}
                    {experience.frontend && (
                      <div className="space-y-3">
                        <h5 className="text-lg font-semibold text-green-400 flex items-center">
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          Frontend
                        </h5>
                        <div className="space-y-2">
                          {experience.frontend.map((task, idx) => (
                            <motion.div
                              key={crypto.randomUUID()}
                              className="flex items-start space-x-3 p-3 bg-slate-800/50 rounded-lg"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                            >
                              <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-gray-300 text-sm">
                                {task.description}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Backend Tasks */}
                    {experience.backend && (
                      <div className="space-y-3">
                        <h5 className="text-lg font-semibold text-blue-400 flex items-center">
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                          </svg>
                          Backend
                        </h5>
                        <div className="space-y-2">
                          {experience.backend.map((task, idx) => (
                            <motion.div
                              key={crypto.randomUUID()}
                              className="flex items-start space-x-3 p-3 bg-slate-800/50 rounded-lg"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                            >
                              <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-gray-300 text-sm">
                                {task.description}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Columna derecha - Imagen */}
            <div className="card-content">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <motion.div
                  className="relative overflow-hidden rounded-2xl border border-slate-600/50 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setIsModalOpen(true)}
                >
                  <img
                    src={experience.src ?? ""}
                    alt={experience.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay con indicador de zoom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.div
                      className="bg-white/20 backdrop-blur-sm rounded-full p-3"
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Indicador de "Click para ampliar" */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-black/60 text-white text-xs px-2 py-1 rounded-full">
                      Click para ampliar
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Progreso visual */}
              <div className="mt-6 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Progreso del Proyecto</span>
                  <span className="text-orange-400 font-semibold">100%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="progress-bar bg-gradient-to-r from-orange-500 to-red-600 h-2 rounded-full w-full"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Modal de imagen */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageSrc={experience.src ?? ""}
        imageAlt={experience.name}
        projectName={experience.name}
      />
    </>
  )
}