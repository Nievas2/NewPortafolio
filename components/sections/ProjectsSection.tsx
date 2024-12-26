import { motion } from "framer-motion"
import { Project } from "@/interfaces/project"
import ProjectsJson from "@/assets/mooks/proyects.json"
const ProjectsSection = () => {
  const projects = ProjectsJson.reverse()
  return (
    <section className="flex flex-col gap-8 w-full">
      <h2 className="text-3xl md:text-4xl font-bold text-white px-4">
        Experiencia
      </h2>
      <div className="grid md:grid-cols-2 gap-8 relative px-0 sm:px-6">
        {projects.map((project, index) => (
          <ProjectCard project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
export default ProjectsSection

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      key={crypto.randomUUID()}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="relative">
        {/* Decorative elements */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur-md opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />

        {/* Content container */}
        <div className="relative p-3 sm:p-6 bg-[#12121a] rounded-lg overflow-hidden min-w-fit md:min-h-[630px]">
          <img
            src={project.src!}
            alt={project.name}
            className="h-[100%] rounded-xl"
          />

          {/* Floating circles decoration */}
          <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl transform group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-700" />
          <div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl transform group-hover:-translate-x-4 group-hover:translate-y-4 transition-transform duration-700" />

          {/* Company badge */}
          <div className="inline-flex items-center bg-blue-600/10 rounded-full px-3 py-1 text-sm text-blue-400 my-4">
            <motion.span
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              {project.role}
            </motion.span>
          </div>

          {/* Role and period */}
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors">
              {project.name}
            </h3>
            <p className="text-blue-200/80 text-sm mb-4">
              {project.dateYear} | {project.dateI} | {project.dateF}
            </p>

            {/* Description with custom bullet points */}
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <p className="text-blue-100/80 group-hover:text-blue-100 transition-colors">
                  {project.description}
                </p>
              </motion.div>
            </div>

            {/* Technologies used */}
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tecnologies.map((tech, i) => (
                <span
                  key={i}
                  className="flex items-center justify-center gap-2 px-2 py-1 text-xs bg-blue-600/10 text-blue-400 rounded-full group-hover:bg-blue-600/20 transition-colors"
                >
                  <img src={tech.src} alt={tech.name} height={16} width={16} />
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
