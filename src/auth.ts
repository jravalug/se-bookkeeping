// Importing necessary modules and types
import { PrismaAdapter } from '@auth/prisma-adapter'
import type { User } from '@prisma/client'
import bcrypt from 'bcryptjs'
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { z } from 'zod'
import { findUserByUsername } from './actions/auth'
import { authConfig } from './auth.config'
import db from './config/db'

// Function to fetch a user by username from the database
async function getUser(username: string): Promise<User | null> {
  try {
    return await findUserByUsername(username)
  } catch (error) {
    console.error('Failed to fetch user:', error)
    throw new Error('Failed to fetch user.')
  }
}

// Destructuring NextAuth functions and configuration from the returned object
export const { auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(db),

  session: { strategy: 'jwt' },
  // Merging with the previously defined NextAuth configuration
  ...authConfig,

  // Defining authentication providers, in this case, using credentials (username and password)
  providers: [
    Credentials({
      async authorize(credentials) {
        // Parsing and validating incoming credentials using Zod
        const parsedCredentials = z
          .object({ username: z.string().min(2).max(50), password: z.string().min(5) })
          .safeParse(credentials)

        if (parsedCredentials.success) {
          const { username, password } = parsedCredentials.data
          const user = await getUser(username)

          // If user exists, compare hashed passwords
          if (!user) return null
          const passwordsMatch = await bcrypt.compare(password, user.password)

          // If passwords match, return the user
          if (passwordsMatch) return user
        }

        // If credentials are invalid, log and return null
        console.log('Invalid credentials')
        return null
      }
    })
  ]
})
