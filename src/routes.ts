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
    DeleteCategoryController,
    CreateProductCategoryController,
    CreateProductWithCategoryController
} from "./controllers";
import { __BASE_URL } from "./envinroment";
import { createProductController } from "./usecases/Product/CreateProduct";
import { deleteProductController } from "./usecases/Product/DeleteProduct";
import { findAllProductsController } from "./usecases/Product/FindAllProducts";
import { findOneProductController } from "./usecases/Product/FindOneProduct";
import { updateProductController } from "./usecases/Product/UpdateProduct";

const router = Router();

//* Products Routes *//
router.post(`${__BASE_URL}/products`, (request, response) => {
    return createProductController.handle(request, response)
})
router.get(`${__BASE_URL}/products`, (request, response) => {
    return findAllProductsController.handle(request, response)
})
router.get(`${__BASE_URL}/products/:id`, (request, response) => {
    return findOneProductController.handle(request, response)
})
router.put(`${__BASE_URL}/products/:id`, (request, response) => {
    return updateProductController.handle(request, response)
})
router.delete(`${__BASE_URL}/products/:id`, (request, response) => {
    return deleteProductController.handle(request, response)
})
// router.post(`${__BASE_URL}/products`, new CreateProductController().handle);
// router.get(`${__BASE_URL}/products`, new FindAllProductsController().handle);
// router.get(`${__BASE_URL}/products/:id`, new FindOneProductController().handle);
// router.put(`${__BASE_URL}/products/:id`, new UpdateProductController().handle);
// router.delete(`${__BASE_URL}/products/:id`, new DeleteProductController().handle);
router.post(`${__BASE_URL}/productWithCategories`, new CreateProductWithCategoryController().handle);

//* Categories Routes  *//
router.post(`${__BASE_URL}/categories`, new CreateCategoryController().handle);
router.get(`${__BASE_URL}/categories`, new FindAllCategoriesController().handle);
router.get(`${__BASE_URL}/categories/:id`, new FindOneCategoryController().handle);
router.put(`${__BASE_URL}/categories/:id`, new UpdateCategoryController().handle);
router.delete(`${__BASE_URL}/categories/:id`, new DeleteCategoryController().handle);

//* ProductCategories Routes *//
router.post(`${__BASE_URL}/productCategories`, new CreateProductCategoryController().handle);

//* S.O.L.I.D & Clean *//


export { router }