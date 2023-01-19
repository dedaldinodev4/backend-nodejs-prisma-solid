import { ICategory } from "../../../dtos/categoryDTO";
import { ICategoryRepository } from "../../../repositories/ICategoryRepository";



export class DeleteCategoryUseCase {

    constructor(
        private categoryRepository: ICategoryRepository
    ){}

    async execute(id: string): Promise<ICategory | null> {
      const product = await this.categoryRepository.findById(id);

      if (!product) {
        throw new Error("Category doesn't exists.")
      }
      
      const result = await this.categoryRepository.delete(id);
      return result;
    }
}