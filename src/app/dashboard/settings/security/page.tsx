import Link from 'next/link'
// import { CircleUser, Menu, Package2, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'

export default function Security() {
  return (
    <>
      <Card x-chunk="dashboard-04-chunk-1">
        <CardHeader>
          <CardTitle>Security</CardTitle>
          <CardDescription>Used to work with security</CardDescription>
        </CardHeader>
        <CardContent>Security content</CardContent>
        <CardFooter className="border-t px-6 py-4">
          <Button>Security footer</Button>
        </CardFooter>
      </Card>
    </>
  )
}
