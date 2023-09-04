import { cn } from '@/utils/utils'

interface HorizontalDividirProps {
  className?: string
}

export function HorizontalDividir({ className }: HorizontalDividirProps) {
  return (
    <div className={cn('w-full my-8 border-b border-b-gray-800', className)} />
  )
}
