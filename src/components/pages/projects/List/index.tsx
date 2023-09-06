import { ProjectsPageData } from '@/Types/home'
import Link from 'next/link'
import { Card } from '../Card'

type ListProps = {
  projects: ProjectsPageData['projects']
}

export function List({ projects }: ListProps) {
  return (
    <section className="container py-32 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6">
      {projects.map((project, i) => (
        <Link href={`/projects/${project.slug}`} key={`${project.slug}-${i}`}>
          <Card project={project} />
        </Link>
      ))}
    </section>
  )
}
