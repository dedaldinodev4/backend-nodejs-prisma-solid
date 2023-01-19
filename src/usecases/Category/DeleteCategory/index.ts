import { 
  PrismaCategoryRepository 
} from '../../../repositories/implementations/PrismaCategoryRepository'
import { DeleteCategoryController } from './DeleteCategoryController'
import { DeleteCategoryUseCase } from './DeleteCategoryUseCase'


const prismaCategoryRepository = new PrismaCategoryRepository();

export const deleteCategoryUseCase = new DeleteCategoryUseCase(
  prismaCategoryRepository
)

export const deleteCategoryController = new DeleteCategoryController(
  deleteCategoryUseCase
)
