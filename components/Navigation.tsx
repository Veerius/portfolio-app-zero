'use client';

import { useTheme } from './ThemeProvider';
import { useLanguage } from './LanguageProvider';
import { Moon, Sun, Monitor, Languages } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
    const { theme, setTheme } = useTheme();
    const { language, setLanguage } = useLanguage();
    const [showThemeMenu, setShowThemeMenu] = useState(false);
    const [showLangMenu, setShowLangMenu] = useState(false);

    return (
        <nav className="fixed top-0 right-0 z-50 p-6">
            <div className="flex items-center gap-3">
                {/* Language Switcher */}
                <div className="relative">
                    <button
                        onClick={() => setShowLangMenu(!showLangMenu)}
                        className="p-3 rounded-full border border-border bg-card/80 backdrop-blur-sm hover:bg-accent transition-colors"
                        aria-label="Change language"
                    >
                        <Languages className="h-5 w-5" />
                    </button>

                    {showLangMenu && (
                        <div className="absolute right-0 mt-2 w-32 rounded-lg border border-border bg-card shadow-lg overflow-hidden">
                            <button
                                onClick={() => {
                                    setLanguage('en');
                                    setShowLangMenu(false);
                                }}
                                className={`w-full px-4 py-2 text-left hover:bg-accent transition-colors ${language === 'en' ? 'bg-accent' : ''
                                    }`}
                            >
                                English
                            </button>
                            <button
                                onClick={() => {
                                    setLanguage('es');
                                    setShowLangMenu(false);
                                }}
                                className={`w-full px-4 py-2 text-left hover:bg-accent transition-colors ${language === 'es' ? 'bg-accent' : ''
                                    }`}
                            >
                                Español
                            </button>
                        </div>
                    )}
                </div>

                {/* Theme Switcher */}
                <div className="relative">
                    <button
                        onClick={() => setShowThemeMenu(!showThemeMenu)}
                        className="p-3 rounded-full border border-border bg-card/80 backdrop-blur-sm hover:bg-accent transition-colors"
                        aria-label="Change theme"
                    >
                        {theme === 'light' && <Sun className="h-5 w-5" />}
                        {theme === 'dark' && <Moon className="h-5 w-5" />}
                        {theme === 'system' && <Monitor className="h-5 w-5" />}
                    </button>

                    {showThemeMenu && (
                        <div className="absolute right-0 mt-2 w-32 rounded-lg border border-border bg-card shadow-lg overflow-hidden">
                            <button
                                onClick={() => {
                                    setTheme('light');
                                    setShowThemeMenu(false);
                                }}
                                className={`w-full px-4 py-2 text-left hover:bg-accent transition-colors flex items-center gap-2 ${theme === 'light' ? 'bg-accent' : ''
                                    }`}
                            >
                                <Sun className="h-4 w-4" />
                                Light
                            </button>
                            <button
                                onClick={() => {
                                    setTheme('dark');
                                    setShowThemeMenu(false);
                                }}
                                className={`w-full px-4 py-2 text-left hover:bg-accent transition-colors flex items-center gap-2 ${theme === 'dark' ? 'bg-accent' : ''
                                    }`}
                            >
                                <Moon className="h-4 w-4" />
                                Dark
                            </button>
                            <button
                                onClick={() => {
                                    setTheme('system');
                                    setShowThemeMenu(false);
                                }}
                                className={`w-full px-4 py-2 text-left hover:bg-accent transition-colors flex items-center gap-2 ${theme === 'system' ? 'bg-accent' : ''
                                    }`}
                            >
                                <Monitor className="h-4 w-4" />
                                System
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}
