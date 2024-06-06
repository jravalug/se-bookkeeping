import SideNav from '@/components/nav/settings-sidenav'

const SettingsLayout = ({ children }: React.PropsWithChildren): JSX.Element => {
  return (
    <>
      <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[120px_1fr] lg:grid-cols-[200px_1fr]">
        <div className="flex flex-col gap-4">
          <div className="mx-auto grid w-full max-w-6xl gap-2">
            <h1 className="text-2xl font-semibold">Settings</h1>
          </div>
          <SideNav />
        </div>
        <div className="grid gap-6 max-h-[calc(100vh_-_136px)] overflow-y-auto pr-1 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-muted scrollbar-pr">
          {children}
        </div>
      </div>
    </>
  )
}

export default SettingsLayout
