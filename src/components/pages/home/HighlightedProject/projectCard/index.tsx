import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from '../../../../Link'
import { TechBadge } from '../../../../techBadge'

interface ProjectProps {
  name: string
  img: string
  description: string
  techs: string[]
}

export function ProjectCard({ description, img, name, techs }: ProjectProps) {
  return (
    <div className="flex flex-col items-center gap-6 lg:gap-12 lg:flex-row">
      <div className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full">
        <Image
          src="/images/projects/book-wise.png"
          width={420}
          height={304}
          alt="My profile picture"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="flex-1 lg:py-[18px]">
        <div className="flex items-center gap-3 mb-6">
          <Image
            width={20}
            height={20}
            alt=""
            src="/images/icons/project-title-icon.svg"
          />
          <h3 className="text-lg font-medium text-gray-50">{name}</h3>
        </div>

        <p className="my-6 text-gray-400">{description}</p>
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {techs.map((tech, i) => (
            <TechBadge name="JavaScript" key={i + 1} />
          ))}
        </div>
        <Link href={'/projects/book-wise'}>
          Ver Projeto
          <HiArrowNarrowRight />
        </Link>
      </div>
    </div>
  )
}
