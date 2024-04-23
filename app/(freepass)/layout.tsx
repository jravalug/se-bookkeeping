'use client'
import { Card } from '@/components/ui/card'
import { useTheme } from 'next-themes'
import Image from 'next/image'

export default function FreePassLayout({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme()

  const heroExt = '.avif'
  const heroSrc = '/images/hero' + (resolvedTheme !== 'light' ? '-dark' : '') + heroExt

  return (
    <main className="absolute flex h-[calc(100dvh-40px)] items-center justify-center md:p-24 container top-10">
      <Card className="flex grow flex-col gap-4 md:flex-row rounded-lg border px-6 py-10 md:px-10 max-w-4xl bg-card shadow">
        <div className="flex flex-col justify-center gap-5 md:w-1/2 ">{children}</div>
        <div className="flex items-center justify-center md:w-1/2">
          <Image
            src={heroSrc}
            width={560}
            height={620}
            className="hidden md:block"
            alt="Ilustration of bookkeeping working."
          />
        </div>
      </Card>
    </main>
  )
}
