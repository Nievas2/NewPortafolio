import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef, useState } from "react"

// Registrar ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}
const About = () => {
  const [showContent, setShowContent] = useState(false)
  const about = useRef<HTMLDivElement>(null)
  const main = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: main,
    offset: ["start end", "end start"], // Es buena práctica definir el offset explícitamente
  })

  // ✅ LA LÍNEA CORREGIDA
  const moveImage = useTransform(
    scrollYProgress,
    [0, 0.25, 0.9, 1], // Rango de animación de opacidad más suave
    [0, 1, 1, 0]
  )

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v > 0.01 && v < 0.99) {
      setShowContent(true)
    } else {
      setShowContent(false)
    }
  })

  /* about */
  useEffect(() => {
    const aboutRef = about.current?.querySelectorAll(".about-animation")

    if (aboutRef) {
      gsap.set(aboutRef, {
        y: -80,
        opacity: 0,
      })
    }

    const unsub = moveImage.on("change", (v) => {
      if (aboutRef) {
        if (v > 0.3) {
          gsap.to(aboutRef, {
            y: 0,
            opacity: 1,
            stagger: 0.07,
            ease: "bounce.out",
            duration: 0.1,
          })
        } else {
          gsap.set(aboutRef, {
            y: -80,
            opacity: 0,
          })
        }
      }
    })
    return () => unsub()
  }, [moveImage])

  /* about title */
  useEffect(() => {
    const aboutTitle = about.current?.querySelectorAll(".about-title")

    if (aboutTitle) {
      gsap.set(aboutTitle, {
        x: -40,
        opacity: 0,
      })
    }
    const unsubTitle = moveImage.on("change", (v) => {
      if (aboutTitle) {
        if (v > 0.4) {
          gsap.to(aboutTitle, {
            x: 0,
            opacity: 1,
            ease: "bounce.out",
            duration: 0.4,
          })
        } else {
          gsap.set(aboutTitle, {
            x: -40,
            opacity: 0,
          })
        }
      }
    })
    return () => unsubTitle()
  }, [moveImage])

  /* about description */
  useEffect(() => {
    const aboutDescriptionFirst = about.current?.querySelectorAll(
      ".about-description-first"
    )
    const aboutDescriptionSecond = about.current?.querySelectorAll(
      ".about-description-second"
    )

    if (aboutDescriptionFirst) {
      gsap.set(aboutDescriptionFirst, {
        x: 100,
        opacity: 0,
      })
    }
    if (aboutDescriptionSecond) {
      gsap.set(aboutDescriptionSecond, {
        x: -100,
        opacity: 0,
      })
    }
    const unsubDescription = moveImage.on("change", (v) => {
      if (aboutDescriptionFirst) {
        if (v > 0.2) {
          gsap.to(aboutDescriptionFirst, {
            x: 0,
            opacity: 1,
            ease: "back.in",
            duration: 0.4,
          })
        } else {
          gsap.set(aboutDescriptionFirst, {
            x: 100,
            opacity: 0,
          })
        }
      }

      if (aboutDescriptionSecond) {
        if (v > 0.2) {
          gsap.to(aboutDescriptionSecond, {
            x: 0,
            opacity: 1,
            ease: "back.in",
            duration: 0.4,
          })
        } else {
          gsap.set(aboutDescriptionSecond, {
            x: -100,
            opacity: 0,
          })
        }
      }
    })
    return () => unsubDescription()
  }, [moveImage])

  const profileReveal = useTransform(scrollYProgress, [0.15, 0.35], [0, 1])
  const clipPath = useTransform(
    profileReveal,
    (v) => `circle(${v * 60 + 40}% at 50% 50%)`
  )
  const scale = useTransform(profileReveal, [0, 1], [0.7, 1])
  const rotate = useTransform(profileReveal, [0, 1], [-20, 0])

  return (
    <main
      className="h-[200vh] w-full bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"
      style={{
        visibility: showContent ? "visible" : "hidden",
        pointerEvents: showContent ? "auto" : "none",
      }}
      ref={main}
    >
      <div
        className="w-full h-screen sticky top-0 flex justify-center items-center pb-10"
        ref={about}
      >
        <motion.div
          className="flex flex-col w-full max-w-md gap-4 items-center justify-center"
          style={{
            opacity: moveImage,
          }}
        >
          {/* Foto de perfil animada */}
          <motion.div
            style={{
              clipPath,
              scale,
              rotate,
              transition: "clip-path 0.7s cubic-bezier(.77,0,.18,1)",
            }}
            className="w-32 h-32 mb-6 rounded-full overflow-hidden shadow-lg bg-blue-900"
          >
            <img
              src="/photoProfile.jpeg" // Cambia por la ruta de tu foto
              alt="Foto de perfil"
              className="w-full h-full object-cover"
              draggable={false}
            />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 about-title">
            Sobre mí
          </h2>
          <p className="text-blue-200 about-description-first">
            Soy un desarrollador frontend apasionado por crear experiencias web
            únicas. Con 3 años de experiencia, me especializo en construir
            interfaces modernas y accesibles.
          </p>
          <p className="text-blue-200 about-description-second">
            Mi enfoque se centra en creacion de aplicaciones web de forma
            eficiente y escalable. Me encanta aprender nuevas tecnologías y
            compartir conocimientos con la comunidad.
          </p>
        </motion.div>
      </div>
    </main>
  )
}
export default About