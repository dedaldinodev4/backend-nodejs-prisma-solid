import { IProduct, IProductRequest } from "../../dtos/productDTO";
import { IProductCategory } from "../../dtos/productCategoryDTO";
import { prismaClient } from "../../database/prismaClient";


export class CreateProductWithCategoryService {

  async execute({ id_category, name, bar_code, price}: IProductRequest): Promise<IProductCategory | Error> {
    
    if (await prismaClient.product.findFirst({ where: { name }})) {
      return new Error("Product Already exists.");
    } 

    if (!(await prismaClient.category.findFirst({ where: { id: id_category } }))){
      return new Error("Category don't exists.");
    }

    const productCategory = await prismaClient.productCategory.create({
      data: {
        product: {
          create: { name, price, bar_code }
        },
        category: {
          connect: { id: id_category }
        }
      }
    })

    return productCategory

  }
}