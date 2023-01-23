import { Router } from "express";
import { __BASE_URL } from "./envinroment";

import { createProductController } from "./usecases/Product/CreateProduct";
import { deleteProductController } from "./usecases/Product/DeleteProduct";
import { findAllProductsController } from "./usecases/Product/FindAllProducts";
import { findOneProductController } from "./usecases/Product/FindOneProduct";
import { updateProductController } from "./usecases/Product/UpdateProduct";
import { createProductWithCategoryController } from "./usecases/Product/CreateProductWithCategory";


import { createCategoryController } from "./usecases/Category/CreateCategory";
import { findAllCategoriesController } from "./usecases/Category/FindAllCategories";
import { findOneCategoryController } from "./usecases/Category/FindOneCategory";
import { updateCategoryController } from "./usecases/Category/UpdateCategory";
import { deleteCategoryController } from "./usecases/Category/DeleteCategory";

import { createProductCategoryController } from "./usecases/ProductCategory/CreateProductCategory";


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
router.post(`${__BASE_URL}/productWithCategories/:id`, (request, response) => {
    return createProductWithCategoryController.handle(request, response)
})


//* Categories Routes  *//
router.post(`${__BASE_URL}/categories`, (request, response) => {
    return createCategoryController.handle(request, response)
})
router.get(`${__BASE_URL}/categories`, (request, response) => {
    return findAllCategoriesController.handle(request, response)
})
router.get(`${__BASE_URL}/categories/:id`, (request, response) => {
    return findOneCategoryController.handle(request, response)
})
router.put(`${__BASE_URL}/categories/:id`, (request, response) => {
    return updateCategoryController.handle(request, response)
})
router.delete(`${__BASE_URL}/categories/:id`, (request, response) => {
    return deleteCategoryController.handle(request, response)
})

//* ProductCategories Routes *//
router.post(`${__BASE_URL}/productCategories`, (request, response) => {
    return createProductCategoryController.handle(request, response)
})

export { router }