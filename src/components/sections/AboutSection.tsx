import Image from "next/image"
import { motion } from "framer-motion"

const AboutSection = () => {
  return (
    <section id="about" className="flex w-full relative">
      <div className="flex flex-col md:flex-row w-full px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full items-center justify-center"
        >
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Sobre mí
              </h2>
              <p className="text-blue-200">
                Soy un desarrollador frontend apasionado por crear experiencias
                web únicas. Con 3 años de experiencia, me especializo en
                construir interfaces modernas y accesibles.
              </p>
              <p className="text-blue-200">
                Mi enfoque se centra en creacion de aplicaciones web de forma
                eficiente y escalable. Me encanta aprender nuevas tecnologías y
                compartir conocimientos con la comunidad.
              </p>
            </div>
            <div className="flex items-center justify-center relative group">
              <div className="hidden sm:absolute inset-y-auto bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl transform rotate-3 w-[280px] h-[360px] transition-transform group-hover:rotate-0 group-hover:scale-105 " />
              <Image
                width={400}
                height={400}
                src="/photoProfile.jpeg"
                alt="Profile"
                className="relative z-10 rounded-2xl w-[240px] h-[320px] sm:w-[280px] sm:h-[360px] transform rotate-0 sm:-rotate-3 transition-transform group-hover:rotate-0"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
export default AboutSection
