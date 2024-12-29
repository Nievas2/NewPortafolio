import { Icon } from "@iconify/react/dist/iconify.js"
import TechnologiesJson from "../../assets/mooks/technologies.json"
import { motion } from "framer-motion"
const TechnologiesSection = () => {
  return (
    <section
      id="technologies"
      className="py-20 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />
      </div>

      <div className="flex flex-col w-full px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-white">
          Tecnologías
        </h2>

        <div className="flex flex-col flex-wrap w-full">
          {/* Main technologies */}
          <div className="mb-16">
            <h3 className="text-xl text-blue-400 mb-8 text-center">
              Principales Tecnologías
            </h3>
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {TechnologiesJson.main.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity" />
                  <div className="relative flex flex-col items-center p-4">
                    <div className="w-16 h-16 flex items-center justify-center mb-3">
                      <Icon icon={tech.icon} className="w-12 h-12" />
                    </div>
                    <h4 className="font-semibold text-blue-400">{tech.name}</h4>
                    
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Skills circles */}
          <div>
            <h3 className="text-xl text-blue-400 mb-8 text-center">
              Otras Habilidades
            </h3>
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {TechnologiesJson.technologies.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: index * 0.1,
                  }}
                  whileHover={{ scale: 1.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div
                    className={`relative w-24 h-24 rounded-full flex items-center justify-center
                        bg-gradient-to-br from-blue-900/50 to-blue-800/30
                        border border-blue-700/50
                        hover:border-blue-500/50 transition-colors
                      `}
                  >
                    <span className="text-sm text-blue-300 text-center px-2">
                      {skill.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default TechnologiesSection
