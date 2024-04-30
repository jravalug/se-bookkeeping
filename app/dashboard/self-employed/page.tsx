import { signOut } from '@/auth'

const Page = () => {
  return (
    <div>
      <h1>Taxpayer Page</h1>
      <p>This is the taxpayer page.</p>
      <form
        action={async () => {
          'use server'

          await signOut()
        }}
      >
        <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
          <div className="hidden md:block">Sign Out</div>
        </button>
      </form>
    </div>
  )
}

export default Page
