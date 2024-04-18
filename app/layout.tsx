import { ThemeProvider } from '@/components/theme-provider'
import TitleBar from '@components/ui/titlebar'
import '@styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

const inter = Inter({
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
    <html lang="es">
      <body className={inter.className}>
        <ThemeProvider>
          <TitleBar
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
