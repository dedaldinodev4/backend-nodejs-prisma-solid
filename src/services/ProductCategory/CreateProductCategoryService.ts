import { prismaClient } from "../../database/prismaClient";
import { IProductCategory, IProductCategoryRequest } from "../../dtos/productCategoryDTO";

export class CreateProductCategoryService {

  async execute({ 
      id_product, 
      id_category }: IProductCategoryRequest)
    : Promise<IProductCategory | Error> {
    
    const categoryExist = await prismaClient.productCategory.findFirst({
      where: { id_category, id_product }
    })

    if (categoryExist) {
      return new Error("Category already exists by product.");
    } 

    const category = await prismaClient.productCategory.create({
      data: { id_product, id_category }
    })

    return category

  }
}