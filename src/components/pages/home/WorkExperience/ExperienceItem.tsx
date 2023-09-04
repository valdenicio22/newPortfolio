import { TechBadge } from "@/components/techBadge";
import { technologies } from "@/constants";
import Image from "next/image";

export function ExperienceItem() {
  return (
    <div className='grid grid-cols-[40px,1fr] gap-4 md:gap-10'>
      <div className='flex flex-col items-center gap-4'>
        <div className='rounded-full border border-gray-500 p-0.5'>
          <Image
            src={'/images/companies/ioasys.jpeg'}
            width={40}
            height={40}
            alt={'Ioasys Logo'}
            className='rounded-full'
          />
        </div>
        <div className='h-full w-[1px] bg-gray-800' />
      </div>
      <div>
        <div className='flex flex-col gap-2 text-sm sm:text-base'>
          <a
            href="https://www.linkedin.com/company/ioasys/"
            target="_blank"
            className="text-gray-500 hover:text-emerald-500 transition-colors">
            @ Ioasys
          </a>
          <h4 className='text-gray-300 font-medium'>Desenvolvedor Front-end</h4>
          <span className="text-gray-500">04-07-2022 • Momento • (10 meses)</span>
          <p className='text-gray-400'>Desenvolvimento e manutenção de interfaces utilizando React, Next, Tailwind, Typescript e Figma. Para o planejamento dos sprints, é utilizado o Jira.</p>
        </div>
        <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">
          Competências
        </p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
          {technologies.map((tech) => (
            <TechBadge
              name={tech}
              key={`experience-@Ioasys-tech-${tech}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}