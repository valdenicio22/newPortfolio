import { SectionTitle } from '@/components/SectionTitle'
import { ExperienceItem } from './ExperienceItem'

export function WorkExperience() {
  return (
    <section className="container py-16 flex flex-col gap-10 md:flex-row md:gap-4 lg:gap-16 ">
      <div className="max-w-[420px]">
        <SectionTitle section="experiência" title="Experiência Profissional" />
        <p className="text-gray-400 mt-6">
          Estou sempre disponivel a novos desafios e projetos emocionantes.
          Vamos trabalhar juntos para criar a solução melhor para o nosso
          client.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <ExperienceItem />
        <ExperienceItem />
        <ExperienceItem />
      </div>
    </section>
  )
}
