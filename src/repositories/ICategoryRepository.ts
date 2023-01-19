import { ICategory, ICategoryRequest } from '../dtos/categoryDTO'

export interface ICategoryRepository {
  findByName(name: string): Promise<ICategory | null>;
  findById(id: string): Promise<ICategory | null>;
  delete(id: string): Promise<ICategory | null>;
  update(id: string, categrory: ICategoryRequest): Promise<ICategory>;
  create(product: ICategoryRequest): Promise<ICategory>;

}