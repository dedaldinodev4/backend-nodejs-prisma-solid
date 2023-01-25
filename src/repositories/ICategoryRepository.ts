import { ICategory, ICategoryRequest } from '../dtos/categoryDTO'

export interface ICategoryRepository {
  findByName(name: string): Promise<ICategory | null>;
  findById(id: string): Promise<ICategory | null>;
  findAll(): Promise<ICategory[]>;
  delete(id: string): Promise<void>;
  update(id: string, categrory: ICategoryRequest): Promise<ICategory | Error>;
  create(product: ICategoryRequest): Promise<ICategory>;

}