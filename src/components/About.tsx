import { motion, useScroll, useTransform } from "framer-motion"
import gsap from "gsap"
import { useEffect, useRef } from "react"

const About = () => {
  const about = useRef<HTMLDivElement>(null)
  const main = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: main,
  })

  const moveImage = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1])

  /* about */
  useEffect(() => {
    // Estado inicial al montar el componente
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

  return (
    <main className="h-[200vh]" ref={main}>
      <motion.div
        className="w-full h-screen fixed flex justify-center items-center pb-10 inset-0 z-0"
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
              clipPath: useTransform(
                profileReveal,
                (v) => `circle(${v * 60 + 40}% at 50% 50%)`
              ),
              scale: useTransform(profileReveal, [0, 1], [0.7, 1]),
              rotate: useTransform(profileReveal, [0, 1], [-20, 0]),
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
      </motion.div>
      <motion.div></motion.div>
    </main>
  )
}
export default About
