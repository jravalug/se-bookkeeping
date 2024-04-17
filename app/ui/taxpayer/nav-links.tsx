'use client'

import * as Icon from '@ui/icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

const links = [
  { href: '/taxpayer', label: 'Contribuyente', icon: Icon.Home },
  { href: '/taxpayer/incomes', label: 'Incomes', icon: Icon.Incomes },
  { href: '/taxpayer/expenses', label: 'Expenses', icon: Icon.Expenses },
  { href: '/taxpayer/payroll', label: 'Payroll', icon: Icon.Payroll },
  { href: '/taxpayer/taxes', label: 'Taxes', icon: Icon.Taxes },
  { href: '/taxpayer/proration', label: 'Proration', icon: Icon.Proration },
  { href: '/taxpayer/reports', label: 'Reports', icon: Icon.Reports }
]

interface NavLinkProps {
  href: string
  label: string
  icon: React.ComponentType<Icon.IconProps>
}

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

const NavLinks = () => {
  return (
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
          href="/taxpayer/settings"
          label={'Settings'}
          icon={Icon.Settings}
        />
      </div>
    </nav>
  )
}

export default NavLinks
