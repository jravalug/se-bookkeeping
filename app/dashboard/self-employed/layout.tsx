import SideNav from '@components/ui/taxpayer/sidenav'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-row min-h-screen">
      <SideNav />
      <div className="flex-1 overflow-auto mt-10 bg-slate-700/50 p-4">{children}</div>
    </div>
  )
}

export default Layout
