'use client'

import Link from 'next/link'

const HomePage = () => {
  return (
    <>
      <h1 className={`text-xl md:text-3xl text-primary md:leading-normal antialiased`}>
        <strong>
          Welcome to <br />
          SEBookkeeping.
        </strong>
      </h1>
      <p>
        SEBookkeeping (Self-Employed Bookkeeping) is an application that allows a bookkeeper to
        manage the accounting of self-employed people.
      </p>
      <Link
        href={'/login'}
        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm
        font-medium transition-colors focus-visible:outline-none focus-visible:ring-1
        focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary
        text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-1/2"
      >
        Log in
      </Link>
    </>
  )
}

export default HomePage
