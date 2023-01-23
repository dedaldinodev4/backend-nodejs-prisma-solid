import { IProductCategory } from "../../../dtos/productCategoryDTO";
import { IProductCategoryRepository } from "../../../repositories/IProductCategoryRepository";
import { ICreateProductCategoryRequest } from "./CreateProductCategoryDTO";


export class CreateProductCategoryUseCase {

    constructor(
        private productCategoryRepository: IProductCategoryRepository
    ){}

    async execute(data:  ICreateProductCategoryRequest): Promise<IProductCategory | Error> {

      const result = await this.productCategoryRepository.create(data);
      return result;
    }
}