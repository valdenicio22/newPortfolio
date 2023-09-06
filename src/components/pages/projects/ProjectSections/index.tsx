import { Project } from '@/Types/projects'
import Image from 'next/image'

type ProjectSections = {
  sections: Project['sections']
}

export function ProjectSections({ sections }: ProjectSections) {
  return (
    <section className="container my-12 md:my-32 flex flex-col gap-8 md:gap-32">
      {sections.map((section) => (
        <div
          key={section.title}
          className="flex flex-col items-center gap-6 md:gap-12"
        >
          <h2 className="text-2xl font-medium text-gray-300 md:text-3xl">
            {section.title}
          </h2>
          <Image
            src={section.image.url}
            width={1080}
            height={672}
            className="w-full aspect-auto object-cover rounded-lg"
            alt={`imagem da sessão ${section.title}`}
            unoptimized
          />
        </div>
      ))}
    </section>
  )
}
