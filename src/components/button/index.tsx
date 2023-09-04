import { cn } from '@/utils/utils'
import { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'px-4 py-3 bg-emerald-600 flex items-center justify-center gap-2 text-gray-50 rounded-lg transition-all hover:bg-emerald-500 disabled:opacity-50',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
