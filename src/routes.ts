import { Router } from "express";
import { 
    CreateProductController,
    FindAllProductsController,
    FindOneProductController,
    UpdateProductController,
    DeleteProductController,
    CreateCategoryController,
    FindAllCategoriesController,
    FindOneCategoryController,
    UpdateCategoryController,
    DeleteCategoryController
} from "./controllers";


const __BASE_URL = '/api/v1'; /* Base Url */
const router = Router();

//* Products Routes *//
router.post(`${__BASE_URL}/products`, new CreateProductController().handle);
router.get(`${__BASE_URL}/products`, new FindAllProductsController().handle);
router.get(`${__BASE_URL}/products/:id`, new FindOneProductController().handle);
router.put(`${__BASE_URL}/products/:id`, new UpdateProductController().handle);
router.delete(`${__BASE_URL}/products/:id`, new DeleteProductController().handle);

//* Categories Routes  *//
router.post(`${__BASE_URL}/categories`, new CreateCategoryController().handle);
router.get(`${__BASE_URL}/categories`, new FindAllCategoriesController().handle);
router.get(`${__BASE_URL}/categories/:id`, new FindOneCategoryController().handle);
router.put(`${__BASE_URL}/categories/:id`, new UpdateCategoryController().handle);
router.delete(`${__BASE_URL}/categories/:id`, new DeleteCategoryController().handle);

export { router }