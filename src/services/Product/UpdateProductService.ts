import { IProduct, IProductRequest } from "../../dtos/productDTO";
import { prismaClient } from "../../database/prismaClient";


export class UpdateProductService {

  async execute(id: string, { name, bar_code, price}: IProductRequest): Promise<IProduct | Error> {
    
    const productExist = await prismaClient.product.findFirst({
      where: { id }
    })

    if (!productExist) {
      return new Error("Product does not exists.");
    } 

    const product = await prismaClient.product.update({
      data: {
        name, 
        bar_code,
        price
      },
      where: { id }
    })

    return product

  }
}