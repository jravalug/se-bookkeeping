'use client'

import * as Icon from '@/components/icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

const clientPath = '/dashboard/self-employed/'

const clientsLinks = [
  { name: 'Client', href: clientPath, icon: Icon.Home },
  { name: 'Incomes', href: clientPath + 'incomes', icon: Icon.Incomes },
  { name: 'Expenses', href: clientPath + 'expenses', icon: Icon.Expenses },
  { name: 'Payroll', href: clientPath + 'payroll', icon: Icon.Payroll },
  { name: 'Taxes', href: clientPath + 'taxes', icon: Icon.Taxes },
  { name: 'Proration', href: clientPath + 'proration', icon: Icon.Proration },
  { name: 'Reports', href: clientPath + 'reports', icon: Icon.Reports }
]

interface NavLinkProps {
  name: string
  href: string
  icon: React.ComponentType<Icon.IconProps>
}
// TODO: move to data
const NavLink = ({ name, href, icon }: NavLinkProps) => {
  const pathname = usePathname()
  const LinkIcon = icon
  return (
    <div
      key={href}
      className={twMerge(
        'hover:bg-slate-700/50 text-center flex items-center justify-center',
        pathname === href && 'bg-slate-700/50'
      )}
    >
      <Link
        href={href}
        className={twMerge(
          `text-center py-3 flex flex-col items-center gap-1 font-sans text-sm text-slate-300/50 hover:text-slate-200`,
          pathname === href ? 'text-sky-300' : 'text-slate-300/50'
        )}
      >
        <span>
          <LinkIcon />
        </span>
        <span>{name}</span>
      </Link>
    </div>
  )
}

const SideNav = () => {
  return (
    <aside className="w-32 moverflow-auto">
      <nav className="h-full flex flex-col justify-between">
        <div>
          {clientsLinks.map(({ name, href, icon }) => {
            return (
              <NavLink
                key={href}
                href={href}
                name={name}
                icon={icon}
              />
            )
          })}
        </div>
        <div>
          <NavLink
            href="/dashboard/self-employed/settings"
            name={'Settings'}
            icon={Icon.Settings}
          />
        </div>
      </nav>
    </aside>
  )
}

export default SideNav
