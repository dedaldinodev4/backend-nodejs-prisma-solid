import { AnyZodObject, z } from 'zod'

export const CategorySchema: AnyZodObject = z.object({
  name: z.string({
    required_error: "Name is required.",
    invalid_type_error: "Name must be a string"
  })
  .trim()
  .min(1, 'Name cannot be empty')
});