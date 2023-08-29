import { cn } from "@/utils/utils"

interface SectionTitleProps {
  section: string
  title: string
  className?: string
}

export function SectionTitle({ section, title, className }: SectionTitleProps) {
  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <span className='font-mono text-sm text-emerald-400'>{`../${section}`}</span>
      <h2 className='font-medium text-3xl'>{title}</h2>
    </div>
  )
}