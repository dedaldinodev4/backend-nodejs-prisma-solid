import { IProduct } from "../../dtos/productDTO";
import { prismaClient } from "../../database/prismaClient";


export class FindOneProductService {

  async execute(id: string): Promise<IProduct | Error> {

    const product = await prismaClient.product.findFirst({
      where: {
        id
      },
      include: {
        ProductCategory: true
      }
    })

    if (!product) {
      return new Error("Product does not exists.")
    }

    return product

  }
}