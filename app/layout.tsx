import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import '@/styles/globals.css'
import TitleBar from '@components/ui/titlebar'
import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'SEBookkeeping',
  description:
    'SEBookkeeping (Self-Employed Bookkeeping) is an application that allows a bookkeeper to manage the accounting of self-employed people'
}

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html
      lang="es"
      suppressHydrationWarning
    >
      <body className={fontSans.variable}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TitleBar />
          <main className="absolute w-screen h-[calc(100dvh-40px)] top-10">{children}</main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
