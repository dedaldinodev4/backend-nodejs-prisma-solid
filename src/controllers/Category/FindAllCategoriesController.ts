import { Request, Response } from "express";
import { FindAllCategoriesService } from "../../services/Category/FindAllCategoriesService";


export class FindAllCategoriesController {

  async handle(request: Request, response: Response) {
    const service = new FindAllCategoriesService();

    const result = await service.execute();

    if ( result instanceof Error) {
      return response.status(400).json(result.message)
    }

    return response.json(result)
  }

}