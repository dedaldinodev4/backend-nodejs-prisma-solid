import { AnyZodObject, z } from "zod";


export const ProductCategorySchema: AnyZodObject = z.object({
  id_product: z.string({
    required_error: 'id_product is required.',
    invalid_type_error: 'id_product must be a string'
  })
  .trim()
  .min(1, 'ID product cannot be empty'),
  
  id_category: z.string({
    required_error: 'id_product is required.',
    invalid_type_error: 'id_product must be a string'
  })
  .trim()  
  .min(1, 'ID category cannot be empty'),
  
});


export type createProductCategory = z.infer<typeof ProductCategorySchema>