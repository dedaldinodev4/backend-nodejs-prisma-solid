import { ICategory } from "../../../dtos/categoryDTO";
import { ICategoryRepository } from "../../../repositories/ICategoryRepository";
import { IUpdateCategoryRequest } from "./UpdateCategoryDTO";


export class UpdateCategoryUseCase {

    constructor(
      private categoryRepository: ICategoryRepository
    ){}

    async execute(id: string, data: IUpdateCategoryRequest): Promise<ICategory | Error> {
        const categoryExists = await this.categoryRepository.findById(id);

        if (!data.name) {
          throw new Error('Name is required.')
        }

        if (!categoryExists) {
          throw new Error('Category does not exists.')
        }

        const result = await this.categoryRepository.update(id, data);
        return result;
    }
}