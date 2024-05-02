import Header from '@/components/nav/header'

const DashboardLayout = ({ children }: React.PropsWithChildren): JSX.Element => {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex min-h-[calc(100vh_-_104px)] flex-1 flex-col gap-4 bg-muted/40 p-4  md:p-10 md:pt-4">
        {children}
      </main>
    </div>
  )
}

export default DashboardLayout
