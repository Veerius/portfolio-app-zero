'use client'

import { Project } from '@/types'
import { ArrowLeft, Github, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { BorderBeam } from '@/components/ui/BorderBeam'
import { useLanguage } from '@/components/LanguageProvider'

interface ProjectContentProps {
  project: Project
}

export default function ProjectContent({ project }: ProjectContentProps) {
  const { language, translate } = useLanguage()

  return (
    <main className='min-h-screen py-24 px-6'>
      <div className='max-w-4xl mx-auto'>
        {/* Back Button */}
        <Link
          href='/projects'
          className='inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8'
        >
          <ArrowLeft className='h-4 w-4' />
          {translate('projectsPage.back')}
        </Link>

        {/* Project Header */}
        <div className='mb-12'>
          <h1 className='text-4xl md:text-6xl font-bold mb-4'>
            {language === 'es' ? project.title : project.titleEn || project.title}
          </h1>
          <p className='text-xl text-muted-foreground mb-6'>
            {language === 'es' ? project.description : project.descriptionEn || project.description}
          </p>

          {/* Tech Stack */}
          <div className='flex flex-wrap gap-2 mb-6'>
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className='px-4 py-2 text-sm font-medium rounded-full bg-primary/10 text-primary'
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className='flex gap-4'>
            {project.githubUrl && project.githubUrl !== '#' && (
              <a
                href={project.githubUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-card hover:bg-accent transition-colors'
              >
                <Github className='h-5 w-5' />
                {translate('projects.code')}
              </a>
            )}
            {project.liveUrl && project.liveUrl !== '#' && (
              <a
                href={project.liveUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors'
              >
                <ExternalLink className='h-5 w-5' />
                {translate('projects.demo')}
              </a>
            )}
          </div>
        </div>

        {/* Project Image */}
        <div className='relative mb-12 rounded-2xl overflow-hidden border border-border'>
          {project.featured && <BorderBeam size={250} duration={12} delay={9} />}
          <div className='aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden'>
            <img
              src={project.image}
              alt={language === 'es' ? project.title : project.titleEn || project.title}
              className='w-full h-full object-cover'
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.style.display = 'none'
                if (target.parentElement) {
                  target.parentElement.innerHTML = '<span class="text-9xl opacity-20">🚀</span>'
                }
              }}
            />
          </div>
        </div>

        {/* Project Details */}
        <div className='prose prose-lg dark:prose-invert max-w-none'>
          <h2 className='text-3xl font-bold mb-4'>
            {language === 'es' ? 'Sobre este proyecto' : 'About This Project'}
          </h2>
          <p className='text-lg text-muted-foreground leading-relaxed whitespace-pre-line'>
            {language === 'es'
              ? project.longDescription
              : project.longDescriptionEn || project.longDescription}
          </p>

          <h2 className='text-3xl font-bold mb-4 mt-12'>
            {language === 'es' ? 'Tecnologías Utilizadas' : 'Technologies Used'}
          </h2>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
            {project.techStack.map((tech) => (
              <div
                key={tech}
                className='p-4 rounded-lg border border-border bg-card text-center font-medium'
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Back to Projects */}
        <div className='mt-16 pt-8 border-t border-border'>
          <Link
            href='/projects'
            className='inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors'
          >
            <ArrowLeft className='h-4 w-4' />
            {translate('projects.viewAll')}
          </Link>
        </div>
      </div>
    </main>
  )
}
