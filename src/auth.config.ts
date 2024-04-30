// Importing necessary types from NextAuth for configuration
import type { NextAuthConfig } from 'next-auth'

// Creating the configuration object for NextAuth
export const authConfig = {
  // Defining custom pages to tailor the authentication experience. Here, we redirect the default sign-in page to '/login'.
  pages: {
    signIn: '/login'
  },
  // Configuring callbacks for handling authorization logic during authentication flow.
  callbacks: {
    async authorized({ request: { nextUrl }, auth }) {
      // Checking if the user is logged in
      const isLoggedIn = !!auth?.user
      // Determining if the user is currently on the dashboard
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard')

      // Handling authorization logic based on user status and location
      if (isOnDashboard) {
        // Redirecting unauthenticated users to the login page when attempting to access dashboard-related pages
        if (isLoggedIn) return true
        return false
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl))
      }
      // Allowing access for other scenarios
      return true
    }
  },

  // Placeholder array for authentication providers. We initialize it as empty for now, adding providers when required.
  providers: [] // We start with an empty array, adding providers as needed
} satisfies NextAuthConfig
