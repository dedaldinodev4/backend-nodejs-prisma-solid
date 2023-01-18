import { ICategory, ICategoryRequest } from "../../dtos/CategoryDTO";
import { prismaClient } from "../../database/prismaClient";


export class UpdateCategoryService {

  async execute(id: string, { name }: ICategoryRequest): Promise<ICategory | Error> {
    
    const categoryExist = await prismaClient.category.findFirst({
      where: { id }
    })

    if (!categoryExist) {
      return new Error("Category does not exists.");
    } 

    const category = await prismaClient.category.update({
      data: { name },
      where: { id }
    })

    return category

  }
}