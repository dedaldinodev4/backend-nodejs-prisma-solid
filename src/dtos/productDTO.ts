import { Decimal } from "@prisma/client/runtime";


export interface IProduct {
  id: string;
  name: string;
  bar_code: string;
  price: Decimal;
  created_at: Date;
}

export interface IProductRequest {
  id_category?: string;
  name: string;
  price: Decimal;
  bar_code: string;
}

export interface IProductUpdateRequest {
  name: string;
  price: Decimal;
  bar_code: string;
}

