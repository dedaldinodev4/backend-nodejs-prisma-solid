import { IProductCategory, IProductCategoryRequest } from '../dtos/productCategoryDTO';

export interface IProductCategoryRepository {
  create(productCategory: IProductCategoryRequest): Promise<IProductCategory>;
}