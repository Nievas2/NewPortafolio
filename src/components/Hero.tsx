import { Icon } from "@iconify/react/dist/iconify.js"
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion"
import gsap from "gsap"
import { useEffect, useRef, useState } from "react"

const Hero = () => {
  const fullstackRef = useRef<HTMLHeadingElement>(null)
  const div = useRef<HTMLDivElement>(null)
  const [showWhiteMask, setShowWhiteMask] = useState(true)
  const [showContent, setShowContent] = useState(false)

  const { scrollYProgress } = useScroll({
    target: div,
  })

  const downloadCV = () => {
    const url = "/archives/Cv Angel Gabriel Nievas.pdf"
    const link = document.createElement("a")
    link.href = url
    link.setAttribute("download", "Cv Angel Gabriel Nievas.pdf")
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Nievas2",
      icon: (
        <Icon
          icon="mdi:github"
          className="w-6 h-6 "
          style={{ color: "#fbfbfb" }}
          aria-hidden="true"
        />
      ),
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/gabriel-nievas/",
      icon: (
        <Icon
          icon="mdi:linkedin"
          className="w-6 h-6 "
          style={{ color: "#fbfbfb" }}
          aria-hidden="true"
        />
      ),
    },
    {
      name: "Email",
      url: "mailto:angelgabrielnievas@gmail.com",
      icon: (
        <Icon
          icon="mdi:email"
          className="w-6 h-6 "
          style={{ color: "#fbfbfb" }}
          aria-hidden="true"
        />
      ),
    },
  ]

  /* Animations */
  const maskSize = useTransform(
    scrollYProgress,
    [0, 0.1, 0.25, 0.4, 0.75],
    ["18000%", "10000%", "4000%", "300%", "40%"]
  )

  const maskOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0])
  const textOpacity = useTransform(
    scrollYProgress,
    [0.25, 0.4, 0.9, 1],
    [0, 1, 1, 0]
  )
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2],
    [1, 0.1, 0]
  )

  const role = useTransform(scrollYProgress, [0.5, 1], [0, 1])
  const roleOpacity = useTransform(
    scrollYProgress,
    [0, 0.7, 0.71, 0.99, 1],
    [0, 0, 1, 1, 0]
  )

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v >= 0 && v < 0.99) return setShowWhiteMask(true)
    if (v > 0.99) return setShowWhiteMask(false)
  })

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v > 0.12 && v < 0.99) return setShowContent(true)
    if (v > 0 && v < 0.12) return setShowContent(false)
    if (v > 0.99) return setShowContent(false)
  })

  useEffect(() => {
    // Estado inicial al montar el componente
    const spans = fullstackRef.current?.querySelectorAll(".role-animation")
    if (spans) {
      gsap.set(spans, {
        y: -80,
        opacity: 0,
      })
    }

    const unsub = role.on("change", (v) => {
      if (spans) {
        if (v > 0.3) {
          gsap.to(spans, {
            y: 0,
            opacity: 1,
            stagger: 0.07,
            ease: "bounce.out",
            duration: 0.1,
          })
        } else {
          gsap.set(spans, {
            y: -80,
            opacity: 0,
          })
        }
      }
    })
    return () => unsub()
  }, [role])

  return (
    <>
      <div
        className="bg-black text-white max-w-8xl w-full min-h-[500vh] relative"
        style={{
          // Aplica los estilos para ocultar sin desmontar
          visibility: showWhiteMask ? "visible" : "hidden",
          pointerEvents: showWhiteMask ? "auto" : "none",
        }}
        ref={div}
      >
        <motion.div
          className="flex justify-center fixed items-start w-full h-screen inset-0 z-0 bg-[url('/images/portada.png')] bg-no-repeat bg-center bg-cover"
          style={{
            maskImage: "url('/images/name.png')",
            maskRepeat: "no-repeat",
            maskPosition: "50% 20%",
            maskSize: maskSize,
            opacity: maskOpacity,
          }}
        >
          <motion.div
            className="flex flex-col items-center justify-center text-2xl h-full space-y-8 px-4"
            style={{
              opacity: contentOpacity,
            }}
          >
            {/* Logo/Nombre */}
            <motion.img
              className="w-32 md:w-40 drop-shadow-2xl"
              src="/images/name.png"
              alt="Angel Gabriel Nievas"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />

            {/* Descripción breve */}
            <motion.div
              className="text-center max-w-md"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p className="text-lg text-gray-200 leading-relaxed mb-2">
                Desarrollador Fullstack
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                Creando experiencias digitales con tecnologías modernas
              </p>
            </motion.div>

            {/* Redes Sociales */}
            <motion.div
              className="flex space-x-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 border border-white/20"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                >
                  {social.icon}
                  <span className="sr-only">{social.name}</span>
                </motion.a>
              ))}
            </motion.div>

            {/* Botón de CV mejorado */}
            <motion.button
              onClick={downloadCV}
              className="flex justify-center items-center group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <span className=" bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="flex items-center space-x-2">
                <Icon icon="mdi:download" className="w-6 h-6" />
                <span>Descargar CV</span>
              </span>
            </motion.button>

            {/* Indicador de scroll */}
            <motion.div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <motion.div
                className="flex flex-col items-center text-white/60"
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="text-sm mb-2">Scroll para explorar</span>
                <Icon icon="mdi:arrow-down" className="w-6 h-6" />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full h-screen fixed inset-0 z-0 bg-white bg-no-repeat bg-center bg-cover pointer-events-none"
          style={{
            maskImage: "url('/images/name.png')",
            maskRepeat: "no-repeat",
            maskPosition: "50% 20%",
            maskSize: maskSize,
            opacity: textOpacity,
          }}
        ></motion.div>

        {showContent && (
          <motion.div
            className="w-full h-screen fixed flex justify-center items-end pb-20 inset-0 z-0"
            style={{
              opacity: roleOpacity,
            }}
          >
            <div className="text-center z-50 font-anta font-bold">
              <h1 ref={fullstackRef}>
                {"FULLSTACK".split("").map((char) => (
                  <span
                    key={crypto.randomUUID()}
                    className="inline-block text-white text-5xl role-animation"
                    style={{
                      opacity: 0.25,
                    }}
                  >
                    {char}
                  </span>
                ))}
              </h1>
            </div>
          </motion.div>
        )}
      </div>
    </>
  )
}

export default Hero
