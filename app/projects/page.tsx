'use client';

import { projects } from '@/data/portfolio';
import { BentoGrid, BentoCard } from '@/components/BentoGrid';
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { BorderBeam } from '@/components/ui/border-beam';
import { Meteors } from '@/components/ui/meteors';
import { useLanguage } from '@/components/LanguageProvider';
import Link from 'next/link';

export default function AllProjectsPage() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen py-24 px-6">
            {/* Meteor Background */}
            <div className="relative overflow-hidden">
                <Meteors number={30} />

                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Back Button */}
                    <Link
                        href="/#projects"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        {t('projectsPage.back')}
                    </Link>

                    {/* Page Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-12"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold mb-4">{t('projectsPage.title')}</h1>
                        <p className="text-xl text-muted-foreground">
                            {t('projectsPage.subtitle')}
                        </p>
                    </motion.div>

                    {/* All Projects Grid */}
                    <BentoGrid>
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.slug}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <BentoCard
                                    size={project.size || 'medium'}
                                    className="cursor-pointer hover:border-primary/50 transition-all h-full"
                                    onClick={() => window.location.href = `/projects/${project.slug}`}
                                >
                                    {project.featured && <BorderBeam size={250} duration={12} delay={9} />}

                                    {/* Project Image Placeholder */}
                                    <div className="mb-4 h-48 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                                        <span className="text-6xl opacity-20">🚀</span>
                                    </div>

                                    {/* Project Info */}
                                    <h3 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-muted-foreground mb-4">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.techStack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div className="flex gap-4">
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <Github className="h-4 w-4 mr-1" />
                                                {t('projects.code')}
                                            </a>
                                        )}
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <ExternalLink className="h-4 w-4 mr-1" />
                                                {t('projects.demo')}
                                            </a>
                                        )}
                                    </div>
                                </BentoCard>
                            </motion.div>
                        ))}
                    </BentoGrid>
                </div>
            </div>
        </main>
    );
}
