import SideNav from '@components/ui/taxpayer/sidenav'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="h-full flex">
      <SideNav />
      <div className="flex-1 overflow-auto bg-slate-700/50 p-4">{children}</div>
    </section>
  )
}

export default Layout
