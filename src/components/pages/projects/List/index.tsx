'use client'
import { fadeUpAnimation } from '@/lib/animation'
import { ProjectsPageData } from '@/types/pageInfo'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card } from '../Card'

type ListProps = {
  projects: ProjectsPageData['projects']
}

export function List({ projects }: ListProps) {
  return (
    <section className="container py-32 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6">
      {projects.map((project, i) => (
        <motion.div
          key={`${project.slug}-${i}`}
          {...fadeUpAnimation}
          transition={{ duration: 0.6, delay: i * 0.2 }}
        >
          <Link href={`/projects/${project.slug}`}>
            <Card project={project} />
          </Link>
        </motion.div>
      ))}
    </section>
  )
}
