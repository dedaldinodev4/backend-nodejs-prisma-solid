import { IProduct } from "../../../dtos/productDTO";
import { IProductRepository } from "../../../repositories/IProductRepository";



export class FindAllProductsUseCase {

    constructor(
        private productRepository: IProductRepository
    ){}

    async execute(): Promise<IProduct[] | Error> {
        const products = await this.productRepository.findAll();
        return products;
    }
}