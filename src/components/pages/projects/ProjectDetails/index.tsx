'use client'

import { Button } from '@/components/Button'
import { Link } from '@/components/Link'
import { SectionTitle } from '@/components/SectionTitle'
import { TechBadge } from '@/components/TechBadge'
import { fadeUpAnimation, techBadgeAnimation } from '@/lib/animation'
import { Project } from '@/types/projects'
import { RichText } from '@graphcms/rich-text-react-renderer'
import { motion } from 'framer-motion'
import { FiGlobe } from 'react-icons/fi'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { TbBrandGithub } from 'react-icons/tb'

type ProjectDetailsProps = {
  project: Project
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  const {
    thumbnail,
    title,
    description,
    technologies,
    githubUrl,
    liveProjectUrl
  } = project
  return (
    <section className="w-full sm:min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden">
      <motion.div
        className="absolute inset-0 z-[-1]"
        style={{
          background: `url(/images/hero-bg.png) no-repeat center/cover, url(${thumbnail.url}) no-repeat center/cover`
        }}
        initial={{ opacity: 0, scale: 1.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <SectionTitle
        section="project"
        title={title}
        className="text-center items-center sm:[&>h3]:text-4xl"
      />
      <motion.div
        className="text-gray-400 text-center max-w-[640px] my-4 text-sm sm:my-6 sm:text-base"
        {...fadeUpAnimation}
      >
        <RichText content={description.raw} />
      </motion.div>
      <div className="w-full max-w-[330px] flex flex-wrap items-center justify-center gap-2">
        {technologies.map((tech, i) => (
          <TechBadge
            name={tech.name}
            key={`${tech.name}-${i}`}
            {...techBadgeAnimation}
            transition={{ duration: 0.3, delay: i * 0.1 }}
          />
        ))}
      </div>
      <motion.div
        className="my-6 flex flex-col items-center gap-2 sm:my-12 sm:gap-4 sm:flex-row"
        {...fadeUpAnimation}
      >
        {githubUrl && (
          <a href={githubUrl} target="_blank">
            <Button className="min-w-[180px]">
              <TbBrandGithub size={20} />
              Repository
            </Button>
          </a>
        )}
        {liveProjectUrl && (
          <a href={liveProjectUrl} target="_blank">
            <Button className="min-w-[180px]">
              <FiGlobe size={20} />
              Project Online
            </Button>
          </a>
        )}
      </motion.div>
      <Link href="/projects">
        <HiArrowNarrowLeft size={20} />
        Back to Projects
      </Link>
    </section>
  )
}
