"use client";

import { projects } from "@/data/portfolio";
import { BentoGrid, BentoCard } from "@/components/BentoGrid";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { BorderBeam } from "@/components/ui/border-beam";
import { Meteors } from "@/components/ui/meteors";
import { useLanguage } from "@/components/LanguageProvider";
import Link from "next/link";
import { useState, useMemo } from "react";

export default function AllProjectsPage() {
  const { t, language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>("all");

  // Get unique categories from projects
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(projects.map((p) => p.category))
    );
    return ["all", ...uniqueCategories];
  }, []);

  // Filter projects based on active filter
  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  // Category display names
  const getCategoryName = (category: string) => {
    const names: Record<string, { es: string; en: string }> = {
      all: { es: "Todos", en: "All" },
      "C#": { es: "C#", en: "C#" },
      PHP: { es: "PHP", en: "PHP" },
      BDO: { es: "Bases de Datos", en: "Databases" },
      Linux: { es: "Linux", en: "Linux" },
      ERP: { es: "ERP", en: "ERP" },
    };
    return names[category]?.[language] || category;
  };

  return (
    <main className="min-h-screen py-24 px-6">
      {/* Meteor Background */}
      <div className="relative overflow-hidden">
        <Meteors number={30} />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Back Button */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("projectsPage.back")}
          </Link>

          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              {t("projectsPage.title")}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t("projectsPage.subtitle")}
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 flex flex-wrap gap-3"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105"
                    : "bg-secondary/50 text-secondary-foreground hover:bg-secondary hover:scale-105"
                }`}
              >
                {getCategoryName(category)}
              </button>
            ))}
          </motion.div>

          {/* All Projects Grid */}
          <BentoGrid>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <BentoCard
                  size={project.size || "medium"}
                  className="cursor-pointer hover:border-primary/50 transition-all h-full"
                  onClick={() =>
                    (window.location.href = `/projects/${project.slug}`)
                  }
                >
                  {project.featured && (
                    <BorderBeam size={250} duration={12} delay={9} />
                  )}

                  {/* Project Image */}
                  <div className="mb-4 h-48 rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                    <img
                      src={project.image}
                      alt={
                        language === "es"
                          ? project.title
                          : project.titleEn || project.title
                      }
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        if (target.parentElement) {
                          target.parentElement.innerHTML =
                            '<span class="text-6xl opacity-20 flex items-center justify-center h-full">🚀</span>';
                        }
                      }}
                    />
                  </div>

                  {/* Project Info */}
                  <h3 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {language === "es"
                      ? project.title
                      : project.titleEn || project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {language === "es"
                      ? project.description
                      : project.descriptionEn || project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="h-4 w-4 mr-1" />
                        {t("projects.code")}
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        {t("projects.demo")}
                      </a>
                    )}
                  </div>
                </BentoCard>
              </motion.div>
            ))}
          </BentoGrid>
        </div>
      </div>
    </main>
  );
}
