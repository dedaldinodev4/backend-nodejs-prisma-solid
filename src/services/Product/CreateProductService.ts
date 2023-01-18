import { IProduct, IProductRequest } from "../../dtos/productDTO";
import { prismaClient } from "../../database/prismaClient";


export class CreateProductService {

  async execute({ name, bar_code, price}: IProductRequest): Promise<IProduct | Error> {
    
    const productExist = await prismaClient.product.findFirst({
      where: { name }
    })

    if (productExist) {
      return new Error("Product Already exists.");
    } 

    const product = await prismaClient.product.create({
      data: { name, bar_code, price}
    })

    return product

  }
}