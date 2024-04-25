'use server'

import { signIn, signOut } from '@/auth'
import db from '@prisma/prisma'
import { AuthError } from 'next-auth'

// Function to find a user by email in the database
export const findUserByUsername = async (username: string) => {
  return await db.user.findFirst({
    where: {
      username
    }
  })
}

// Authenticating function for sign-in
export async function authenticate(prevState: string | undefined, formData: FormData) {
  try {
    await signIn('credentials', formData)
  } catch (error) {
    // Handling authentication errors
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.'
        default:
          return 'Something went wrong.'
      }
    }

    // Throwing other unexpected errors
    throw error
  }
}

// Function to handle user logout
export async function logout() {
  return await signOut()
}
