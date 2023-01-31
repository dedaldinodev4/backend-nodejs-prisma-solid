import { AnyZodObject, z } from 'zod'

export const ProductSchema: AnyZodObject = z.object({
  name: z.string({
    required_error: "Name is required.",
    invalid_type_error: "Name must be a string"
  })
  .trim()
  .min(1, 'Name cannot be empty'),
  price: z.number({
    required_error: "Price is required",
    invalid_type_error: "Price must be a Decimal"
  }),
  bar_code: z.string({
   required_error: "Bar_code is required.",
   invalid_type_error: "Bar_code must be a string"
  })
  .trim()
  .min(1, 'Bar_Code cannot be empty')
  .max(13),
});
 
//export type CreateProduct = z.infer<typeof ProductSchema>