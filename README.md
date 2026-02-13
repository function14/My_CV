# 💼 Hoja de Vida - Juan Pablo Vargas

Portfolio/CV web personal desarrollado con React y Tailwind CSS.

## 🚀 Características

- ✅ Diseño moderno y responsive
- ✅ Modo oscuro/claro
- ✅ Animaciones suaves
- ✅ Secciones: Hero, About, Experience, Education, Skills, Projects, Contact
- ✅ Formulario de contacto
- ✅ Optimizado para SEO

## 🛠️ Tecnologías

- **React 18** - Librería UI
- **Vite** - Build tool
- **Tailwind CSS** - Estilos
- **React Icons** - Iconos

## 📦 Instalación

```bash
# 1. Navegar al proyecto
cd hoja-de-vida-react

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev

# 4. Abrir en el navegador
# http://localhost:5173
```

## 🏗️ Estructura del Proyecto

```
src/
├── components/
│   ├── Header.jsx      # Navegación y toggle dark mode
│   ├── Hero.jsx        # Sección principal con foto y redes
│   ├── About.jsx       # Sobre mí
│   ├── Experience.jsx  # Experiencia laboral (timeline)
│   ├── Education.jsx   # Educación y certificaciones
│   ├── Skills.jsx      # Habilidades técnicas y soft
│   ├── Projects.jsx    # Proyectos destacados
│   ├── Contact.jsx     # Formulario de contacto
│   └── Footer.jsx      # Pie de página
├── App.jsx             # Componente principal
├── main.jsx            # Entry point
└── index.css           # Estilos globales + Tailwind
```

## ✏️ Personalización

### Cambiar datos personales
Edita los siguientes componentes:
- `Hero.jsx` - Nombre, título, descripción, redes sociales
- `About.jsx` - Información personal
- `Experience.jsx` - Experiencia laboral
- `Education.jsx` - Educación y certificaciones
- `Skills.jsx` - Habilidades
- `Projects.jsx` - Proyectos
- `Contact.jsx` - Información de contacto

### Cambiar colores
Edita `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      primary: '#2563eb',    // Color principal
      secondary: '#1e40af',  // Color secundario
      accent: '#3b82f6',     // Color de acento
    }
  }
}
```

## 📱 Responsive

El diseño se adapta a:
- 📱 Móvil (< 768px)
- 💻 Tablet (768px - 1024px)
- 🖥️ Desktop (> 1024px)

## 🚀 Deploy

```bash
# Generar build de producción
npm run build

# Los archivos estarán en /dist
# Puedes subirlos a: Vercel, Netlify, GitHub Pages, etc.
```

## 📄 Licencia

MIT - Siéntete libre de usarlo y modificarlo.

---

Desarrollado para Ingeniería Web II - UMB 2026
