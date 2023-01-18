import { Decimal } from "@prisma/client/runtime";


export interface IProduct {
  id: string;
  name: string;
  bar_code: string;
  price: Decimal;
  created_at: Date;
}

export interface IProductRequest {
  name: string;
  price: Decimal;
  bar_code: string;
}