import { KnownTech } from '@/Types/projects'
import { CMSIcon } from '@/components/CMSIcon'
import { getRelativeTimeString } from '@/utils/getRelativeTime'

interface KnowlodgeBoxProps {
  tech: KnownTech
}

export function KnowledgeBox({ tech }: KnowlodgeBoxProps) {
  const { iconSvg, name, startDate } = tech
  const relativeTime = getRelativeTimeString(new Date(startDate), 'en').replace(
    'ago',
    ''
  )
  return (
    <div className="max-w-[264px] p-6 rounded-lg text-gray-500 flex flex-col gap-2 bg-gray-600/20 hover:text-emerald-500 hover:bg-gray-600/30 transition-all">
      <div className="flex items-center justify-between">
        <p className="font-medium">{name}</p>
        <CMSIcon icon={iconSvg} />
      </div>
      <span>{`${relativeTime} of experience`}</span>
    </div>
  )
}
