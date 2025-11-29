'use client';

import { personalInfo, socialLinks } from '@/data/portfolio';
import { Mail, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { Meteors } from '@/components/ui/meteors';
import { useLanguage } from '@/components/LanguageProvider';

const iconMap: Record<string, any> = {
    Mail,
    Github,
    Linkedin,
};

export default function ContactSection() {
    const { t } = useLanguage();

    return (
        <section className="relative py-24 px-6 max-w-4xl mx-auto overflow-hidden" id="contact">
            {/* Meteor Background */}
            <Meteors number={15} />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">{t('contact.title')}</h2>
                <p className="text-lg text-muted-foreground mb-12 text-center">
                    {t('contact.subtitle')}
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="rounded-2xl border border-border bg-card p-8 shadow-lg relative z-10"
            >
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
                        <Mail className="h-5 w-5" />
                        <a href={`mailto:${personalInfo.email}`} className="font-medium">
                            {personalInfo.email}
                        </a>
                    </div>
                </div>

                <div className="flex justify-center mb-8">
                    <ShimmerButton
                        className="shadow-2xl"
                        onClick={() => window.location.href = `mailto:${personalInfo.email}`}
                    >
                        <Mail className="mr-2 h-4 w-4" />
                        <span>{t('contact.send')}</span>
                    </ShimmerButton>
                </div>

                <div className="border-t border-border pt-8">
                    <p className="text-center text-muted-foreground mb-4">{t('contact.connect')}</p>
                    <div className="flex gap-4 justify-center">
                        {socialLinks.map((link) => {
                            const Icon = iconMap[link.icon];
                            return (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-background hover:bg-accent transition-all hover:scale-105"
                                >
                                    <Icon className="h-5 w-5" />
                                    <span className="font-medium">{link.name}</span>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
