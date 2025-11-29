import { PersonalInfo, Project, Experience, Skill, SocialLink } from '@/types';

export const personalInfo: PersonalInfo = {
    name: 'Alex Rivera',
    role: 'Full Stack Developer',
    tagline: 'Building beautiful, performant web experiences',
    bio: 'Passionate full-stack developer with 5+ years of experience creating modern web applications. Specialized in React, TypeScript, and Node.js. I love turning complex problems into simple, elegant solutions.',
    email: 'alex.rivera@example.com',
    avatar: '/avatar.jpg',
    resumeUrl: '/resume.pdf',
};

export const socialLinks: SocialLink[] = [
    {
        name: 'GitHub',
        url: 'https://github.com/alexrivera',
        icon: 'Github',
    },
    {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/alexrivera',
        icon: 'Linkedin',
    },
    {
        name: 'Email',
        url: 'mailto:alex.rivera@example.com',
        icon: 'Mail',
    },
];

export const projects: Project[] = [
    {
        slug: 'ecommerce-platform',
        title: 'E-Commerce Platform',
        description: 'A modern e-commerce platform with real-time inventory management and seamless checkout experience.',
        longDescription: 'Built a comprehensive e-commerce solution handling 10k+ daily transactions. Features include real-time inventory sync, advanced search with filters, secure payment processing via Stripe, and an admin dashboard for analytics. Implemented server-side rendering for optimal SEO and performance.',
        image: '/projects/ecommerce.jpg',
        techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'TailwindCSS'],
        githubUrl: 'https://github.com/alexrivera/ecommerce',
        liveUrl: 'https://ecommerce-demo.vercel.app',
        featured: true,
        size: 'large',
    },
    {
        slug: 'task-management-app',
        title: 'Task Management App',
        description: 'Collaborative task management tool with real-time updates and team features.',
        longDescription: 'A full-featured task management application with drag-and-drop kanban boards, real-time collaboration using WebSockets, team workspaces, and advanced filtering. Built with a focus on performance and user experience.',
        image: '/projects/taskapp.jpg',
        techStack: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Redux'],
        githubUrl: 'https://github.com/alexrivera/taskapp',
        liveUrl: 'https://taskapp-demo.vercel.app',
        featured: true,
        size: 'medium',
    },
    {
        slug: 'weather-dashboard',
        title: 'Weather Dashboard',
        description: 'Beautiful weather dashboard with forecasts, maps, and location-based alerts.',
        longDescription: 'An elegant weather application featuring 7-day forecasts, interactive weather maps, severe weather alerts, and location-based recommendations. Integrates multiple weather APIs for accurate data and includes data visualization with charts.',
        image: '/projects/weather.jpg',
        techStack: ['React', 'TypeScript', 'OpenWeather API', 'Chart.js'],
        githubUrl: 'https://github.com/alexrivera/weather',
        liveUrl: 'https://weather-demo.vercel.app',
        featured: false,
        size: 'small',
    },
    {
        slug: 'portfolio-generator',
        title: 'Portfolio Generator',
        description: 'No-code portfolio builder with customizable themes and templates.',
        longDescription: 'A SaaS platform that allows users to create professional portfolios without coding. Features include drag-and-drop editor, 20+ customizable templates, custom domain support, and analytics dashboard. Built with a modern tech stack for scalability.',
        image: '/projects/portfolio-gen.jpg',
        techStack: ['Next.js', 'Prisma', 'PostgreSQL', 'TailwindCSS', 'Vercel'],
        githubUrl: 'https://github.com/alexrivera/portfolio-gen',
        liveUrl: 'https://portfolio-gen.vercel.app',
        featured: true,
        size: 'medium',
    },
    {
        slug: 'ai-chat-assistant',
        title: 'AI Chat Assistant',
        description: 'Intelligent chatbot powered by OpenAI with context-aware responses.',
        longDescription: 'An AI-powered chat assistant that provides intelligent, context-aware responses. Features include conversation history, multiple AI models, custom prompts, and integration with various data sources. Built with modern AI technologies and optimized for performance.',
        image: '/projects/ai-chat.jpg',
        techStack: ['Next.js', 'OpenAI API', 'Langchain', 'Pinecone', 'TypeScript'],
        githubUrl: 'https://github.com/alexrivera/ai-chat',
        featured: false,
        size: 'small',
    },
];

export const experiences: Experience[] = [
    {
        id: '1',
        company: 'TechCorp Solutions',
        role: 'Senior Full Stack Developer',
        duration: '2022 - Present',
        description: 'Leading development of enterprise web applications using React, Node.js, and AWS. Mentoring junior developers and architecting scalable solutions.',
        current: true,
    },
    {
        id: '2',
        company: 'StartupXYZ',
        role: 'Full Stack Developer',
        duration: '2020 - 2022',
        description: 'Built and maintained multiple client-facing applications. Implemented CI/CD pipelines and improved application performance by 40%.',
        current: false,
    },
    {
        id: '3',
        company: 'Digital Agency Co',
        role: 'Frontend Developer',
        duration: '2019 - 2020',
        description: 'Developed responsive websites and web applications for various clients. Collaborated with designers to create pixel-perfect implementations.',
        current: false,
    },
];

export const skills: Skill[] = [
    { id: '1', name: 'React', icon: 'Code2', category: 'frontend' },
    { id: '2', name: 'TypeScript', icon: 'FileCode', category: 'frontend' },
    { id: '3', name: 'Next.js', icon: 'Zap', category: 'frontend' },
    { id: '4', name: 'Node.js', icon: 'Server', category: 'backend' },
    { id: '5', name: 'PostgreSQL', icon: 'Database', category: 'backend' },
    { id: '6', name: 'MongoDB', icon: 'Database', category: 'backend' },
    { id: '7', name: 'TailwindCSS', icon: 'Palette', category: 'frontend' },
    { id: '8', name: 'Git', icon: 'GitBranch', category: 'tools' },
    { id: '9', name: 'Docker', icon: 'Box', category: 'tools' },
    { id: '10', name: 'AWS', icon: 'Cloud', category: 'tools' },
];
