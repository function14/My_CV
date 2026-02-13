import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-900 dark:to-gray-800 pt-8">
      <div className="container text-center">
        {/* Avatar */}
        <div className="mb-4">
          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary p-0.5 shadow-elevation-4">
            <div className="w-full h-full rounded-full bg-surface dark:bg-gray-700 flex items-center justify-center text-h3 font-medium text-primary">
              JP
            </div>
          </div>
        </div>

        {/* Name */}
        <h1 className="text-h3 md:text-h2 font-light text-on-surface dark:text-on-surface-dark mb-2">
          Juan Pablo Vargas Castañeda
        </h1>
        
        {/* Title */}
        <p className="text-h5 text-on-surface/70 dark:text-on-surface-dark/70 mb-4">
          Desarrollador de Software | Estudiante de Ingeniería de Sistemas
        </p>

        {/* Description */}
        <p className="text-body1 text-on-surface/60 dark:text-on-surface-dark/60 max-w-2xl mx-auto mb-5">
          Apasionado por la tecnología y el desarrollo de soluciones innovadoras.
          Enfocado en desarrollo web y aplicaciones de escritorio.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-2 mb-5">
          <a
            href="https://github.com/function14"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn bg-gray-800 text-white hover:bg-gray-700 p-1.5 rounded-full shadow-elevation-2 hover:shadow-elevation-4 transition-all duration-short"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/juan-vargas-623478279"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn bg-[#0077b5] text-white hover:bg-[#006699] p-1.5 rounded-full shadow-elevation-2 hover:shadow-elevation-4 transition-all duration-short"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:jpvc.vargas14@gmail.com"
            className="icon-btn bg-error text-white hover:bg-red-700 p-1.5 rounded-full shadow-elevation-2 hover:shadow-elevation-4 transition-all duration-short"
          >
            <FaEnvelope size={24} />
          </a>
        </div>

        {/* CTA Button */}
        <a href="#contact" className="btn-contained inline-block">
          Contáctame
        </a>
      </div>
    </section>
  )
}

export default Hero
