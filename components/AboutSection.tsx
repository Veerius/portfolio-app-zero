'use client';

import { skills } from '@/data/portfolio';
import { BentoGrid, BentoCard } from '@/components/BentoGrid';
import * as LucideIcons from 'lucide-react';
import { motion } from 'framer-motion';
import { Meteors } from '@/components/ui/meteors';
import { useLanguage } from '@/components/LanguageProvider';

export default function AboutSection() {
    const { t } = useLanguage();

    return (
        <section className="relative py-24 px-6 max-w-7xl mx-auto overflow-hidden" id="about">
            {/* Meteor Background */}
            <Meteors number={20} />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative z-10 text-center"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('about.title')}</h2>
                <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
                    {t('about.bio')}
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative z-10"
            >
                <h3 className="text-2xl font-semibold mb-6 text-center">{t('about.skills')}</h3>
                <BentoGrid>
                    {skills.map((skill, index) => {
                        const Icon = (LucideIcons as any)[skill.icon] || LucideIcons.Code2;
                        return (
                            <motion.div
                                key={skill.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                            >
                                <BentoCard size="small" className="hover:border-primary/50 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-primary/10">
                                            <Icon className="h-5 w-5 text-primary" />
                                        </div>
                                        <span className="font-medium">{skill.name}</span>
                                    </div>
                                </BentoCard>
                            </motion.div>
                        );
                    })}
                </BentoGrid>
            </motion.div>
        </section>
    );
}
