import { SectionTitle } from "@/components/SectionTitle";
import { KnowledgeBox } from "@/components/pages/home/Experience/knowledgeBox";
import { TbBrandNextjs } from "react-icons/tb";


export function Experience() {
  return <section className='container py-16'>
    <SectionTitle section="Compotências" title="Conhecimentos" />
    <div className={'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-[60px]'}>
      {Array.from({ length: 8 }).map((_, i) => (

        <KnowledgeBox key={i} tech={{
          name: 'NextJs',
          icon: <TbBrandNextjs size={24} />,
          startDate: '2022-01-01'
        }} />

      ))}
    </div>

  </section>

}