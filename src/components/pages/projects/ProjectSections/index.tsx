'use client'

import { fadeUpAnimation } from '@/lib/animation'
import { Project } from '@/types/projects'
import { motion } from 'framer-motion'
import Image from 'next/image'

type ProjectSections = {
  sections: Project['sections']
}

export function ProjectSections({ sections }: ProjectSections) {
  return (
    <section className="container my-12 md:my-32 flex flex-col gap-8 md:gap-32">
      {sections.map((section) => (
        <motion.div
          key={section.title}
          className="flex flex-col items-center gap-6 md:gap-12"
          {...fadeUpAnimation}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-medium text-gray-300 md:text-3xl">
            {section.title}
          </h2>
          <div className="max-w-[1080px] max-h-[710px]">
            <Image
              src={section.image.url}
              width={1080}
              height={710}
              className="w-full aspect-auto object-cover rounded-lg"
              alt={`section image of the ${section.title}`}
            />
          </div>
        </motion.div>
      ))}
    </section>
  )
}
