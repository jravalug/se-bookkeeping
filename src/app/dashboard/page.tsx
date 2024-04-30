import { signOut } from '@/auth'
import { isRedirectError } from 'next/dist/client/components/redirect'
import { redirect } from 'next/navigation'

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      {/* Add your dashboard content here */}
      <form
        action={async () => {
          'use server'

          try {
            await signOut({ redirect: false })
          } catch (err) {
            if (isRedirectError(err)) {
              console.error(err)
              throw err
            }
          } finally {
            redirect('/login')
          }
        }}
      >
        <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-500 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
          <div className="hidden md:block">Sign Out</div>
        </button>
      </form>
    </div>
  )
}

export default Dashboard
