import { KnownTech } from '@/Types/projects'
import { SectionTitle } from '@/components/SectionTitle'
import { KnowledgeBox } from '@/components/pages/home/Experience/knowledgeBox'

type ExperienceProps = {
  techs: KnownTech[]
}

export function Experience({ techs }: ExperienceProps) {
  return (
    <section className="container py-16">
      <SectionTitle section="Compotências" title="Conhecimentos" />
      <div
        className={
          'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-[60px]'
        }
      >
        {techs?.map((tech, i) => (
          <KnowledgeBox
            key={i}
            tech={{
              name: tech.name,
              iconSvg: tech.iconSvg,
              startDate: tech.startDate
            }}
          />
        ))}
      </div>
    </section>
  )
}
