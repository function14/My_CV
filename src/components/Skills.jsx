import { FaCode, FaDatabase, FaTools, FaUsers } from 'react-icons/fa'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <FaCode className="text-3xl text-blue-500" />,
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'Bootstrap'],
    },
    {
      title: 'Backend',
      icon: <FaDatabase className="text-3xl text-green-500" />,
      skills: ['Node.js', 'Python', 'Java', 'SQL', 'MongoDB', 'REST APIs'],
    },
    {
      title: 'Herramientas',
      icon: <FaTools className="text-3xl text-orange-500" />,
      skills: ['Git', 'GitHub', 'VS Code', 'Linux', 'Docker', 'Postman'],
    },
    {
      title: 'Soft Skills',
      icon: <FaUsers className="text-3xl text-purple-500" />,
      skills: ['Trabajo en equipo', 'Comunicación', 'Resolución de problemas', 'Aprendizaje continuo', 'Gestión del tiempo', 'Adaptabilidad'],
    },
  ]

  return (
    <section id="skills" className="bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <h2 className="section-title">Habilidades</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="card">
              <div className="flex items-center gap-4 mb-6">
                {category.icon}
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg font-medium hover:bg-primary hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
