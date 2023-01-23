import { 
  PrismaCategoryRepository 
} from '../../../repositories/implementations/PrismaCategoryRepository'
import { FindAllCategoriesController } from './FindAllCategoriesController'
import { FindAllCategoriesUseCase } from './FindAllCategoriesUseCase'


const prismaCategoryRepository = new PrismaCategoryRepository();

export const findAllCategoriesUseCase = new FindAllCategoriesUseCase(
    prismaCategoryRepository
)

export const findAllCategoriesController = new FindAllCategoriesController(
    findAllCategoriesUseCase
)
