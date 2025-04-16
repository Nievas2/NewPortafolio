import { div } from "framer-motion/client"
import StudiesJson from "@/assets/mooks/studies.json"
import { Study } from "@/interfaces/study"
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { Icon } from "@iconify/react/dist/iconify.js"
const StudySection = () => {
  return (
    <section id="education" className="py-20 relative w-full max-w-8xl">
      <div className="flex flex-col w-full px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
          Educación
        </h2>
        <div className="w-full relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600 via-blue-400 to-transparent" />
          {/* Render cards */}
          <div className="flex flex-col gap-10 px-6 w-full">
            {StudiesJson &&
              StudiesJson.map((data, index) => (
                <CardStudy study={data} key={crypto.randomUUID()} />
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}
export default StudySection

function CardStudy({ study }: { study: Study }) {
  const [openImage, setOpenImage] = useState(false)
  useEffect(() => {
    // Deshabilitar scroll al abrir el modal
    if (openImage) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    // Limpiar estilo al desmontar el componente
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [openImage])

  return (
    <section className="flex flex-col text-center md:flex-row md:text-left items-center pl-6 md:pl-16 text-white w-full gap-10 relative group">
      <img
        className="xl:opacity-65 xl:group-hover:opacity-100 transition-opacity cursor-pointer"
        src={study.src}
        alt={study.name}
        height={320}
        width={320}
        onClick={() => setOpenImage(true)}
      />
      <Modal isOpen={openImage} onClose={() => setOpenImage(!openImage)}>
        <img
          className="h-auto w-[50%]"
          src={study.src}
          alt={study.name}
          height={320}
          width={320}
          onClick={(e) => e.stopPropagation()}
        />
      </Modal>
      <div className="flex flex-col gap-4">
        <h3 className="text-xl xl:opacity-45 xl:group-hover:opacity-100">
          {study.name}
        </h3>
        <small className="text-lg xl:opacity-45 xl:group-hover:opacity-100">
          {study.title}
        </small>
        <p className="text-base xl:opacity-45 xl:group-hover:opacity-100">
          {study.description}
        </p>
      </div>
      <div
        className="bg-blue-700 rounded-full size-5 absolute -left-[10px] top-[50%]
      xl:group-hover:bg-blue-600 xl:group-hover:scale-125
      transition-transform
      "
      />
      <div
        className="rounded-full size-5 absolute -left-[10px] top-[50%]
      xl:group-hover:bg-blue-600 shadow shadow-blue-400 blur xl:group-hover:scale-125
      "
      />
    </section>
  )
}

function Modal({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean
  onClose: Function
  children: React.ReactNode
}) {
  if (!isOpen) return null
  return createPortal(
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-25 flex items-center justify-center z-30"
      onClick={() => onClose()}
    >
      <button
        className="absolute right-4 top-16 text-white z-50 cursor-pointer"
        onClick={() => onClose()}
      >
        <Icon
          icon="material-symbols:close-rounded"
          className="text-white"
          width="36"
          height="36"
        />
      </button>
      {children}
    </div>,
    document.body
  )
}
