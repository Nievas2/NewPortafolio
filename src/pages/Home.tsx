import WorkExperience from "../components/WorkExperience"
import Projects from "../components/Projects"
import Courses from "../components/Courses"
import { Tooltip } from "react-tooltip"
import About from "../components/About"
import { Icon } from "@iconify/react"
import Hero from "../components/Hero"

const Home = () => {
  return (
    <>
      <main className="flex flex-col items-center bg-black wrapper">
        <Hero />
        <About />
        <WorkExperience />
        <Projects />
        <Courses />
      </main>
      <div className="fixed top-2/6 right-8 z-50 flex flex-col justify-center items-center gap-1 p-2 rounded-full bg-black/25 backdrop-blur-md">
        <a
          href="#home"
          className="text-white/25 border-b-[1px] border-b-white/25 pb-1 bullet-1 hover:scale-110 min-w-6 min-h-7"
          data-tooltip-id="home"
          data-tooltip-content="Inicio"
        >
          {/* home */}
          <Icon icon="mdi:home" className="size-6" aria-hidden="true" />
        </a>
        <Tooltip place="left" id="home" />

        <a
          href="#about"
          className="text-white/25 border-b-[1px] border-b-white/25 pb-1 hover:scale-110 bullet-2 min-w-6 min-h-7"
          data-tooltip-id="about"
          data-tooltip-content="Sobre mi"
        >
          {/* about */}
          <Icon
            icon="material-symbols:info-outline"
            className="size-6"
            aria-hidden="true"
          />
        </a>
        <Tooltip place="left" id="about" />

        <a
          href="#work-experience"
          className="text-white/25 border-b-[1px] border-b-white/25 pb-1 hover:scale-110 bullet-3 min-w-6 min-h-7"
          data-tooltip-id="work-experience"
          data-tooltip-content="Experiencia"
        >
          {/* Experience */}
          <Icon icon="ix:work-case" className="size-6" aria-hidden="true" />
        </a>
        <Tooltip place="left" id="work-experience" />

        <a
          href="#projects"
          className="text-white/25 border-b-[1px] border-b-white/25 pb-1 hover:scale-110 bullet-4 min-w-6 min-h-7"
          data-tooltip-id="projects"
          data-tooltip-content="Proyectos"
        >
          {/* Projects */}
          <Icon icon="mdi:folder" className="size-6" aria-hidden="true" />
        </a>
        <Tooltip place="left" id="projects" />

        <a
          href="#courses"
          className="text-white/25 border-b-[1px] border-b-white/25 pb-1 hover:scale-110 bullet-5 min-w-6 min-h-7"
          data-tooltip-id="courses"
          data-tooltip-content="Cursos"
        >
          {/* courses */}
          <Icon
            icon="mdi:learn-outline"
            className="size-6"
            aria-hidden="true"
          />
        </a>
        <Tooltip place="left" id="courses" />
      </div>
    </>
  )
}
export default Home
