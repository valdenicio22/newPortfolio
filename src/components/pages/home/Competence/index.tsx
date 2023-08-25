import { KnowledgeBox } from "@/components/knowledgeBox";


export function Competence() {
  return <section className='w-full bg-gray-900'>
    <div className='container flex flex-col p-16'>
      <span className='text-emerald-400 font-mono'>...Compotencias</span>
      <h2 className='text-3xl font-medium mt-4'>Conhecimentos</h2>

      <div className={'w-full flex flex-wrap gap-2 mt-14'}>
        {Array.from({ length: 6 }).map((_, i) => (
          <KnowledgeBox key={i} icon={'icon'} tech="HTML" xp={3} />
        ))}
      </div>

    </div>
  </section>
}