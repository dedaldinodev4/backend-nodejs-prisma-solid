import { 
  PrismaCategoryRepository 
} from '../../../repositories/implementations/PrismaCategoryRepository'
import { FindOneCategoryController } from './FindOneCategoryController'
import { FindOneCategoryUseCase } from './FindOneCategoryUseCase'


const prismaCategoryRepository = new PrismaCategoryRepository();

export const findOneCategoryUseCase = new FindOneCategoryUseCase(
  prismaCategoryRepository
)

export const findOneCategoryController = new FindOneCategoryController(
  findOneCategoryUseCase
)
