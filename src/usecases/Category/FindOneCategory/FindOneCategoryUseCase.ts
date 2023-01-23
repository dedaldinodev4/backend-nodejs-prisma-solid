import { ICategory } from "../../../dtos/categoryDTO";
import { ICategoryRepository } from "../../../repositories/ICategoryRepository";



export class FindOneCategoryUseCase {

    constructor(
        private categoryRepository: ICategoryRepository
    ){}

    async execute(id: string): Promise<ICategory | null> {
        const category = await this.categoryRepository.findById(id);

        if (!category) {
          throw new Error("Category doesn't exists.")
        }

        return category;
    }
}