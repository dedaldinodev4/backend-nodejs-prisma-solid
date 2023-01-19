import { IProduct } from "../../../dtos/productDTO";
import { IProductRepository } from "../../../repositories/IProductRepository";
import { ICreateProductRequest } from "./CreateProductDTO";


export class CreateProductUseCase {

    constructor(
        private productRepository: IProductRepository
    ){}

    async execute(data: ICreateProductRequest): Promise<IProduct | Error> {
        const productExists = await this.productRepository.findByName(data.name);

        if (productExists) {
          throw new Error('Product already exists.')
        }
        const result = await this.productRepository.create(data);

        return result;
    }
}