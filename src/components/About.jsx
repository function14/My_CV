import { FaMapMarkerAlt, FaCode, FaGraduationCap } from 'react-icons/fa'

const About = () => {
  const highlights = [
    {
      icon: <FaMapMarkerAlt className="text-3xl text-primary" />,
      title: 'Ubicación',
      description: 'Bogotá, Colombia',
    },
    {
      icon: <FaCode className="text-3xl text-primary" />,
      title: 'Enfoque',
      description: 'Desarrollo Web & Software',
    },
    {
      icon: <FaGraduationCap className="text-3xl text-primary" />,
      title: 'Estudiante',
      description: 'Ingeniería de Sistemas',
    },
  ]

  return (
    <section id="about" className="bg-white dark:bg-gray-800">
      <div className="container">
        <h2 className="section-title">Presentación</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Soy estudiante de Ingeniería de Sistemas en la Universidad Manuela Beltrán, 
              apasionado por el desarrollo de software y las nuevas tecnologías.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Me especializo en desarrollo web con tecnologías modernas como React, 
              Node.js y bases de datos SQL. También tengo experiencia en desarrollo 
              de aplicaciones de escritorio.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Siempre estoy buscando aprender nuevas habilidades y enfrentar 
              desafíos que me permitan crecer profesionalmente.
            </p>
          </div>

          <div className="grid gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="card flex items-center space-x-4">
                {item.icon}
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
