import { 
  PrismaProductRepository 
} from '../../../repositories/implementations/PrismaProductRepository'
import { DeleteProductController } from './DeleteProductController'
import { DeleteProductUseCase } from './DeleteProductUseCase'


const prismaProductRepository = new PrismaProductRepository();

export const deleteProductUseCase = new DeleteProductUseCase(
  prismaProductRepository
)

export const deleteProductController = new DeleteProductController(
  deleteProductUseCase
)
