import { prismaClient } from "../../database/prismaClient";


export class DeleteCategoryService {

  async execute(id: string) {

    const categoryExist = await prismaClient.category.findFirst({
      where: { id }
    })

    if (!categoryExist) {
      return new Error("Category does not exists.");
    } 

    const category = await prismaClient.category.delete({ where: { id } })
    return category

  }
}