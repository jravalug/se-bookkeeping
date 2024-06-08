'use client'

import { Button } from '@/components/ui/button'
import { PlusIcon } from '@radix-ui/react-icons'
import { useState } from 'react'

const ExpensePage = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>Expense Page</h1>
      <p>This is the expense page.</p>
      <Button onClick={() => setCount((prevCount) => prevCount + 1)}>
        <PlusIcon /> {count}
      </Button>
      <Button onClick={() => setCount(0)}>Reset count</Button>
    </div>
  )
}

export default ExpensePage
