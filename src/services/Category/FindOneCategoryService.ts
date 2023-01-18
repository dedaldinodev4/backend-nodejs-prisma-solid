import { ICategory } from "../../dtos/CategoryDTO";
import { prismaClient } from "../../database/prismaClient";


export class FindOneCategoryService {

  async execute(id: string): Promise<ICategory | Error> {

    const category = await prismaClient.category.findFirst({
      where: {
        id
      },
      include: {
        ProductCategory: true
      }
    })

    if (!category) {
      return new Error("Category does not exists.")
    }

    return category

  }
}