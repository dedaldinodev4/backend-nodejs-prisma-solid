import { prismaClient } from "../../database/prismaClient";
import { ICategory, ICategoryRequest } from "../../dtos/categoryDTO";

export class CreateCategoryService {

  async execute({ name }: ICategoryRequest): Promise<ICategory | Error> {
    
    const productExist = await prismaClient.product.findFirst({
      where: { name }
    })

    if (productExist) {
      return new Error("product already exists.");
    } 

    const category = await prismaClient.category.create({
      data: { name }
    })

    return category

  }
}