import { Decimal } from "@prisma/client/runtime";

export interface ICreateProductRequest {
  name: string;
  price: Decimal;
  bar_code: string;
}