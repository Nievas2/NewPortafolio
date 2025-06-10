import type { Project } from "../../../interfaces/project"

interface CarouselProjectCardProps {
  project: Project
  index: number
}

export function WorkExperienceCard({ project }: CarouselProjectCardProps) {
  return (
    <div className="group relative w-full h-full">
      {/* Decorative gradient background */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500" />

      {/* Main card container */}
      <div className="relative w-full h-full bg-[#12121a] rounded-xl p-4 flex flex-col gap-3 overflow-hidden">
        {/* Floating decoration circles */}
        <div className="absolute top-2 right-2 w-16 h-16 bg-blue-600/10 rounded-full blur-xl transform group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute bottom-2 left-2 w-12 h-12 bg-purple-600/10 rounded-full blur-lg transform group-hover:scale-105 transition-transform duration-500" />

        {/* Project image */}
        <div className="relative h-44 rounded-lg overflow-hidden">
          <img
            src={project.src!}
            alt={project.name}
            className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        {/* Content section */}
        <div className="flex flex-col gap-2 flex-1">
          {/* Role badge */}
          <div className="inline-flex items-center w-fit bg-blue-600/15 rounded-full px-2 py-1">
            <span className="text-xs text-blue-400 font-medium">
              {project.role}
            </span>
          </div>

          {/* Project name */}
          <h3 className="text-lg font-bold text-blue-400 group-hover:text-blue-300 transition-colors leading-tight">
            {project.name}
          </h3>

          {/* Date info */}
          <p className="text-blue-200/70 text-xs">
            {project.dateYear} | {project.dateI} - {project.dateF}
          </p>

          {/* Description - truncated for carousel */}
          <p className="text-blue-100/70 text-xs leading-relaxed line-clamp-2 group-hover:text-blue-100/90 transition-colors">
            {project.description}
          </p>
        </div>

        {/* Bottom section with technologies and link */}
        <div className="flex flex-col gap-2">
          {/* Technologies - show only first 3 */}
          <div className="flex flex-wrap gap-1">
            {project.tecnologies.slice(0, 3).map((tech, i) => (
              <span
                key={i}
                className="flex items-center gap-1 px-2 py-1 text-xs bg-blue-600/10 text-blue-400 rounded-full group-hover:bg-blue-600/20 transition-colors"
              >
                <img
                  src={tech.src}
                  alt={tech.name}
                  height={12}
                  width={12}
                  className="rounded-sm"
                />
                {tech.name}
              </span>
            ))}
            {project.tecnologies.length > 3 && (
              <span className="text-xs text-blue-400/60 px-2 py-1">
                +{project.tecnologies.length - 3}
              </span>
            )}
          </div>

          {/* Link button */}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-3 py-2 text-xs font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors w-full"
              onClick={(e) => e.stopPropagation()}
            >
              Ver Proyecto
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
