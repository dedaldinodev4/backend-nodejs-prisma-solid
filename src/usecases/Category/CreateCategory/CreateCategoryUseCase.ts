import { ICategory } from "../../../dtos/categoryDTO";
import { ICategoryRepository } from "../../../repositories/ICategoryRepository";
import { ICreateCategoryRequest } from "./CreateCategoryDTO";


export class CreateCategoryUseCase {

    constructor(
        private categoryRepository: ICategoryRepository
    ){}

    async execute(data: ICreateCategoryRequest): Promise<ICategory | Error> {
        const categoryExists = await this.categoryRepository.findByName(data.name);

        if (!data.name) {
            throw new Error('Name is required.')  
        }

        if (categoryExists) {
          throw new Error('Category already exists.')
        }
        const result = await this.categoryRepository.create(data);

        return result;
    }
}