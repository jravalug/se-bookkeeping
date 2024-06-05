'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

const settingsPath = '/dashboard/settings'

const clientsLinks = [
  { name: 'General', href: settingsPath },
  { name: 'Activities', href: settingsPath + '/activities' }
]

interface NavLinkProps {
  name: string
  href: string
}
// TODO: move to data
const NavLink = ({ name, href }: NavLinkProps) => {
  const pathname = usePathname()

  return (
    <Link
      href={href}
      className={twMerge(pathname === href ? 'font-semibold text-primary' : 'hover:text-primary')}
    >
      {name}
    </Link>
  )
}

const SideNav = () => {
  return (
    <nav
      className="grid gap-4 text-sm text-muted-foreground"
      x-chunk="dashboard-04-chunk-0"
    >
      {clientsLinks.map(({ name, href }) => {
        return (
          <NavLink
            key={href}
            href={href}
            name={name}
          />
        )
      })}
    </nav>
  )
}

export default SideNav
