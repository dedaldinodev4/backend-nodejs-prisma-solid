import { Request, Response } from "express";
import { FindOneCategoryService } from "../../services/Category/FindOneCategoryService";


export class FindOneCategoryController {

  async handle(request: Request, response: Response) {
    
    const { id } = request.params;
    const service = new FindOneCategoryService();

    const result = await service.execute(id);

    if ( result instanceof Error) {
      return response.status(400).json(result.message)
    }

    return response.json(result)
  }

}