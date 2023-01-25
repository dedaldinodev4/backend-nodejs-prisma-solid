import crypto from 'node:crypto'
import { ICategory, ICategoryRequest } from '../../../dtos/categoryDTO';
import { ICategoryRepository } from "../../ICategoryRepository";

export class InMemoryCategoryRepository implements ICategoryRepository {
  categories: ICategory[] = []


  async findById(id: string): Promise<ICategory | null> {
    const category = this.categories.filter((obj) => obj.id === id)[0];
    return category;
  }

  async findAll(): Promise<ICategory[]> {
    return this.categories;
  }

  async findByName(name: string): Promise<ICategory | null> {
    const category = this.categories.filter((obj) => obj.name === name)[0];
    return category ?? null;
  }
    
  async create(category: ICategoryRequest): Promise<ICategory> {
    this.categories.push({
    ...category,
    id: crypto.randomUUID(),
    created_at: new Date()
   })
   return this.categories[this.categories.length - 1];

  }
      
  async update(id: string, category: ICategoryRequest): Promise<ICategory | Error> {
      const data = this.categories.filter((obj) => obj.id === id)
        .map((cat) => {
          cat.name = category.name
        });

      return this.categories.filter((obj) => obj.id === id)[0];
  }

  async delete(id: string): Promise<void> {
    this.categories = this.categories.filter((obj) => obj.id !== id);
  }
}