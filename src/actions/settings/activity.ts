'use server'

import {
  AddActivityInput,
  DeleteActivityInput,
  activitySchema,
  deleteActivitySchema
} from '@/validations/settings/activity'
import { type Activity } from '@prisma/client'
import { revalidatePath } from 'next/cache'

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

export async function createActivity(
  rawInput: AddActivityInput
): Promise<'invalid-input' | 'error' | 'success'> {
  try {
    const validatedInput = activitySchema.safeParse(rawInput)
    if (!validatedInput.success) return 'invalid-input'

    const created = await prisma?.activity.create({
      data: {
        code: validatedInput.data.code,
        name: validatedInput.data.name
      }
    })

    revalidatePath('/dashboard/settings/activities')
    return created ? 'success' : 'error'
  } catch (error) {
    console.error(error)
    throw new Error('Activity can`t be created.')
  }
}

export async function createActivityTest(): Promise<'invalid-input' | 'error' | 'success'> {
  const activity = [
    { code: 'TS1', name: 'Test1' },
    { code: 'TS2', name: 'Test2' },
    { code: 'TS3', name: 'Test3' },
    { code: 'TS4', name: 'Test4' }
  ]

  try {
    const created = await prisma?.activity.createMany({
      data: activity
    })

    revalidatePath('/dashboard/settings/activities')
    return created ? 'success' : 'error'
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
