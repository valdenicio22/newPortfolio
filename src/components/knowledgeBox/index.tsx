import { ReactNode } from "react";

interface KnowlodgeBoxProps {
  tech: string;
  xp: number;
  icon: ReactNode | string
}

export function KnowledgeBox({ tech, xp, icon }: KnowlodgeBoxProps) {
  const experienceText = xp > 1 ? `s` : ''
  return <div className='w-[264px] bg-gray-500/20 p-6 rounded-lg'>
    <div className='flex items-center justify-between gap-2 text-gray-500/80'>
      <span>{tech}</span>
      {icon}
    </div>
    <span className='text-gray-500/80'>{`${xp} ano${experienceText} de experencie`}</span>
  </div>
}