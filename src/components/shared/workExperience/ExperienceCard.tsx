import { useRef, useState } from "react"
import type { Project } from "../../../interfaces/project"
import { motion } from "framer-motion"

export const ExperienceCard = ({
  experiencia,
  index,
}: {
  experiencia: Project
  index: number
}) => {
  const cardRef = useRef(null) /* 
    const isInView = useInView(cardRef, { once: true, amount: 0.2 }) */
  const [showDetails, setShowDetails] = useState(false)

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

  return (
    <motion.div
      ref={cardRef}
      className="experience-card relative mb-8"
      transition={{ duration: 1.2, delay: index * 0.3 }}
    >
      {/* Tarjeta principal */}
      <motion.div
        className="bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-slate-700/50 ml-8 relative overflow-hidden"
        whileHover={{
          scale: 1.02,
          boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.6)",
        }}
        transition={{ duration: 0.4 }}
      >
        {/* Efecto de brillo */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Columna izquierda - Info principal */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <div className="card-content">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div
                    className={`px-4 py-2 bg-gradient-to-r ${getRoleColor(
                      experiencia.role
                    )} rounded-full flex items-center space-x-2 text-white font-semibold text-sm shadow-lg`}
                  >
                    {/* 
                      {getRoleIcon(experiencia.role)} */}
                    <span>{experiencia.role}</span>
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    {/* 
                      <Calendar className="w-4 h-4 mr-2" /> */}
                    {experiencia.dateI} - {experiencia.dateF}{" "}
                    {experiencia.dateYear}
                  </div>
                </div>
                {experiencia.link && (
                  <motion.a
                    href={experiencia.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg text-white font-medium hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* 
                      <ExternalLink className="w-4 h-4" /> */}
                    <span>Ver Proyecto</span>
                  </motion.a>
                )}
              </div>

              <h3 className="text-3xl font-bold text-white mb-2">
                {experiencia.name}
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {experiencia.description}
              </p>
            </div>

            {/* Tecnologías */}
            <div className="card-content">
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                {/* <Star className="w-5 h-5 mr-2 text-yellow-500" /> */}
                Stack Tecnológico
              </h4>
              <div className="flex flex-wrap gap-3">
                {experiencia.tecnologies.map((tech) => (
                  <motion.div
                    key={crypto.randomUUID()}
                    className="flex items-center space-x-2 bg-slate-800/80 px-4 py-2 rounded-lg border border-slate-600/50 hover:border-orange-500/50 transition-all duration-300"
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
                className="flex items-center space-x-2 text-orange-400 hover:text-orange-300 font-semibold transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <span>Ver Detalles del Proyecto</span>
                <motion.div
                  animate={{ rotate: showDetails ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* 
                    <ChevronRight className="w-5 h-5" /> */}
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
                  {experiencia.frontend && (
                    <div className="space-y-3">
                      <h5 className="text-lg font-semibold text-green-400 flex items-center">
                        {/* 
                          <Monitor className="w-5 h-5 mr-2" /> */}
                        Frontend
                      </h5>
                      <div className="space-y-2">
                        {experiencia.frontend.map((task, idx) => (
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
                  {experiencia.backend && (
                    <div className="space-y-3">
                      <h5 className="text-lg font-semibold text-blue-400 flex items-center">
                        {/* 
                          <Server className="w-5 h-5 mr-2" /> */}
                        Backend
                      </h5>
                      <div className="space-y-2">
                        {experiencia.backend.map((task, idx) => (
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
                className="relative overflow-hidden rounded-2xl border border-slate-600/50"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={experiencia.src ?? ""}
                  alt={experiencia.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            </div>

            {/* Progreso visual */}
            <div className="mt-6 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Progreso del Proyecto</span>
                <span className="text-orange-400 font-semibold">100%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div className="progress-bar bg-gradient-to-r from-orange-500 to-red-600 h-2 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
