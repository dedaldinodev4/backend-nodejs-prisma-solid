import { 
  PrismaProductRepository 
} from '../../../repositories/implementations/prisma/PrismaProductRepository'
import { CreateProductWithCategoryController } from './CreateProductWithCategoryController'
import { CreateProductWithCategoryUseCase } from './CreateProductWithCategoryUseCase'


const prismaProductRepository = new PrismaProductRepository();

export const createProductWithCategoryUseCase = new CreateProductWithCategoryUseCase(
    prismaProductRepository
)

export const createProductWithCategoryController = new CreateProductWithCategoryController(
    createProductWithCategoryUseCase
)
