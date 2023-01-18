import { Request, Response } from "express";
import { CreateCategoryService } from "../../services/Category/CreateCategoryService";


export class CreateCategoryController {

  async handle(request: Request, response: Response) {
    const { name } = request.body;
    
    const service = new CreateCategoryService();

    const result = await service.execute({ name });

    if ( result instanceof Error) {
      return response.status(400).json(result.message)
    }

    return response.json(result)
  }

}