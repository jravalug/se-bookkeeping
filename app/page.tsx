'use client'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useTheme } from 'next-themes'
import Image from 'next/image'

export default function Home() {
  const { theme } = useTheme()

  const onclick = () => {
    /* TODO:  */
  }

  return (
    <main className="flex h-screen items-center justify-center md:p-24">
      <Card className="flex grow flex-col gap-4 md:flex-row rounded-lg border px-6 py-10 md:px-10 max-w-4xl bg-card shadow">
        <div className="flex flex-col justify-center gap-5 md:w-1/2 ">
          <h1 className={`text-xl md:text-3xl text-primary md:leading-normal antialiased`}>
            <strong>
              Welcome to <br />
              SEBookkeeping.
            </strong>
          </h1>
          <p className="">
            SEBookkeeping (Self-Employed Bookkeeping) is an application that allows a bookkeeper to
            manage the accounting of self-employed people.
          </p>
          <Button
            size={'default'}
            className="w-1/2 hover"
            onClick={onclick}
          >
            Log in
          </Button>
        </div>
        <div className="flex items-center justify-center md:w-1/2">
          <Image
            src="/images/hero.png"
            width={1000}
            height={760}
            className="block sm:hidden"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src={`/images/hero${theme === 'dark' ? '-dark' : ''}.png`}
            width={560}
            height={620}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
        </div>
      </Card>
    </main>
  )
}
