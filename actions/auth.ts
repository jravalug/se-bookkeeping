'use server'

import { signIn, signOut } from '@/auth'
import db from '@prisma/prisma'
import { AuthError } from 'next-auth'

// Function to find a user by username in the database
export const findUserByUsername = async (username: string) => {
  return await db.user.findUnique({
    where: {
      username
    }
  })
}

// Authenticating function for sign-in
export async function authenticate(prevState: string | undefined, formData: FormData) {
  try {
    await signIn('credentials', {
      redirect: false,
      username: formData.get('username') as string,
      password: formData.get('password') as string
    })
    return undefined
  } catch (error) {
    if (error instanceof Error) {
      const { type, cause } = error as AuthError
      switch (type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.'
        case 'CallbackRouteError':
          return cause?.err?.toString()
        default:
          return 'Something went wrong.'
      }
    }

    throw error
  }
}

// Function to handle user logout
export async function logout() {
  return await signOut()
}
