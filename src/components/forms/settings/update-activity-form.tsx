'use client'

import { updateActivity } from '@/actions/settings/activity'
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
import { DropdownMenuItem } from '@/components/ui/dropdown-menu'
import {
  Form,
  FormControl,
  FormItem,
  FormLabel,
  UncontrolledFormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'
import { UpdateActivityInput, updateActivitySchema } from '@/validations/settings/activity'
import { zodResolver } from '@hookform/resolvers/zod'
import { Activity } from '@prisma/client'
import { useRouter } from 'next/navigation'
import { useEffect, useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'

interface UpdateActivityFormProps {
  activity: Activity
}
export function UpdateActivityForm({ activity }: Readonly<UpdateActivityFormProps>): JSX.Element {
  const router = useRouter()
  const { toast } = useToast()
  const [isUpdating, startUpdateTransition] = useTransition()
  const [open, setOpen] = useState(false)

  const form = useForm<UpdateActivityInput>({
    resolver: zodResolver(updateActivitySchema),
    defaultValues: {
      code: activity.code,
      name: activity.name
    }
  })

  useEffect(() => {
    if (!open) form.reset()
  }, [open, form])

  const onSubmit = (formData: UpdateActivityInput): void => {
    startUpdateTransition(async () => {
      try {
        const message = await updateActivity({
          code: formData.code,
          name: formData.name
        })

        switch (message) {
          case 'invalid-input':
            toast({
              title: 'Invalid input',
              description: 'The input is invalid.',
              variant: 'destructive'
            })
            break
          case 'not-found':
            toast({
              title: 'No category found',
              description: 'The activity with the given CODE does not exist.',
              variant: 'destructive'
            })
            break
          case 'success':
            toast({
              title: 'Activity updated',
              description: 'The activity was successfully updated.'
            })
            router.refresh()
            setOpen(false)
            break
          default:
            toast({
              title: 'Error updating activity',
              description: 'An error occurred while updating the activity.',
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
        <DropdownMenuItem
          className="cursor-pointer"
          onSelect={(e) => e.preventDefault()}
          disabled={isUpdating}
        >
          Edit
        </DropdownMenuItem>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update activity</DialogTitle>
          <DialogDescription>Modify activity for self-employed.</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            id="add-activity-form"
            className="grid w-full gap-4"
            onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
          >
            <FormItem>
              <FormLabel>Activity Code</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  disabled
                  defaultValue={activity.code}
                  {...form.register('code')}
                />
              </FormControl>
            </FormItem>

            <FormItem>
              <FormLabel>Activity Name</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Activity Name"
                  defaultValue={activity.name}
                  {...form.register('name')}
                />
              </FormControl>
              <UncontrolledFormMessage message={form.formState.errors.name?.message} />
            </FormItem>
          </form>
        </Form>
        <DialogFooter>
          <Button
            form="add-activity-form"
            type="submit"
            className="w-full"
            disabled={isUpdating}
          >
            {isUpdating ? 'Updating...' : 'Update'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
