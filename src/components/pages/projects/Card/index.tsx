import { Project } from '@/Types/projects'
import Image from 'next/image'

type CardProps = {
  project: Project
}

export function Card({ project }: CardProps) {
  const { shortDescription, thumbnail, technologies, title } = project
  const techonologiesAsString = technologies.map((tech) => tech.name).join(', ')

  return (
    <div
      className="h-[436px] rounded-lg flex flex-col bg-gray-800 overflow-hidden border-2
    border-gray-800 hover:border-emerald-500 opacity-70 hover:opacity-100 transition-all group"
    >
      <div className="w-full h-48 overflow-hidden">
        <Image
          src={thumbnail.url}
          width={380}
          height={200}
          unoptimized
          alt={`Thumbnail of the ${title} project`}
          className=" w-full h-full object-cover group-hover:scale-110 duration-500 transition-all"
        />
      </div>

      <div className="flex-1 flex flex-col p-8">
        <strong className="font-medium text-gray-50/90 group-hover:text-emerald-500 transition-all">
          {title}
        </strong>
        <p className="mt-2 text-gray-400 line-clamp-4">{shortDescription}</p>
        <span className="block text-gray-300 text-sm font-medium mt-auto truncate">
          {techonologiesAsString}
        </span>
      </div>
    </div>
  )
}
