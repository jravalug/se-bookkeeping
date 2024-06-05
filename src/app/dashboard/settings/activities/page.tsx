import * as React from 'react'
import type { Metadata } from 'next'
import { unstable_noStore as noStore } from 'next/cache'
import { redirect } from 'next/navigation'
import type { SearchParams } from '@/types'
// TODO: Change to prisma ==> import { asc, desc, like, sql } from 'drizzle-orm'

import { env } from '@/env.mjs'
// import { db } from '@/config/db'
import { DEFAULT_UNAUTHENTICATED_REDIRECT } from '@/config/defaults'
// import { categories, type Category } from '@/db/schema'
// import { productCategoriesSearchParamsSchema } from '@/validations/params'

import auth from '@/lib/auth'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { DataTableSkeleton } from '@/components/data-table/data-table-skeleton'
import { ActivitiesTableShell } from '@/components/shells/activities-table-shell'
import { clientActivitiesSearchParamsSchema } from '@/validations/params'
import { Activity } from '@prisma/client'
import {
  getFilteredActivities,
  getFilteredActivitiesCount,
  getFilteredActivitiesRaw
} from '@/actions/settings/activity'

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: 'Activities',
  description: 'Manage the activities of self-employed worker.'
}

interface ActivitiesPageProps {
  searchParams: SearchParams
}

export default async function ActivityPage({
  searchParams
}: Readonly<ActivitiesPageProps>): Promise<JSX.Element> {
  const session = await auth()
  // if (session?.user.role !== 'administrator') redirect(DEFAULT_UNAUTHENTICATED_REDIRECT)

  const { page, per_page, sort, name } = clientActivitiesSearchParamsSchema.parse(searchParams)

  const fallbackPage = isNaN(page) || page < 1 ? 1 : page
  const limit = isNaN(per_page) ? 10 : per_page
  const offset = fallbackPage > 0 ? (fallbackPage - 1) * limit : 0

  const [column, order] = (sort?.split('.') as [
    keyof Activity | undefined,
    'asc' | 'desc' | undefined
  ]) ?? ['code', 'desc']

  const filter = {
    offset: offset,
    limit: limit,
    name: name,
    column: column,
    order: order
  }

  noStore()
  const data = await getFilteredActivitiesRaw(filter)

  noStore()
  const count = await getFilteredActivitiesCount(name)

  const pageCount = Math.ceil(count / limit)

  return (
    <div className="px-2 py-5 sm:pl-14 sm:pr-6">
      <Card className="rounded-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-xl font-bold tracking-tight md:text-2xl">
            Self Employed Activities
          </CardTitle>
        </CardHeader>
        <CardContent>
          <React.Suspense fallback={<DataTableSkeleton columnCount={4} />}>
            <ActivitiesTableShell
              data={data ? data : []}
              pageCount={pageCount ? pageCount : 0}
            />
          </React.Suspense>
        </CardContent>
      </Card>
    </div>
  )
}
