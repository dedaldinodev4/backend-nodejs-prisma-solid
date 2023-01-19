import { Decimal } from "@prisma/client/runtime";

export interface IUpdateProductRequest {
  name: string;
  price: Decimal;
  bar_code: string;
}