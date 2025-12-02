'use client'

import { certificates } from '@/data/portfolio'
import { BentoGrid, BentoCard } from '@/components/BentoGrid'
import { Award, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import { Meteors } from '@/components/ui/Meteors'
import { useLanguage } from '@/components/LanguageProvider'

export default function CertificatesSection() {
  const { language } = useLanguage()

  return (
    <section className='relative py-24 px-6 max-w-7xl mx-auto overflow-hidden' id='certificates'>
      {/* Meteor Background */}
      <Meteors number={15} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className='relative z-10'
      >
        <h2 className='text-4xl md:text-5xl font-bold mb-4'>
          {language === 'es' ? 'Certificados' : 'Certificates'}
        </h2>
        <p className='text-lg text-muted-foreground mb-12'>
          {language === 'es'
            ? 'Certificaciones y cursos completados'
            : 'Certifications and completed courses'}
        </p>
      </motion.div>

      <BentoGrid className='relative z-10'>
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <BentoCard size='small' className='hover:border-primary/50 transition-all h-full'>
              {/* Certificate Icon */}
              <div className='mb-4 flex items-center justify-center h-24 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20'>
                <Award className='h-12 w-12 text-primary' />
              </div>

              {/* Certificate Info */}
              <h3 className='text-xl font-semibold mb-2'>{cert.name}</h3>
              <p className='text-muted-foreground mb-2'>{cert.issuer}</p>
              <p className='text-sm text-muted-foreground mb-4'>{cert.date}</p>

              {/* Credential Link */}
              {cert.credentialUrl && cert.credentialUrl !== '#' && (
                <a
                  href={cert.credentialUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors'
                >
                  <ExternalLink className='h-4 w-4 mr-1' />
                  {language === 'es' ? 'Ver credencial' : 'View credential'}
                </a>
              )}
            </BentoCard>
          </motion.div>
        ))}
      </BentoGrid>

      {certificates.length === 0 && (
        <div className='text-center text-muted-foreground relative z-10'>
          <p>
            {language === 'es'
              ? 'Próximamente más certificados...'
              : 'More certificates coming soon...'}
          </p>
        </div>
      )}
    </section>
  )
}
