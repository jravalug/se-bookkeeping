import * as z from 'zod'

export const searchParamsSchema = z.object({
  page: z.coerce.number().default(1),
  per_page: z.coerce.number().default(10),
  from: z.string().optional(),
  to: z.string().optional(),
  sort: z.string().optional().default('createdAt.desc')
})

export const clientActivitiesSearchParamsSchema = searchParamsSchema
  .omit({
    from: true,
    to: true
  })
  .extend({
    name: z.string().optional()
  })
