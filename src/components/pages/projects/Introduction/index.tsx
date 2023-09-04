import { Link } from '@/components/Link'
import { SectionTitle } from '@/components/SectionTitle'
import { HiArrowNarrowLeft } from 'react-icons/hi'

export function Introduction() {
  return (
    <section className="w-full h-[460px] lg:h-[630px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-2">
      <SectionTitle
        section="projects"
        title="My Projects"
        className="text-center items-center [&>h3:text-4xl]"
      />
      <div className="flex flex-col items-center ">
        <p className="max-w-[640px] my-6 text-sm text-gray-400 text-center sm:text-base">
          Aqui você poderá ver alguns dos trabalhos que eu desenvolvi. Navegue à
          vontade e explore os projetos para ver como foram criados, as
          tecnologias utilizadas e as funcionalidades implementadas.
        </p>
        <Link href="/">
          <HiArrowNarrowLeft size={20} />
          Back to home page
        </Link>
      </div>
    </section>
  )
}
