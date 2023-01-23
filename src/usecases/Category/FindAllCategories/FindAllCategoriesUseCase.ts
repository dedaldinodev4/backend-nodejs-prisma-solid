import { ICategory } from "../../../dtos/categoryDTO";
import { ICategoryRepository } from "../../../repositories/ICategoryRepository";



export class FindAllCategoriesUseCase {

    constructor(
        private categoryRepository: ICategoryRepository
    ){}

    async execute(): Promise<ICategory[] | Error> {
        const categories = await this.categoryRepository.findAll();
        return categories;
    }
}