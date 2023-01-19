import { Request, Response } from "express";
import { 
  CreateProductCategoryService 
} from "../../services/ProductCategory/CreateProductCategoryService";


export class CreateProductCategoryController {

  async handle(request: Request, response: Response) {
    const { id_product, id_category } = request.body;
    
    const service = new CreateProductCategoryService();

    const result = await service.execute({ id_product, id_category });

    if ( result instanceof Error) {
      return response.status(400).json(result.message)
    }

    return response.json(result)
  }

}