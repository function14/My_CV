import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('¡Mensaje enviado! Te contactaré pronto.')
    setFormData({ name: '', email: '', message: '' })
  }

  const contactInfo = [
    { icon: <FaEnvelope />, label: 'Email', value: 'jpvc.vargas14@gmail.com', href: 'mailto:jpvc.vargas14@gmail.com' },
    { icon: <FaPhone />, label: 'Teléfono', value: '+57 300 9482219', href: 'tel:+573009482219' },
    { icon: <FaMapMarkerAlt />, label: 'Ubicación', value: 'Bogotá, Colombia', href: null },
  ]

  return (
    <section id="contact" className="bg-background dark:bg-background-dark">
      <div className="container">
        <h2 className="section-title">Contacto</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Contact Info */}
          <div>
            <h3 className="text-h5 text-on-surface dark:text-on-surface-dark mb-3">
              ¡Hablemos!
            </h3>
            <p className="text-body1 text-on-surface/70 dark:text-on-surface-dark/70 mb-4">
              ¿Tienes un proyecto en mente o quieres contactarme? 
              No dudes en escribirme, estaré feliz de ayudarte.
            </p>

            {/* Contact List */}
            <div className="space-y-2 mb-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="list-item rounded-lg">
                  <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-caption text-on-surface/50 dark:text-on-surface-dark/50 uppercase">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a href={info.href} className="text-body2 text-on-surface dark:text-on-surface-dark hover:text-primary">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-body2 text-on-surface dark:text-on-surface-dark">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-1">
              <a
                href="https://linkedin.com/in/juan-vargas-623478279"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-contained bg-[#0077b5] hover:bg-[#006699] flex items-center gap-1"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a
                href="https://github.com/function14"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outlined border-gray-800 text-gray-800 dark:border-gray-300 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center gap-1"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </div>

          {/* Contact Form - Material Design */}
          <div className="card-elevated">
            <h3 className="text-h6 text-on-surface dark:text-on-surface-dark mb-3">
              Envíame un mensaje
            </h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-caption text-on-surface/70 dark:text-on-surface-dark/70 mb-0.5 uppercase">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input-outlined"
                  placeholder="Tu nombre completo"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-caption text-on-surface/70 dark:text-on-surface-dark/70 mb-0.5 uppercase">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input-outlined"
                  placeholder="tu@email.com"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-caption text-on-surface/70 dark:text-on-surface-dark/70 mb-0.5 uppercase">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="input-outlined resize-none"
                  placeholder="¿En qué puedo ayudarte?"
                />
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn-contained w-full">
                <span className="material-icons mr-1 text-lg">send</span>
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
