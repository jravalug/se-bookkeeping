'use client'

import * as Icon from '@/components/icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

const links = [
  { href: '/dashboard/self-employed', label: 'Contribuyente', icon: Icon.Home },
  { href: '/dashboard/self-employed/incomes', label: 'Incomes', icon: Icon.Incomes },
  { href: '/dashboard/self-employed/expenses', label: 'Expenses', icon: Icon.Expenses },
  { href: '/dashboard/self-employed/payroll', label: 'Payroll', icon: Icon.Payroll },
  { href: '/dashboard/self-employed/taxes', label: 'Taxes', icon: Icon.Taxes },
  { href: '/dashboard/self-employed/proration', label: 'Proration', icon: Icon.Proration },
  { href: '/dashboard/self-employed/reports', label: 'Reports', icon: Icon.Reports }
]

interface NavLinkProps {
  href: string
  label: string
  icon: React.ComponentType<Icon.IconProps>
}
// TODO: move to data
const NavLink = ({ href, label, icon }: NavLinkProps) => {
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
        <span>{label}</span>
      </Link>
    </div>
  )
}

const SideNav = () => {
  return (
    <aside className="w-32 moverflow-auto">
      <nav className="h-full flex flex-col justify-between">
        <div>
          {links.map(({ href, label, icon }) => {
            return (
              <NavLink
                key={href}
                href={href}
                label={label}
                icon={icon}
              />
            )
          })}
        </div>
        <div>
          <NavLink
            href="/dashboard/self-employed/settings"
            label={'Settings'}
            icon={Icon.Settings}
          />
        </div>
      </nav>
    </aside>
  )
}

export default SideNav
