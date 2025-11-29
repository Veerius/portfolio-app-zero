'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation dictionaries
const translations = {
    en: {
        // Hero Section
        'hero.tagline': 'Building beautiful, performant web experiences',
        'hero.contact': 'Contact Me',
        'hero.download': 'Download CV',

        // About Section
        'about.title': 'About Me',
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
        'hero.tagline': 'Construyendo experiencias web hermosas y eficientes',
        'hero.contact': 'Contáctame',
        'hero.download': 'Descargar CV',

        // About Section
        'about.title': 'Sobre Mí',
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

        // Contact Section
        'contact.title': 'Ponte en Contacto',
        'contact.subtitle': 'Siempre estoy abierto a nuevas oportunidades y colaboraciones',
        'contact.send': 'Envíame un correo',
        'contact.connect': 'O conéctate conmigo en',

        // Footer
        'footer.built': 'Construido con Next.js, TypeScript y TailwindCSS.',

        // Projects Page
        'projectsPage.title': 'Todos los Proyectos',
        'projectsPage.subtitle': 'Explora todos mis proyectos',
        'projectsPage.back': 'Volver al inicio',
    },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('en');

    useEffect(() => {
        // Get saved language from localStorage
        const savedLang = localStorage.getItem('language') as Language | null;
        if (savedLang) {
            setLanguage(savedLang);
        } else {
            // Detect browser language
            const browserLang = navigator.language.toLowerCase();
            if (browserLang.startsWith('es')) {
                setLanguage('es');
            }
        }
    }, []);

    useEffect(() => {
        // Save to localStorage
        localStorage.setItem('language', language);
    }, [language]);

    const t = (key: string): string => {
        return translations[language][key as keyof typeof translations.en] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
