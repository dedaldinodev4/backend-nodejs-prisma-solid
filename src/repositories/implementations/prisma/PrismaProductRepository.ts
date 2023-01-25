import { prismaClient } from "../../../database/prismaClient";
import { IProductCategory } from "../../../dtos/productCategoryDTO";
import { IProduct, IProductRequest, IProductUpdateRequest } from "../../../dtos/productDTO";
import { IProductRepository } from "../../IProductRepository";


export class PrismaProductRepository implements IProductRepository {
    private repository = prismaClient;


    async findById(id: string): Promise<IProduct | null> {
        const product = await this.repository.product.findFirst(
          { where: { id }, include: {
            ProductCategory: true
          }
        });
        return product;
    }

    async findAll(): Promise<IProduct[]> {
      const products = await this.repository.product.findMany({});
      return products;
    }

    async findByName(name: string): Promise<IProduct | null> {
        const product = await this.repository.product.findFirst(
          { where: { name }
        });
        return product;
    }
        
        
    async create(product: IProductRequest): Promise<IProduct> {
      const newProduct = await this.repository.product.create({
        data: product
      })

      return newProduct;
    }
        
    async createWithCategory(data: IProductRequest): Promise<IProductCategory | Error> {
      const newProduct = await this.repository.productCategory.create({
        data: {
          product: {
            create: {
              name: data.name,
              price: data.price,
              bar_code: data.bar_code,
            }
          },
          category: {
            connect: {
              id: data.id_category
            }
          }
        }
      })

      return newProduct
    }

    async update(id: string, product: IProductUpdateRequest): Promise<IProduct> {
        const productUpdate = await this.repository.product.update({
          data: product,
          where: {
            id
          }
        })

        return productUpdate;
    }

    async delete(id: string): Promise<void> {
      const productDelete = await this.repository.product.delete({
        where: {
          id
        }
      })
    }

}