import { getRelativeTimeString } from '@/utils/getRelativeTime'
import { ReactNode } from 'react'

interface KnowlodgeBoxProps {
  tech: {
    icon: ReactNode
    name: string
    startDate: string
  }
}

export function KnowledgeBox({ tech }: KnowlodgeBoxProps) {
  const { icon, name, startDate } = tech
  const relativeTime = getRelativeTimeString(new Date(startDate), 'en').replace(
    'ago',
    ''
  )
  return (
    <div className="max-w-[264px] p-6 rounded-lg text-gray-500 flex flex-col gap-2 bg-gray-600/20 hover:text-emerald-500 hover:bg-gray-600/30 transition-all">
      <div className="flex items-center justify-between">
        <p className="font-medium">{name}</p>
        {icon}
      </div>
      <span>{`${relativeTime} of experience`}</span>
    </div>
  )
}
