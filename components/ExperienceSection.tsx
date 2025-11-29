'use client';

import { experiences } from '@/data/portfolio';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { Meteors } from '@/components/ui/meteors';
import { useLanguage } from '@/components/LanguageProvider';

export default function ExperienceSection() {
    const { t } = useLanguage();

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

            <div className="space-y-8 relative z-10">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={exp.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative pl-8 border-l-2 border-border pb-8 last:pb-0"
                    >
                        {/* Timeline dot */}
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />

                        {/* Content */}
                        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-start justify-between mb-2">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-primary/10">
                                        <Briefcase className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold">{exp.role}</h3>
                                        <p className="text-muted-foreground">{exp.company}</p>
                                    </div>
                                </div>
                                {exp.current && (
                                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                                        {t('experience.current')}
                                    </span>
                                )}
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">{exp.duration}</p>
                            <p className="text-muted-foreground">{exp.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
