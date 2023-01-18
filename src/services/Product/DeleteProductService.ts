import { prismaClient } from "../../database/prismaClient";


export class DeleteProductService {

  async execute(id: string) {

    const productExist = await prismaClient.product.findFirst({
      where: { id }
    })

    if (!productExist) {
      return new Error("Product does not exists.");
    } 

    const product = await prismaClient.product.delete({
      where: {
        id
      }
    })

    return product

  }
}