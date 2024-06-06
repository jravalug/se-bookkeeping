'use client'

import { addActivity } from '@/actions/settings/activity'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'
import { AddActivityInput, addActivitySchema } from '@/validations/settings/activity'
import { zodResolver } from '@hookform/resolvers/zod'
import { PlusCircledIcon } from '@radix-ui/react-icons'
import { useRouter } from 'next/navigation'
import { useEffect, useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'

export function AddActivityForm() {
  const router = useRouter()
  const { toast } = useToast()
  const [isPending, startTransition] = useTransition()
  const [open, setOpen] = useState(false)

  const form = useForm<AddActivityInput>({
    resolver: zodResolver(addActivitySchema),
    defaultValues: {
      code: '',
      name: ''
    }
  })

  useEffect(() => {
    if (!open) form.reset()
  }, [open, form])

  const onSubmit = (formData: AddActivityInput): void => {
    startTransition(async () => {
      try {
        const message = await addActivity({
          code: formData.code,
          name: formData.name
        })

        switch (message) {
          case 'exists':
            toast({
              title: 'Activity already exists',
              description: 'The activity you are trying to add already exists.',
              variant: 'destructive'
            })
            break
          case 'success':
            toast({
              title: 'Activity added',
              description: 'The activity was successfully added.'
            })
            router.refresh()
            setOpen(false)
            break
          default:
            toast({
              title: 'Error adding activity',
              description: 'An error occurred while adding the activity.',
              variant: 'destructive'
            })
            break
        }
      } catch (error) {
        console.log(error)
        toast({
          title: 'Something went wrong',
          description: 'Try again.',
          variant: 'destructive'
        })
      } finally {
        form.reset()
      }
    })
  }

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogTrigger asChild>
        <Button
          variant={'outline'}
          size={'sm'}
          className="h-8"
        >
          <PlusCircledIcon
            className="mr-2 size-4"
            aria-hidden="true"
          />
          Add Activity
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add activity</DialogTitle>
          <DialogDescription>Create new activity for self-employed.</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            id="add-activity-form"
            className="grid w-full gap-4"
            onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
          >
            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Activity Code"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="sm:text-sm" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Activity Name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="sm:text-sm" />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <DialogFooter>
          <Button
            form="add-activity-form"
            type="submit"
            className="w-full"
            disabled={isPending}
          >
            {isPending ? 'Creating...' : 'Create'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
