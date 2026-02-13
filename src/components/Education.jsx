import { FaGraduationCap, FaCertificate } from 'react-icons/fa'

const Education = () => {
  const education = [
    {
      degree: 'Ingeniería de Sistemas',
      institution: 'Universidad Manuela Beltrán',
      period: '2023 - Presente',
      description: 'Formación integral en desarrollo de software, bases de datos, redes y gestión de proyectos tecnológicos.',
      icon: <FaGraduationCap className="text-4xl text-primary" />,
    },
    {
      degree: 'Bachiller Académico',
      institution: 'Gimnasio Moderno Generacion del Futuro',
      period: '2009 - 2022',
      description: 'Educación secundaria con enfasis en administracion de empresas.',
      icon: <FaGraduationCap className="text-4xl text-primary" />,
    },
  ]

  const certifications = [
    { name: 'Scrum Fundamental', issuer: 'Scrumstudy', year: '2025' },
    { name: 'JavaScript Algorithms', issuer: 'freeCodeCamp', year: '2024' },
    { name: 'CCNA: Switching, Routing, and Wireless Essentials', issuer: 'Cisco Networking Academy', year: '2025' },
  ]

  return (
    <section id="education" className="bg-white dark:bg-gray-800">
      <div className="container">
        <h2 className="section-title">Educación</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {education.map((edu, index) => (
            <div key={index} className="card">
              <div className="flex items-start gap-4">
                {edu.icon}
                <div>
                  <span className="text-sm text-primary font-medium">{edu.period}</span>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mt-1">
                    {edu.degree}
                  </h3>
                  <p className="text-primary font-medium">{edu.institution}</p>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          Certificaciones
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="card text-center">
              <FaCertificate className="text-3xl text-yellow-500 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-800 dark:text-white">{cert.name}</h4>
              <p className="text-primary">{cert.issuer}</p>
              <p className="text-sm text-gray-500">{cert.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
