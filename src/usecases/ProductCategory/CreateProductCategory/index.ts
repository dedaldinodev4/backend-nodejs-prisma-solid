import { 
  PrismaProductCategoryRepository 
} from '../../../repositories/implementations/PrismaProductCategoryRepository'
import { CreateProductCategoryController } from './CreateProductCategoryController'
import { CreateProductCategoryUseCase } from './CreateProductCategoryUseCase'


const prismaProductCategoryRepository = new PrismaProductCategoryRepository();

export const createProductCategoryUseCase = new CreateProductCategoryUseCase(
    prismaProductCategoryRepository
)

export const createProductCategoryController = new CreateProductCategoryController(
    createProductCategoryUseCase
)
