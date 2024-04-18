import { ThemeProvider } from '@/components/theme-provider'
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
