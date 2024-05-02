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

export default function Dashboard() {
  return (
    <>
      <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
        <div className="flex flex-col gap-4">
          <div className="mx-auto grid w-full max-w-6xl gap-2">
            <h1 className="text-2xl font-semibold">Settings</h1>
          </div>
          <nav
            className="grid gap-4 text-sm text-muted-foreground"
            x-chunk="dashboard-04-chunk-0"
          >
            <Link
              href="#"
              className="font-semibold text-primary"
            >
              General
            </Link>
            <Link href="#">Security</Link>
            <Link href="#">Integrations</Link>
            <Link href="#">Support</Link>
            <Link href="#">Organizations</Link>
            <Link href="#">Advanced</Link>
          </nav>
        </div>
        <div className="grid gap-6 max-h-[calc(100vh_-_136px)] overflow-y-auto pr-1 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-muted scrollbar-pr">
          <Card x-chunk="dashboard-04-chunk-1">
            <CardHeader>
              <CardTitle>Store Name</CardTitle>
              <CardDescription>Used to identify your store in the marketplace.</CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <Input placeholder="Store Name" />
              </form>
            </CardContent>
            <CardFooter className="border-t px-6 py-4">
              <Button>Save</Button>
            </CardFooter>
          </Card>
          <Card x-chunk="dashboard-04-chunk-2">
            <CardHeader>
              <CardTitle>Plugins Directory</CardTitle>
              <CardDescription>
                The directory within your project, in which your plugins are located.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="flex flex-col gap-4">
                <Input
                  placeholder="Project Name"
                  defaultValue="/content/plugins"
                />
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="include"
                    defaultChecked
                  />
                  <label
                    htmlFor="include"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Allow administrators to change the directory.
                  </label>
                </div>
              </form>
            </CardContent>
            <CardFooter className="border-t px-6 py-4">
              <Button>Save</Button>
            </CardFooter>
          </Card>
          <Card x-chunk="dashboard-04-chunk-2">
            <CardHeader>
              <CardTitle>Plugins Directory</CardTitle>
              <CardDescription>
                The directory within your project, in which your plugins are located.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="flex flex-col gap-4">
                <Input
                  placeholder="Project Name"
                  defaultValue="/content/plugins"
                />
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="include"
                    defaultChecked
                  />
                  <label
                    htmlFor="include"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Allow administrators to change the directory.
                  </label>
                </div>
              </form>
            </CardContent>
            <CardFooter className="border-t px-6 py-4">
              <Button>Save</Button>
            </CardFooter>
          </Card>
          <Card x-chunk="dashboard-04-chunk-2">
            <CardHeader>Algo</CardHeader>
            <CardContent>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque incidunt soluta magnam
              enim nobis ratione sit impedit necessitatibus sapiente mollitia consequuntur dicta
              dignissimos dolorum, aperiam ea explicabo, iusto voluptatibus quam? Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Iusto soluta dicta voluptas a cupiditate vel
              culpa quod, eius molestias repellendus tempora, laudantium laborum omnis error
              delectus rem, atque quisquam provident! Soluta blanditiis aperiam voluptatem nam
              nihil. Quia non sequi quae fugit, voluptates eius iste id dolore? Corrupti molestiae
              veniam aliquid distinctio suscipit, a voluptatum enim assumenda illum consectetur
              necessitatibus at! Accusantium ex nam vitae? Inventore totam ullam ipsa sit
              perferendis quam dicta corrupti? Perspiciatis reprehenderit debitis quo rerum sit eius
              error. Numquam placeat velit cupiditate dignissimos expedita similique alias
              laudantium! Exercitationem placeat nemo doloremque cumque facilis repudiandae mollitia
              rem dicta odio iure quasi amet blanditiis porro ad, voluptatem fugiat nostrum
              perspiciatis excepturi ipsum unde corrupti quos dolor est eligendi. Esse.
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
