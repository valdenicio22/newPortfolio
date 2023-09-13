import { CMSIcon } from '@/components/CMSIcon'
import { KnownTech } from '@/types/projects'
import { getRelativeTimeString } from '@/utils/getRelativeTime'

interface KnowlodgeBoxProps {
  tech: KnownTech
}

export function KnowledgeBox({ tech }: KnowlodgeBoxProps) {
  const relativeTime = tech?.startDate
    ? getRelativeTimeString(new Date(tech.startDate), 'en').replace('ago', '')
    : ''

  return (
    <div className="h-[104px] p-6 rounded-lg text-gray-500 flex flex-col gap-2 bg-gray-600/20 hover:text-emerald-500 hover:bg-gray-600/30 transition-all">
      <div className="flex items-center justify-between">
        <p className="font-medium">{tech.name}</p>
        {tech?.iconSvg && <CMSIcon icon={tech.iconSvg} />}
      </div>
      <span>{`${relativeTime} of experience`}</span>
    </div>
  )
}
