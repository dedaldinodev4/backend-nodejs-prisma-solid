import { 
  PrismaCategoryRepository 
} from '../../../repositories/implementations/prisma/PrismaCategoryRepository'
import { CreateCategoryController } from './CreateCategoryController'
import { CreateCategoryUseCase } from './CreateCategoryUseCase'


const prismaCategoryRepository = new PrismaCategoryRepository();

export const createCategoryUseCase = new CreateCategoryUseCase(
    prismaCategoryRepository
)

export const createCategoryController = new CreateCategoryController(
    createCategoryUseCase
)
