'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { authenticate } from '@/actions/auth'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'
import { toast } from '../ui/use-toast'

const FormSchema = z.object({
  username: z.string().min(2, { message: 'Username must be at least 2 characters.' }),
  password: z.string().min(5, { message: 'Password must be at least 5 characters.' })
})

const LoginForm = () => {
  // const [error, formAction] = useFormState(authenticate, undefined)
  // const params = useSearchParams()
  // const hasAlert = params.get('alert') === 'true'
  const router = useRouter()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: '',
      password: ''
    },
    criteriaMode: 'all'
  })

  // useEffect(() => {
  //   if (error) {
  //     toast({
  //       title: 'Sign in error',
  //       description: error,
  //       variant: 'destructive'
  //     })
  //   }
  // }, [error])

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    const formData = new FormData()

    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value)
    })

    const res = await authenticate('credentials', formData)

    if (res) {
      form.setError('root.serverError', { type: 'authError', message: res })
      toast({
        title: 'Sign in error',
        description: res,
        variant: 'destructive'
      })
    } else {
      router.push('/dashboard')
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 p-6"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  placeholder="username"
                  autoComplete="current-username"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="******"
                  autoComplete="current-password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full"
        >
          Sign in
        </Button>
      </form>
    </Form>
  )
}

export default LoginForm
