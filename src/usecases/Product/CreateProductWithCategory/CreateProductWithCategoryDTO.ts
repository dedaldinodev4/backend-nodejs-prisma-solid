import { Decimal } from "@prisma/client/runtime";

export interface ICreateProductWithCategoryRequest {
  name: string;
  bar_code: string;
  price: Decimal;
  id_category: string;
}