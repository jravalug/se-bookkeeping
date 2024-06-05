import * as z from 'zod'

export const activityCodeSchema = z
  .string({
    required_error: 'Ativity code is required',
    invalid_type_error: 'The input must be text'
  })
  .min(1, {
    message: 'Code must be at least 1 character long'
  })
  .max(4, {
    message: 'The code can have a maximum of 4 characters'
  })

export const activityNameSchema = z
  .string({
    required_error: 'Ativity name is required',
    invalid_type_error: 'The input must be text'
  })
  .min(3, {
    message: 'The name must be at least 3 character long'
  })
  .max(100, {
    message: 'The name can have a maximum of 100 characters'
  })

export const activitySchema = z.object({
  code: activityCodeSchema,
  name: activityNameSchema
})

export const addActivitySchema = activitySchema

export const getActivityByCodeSchema = z.object({
  code: activityCodeSchema
})

export const getActivityByNameSchema = z.object({
  name: activityNameSchema
})

export const updateActivitySchema = activitySchema

export const deleteActivitySchema = z.object({
  code: activityCodeSchema
})

export const filterActivitiesSchema = z.object({
  name: activityNameSchema
})

export type GetActivityByCodeInput = z.infer<typeof getActivityByCodeSchema>
export type GetActivityByNameInput = z.infer<typeof getActivityByNameSchema>

export type AddActivityInput = z.infer<typeof addActivitySchema>
export type UpdateActivityInput = z.infer<typeof updateActivitySchema>
export type DeleteActivityInput = z.infer<typeof deleteActivitySchema>
export type FilterActivitiesInput = z.infer<typeof filterActivitiesSchema>
