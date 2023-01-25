import crypto from 'node:crypto'
import { IProductCategory, IProductCategoryRequest } from '../../../dtos/productCategoryDTO';
import { IProductCategoryRepository } from "../../IProductCategoryRepository";

export class InMemoryProductCategoryRepository implements IProductCategoryRepository {
  productCategories: IProductCategory[] = []
    
  async create(data: IProductCategoryRequest): Promise<IProductCategory> {
    this.productCategories.push({
      id_product: data.id_product,
      id_category: data.id_category,
      id: crypto.randomUUID()
    })
    
    return this.productCategories[this.productCategories.length - 1]
  }
}