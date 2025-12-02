import { projects } from '@/data/portfolio'
import { notFound } from 'next/navigation'
import ProjectContent from '@/components/ProjectContent'

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  return <ProjectContent project={project} />
}
