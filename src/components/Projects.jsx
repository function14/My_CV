import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: 'Sistema POS Dulcería',
      description: 'Sistema de punto de venta para gestión de inventario, ventas y facturación. Aplicación de escritorio con React y Tauri.',
      technologies: ['React', 'Tauri', 'SQLite', 'Tailwind CSS'],
      github: 'https://github.com/nodejuan/pos-dulceria',
      demo: null,
      image: '🛒',
    },
    {
      title: 'Portfolio Web',
      description: 'Sitio web personal tipo portafolio desarrollado con React y Tailwind CSS. Diseño moderno y responsive.',
      technologies: ['React', 'Tailwind CSS', 'Vite'],
      github: 'https://github.com/nodejuan/portfolio',
      demo: '#',
      image: '💼',
    },
    {
      title: 'API REST Gestión',
      description: 'API RESTful para gestión de usuarios y productos. Autenticación JWT y documentación con Swagger.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      github: 'https://github.com/nodejuan/api-gestion',
      demo: null,
      image: '🔌',
    },
  ]

  return (
    <section id="projects" className="bg-white dark:bg-gray-800">
      <div className="container">
        <h2 className="section-title">Proyectos</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card group hover:-translate-y-2 transition-transform duration-300">
              <div className="text-6xl mb-4 text-center">{project.image}</div>
              
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                {project.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="skill-tag text-xs">{tech}</span>
                ))}
              </div>
              
              <div className="flex gap-4 pt-4 border-t dark:border-gray-700">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                  >
                    <FaGithub /> Código
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
