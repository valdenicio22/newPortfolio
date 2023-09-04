import { Link } from '@/components/Link'
import { SectionTitle } from '@/components/SectionTitle'
import { Button } from '@/components/button'
import { TechBadge } from '@/components/techBadge'
import { FiGlobe } from 'react-icons/fi'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { TbBrandGithub } from 'react-icons/tb'

export function ProjectDetails() {
  return (
    <section className="w-full sm:min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden">
      <div
        className="absolute inset-0 z-[-1]"
        style={{
          background:
            'url(/images/hero-bg.png) no-repeat center/cover, url(/images/projects/book-wise.png) no-repeat center/cover'
        }}
      />
      <SectionTitle
        section="project"
        title="BookWise"
        className="text-center items-center sm:[&>h3]:text-4xl"
      />
      <p className="text-gray-400 text-center max-w-[640px] my-4 text-sm sm:my-6 sm:text-base">
        BookWise é uma plataforma de avaliação de livros que foi desevolvida
        durante o bottecamp Ignite da RocketSeat. Com apenas um Figma
        presisávamos desenvolver essa aplicação completa Full Stack com
        Nextj.js.
      </p>
      <div className="w-full max-w-[330px] flex flex-wrap items-center justify-center gap-2">
        <TechBadge name="Next.js" />
        <TechBadge name="Next.js" />
        <TechBadge name="Next.js" />
        <TechBadge name="Next.js" />
        <TechBadge name="Next.js" />
        <TechBadge name="Next.js" />
        <TechBadge name="Next.js" />
      </div>
      <div className="my-6 flex flex-col items-center gap-2 sm:my-12 sm:gap-4 sm:flex-row">
        <a href="https://github.com" target="_blank">
          <Button className="min-w-[180px]">
            <TbBrandGithub size={20} />
            Repository
          </Button>
        </a>
        <a href="https://github.com" target="_blank">
          <Button className="min-w-[180px]">
            <FiGlobe size={20} />
            Project Online
          </Button>
        </a>
      </div>
      <Link href="/projects">
        <HiArrowNarrowLeft size={20} />
        Back to Projects
      </Link>
    </section>
  )
}
