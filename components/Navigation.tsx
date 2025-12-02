"use client";

import { useTheme } from "./ThemeProvider";
import { useLanguage } from "./LanguageProvider";
import {
  Moon,
  Sun,
  Monitor,
  Languages,
  User,
  Briefcase,
  GraduationCap,
  Mail,
  FolderOpen,
} from "lucide-react";
import { useState, useRef } from "react";
import { useClickOutside } from "@/hooks/use-click-outside";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const pathname = usePathname();

  const langMenuRef = useRef<HTMLDivElement>(null);
  const themeMenuRef = useRef<HTMLDivElement>(null);

  useClickOutside(langMenuRef, () => setShowLangMenu(false));
  useClickOutside(themeMenuRef, () => setShowThemeMenu(false));

  // Hide navigation on project detail pages
  if (pathname?.startsWith("/projects/") && pathname !== "/projects") {
    return null;
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navItems = [
    { id: "about", icon: User, label: t("nav.about") },
    { id: "projects", icon: FolderOpen, label: t("nav.projects") },
    { id: "experience", icon: Briefcase, label: t("nav.experience") },
    { id: "education", icon: GraduationCap, label: t("nav.education") },
    { id: "contact", icon: Mail, label: t("nav.contact") },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Section Navigation Links */}
        <div className="flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 rounded-lg hover:bg-accent transition-colors flex items-center gap-2 text-sm"
                aria-label={`Navigate to ${item.label}`}
              >
                <Icon className="h-4 w-4" />
                <span className="hidden md:inline">{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Theme and Language Controls */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <div className="relative" ref={langMenuRef}>
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
                    setLanguage("en");
                    setShowLangMenu(false);
                  }}
                  className={`w-full px-4 py-2 text-left hover:bg-accent transition-colors ${
                    language === "en" ? "bg-accent" : ""
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => {
                    setLanguage("es");
                    setShowLangMenu(false);
                  }}
                  className={`w-full px-4 py-2 text-left hover:bg-accent transition-colors ${
                    language === "es" ? "bg-accent" : ""
                  }`}
                >
                  Español
                </button>
              </div>
            )}
          </div>

          {/* Theme Switcher */}
          <div className="relative" ref={themeMenuRef}>
            <button
              onClick={() => setShowThemeMenu(!showThemeMenu)}
              className="p-3 rounded-full border border-border bg-card/80 backdrop-blur-sm hover:bg-accent transition-colors"
              aria-label="Change theme"
            >
              {theme === "light" && <Sun className="h-5 w-5" />}
              {theme === "dark" && <Moon className="h-5 w-5" />}
              {theme === "system" && <Monitor className="h-5 w-5" />}
            </button>

            {showThemeMenu && (
              <div className="absolute right-0 mt-2 w-32 rounded-lg border border-border bg-card shadow-lg overflow-hidden">
                <button
                  onClick={() => {
                    setTheme("light");
                    setShowThemeMenu(false);
                  }}
                  className={`w-full px-4 py-2 text-left hover:bg-accent transition-colors flex items-center gap-2 ${
                    theme === "light" ? "bg-accent" : ""
                  }`}
                >
                  <Sun className="h-4 w-4" />
                  Light
                </button>
                <button
                  onClick={() => {
                    setTheme("dark");
                    setShowThemeMenu(false);
                  }}
                  className={`w-full px-4 py-2 text-left hover:bg-accent transition-colors flex items-center gap-2 ${
                    theme === "dark" ? "bg-accent" : ""
                  }`}
                >
                  <Moon className="h-4 w-4" />
                  Dark
                </button>
                <button
                  onClick={() => {
                    setTheme("system");
                    setShowThemeMenu(false);
                  }}
                  className={`w-full px-4 py-2 text-left hover:bg-accent transition-colors flex items-center gap-2 ${
                    theme === "system" ? "bg-accent" : ""
                  }`}
                >
                  <Monitor className="h-4 w-4" />
                  System
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
