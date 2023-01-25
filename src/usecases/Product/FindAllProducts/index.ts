import { 
  PrismaProductRepository 
} from '../../../repositories/implementations/prisma/PrismaProductRepository'
import { FindAllProductsController } from './FindAllProductsController'
import { FindAllProductsUseCase } from './FindAllProductsUseCase'


const prismaProductRepository = new PrismaProductRepository();

export const findAllProductsUseCase = new FindAllProductsUseCase(
    prismaProductRepository
)

export const findAllProductsController = new FindAllProductsController(
    findAllProductsUseCase
)
