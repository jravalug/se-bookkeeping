'use server'

import { unstable_noStore as noStore, revalidatePath } from 'next/cache'
import {
  AddActivityInput,
  DeleteActivityInput,
  UpdateActivityInput,
  activitySchema,
  deleteActivitySchema,
  updateActivitySchema
} from '@/validations/settings/activity'
import { type Activity } from '@prisma/client'

export async function getAllActivities(): Promise<Activity[]> {
  try {
    const activities = await prisma?.activity.findMany()
    return activities ? activities : []
  } catch (error) {
    console.error(error)
    throw new Error('Activities can`t be fetched.')
  }
}

interface getFilteredActivitiesRawProps {
  offset: number
  limit: number
  name: string | undefined
  column: 'code' | 'name' | undefined
  order: 'asc' | 'desc' | undefined
}

export async function getFilteredActivitiesRaw(
  rawInput: getFilteredActivitiesRawProps
): Promise<Activity[]> {
  let sql = `SELECT code, name FROM enum_activities `

  if (rawInput.name) sql += `WHERE name LIKE '%${rawInput.name}%' `

  sql += `
    ORDER BY ${rawInput.column} ${rawInput.order?.toUpperCase()}
    LIMIT ${rawInput.limit}
    OFFSET ${rawInput.offset}
  `

  try {
    const activities = await prisma?.$queryRawUnsafe<Activity[]>(sql)
    return activities ? activities : []
  } catch (error) {
    console.error(error)
    throw new Error('Activities can`t be fetched.')
  }
}

export async function getFilteredActivitiesCount(rawInput: string | undefined): Promise<number> {
  try {
    const activities = await prisma?.activity.count({
      where: {
        name: {
          contains: rawInput
        }
      }
    })
    return activities ? activities : 0
  } catch (error) {
    console.error(error)
    throw new Error('Activities can`t be fetched.')
  }
}

export async function addActivity(
  rawInput: AddActivityInput
): Promise<'invalid-input' | 'error' | 'exists' | 'success'> {
  try {
    const validatedInput = activitySchema.safeParse(rawInput)
    if (!validatedInput.success) return 'invalid-input'

    noStore()
    const activityTaken = await prisma?.activity.findFirst({
      where: {
        OR: [
          {
            code: {
              equals: validatedInput.data.code.toUpperCase()
            }
          },
          {
            name: {
              equals: validatedInput.data.name
            }
          }
        ]
      }
    })

    if (activityTaken) return 'exists'

    noStore()
    const newActivity = await prisma?.activity.create({
      data: {
        code: validatedInput.data.code.toUpperCase(),
        name: validatedInput.data.name
      }
    })

    revalidatePath('/')
    revalidatePath('/dashboard/settings/activities')
    return newActivity ? 'success' : 'error'
  } catch (error) {
    console.error(error)
    throw new Error('Activity can`t be created.')
  }
}

export async function deleteActivity(
  rawInput: DeleteActivityInput
): Promise<'invalid-input' | 'error' | 'success'> {
  try {
    const validatedInput = deleteActivitySchema.safeParse(rawInput)
    if (!validatedInput.success) return 'invalid-input'

    const deleted = await prisma?.activity.delete({
      where: {
        code: validatedInput.data.code
      }
    })

    revalidatePath('/dashboard/settings/activities')
    return deleted ? 'success' : 'error'
  } catch (error) {
    console.error(error)
    throw new Error('Activity can`t be deleted.')
  }
}

export async function updateActivity(
  rawInput: UpdateActivityInput
): Promise<'invalid-input' | 'not-found' | 'error' | 'success'> {
  try {
    const validatedInput = updateActivitySchema.safeParse(rawInput)
    if (!validatedInput.success) return 'invalid-input'

    const exists = await prisma?.activity.findUnique({
      where: {
        code: validatedInput.data.code.toUpperCase()
      }
    })

    if (!exists) return 'not-found'

    noStore()
    const updated = await prisma?.activity.update({
      where: {
        code: validatedInput.data.code
      },
      data: {
        name: validatedInput.data.name
      }
    })
    revalidatePath('/')
    revalidatePath('/dashboard/settings/activities')
    return updated ? 'success' : 'error'
  } catch (error) {
    console.error(error)
    throw new Error('Activity can`t be updated.')
  }
}
