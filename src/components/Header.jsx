import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react'

const Header = ({ darkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Presentación', href: '#about' },
    { name: 'Experiencia', href: '#experience' },
    { name: 'Educación', href: '#education' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Contacto', href: '#contact' },
  ]

  return (
    <header className="app-bar-transparent">
      <nav className="container mx-auto py-2 flex justify-between items-center">
        {/* Logo/Brand */}
        <a href="#" className="text-h6 font-medium text-primary dark:text-primary-light flex items-center gap-1">
          <span className="material-icons text-primary">person</span>
          JP<span className="text-on-surface dark:text-on-surface-dark font-normal">VC</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="btn-text text-on-surface dark:text-on-surface-dark hover:text-primary normal-case tracking-normal"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="icon-btn"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <FaSun className="text-yellow-500 text-xl" />
            ) : (
              <FaMoon className="text-gray-600 text-xl" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden icon-btn"
            aria-label="Menu"
          >
            {menuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <div
        className={`md:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-short ${
          menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMenuOpen(false)}
      />
      
      <nav
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-surface dark:bg-surface-dark shadow-elevation-16 z-50 
                    transform transition-transform duration-standard ${
                      menuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
      >
        <div className="p-3 border-b border-gray-200 dark:border-gray-700">
          <span className="text-h6 text-primary">Menú</span>
        </div>
        <ul className="py-1">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="list-item text-body1"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
