import { 
  PrismaProductRepository 
} from '../../../repositories/implementations/prisma/PrismaProductRepository'
import { CreateProductController } from './CreateProductController'
import { CreateProductUseCase } from './CreateProductUseCase'


const prismaProductRepository = new PrismaProductRepository();

export const createProductUseCase = new CreateProductUseCase(
    prismaProductRepository
)

export const createProductController = new CreateProductController(
    createProductUseCase
)
