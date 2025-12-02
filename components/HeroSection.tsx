'use client'

import { personalInfo, socialLinks } from '@/data/portfolio'
import { Mail, Github, Linkedin, Download } from 'lucide-react'
import { AnimatedGridPattern } from '@/components/ui/animated-grid-pattern'
import { ShimmerButton } from '@/components/ui/shimmer-button'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/components/LanguageProvider'
import { TypingAnimation } from '@/components/ui/TypingAnimation'

const iconMap: Record<string, any> = {
  Mail,
  Github,
  Linkedin,
}

export default function HeroSection() {
  const { t } = useLanguage()
  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
      {/* Animated Background */}
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          '[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]',
          'inset-x-0 inset-y-[-30%] h-[200%] skew-y-12'
        )}
      />

      {/* Content */}
      <div className='relative z-10 max-w-5xl mx-auto px-6 py-32 text-center'>
        {/* Avatar */}
        <div className='mb-8 flex justify-center'>
          <div className='relative w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border-2 border-primary/20'>
            <span className='text-5xl font-bold text-primary'>
              {personalInfo.name
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </span>
          </div>
        </div>

        {/* Name and Role */}
        <TypingAnimation
          text={personalInfo.name}
          className='text-5xl md:text-7xl font-bold tracking-tight mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent'
        />
        <p className='text-xl md:text-2xl text-muted-foreground mb-6'>{personalInfo.role}</p>
        <p className='text-lg md:text-xl text-muted-foreground/80 max-w-2xl mx-auto mb-12'>
          {t('hero.tagline')}
        </p>

        {/* CTA Buttons */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-12'>
          <ShimmerButton
            className='shadow-2xl'
            onClick={() => (window.location.href = `mailto:${personalInfo.email}`)}
          >
            <Mail className='mr-2 h-4 w-4' />
            <span>{t('hero.contact')}</span>
          </ShimmerButton>

          <a
            href={personalInfo.resumeUrl}
            className='inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium border border-border bg-background hover:bg-accent transition-colors'
          >
            <Download className='mr-2 h-4 w-4' />
            {t('hero.download')}
          </a>
        </div>

        {/* Social Links */}
        <div className='flex gap-6 justify-center'>
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon]
            return (
              <a
                key={link.name}
                href={link.url}
                target='_blank'
                rel='noopener noreferrer'
                className='p-3 rounded-full border border-border bg-card hover:bg-accent transition-all hover:scale-110'
                aria-label={link.name}
              >
                <Icon className='h-5 w-5' />
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
