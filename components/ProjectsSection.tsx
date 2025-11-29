'use client';

import { projects } from '@/data/portfolio';
import { BentoGrid, BentoCard } from '@/components/BentoGrid';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { BorderBeam } from '@/components/ui/border-beam';
import { Meteors } from '@/components/ui/meteors';
import { useLanguage } from '@/components/LanguageProvider';
import Link from 'next/link';

const PROJECTS_TO_SHOW = 4; // Show only 4 projects on home page

export default function ProjectsSection() {
    const { t } = useLanguage();
    const featuredProjects = projects.slice(0, PROJECTS_TO_SHOW);
    const hasMoreProjects = projects.length > PROJECTS_TO_SHOW;

    return (
        <section className="relative py-24 px-6 max-w-7xl mx-auto overflow-hidden" id="projects">
            {/* Meteor Background */}
            <Meteors number={20} />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('projects.title')}</h2>
                <p className="text-lg text-muted-foreground mb-12">
                    {t('projects.subtitle')}
                </p>
            </motion.div>

            <BentoGrid>
                {featuredProjects.map((project, index) => (
                    <motion.div
                        key={project.slug}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
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

            {/* View All Projects Button */}
            {hasMoreProjects && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-12 flex justify-center"
                >
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
                    >
                        {t('projects.viewAll')}
                        <ArrowRight className="h-5 w-5" />
                    </Link>
                </motion.div>
            )}
        </section>
    );
}
