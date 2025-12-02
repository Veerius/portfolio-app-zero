'use client'

import { createContext, useContext, useState, ReactNode, useEffect } from 'react'

type Language = 'en' | 'es'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  translate: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Translation dictionaries
const translations = {
  en: {
    // Hero Section
    'hero.tagline': 'Full-stack developer dedicated to performance, quality, and user experience.',
    'hero.contact': 'Contact Me',
    'hero.download': 'Download CV',

    // Navigation
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.education': 'Education',
    'nav.contact': 'Contact',

    // About Section
    'about.title': 'About Me',
    'about.bio':
      'I am a full-stack developer with over 5 years of combined experience in software development, web applications, and system administration. I have worked in both local and international environments, contributing to backend, frontend, and infrastructure-related projects. My background includes modern technologies, SQL databases, and development best practices, with a strong focus on efficiency, code quality, and continuous improvement.',
    'about.skills': 'Skills & Technologies',

    // Projects Section
    'projects.title': 'Featured Projects',
    'projects.subtitle': "A selection of projects I've worked on recently",
    'projects.code': 'Code',
    'projects.demo': 'Live Demo',
    'projects.viewAll': 'View All Projects',

    // Experience Section
    'experience.title': 'Experience',
    'experience.subtitle': 'My professional journey',
    'experience.current': 'Current',

    // Education Section
    'education.title': 'Education',
    'education.subtitle': 'My academic background',

    // Contact Section
    'contact.title': 'Get In Touch',
    'contact.subtitle': "I'm always open to new opportunities and collaborations",
    'contact.send': 'Send me an email',
    'contact.connect': 'Or connect with me on',

    // Footer
    'footer.built': 'Built with Next.js, TypeScript, and TailwindCSS.',

    // Projects Page
    'projectsPage.title': 'All Projects',
    'projectsPage.subtitle': 'Explore all my projects',
    'projectsPage.back': 'Back to home',
  },
  es: {
    // Hero Section
    'hero.tagline':
      'Desarrollador full-stack orientado a rendimiento, calidad y experiencia de usuario.',
    'hero.contact': 'Contáctame',
    'hero.download': 'Descargar CV',

    // Navigation
    'nav.about': 'Sobre Mí',
    'nav.projects': 'Proyectos',
    'nav.experience': 'Experiencia',
    'nav.education': 'Educación',
    'nav.contact': 'Contacto',

    // About Section
    'about.title': 'Sobre Mí',
    'about.bio':
      'Soy un desarrollador full-stack con más de 5 años de experiencia combinada en desarrollo de software, aplicaciones web y administración de sistemas. He trabajado en entornos locales e internacionales, contribuyendo a proyectos de backend, frontend, gestión de infraestructura y soporte técnico. Mi trayectoria incluye el uso de tecnologías modernas, bases de datos SQL y buenas prácticas de desarrollo, con un enfoque en la eficiencia, la calidad del código y la mejora continua.',
    'about.skills': 'Habilidades y Tecnologías',

    // Projects Section
    'projects.title': 'Proyectos Destacados',
    'projects.subtitle': 'Una selección de proyectos en los que he trabajado recientemente',
    'projects.code': 'Código',
    'projects.demo': 'Demo en Vivo',
    'projects.viewAll': 'Ver Todos los Proyectos',

    // Experience Section
    'experience.title': 'Experiencia',
    'experience.subtitle': 'Mi trayectoria profesional',
    'experience.current': 'Actual',

    // Education Section
    'education.title': 'Educación',
    'education.subtitle': 'Mi formación académica',

    // Contact Section
    'contact.title': 'Ponte en Contacto',
    'contact.subtitle': 'Siempre estoy abierto a nuevas oportunidades',
    'contact.send': 'Envíame un correo',
    'contact.connect': 'O conéctate conmigo en',

    // Footer
    'footer.built': 'Construido con Next.js, TypeScript y TailwindCSS.',

    // Projects Page
    'projectsPage.title': 'Todos los Proyectos',
    'projectsPage.subtitle': 'Explora todos mis proyectos',
    'projectsPage.back': 'Volver al inicio',
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    // Get saved language from localStorage
    const savedLang = localStorage.getItem('language') as Language | null
    if (savedLang) {
      setLanguage(savedLang)
    } else {
      // Detect browser language
      const browserLang = navigator.language.toLowerCase()
      if (browserLang.startsWith('es')) {
        setLanguage('es')
      }
    }
  }, [])

  useEffect(() => {
    // Save to localStorage
    localStorage.setItem('language', language)
  }, [language])

  const translate = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
