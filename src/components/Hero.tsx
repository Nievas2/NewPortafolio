import { motion, useScroll, useTransform } from "framer-motion"
import gsap from "gsap"
import { useEffect, useRef } from "react"

const Hero = () => {
  const fullstackRef = useRef<HTMLHeadingElement>(null)
  const div = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: div,
  })

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
  /* 
  const maskPosition = useTransform(scrollYProgress, (value) =>
    value < 1 ? "fixed" : "static"
  ) */

  const role = useTransform(scrollYProgress, [0.5, 1], [0, 1])
  const roleOpacity = useTransform(
    scrollYProgress,
    [0, 0.7, 0.71, 0.99, 1],
    [0, 0, 1, 1, 0]
  )

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
        ref={div}
      >
        <motion.div
          className="flex justify-center fixed items-center w-full h-screen inset-0 z-0 bg-[url('/images/portada.png')] bg-no-repeat bg-center bg-cover"
          style={{
            maskImage: "url('/images/name.png')",
            maskRepeat: "no-repeat",
            maskPosition: "50% 20%",
            maskSize: maskSize /* 
            position: maskPosition, */,
            opacity: maskOpacity,
          }}
        >
          <motion.div
            className="flex flex-col text-center text-2xl"
            style={{
              opacity: contentOpacity,
            }}
          >
            <span>Que te parece?</span>
            <span>Esta mas pro, no?</span>
          </motion.div>
        </motion.div>
        <motion.div
          className="w-full h-screen fixed inset-0 z-0 bg-white bg-no-repeat bg-center bg-cover"
          style={{
            maskImage: "url('/images/name.png')",
            maskRepeat: "no-repeat",
            maskPosition: "50% 20%" /* 
            position: maskPosition, */,
            maskSize: maskSize,
            opacity: textOpacity,
          }}
        ></motion.div>

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
      </div>
    </>
  )
}
export default Hero
