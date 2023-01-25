import crypto from 'node:crypto'
import { IProductCategory, IProductCategoryRequest } from '../../../dtos/productCategoryDTO';
import { IProduct, IProductRequest, IProductUpdateRequest } from "../../../dtos/productDTO";
import { IProductRepository } from "../../IProductRepository";

export class InMemoryProductRepository implements IProductRepository {
  products: IProduct[] = []
  productCategories: IProductCategory[] = []


  async findById(id: string): Promise<IProduct | null> {
    const product = this.products.filter((obj) => obj.id === id)[0];
    return product;
  }

  async findAll(): Promise<IProduct[]> {
    return this.products;
  }

  async findByName(name: string): Promise<IProduct | null> {
    const product = this.products.filter((obj) => obj.name === name)[0];
    return product ?? null;
  }
    
  async create(product: IProductRequest): Promise<IProduct> {
    this.products.push({
    ...product,
    id: crypto.randomUUID(),
    created_at: new Date()
   })
   return this.products[this.products.length - 1];

  }
      
  async createWithCategory(data: IProductRequest): Promise<IProductCategory | Error> {

    this.productCategories.push({
      id_product: crypto.randomUUID(),
      id_category: data.id_category ?? crypto.randomUUID(),
      id: crypto.randomUUID()
    })
    
    return this.productCategories[this.productCategories.length - 1]
  }

  async update(id: string, product: IProductUpdateRequest): Promise<IProduct | Error> {
      const data = this.products.filter((obj) => obj.id === id)
        .map((prod) => {
          prod.bar_code = product.bar_code,
          prod.price = product.price,
          prod.name = product.name
        });

      return this.products.filter((obj) => obj.id === id)[0];
  }

  async delete(id: string): Promise<void> {
    this.products = this.products.filter((obj) => obj.id !== id);
  }
}