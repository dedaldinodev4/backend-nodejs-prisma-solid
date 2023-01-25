import { 
  PrismaProductRepository 
} from '../../../repositories/implementations/prisma/PrismaProductRepository'
import { UpdateProductController } from './UpdateProductController'
import { UpdateProductUseCase } from './UpdateProductUseCase'


const prismaProductRepository = new PrismaProductRepository();

export const updateProductUseCase = new UpdateProductUseCase(
    prismaProductRepository
)

export const updateProductController = new UpdateProductController(
    updateProductUseCase
)
