'use client'

import { personalInfo, socialLinks } from '@/data/portfolio'
import { Mail, Github, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'
import { ShimmerButton } from '@/components/ui/ShimmerButton'
import { Meteors } from '@/components/ui/Meteors'
import { useLanguage } from '@/components/LanguageProvider'

const iconMap: Record<string, any> = {
  Mail,
  Github,
  Linkedin,
}

export default function ContactSection() {
  const { translate } = useLanguage()

  return (
    <section className='relative py-24 px-6 max-w-4xl mx-auto overflow-hidden' id='contact'>
      {/* Meteor Background */}
      <Meteors number={15} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className='relative z-10'
      >
        <h2 className='text-4xl md:text-5xl font-bold mb-4 text-center'>{translate('contact.title')}</h2>
        <p className='text-lg text-muted-foreground mb-12 text-center'>{translate('contact.subtitle')}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='rounded-2xl border border-border bg-card p-8 shadow-lg relative z-10'
      >
        <div className='flex flex-wrap gap-4 justify-center'>
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon]
            return (
              <a
                key={link.name}
                href={link.url}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-background hover:bg-accent transition-all hover:scale-105'
              >
                <Icon className='h-5 w-5' />
                <span className='font-medium'>{link.name}</span>
              </a>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
