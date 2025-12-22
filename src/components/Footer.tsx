import { Icon } from "@iconify/react"
import { motion, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"

const Footer = () => {
  const containerRef = useRef(null)
  const [copied, setCopied] = useState(false)

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Nievas2",
      icon: "mdi:github",
      color: "from-gray-500 to-gray-700",
      hoverColor: "group-hover:from-purple-500 group-hover:to-pink-600",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/gabriel-nievas/",
      icon: "mdi:linkedin",
      color: "from-blue-500 to-blue-700",
      hoverColor: "group-hover:from-blue-400 group-hover:to-cyan-600",
    },
    {
      name: "Gmail",
      url: "mailto:angelgabrielnievas@gmail.com",
      icon: "mdi:gmail",
      color: "from-red-500 to-red-700",
      hoverColor: "group-hover:from-pink-500 group-hover:to-red-600",
    },
  ]

  const handleCopyEmail = () => {
    const email = "angelgabrielnievas@gmail.com"
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 5,
  }))

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-slate-900 via-orange-900/10 to-red-900/10">
      <motion.div
        className="text-center pt-20 pb-16 px-4"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent mb-6">
          Este fue mi viaje hasta ahora
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex mx-auto mb-6"></div>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
          Gracias por tomarte el tiempo de conocerme y revisar mi portafolio.
          Espero que mi experiencia y proyectos hayan sido de tu interés. Si
          tienes alguna pregunta o deseas conectar, no dudes en contactarme.
          ¡Estoy emocionado por las oportunidades futuras y por seguir creciendo
          en este apasionante campo de la tecnología!
        </p>
      </motion.div>

      <div ref={containerRef} className="relative pb-16">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: particle.size,
                height: particle.size,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="relative max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 md:gap-16 w-full">
            {socialLinks.map((social, index) => {
              const isGmail = social.name === "Gmail"

              return (
                <motion.div
                  key={social.name}
                  className="flex flex-col items-center justify-center w-fit"
                  initial={{ opacity: 0, y: 50, rotateY: -90 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  {isGmail ? (
                    <motion.button
                      type="button"
                      onClick={handleCopyEmail}
                      className="group relative block cursor-pointer"
                      whileHover="hover"
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Círculos decorativos */}
                      <motion.div className="absolute inset-0 rounded-full border-2 border-orange-500/30" />
                      <motion.div className="absolute inset-0 rounded-full border border-red-500/20" />

                      {/* Botón principal */}
                      <motion.div
                        className={`relative flex flex-col items-center justify-center size-32 rounded-full bg-gradient-to-br ${social.color} ${social.hoverColor} transition-all duration-500 shadow-2xl overflow-hidden`}
                      >
                        {/* Efecto de brillo */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:opacity-100 opacity-0"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "200%" }}
                          transition={{ duration: 0.8 }}
                        />

                        {/* Ícono animado */}
                        <motion.div
                          className="relative z-10"
                          variants={{
                            rest: {
                              rotate: 0,
                              transition: { duration: 0.3, ease: "easeOut" },
                            },
                            hover: {
                              rotate: [0, -10, 10, -10, 0],
                              transition: {
                                duration: 0.5,
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "easeInOut",
                              },
                            },
                          }}
                        >
                          <Icon
                            icon={social.icon}
                            className="w-12 h-12 text-white"
                          />
                        </motion.div>

                        {/* Texto de nombre / Aviso Copiado */}
                        <span className="relative text-white font-semibold text-sm mt-2 lg:group-hover:opacity-100 opacity-100 lg:opacity-0 transition-all duration-300 lg:translate-y-2.5 lg:group-hover:translate-y-0 z-50">
                          {isGmail && copied ? "¡Copiado!" : social.name}
                        </span>

                        {/* Tooltip flotante para Gmail */}
                        <AnimatePresence>
                          {isGmail && copied && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: -20 }}
                              exit={{ opacity: 0 }}
                              className="absolute -top-2 bg-white text-black text-[10px] font-bold py-1 px-2 rounded shadow-xl uppercase tracking-tighter z-50"
                            >
                              ¡Hecho!
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Partículas al hover */}
                        <motion.div
                          className="absolute inset-0"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                        >
                          {[...Array(8)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-1 h-1 bg-white rounded-full"
                              style={{ left: "50%", top: "50%" }}
                              animate={{
                                x: [0, Math.cos((i * Math.PI * 2) / 8) * 45],
                                y: [0, Math.sin((i * Math.PI * 2) / 8) * 45],
                                opacity: [1, 0],
                              }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                delay: i * 0.1,
                              }}
                            />
                          ))}
                        </motion.div>
                      </motion.div>
                    </motion.button>
                  ) : (
                    <motion.a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative block cursor-pointer"
                      whileHover="hover"
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Círculos decorativos */}
                      <motion.div className="absolute inset-0 rounded-full border-2 border-orange-500/30" />
                      <motion.div className="absolute inset-0 rounded-full border border-red-500/20" />

                      {/* Botón principal */}
                      <motion.div
                        className={`relative flex flex-col items-center justify-center size-32 rounded-full bg-gradient-to-br ${social.color} ${social.hoverColor} transition-all duration-500 shadow-2xl overflow-hidden`}
                      >
                        {/* Efecto de brillo */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:opacity-100 opacity-0"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "200%" }}
                          transition={{ duration: 0.8 }}
                        />

                        {/* Ícono animado */}
                        <motion.div
                          className="relative z-10"
                          variants={{
                            rest: {
                              rotate: 0,
                              transition: { duration: 0.3, ease: "easeOut" },
                            },
                            hover: {
                              rotate: [0, -10, 10, -10, 0],
                              transition: {
                                duration: 0.5,
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "easeInOut",
                              },
                            },
                          }}
                        >
                          <Icon
                            icon={social.icon}
                            className="w-12 h-12 text-white"
                          />
                        </motion.div>

                        {/* Texto de nombre / Aviso Copiado */}
                        <span className="relative z-50 text-white font-semibold text-sm mt-2 lg:group-hover:opacity-100 opacity-100 lg:opacity-0 transition-all duration-300 lg:translate-y-2.5 lg:group-hover:translate-y-0">
                          {isGmail && copied ? "¡Copiado!" : social.name}
                        </span>

                        {/* Partículas al hover */}
                        <motion.div
                          className="absolute inset-0"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                        >
                          {[...Array(8)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-1 h-1 bg-white rounded-full"
                              style={{ left: "50%", top: "50%" }}
                              animate={{
                                x: [0, Math.cos((i * Math.PI * 2) / 8) * 45],
                                y: [0, Math.sin((i * Math.PI * 2) / 8) * 45],
                                opacity: [1, 0],
                              }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                delay: i * 0.1,
                              }}
                            />
                          ))}
                        </motion.div>
                      </motion.div>
                    </motion.a>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>

        <motion.div
          className="relative max-w-4xl mx-auto mt-16 h-px overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      </div>

      <footer className="text-center py-8 px-4 border-t border-gray-700/50">
        <motion.p
          className="text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          © 2025 - Casi todos los derechos reservados
        </motion.p>
      </footer>
    </section>
  )
}

export default Footer
