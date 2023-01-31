import { 
  ProductSchema, 
  CategorySchema, 
  ProductCategorySchema 
} from "../schemas";
import { Validator } from "../middlewares/Validator";


export const validatorProduct = new Validator().execute(ProductSchema);
export const validatorCategory = new Validator().execute(CategorySchema);
export const validatorProductCategory = new Validator().execute(ProductCategorySchema);