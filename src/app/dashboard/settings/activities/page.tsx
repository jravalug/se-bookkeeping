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

export default function Activities() {
  return (
    <>
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
          dignissimos dolorum, aperiam ea explicabo, iusto voluptatibus quam? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Iusto soluta dicta voluptas a cupiditate vel culpa
          quod, eius molestias repellendus tempora, laudantium laborum omnis error delectus rem,
          atque quisquam provident! Soluta blanditiis aperiam voluptatem nam nihil. Quia non sequi
          quae fugit, voluptates eius iste id dolore? Corrupti molestiae veniam aliquid distinctio
          suscipit, a voluptatum enim assumenda illum consectetur necessitatibus at! Accusantium ex
          nam vitae? Inventore totam ullam ipsa sit perferendis quam dicta corrupti? Perspiciatis
          reprehenderit debitis quo rerum sit eius error. Numquam placeat velit cupiditate
          dignissimos expedita similique alias laudantium! Exercitationem placeat nemo doloremque
          cumque facilis repudiandae mollitia rem dicta odio iure quasi amet blanditiis porro ad,
          voluptatem fugiat nostrum perspiciatis excepturi ipsum unde corrupti quos dolor est
          eligendi. Esse.
        </CardContent>
      </Card>
    </>
  )
}
