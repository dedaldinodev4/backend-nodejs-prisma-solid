import { Request, Response } from "express";
import { UpdateCategoryService } from "../../services/Category/UpdateCategoryService";


export class UpdateCategoryController {

  async handle(request: Request, response: Response) {
    const { name } = request.body;
    const { id } = request.params;
    
    const service = new UpdateCategoryService();

    const result = await service.execute(id, { name });

    if ( result instanceof Error) {
      return response.status(400).json(result.message)
    }

    return response.json(result)
  }

}