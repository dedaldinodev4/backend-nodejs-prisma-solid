import { Request, Response } from "express";
import { 
  CreateProductWithCategoryService 
} from "../../services/Product/CreateProductWithCategoryService";


export class CreateProductWithCategoryController {

  async handle(request: Request, response: Response) {
    const { id_category, name, bar_code, price } = request.body;
    
    const service = new CreateProductWithCategoryService();

    const result = await service.execute({ id_category, name, bar_code, price });

    if ( result instanceof Error) {
      return response.status(400).json(result.message)
    }

    return response.json(result)
  }

}