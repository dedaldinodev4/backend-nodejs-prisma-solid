import { 
  PrismaProductRepository 
} from '../../../repositories/implementations/PrismaProductRepository'
import { FindOneProductController } from './FindOneProductController'
import { FindOneProductUseCase } from './FindOneProductUseCase'


const prismaProductRepository = new PrismaProductRepository();

export const findOneProductUseCase = new FindOneProductUseCase(
  prismaProductRepository
)

export const findOneProductController = new FindOneProductController(
  findOneProductUseCase
)
