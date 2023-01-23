import { prismaClient } from "../../database/prismaClient";
import { IProductCategory, IProductCategoryRequest } from "../../dtos/productCategoryDTO";
import { IProductCategoryRepository } from "../IProductCategoryRepository";


export class PrismaProductCategoryRepository implements IProductCategoryRepository {
    private repository = prismaClient;

    async create(productCategory: IProductCategoryRequest): Promise<IProductCategory> {
      const newProductCategory = await this.repository.productCategory.create({
        data: productCategory
      })
      return newProductCategory;
    }
        
    

}