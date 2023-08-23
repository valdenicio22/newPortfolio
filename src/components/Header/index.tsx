import Image from "next/image";
import Link from "next/link";
import { NavItem } from "./NavItem";

const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'Projects',
    href: '/projects'
  }
]

export function Header() {
  return <header className='flex items-center justify-center absolute top-0 z-10 w-full h-24'>
    <div className='container flex items-center justify-between'>
      <Link href='/'>
        <Image width={58} height={49} src='images/logo.svg' alt='Placeholder Logo' />
      </Link>
      <nav className="flex items-center gap-4 sm:gap-10">
        {NAV_ITEMS.map((item) => <NavItem key={item.label} {...item} />)}
      </nav>
    </div>
  </header>
}