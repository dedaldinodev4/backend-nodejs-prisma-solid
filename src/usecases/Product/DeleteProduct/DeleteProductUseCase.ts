import { IProductRepository } from "../../../repositories/IProductRepository";



export class DeleteProductUseCase {

    constructor(
        private productRepository: IProductRepository
    ){}

    async execute(id: string): Promise<void | Error> {
      const product = await this.productRepository.findById(id);

      if (!product) {
        throw new Error("Product doesn't exists.")
      }
      
      const result = await this.productRepository.delete(product.id);
    }
}