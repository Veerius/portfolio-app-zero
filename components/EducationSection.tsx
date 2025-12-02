'use client'

import { education } from '@/data/portfolio'
import { useLanguage } from './LanguageProvider'
import { GraduationCap, Calendar } from 'lucide-react'
import { Meteors } from './ui/meteors'

export default function EducationSection() {
  const { language, t } = useLanguage()

  return (
    <section id='education' className='relative py-20 px-6 overflow-hidden'>
      <Meteors number={20} />
      <div className='max-w-4xl mx-auto relative z-10'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold mb-4'>{t('education.title')}</h2>
          <p className='text-muted-foreground'>{t('education.subtitle')}</p>
        </div>

        <div className='space-y-8'>
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className='relative pl-8 pb-8 border-l-2 border-primary/30 last:pb-0'
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Timeline dot */}
              <div className='absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background' />

              <div className='bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow'>
                <div className='flex items-start justify-between mb-3'>
                  <div className='flex items-center gap-3'>
                    <div className='p-2 bg-primary/10 rounded-lg'>
                      <GraduationCap className='h-5 w-5 text-primary' />
                    </div>
                    <div>
                      <h3 className='text-xl font-semibold'>
                        {language === 'es' ? edu.degree : edu.degreeEn || edu.degree}
                      </h3>
                      <p className='text-sm text-muted-foreground'>{edu.institution}</p>
                    </div>
                  </div>
                </div>

                <div className='flex items-center gap-2 text-sm text-muted-foreground mb-3'>
                  <Calendar className='h-4 w-4' />
                  <span>{edu.duration}</span>
                </div>

                {edu.description && (
                  <p className='text-muted-foreground'>
                    {language === 'es' ? edu.description : edu.descriptionEn || edu.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
