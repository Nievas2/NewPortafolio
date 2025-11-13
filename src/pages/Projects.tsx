import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import type { Project } from "../interfaces/project"
import allProjects from "../../assets/mooks/all-projects.json"
import { useDebounce } from "use-debounce"

const Projects = () => {
  const [filteredProjects, setFilteredProjects] = useState(() =>
    [...allProjects].reverse()
  )
  const [searchTerm, setSearchTerm] = useState("")
  const [value] = useDebounce(searchTerm, 300)
  const [filter, setFilter] = useState("TODOS")

  const filters = ["TODOS", "FULL STACK", "FRONTEND", "FREELANCE", "Practicas"]

  const getRoleColor = (role: string) => {
    switch (role) {
      case "FRONTEND":
        return "from-green-500 to-teal-600"
      case "BACKEND":
        return "from-blue-500 to-indigo-600"
      case "FULL STACK":
        return "from-purple-500 to-pink-600"
      default:
        return "from-gray-500 to-gray-600"
    }
  }

  const getTypeWorkBadge = (typeWork: string | undefined) => {
    if (!typeWork) return null

    const colors: Record<string, string> = {
      FREELANCE: "from-orange-500 to-red-600",
      Practicas: "from-cyan-500 to-blue-600",
    }

    return (
      <div
        className={`px-3 py-1 bg-gradient-to-r ${
          colors[typeWork] || "from-gray-500 to-gray-600"
        } rounded-full text-white text-xs font-semibold`}
      >
        {typeWork}
      </div>
    )
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    let result = allProjects

    // Filtrar por categoría
    if (filter !== "TODOS") {
      result = result.filter(
        (project) => project.role === filter || project.typeWork === filter
      )
    }

    // Filtrar por búsqueda
    if (value) {
      result = result.filter(
        (project: Project) =>
          project.name.toLowerCase().includes(value.toLowerCase()) ||
          project.description.toLowerCase().includes(value.toLowerCase()) ||
          project.tecnologies.some((tech) =>
            tech.name.toLowerCase().includes(value.toLowerCase())
          )
      )
    }
    result = [...result].reverse()

    setFilteredProjects(result)
  }, [filter, value])

  return (
    <motion.div className="text-center my-10 w-full">
      <section className="mb-8">
        <h2 className="text-6xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent mb-6">
          Proyectos personales
        </h2>

        <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full"></div>
        <p className="text-gray-300 text-lg mt-6 max-w-3xl mx-auto">
          Estos son todos mis proyectos personales, desde grandes aplicaciones
          hasta pequeños experimentos
        </p>

        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          Que he desarrollado a lo largo de mi carrera como desarrollador web.
        </p>

        <p className="text-pink-600 text-sm max-w-3xl mx-auto">
          Algunos de estos proyectos no están en línea debido a que los servidores no estan funcionando lo cual esta ajeno a mis posibilidades arreglarlo, ya que se desarrollaron con otros devs.
        </p>
      </section>

      <div className="flex flex-col w-full px-2">
        {/* Barra de búsqueda y filtros */}
        <motion.div
          className="flex flex-col gap-6 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {/* Búsqueda */}
          <div className="flex items-center bg-slate-800/60 backdrop-blur-md rounded-2xl px-6 py-4 border border-slate-700/50 w-full">
            <svg
              className="w-5 h-5 text-gray-400 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Buscar proyectos, tecnologías..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none px-4"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>

          {/* Filtros */}
          <div className="flex flex-wrap gap-3">
            {filters.map((filterOption) => (
              <motion.button
                key={filterOption}
                onClick={() => setFilter(filterOption)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer ${
                  filter === filterOption
                    ? "bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg"
                    : "bg-slate-800/60 text-gray-300 hover:bg-slate-700/80 border border-slate-700/50"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filterOption}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Grid de proyectos */}
        {filteredProjects.length > 0 ? (
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-md rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 flex flex-col"
                whileHover={{ y: -8 }}
              >
                {/* Imagen del proyecto */}
                <div className="relative overflow-hidden h-48 flex-shrink-0">
                  <img
                    src={project.src}
                    alt={project.name}
                    className="w-full h-full max-h-48 min-h-48 object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>

                  {/* Badges superiores */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    <div
                      className={`px-3 py-1 bg-gradient-to-r ${getRoleColor(
                        project.role
                      )} rounded-full text-white text-xs font-semibold shadow-lg`}
                    >
                      {project.role}
                    </div>
                    {getTypeWorkBadge(project.typeWork)}
                  </div>

                  {/* Porcentaje si existe */}
                  {project.percentage && (
                    <div className="absolute top-3 right-3 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-white text-xs font-semibold">
                      {project.percentage}
                    </div>
                  )}
                </div>

                {/* Contenido */}
                <div className="p-6 flex flex-col gap-4 flex-1">
                  {/* Título y fecha */}
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold text-white line-clamp-1">
                      {project.name}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {project.dateI} - {project.dateF} {project.dateYear}
                    </p>
                  </div>

                  {/* Descripción */}
                  <p className="text-gray-300 text-sm line-clamp-3 flex-1">
                    {project.description}
                  </p>

                  {/* Tecnologías */}
                  <div className="flex flex-wrap gap-2">
                    {project.tecnologies.slice(0, 4).map((tech) => (
                      <div
                        key={tech.name}
                        className="flex items-center gap-2 bg-slate-800/60 px-3 py-1 rounded-lg border border-slate-700/50"
                        title={tech.name}
                      >
                        <img
                          src={tech.src}
                          alt={tech.name}
                          className="w-4 h-4"
                        />
                      </div>
                    ))}
                    {project.tecnologies.length > 4 && (
                      <div className="flex items-center justify-center bg-slate-800/60 px-3 py-1 rounded-lg border border-slate-700/50 text-gray-400 text-xs">
                        +{project.tecnologies.length - 4}
                      </div>
                    )}
                  </div>

                  {/* Botón ver más */}
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl text-white font-semibold hover:shadow-lg transition-all duration-300"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <span>Ver Proyecto</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-6">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">
              No se encontraron proyectos
            </h3>
            <p className="text-gray-400">
              Intenta con otros filtros o términos de búsqueda
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}
export default Projects
