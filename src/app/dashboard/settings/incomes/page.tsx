import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default async function IncomePage() {
  const [count, setCount] = useState(0)

  // create a function to handle clicks
  const handleClick = () => {
    setCount((prevCount) => prevCount + 1)
  }

  return (
    <div>
      <h1>Income</h1>
      <p>This is the page for managin incomes</p>
      <Button onClick={handleClick}>Add {count}</Button>
      <p>This page is for managin some incomes settings related.</p>
    </div>
  )
}
