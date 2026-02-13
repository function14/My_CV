import { FaHeart } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container text-center">
        <p className="flex items-center justify-center gap-2 mb-2">
          Hecho con <FaHeart className="text-red-500" /> por Juan Pablo Vargas
        </p>
        <p className="text-gray-400 text-sm">
          © {currentYear} Todos los derechos reservados
        </p>
      </div>
    </footer>
  )
}

export default Footer
