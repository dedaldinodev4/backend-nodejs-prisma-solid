import { IProductCategory } from "../../../dtos/productCategoryDTO";
import { IProductCategoryRepository } from "../../../repositories/IProductCategoryRepository";
import { ICreateProductCategoryRequest } from "./CreateProductCategoryDTO";


export class CreateProductCategoryUseCase {

    constructor(
        private productCategoryRepository: IProductCategoryRepository
    ){}

    async execute(data:  ICreateProductCategoryRequest): Promise<IProductCategory | Error> {

      if (!data.id_product || !data.id_category) {
        throw new Error('id_product and id_category are required.')
      }
      const result = await this.productCategoryRepository.create(data);
      return result;
    }
}