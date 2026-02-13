import { FaBriefcase } from 'react-icons/fa'

const Experience = () => {
  const experiences = [
    {
      title: 'Desarrollador Web Junior',
      company: 'Empresa Ejemplo',
      period: '2025 - Presente',
      description: 'Desarrollo de aplicaciones web utilizando React y Node.js. Implementación de APIs RESTful y bases de datos SQL.',
      technologies: ['React', 'Node.js', 'MySQL', 'Git'],
    },
    {
      title: 'Practicante de Desarrollo',
      company: 'Startup Tech',
      period: '2024 - 2025',
      description: 'Apoyo en el desarrollo de módulos frontend y testing de aplicaciones. Documentación técnica de proyectos.',
      technologies: ['JavaScript', 'HTML/CSS', 'Bootstrap', 'Jira'],
    },
  ]

  return (
    <section id="experience" className="bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <h2 className="section-title">Experiencia Laboral</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-primary/30"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white dark:border-gray-900"></div>

              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'} pl-8 md:pl-0`}>
                <div className="card">
                  <div className="flex items-center gap-3 mb-3">
                    <FaBriefcase className="text-primary" />
                    <span className="text-sm text-primary font-medium">{exp.period}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-primary font-medium mb-3">{exp.company}</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="skill-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
