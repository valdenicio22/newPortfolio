'use client'
import { KnownTech } from '@/Types/projects'
import { SectionTitle } from '@/components/SectionTitle'
import { KnowledgeBox } from '@/components/pages/home/Experience/knowledgeBox'
import { motion } from 'framer-motion'

type ExperienceProps = {
  techs: KnownTech[]
}

export function Experience({ techs }: ExperienceProps) {
  return (
    <section className="container py-16">
      <SectionTitle section="Skills" title="Knowledge" />
      <div
        className={
          'grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]'
        }
      >
        {techs?.map((tech, i) => (
          <motion.div
            key={`${tech.name}-${i}`}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.2, delay: i * 0.1 }}
          >
            <KnowledgeBox
              tech={{
                name: tech.name,
                iconSvg: tech.iconSvg,
                startDate: tech.startDate
              }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
