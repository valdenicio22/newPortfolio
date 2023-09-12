'use client'

import { Project } from '@/Types/projects'
import { fadeUpAnimation, techBadgeAnimation } from '@/lib/animation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from '../../../../Link'
import { TechBadge } from '../../../../techBadge'

interface ProjectProps {
  project: Project
}

export function ProjectCard({ project }: ProjectProps) {
  return (
    <motion.div
      className="flex flex-col items-center gap-6 lg:gap-12 lg:flex-row"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full"
        initial={{ opacity: 0, y: 100, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 100, scale: 0.5 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <Image
          src={project.thumbnail.url}
          width={420}
          height={304}
          alt={`Thumbnail of the project ${project.title}`}
          className="w-full h-full object-contain rounded-lg"
        />
      </motion.div>
      <div className="flex-1 lg:py-[18px]">
        <motion.h3
          className="flex items-center gap-3 text-lg font-medium text-gray-50"
          {...fadeUpAnimation}
          transition={{ duration: 0.7 }}
        >
          <Image
            width={20}
            height={20}
            alt=""
            src="/images/icons/project-title-icon.svg"
          />

          {project.title}
        </motion.h3>

        <motion.p
          className="my-6 text-gray-400"
          {...fadeUpAnimation}
          transition={{ duration: 0.2, delay: 0.3 }}
        >
          {project.shortDescription}
        </motion.p>

        <div className="flex flex-wrap items-center gap-2 mb-8">
          {project?.technologies.map((tech, i) => (
            <TechBadge
              name={tech.name}
              key={`${project.title}-tech-${tech.name}`}
              {...techBadgeAnimation}
              transition={{ duration: 0.2, delay: 0.5 + i * 0.1 }}
            />
          ))}
        </div>
        <Link href={`/projects/${project.slug}`}>
          Ver Projeto
          <HiArrowNarrowRight />
        </Link>
      </div>
    </motion.div>
  )
}
