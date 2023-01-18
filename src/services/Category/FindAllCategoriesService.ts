import { ICategory } from "../../dtos/CategoryDTO";
import { prismaClient } from "../../database/prismaClient";


export class FindAllCategoriesService {

  async execute(): Promise<ICategory[] | Error> {
    
    const categories = await prismaClient.category.findMany({})

    return categories

  }
}