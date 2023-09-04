import { Link } from '@/components/Link'
import { SectionTitle } from '@/components/SectionTitle'
import { HorizontalDividir } from '@/components/horizontalDividir'
import { ProjectCard } from '@/components/pages/home/HighlightedProject/projectCard'
import { technologies } from '@/constants'
import { HiArrowNarrowRight } from 'react-icons/hi'

export function HighlightedProject() {
  return (
    <section className="container py-16">
      <SectionTitle section="destaques" title="Projetos em destaques" />
      <HorizontalDividir className="mb-16" />

      <div>
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i}>
            <ProjectCard
              img="img"
              name="BookWise"
              techs={technologies}
              description="BookWise é uma plataforma de avaliação de livros que foi desenvolvida durante o bootcamp Ignite da Rocketseat. Com apenas um Figma precisavamos desenvolver essa aplicação completa Full Stack com Next.js."
            />
            <HorizontalDividir className="mb-16" />
          </div>
        ))}
        <p className="flex items-center gap-1.5">
          <Link href="/projects" className="inline-flex">
            Ver todos
            <HiArrowNarrowRight />
          </Link>
        </p>
      </div>
    </section>
  )
}
