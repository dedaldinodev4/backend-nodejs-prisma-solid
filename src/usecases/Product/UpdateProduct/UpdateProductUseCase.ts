import { IProduct } from "../../../dtos/productDTO";
import { IProductRepository } from "../../../repositories/IProductRepository";
import { IUpdateProductRequest } from "./UpdateProductDTO";


export class UpdateProductUseCase {

    constructor(
      private productRepository: IProductRepository
    ){}

    async execute(id: string, data: IUpdateProductRequest): Promise<IProduct | Error> {
      const productExists = await this.productRepository.findById(id);
      if (!productExists) {
        throw new Error('Product does not exists.')
      }

      const result = await this.productRepository.update(id, data);
      return result;
    }
}