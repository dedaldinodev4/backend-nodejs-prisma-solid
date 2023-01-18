import { IProduct } from "../../dtos/productDTO";
import { prismaClient } from "../../database/prismaClient";


export class FindAllProductsService {

  async execute(): Promise<IProduct[] | Error> {
    
    const product = await prismaClient.product.findMany({})

    return product

  }
}