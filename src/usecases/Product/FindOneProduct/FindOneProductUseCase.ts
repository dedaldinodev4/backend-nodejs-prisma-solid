import { IProduct } from "../../../dtos/productDTO";
import { IProductRepository } from "../../../repositories/IProductRepository";



export class FindOneProductUseCase {

    constructor(
        private productRepository: IProductRepository
    ){}

    async execute(id: string): Promise<IProduct | null> {
        const product = await this.productRepository.findById(id);

        if (!product) {
          throw new Error("Product doesn't exists.")
        }

        return product;
    }
}