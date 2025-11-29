'use client';

import { experiences } from '@/data/portfolio';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { Meteors } from '@/components/ui/meteors';
import { useLanguage } from '@/components/LanguageProvider';
import { calculateDuration } from '@/lib/date-utils';
import { cn } from '@/lib/utils';

export default function ExperienceSection() {
    const { t, language } = useLanguage();

    return (
        <section className="relative py-24 px-6 max-w-5xl mx-auto overflow-hidden" id="experience">
            {/* Meteor Background */}
            <Meteors number={15} />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('experience.title')}</h2>
                <p className="text-lg text-muted-foreground mb-12">
                    {t('experience.subtitle')}
                </p>
            </motion.div>

            <div className="relative z-10 ml-4">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={exp.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative pl-8 border-l-2 border-border pb-12 last:pb-0 last:border-l-transparent"
                    >
                        {index === experiences.length - 1 && (
                            <div className="absolute left-[-2px] top-0 h-6 w-[2px] bg-border" />
                        )}

                        <div
                            className={cn(
                                'absolute -left-[9px] bg-background flex items-center justify-center rounded-full border-2 border-primary',
                                index === 0 ? 'w-8 h-8 -left-[17px] top-0' : 'w-4 h-4 top-2'
                            )}
                        >
                            {index === 0 && <Briefcase className="w-4 h-4 text-primary" />}
                        </div>

                        {/* Content */}
                        <div className={cn("rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow", index === 0 ? "mt-1" : "")}>
                            <div className="flex items-start justify-between mb-2">
                                <div className="flex items-center gap-3">
                                    {index !== 0 && (
                                        <div className="p-2 rounded-lg bg-primary/10">
                                            <Briefcase className="h-5 w-5 text-primary" />
                                        </div>
                                    )}
                                    <div>
                                        <h3 className="text-xl font-semibold">
                                            {language === 'en' ? (exp.roleEn || exp.role) : exp.role}
                                        </h3>
                                        <p className="text-muted-foreground">{exp.company}</p>
                                    </div>
                                </div>
                                {exp.current && (
                                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                                        {t('experience.current')}
                                    </span>
                                )}
                            </div>
                            <p className="text-sm text-muted-foreground mb-1">{exp.duration}</p>
                            <p className="text-sm text-primary/80 font-medium mb-3">
                                {calculateDuration(exp.startDate, exp.endDate, language)}
                            </p>
                            <p className="text-muted-foreground">
                                {language === 'en' ? (exp.descriptionEn || exp.description) : exp.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
