import { cn } from '@/utils/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavItemProps {
  href: string
  label: string
}

export function NavItem({ href, label }: NavItemProps) {
  const currentPath = usePathname()
  const isActive = currentPath === href
  return (
    <Link
      href={href}
      className={cn(`flex items-center gap-2 text-gray-400 font-mono font-medium text-sm`, isActive && 'text-gray-50')}
    >
      <span className={`text-emerald-400`}>#</span>
      {label}
    </Link>
  )
}
