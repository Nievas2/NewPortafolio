import { useRef, useState } from "react"
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion"
import CarouselComponent from "./shared/workExperience/Carousel"
import { WorkExperienceCard } from "./shared/workExperience/WorkExperienceCard"
import type { Project } from "../interfaces/project"
import ExperienceJson from "../../assets/mooks/experience.json"

function createProjectCarouselCards(projects: Project[]) {
  return projects.map((project, index) => ({
    key: `project-${index}`,
    content: <WorkExperienceCard project={project} index={index} />,
  }))
}

const WorkExperience = () => {
  const main = useRef<HTMLDivElement>(null)
  const [showContent, setShowContent] = useState(false)
  const carouselCards = createProjectCarouselCards(ExperienceJson)
  const { scrollYProgress } = useScroll({
    target: main,
  })
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setShowContent(v > 0.01)
  })

  const opacity = useTransform(scrollYProgress, [0, 0.02, 1], [0, 1, 1])

  return (
    <main className="flex flex-col items-center h-[300vh]" ref={main}>
      {showContent && (
        <motion.div
          style={{ opacity: opacity }}
          className="w-full h-full flex items-center justify-center"
        >
          <CarouselComponent
            cards={carouselCards}
            scroll={scrollYProgress}
            /* 
            height="500px"
            width="90%"
            margin="0 auto"
            offset={2}
            showArrows={false}
            goToSlide={goToSlide}
            setGoToSlide={setGoToSlide} */
          />
        </motion.div>
      )}
    </main>
  )
}
export default WorkExperience
