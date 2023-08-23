import Link from "next/link";

interface NavItemProps {
  href: string;
  label: string
}

export function NavItem({ href, label }: NavItemProps) {
  return <Link href={href} className={`flex items-center gap-2 text-gray-400 font-mono font-medium`}>
    <span className={`text-emerald-400`}>#</span>
    {label}
  </Link>
}