import { IProductCategory } from "../../../dtos/productCategoryDTO";
import { IProductRepository } from "../../../repositories/IProductRepository";
import { ICreateProductWithCategoryRequest } from "./CreateProductWithCategoryDTO";


export class CreateProductWithCategoryUseCase {

    constructor(
        private productRepository: IProductRepository
    ){}

    async execute(data:  ICreateProductWithCategoryRequest): Promise<IProductCategory | Error> {
        const productExists = await this.productRepository.findByName(data.name);

        if (productExists) {
          throw new Error('Product already exists.')
        }
        const result = await this.productRepository.createWithCategory(data);

        return result;
    }
}