import { 
  PrismaCategoryRepository 
} from '../../../repositories/implementations/prisma/PrismaCategoryRepository'
import { UpdateCategoryController } from './UpdateCategoryController'
import { UpdateCategoryUseCase } from './UpdateCategoryUseCase'


const prismaCategoryRepository = new PrismaCategoryRepository();

export const updateCategoryUseCase = new UpdateCategoryUseCase(
    prismaCategoryRepository
)

export const updateCategoryController = new UpdateCategoryController(
    updateCategoryUseCase
)
