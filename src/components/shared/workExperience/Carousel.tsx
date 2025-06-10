import { MotionValue, useMotionValueEvent } from "framer-motion"
import React, { useState } from "react"

interface CarouselCard {
  key: string | number
  content: React.ReactNode
}

interface CarouselComponentProps {
  cards: CarouselCard[]
  scroll: MotionValue<number>
}

export default function CarouselComponent({
  cards,
  scroll,
}: CarouselComponentProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  /*  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % cards.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + cards.length) % cards.length)
  } */

  const getSlideStyle = (index: number) => {
    const diff = index - currentSlide
    const absCount = Math.abs(diff)

    // Posición base para carrusel VERTICAL
    const translateY = diff * 120 // Espaciado vertical (cambió de translateX)
    const translateZ = -absCount * 100 // Profundidad
    const rotateX = diff * 35 // Rotación en X (cambió de rotateY)
    const scale = Math.max(0.6, 1 - absCount * 0.2) // Escala
    const opacity = absCount > 2 ? 0 : Math.max(0.4, 1 - absCount * 0.3) // Opacidad

    return {
      transform: `translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) scale(${scale})`,
      opacity: opacity,
      zIndex: cards.length - absCount,
      transition: "all 0.6s cubic-bezier(0.4, 0.0, 0.2, 1)",
      position: "absolute" as const,
      left: "50%",
      top: "50%",
      marginLeft: "-100px", // Half of card width
      marginTop: "-120px", // Half of card height
    }
  }
  useMotionValueEvent(scroll, "change", (v) => {
    if (v < 0.45) return setCurrentSlide(0)
    if (v > 0.45) return setCurrentSlide(1)
  })

  return (
    <section className="fixed top-0">
      <div className="relative w-screen h-screen overflow-hidden"
      style={{ perspective: "1000px" }}>
        {/* Container 3D */}
        <div
          className="absolute top-3/8 left-3/7"
          style={{
            perspective: "1000px",
            perspectiveOrigin: "center center",
          }}
        >
          <div className="relative w-full h-full">
            {cards.map((card, index) => (
              <div
                key={card.key || index}
                className="w-96  h-[450px]"
                style={getSlideStyle(index)}
              >
                <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-700 rounded-lg shadow-2xl flex items-center justify-center text-white font-bold text-lg hover:shadow-3xl transition-shadow duration-300">
                  {card.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
