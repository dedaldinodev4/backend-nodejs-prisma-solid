import { Request, Response } from "express";
import { FindAllProductsService } from "../../services/Product/FindAllProductsService";


export class FindAllProductsController {

  async handle(request: Request, response: Response) {
    const service = new FindAllProductsService();

    const result = await service.execute();

    if ( result instanceof Error) {
      return response.status(400).json(result.message)
    }

    return response.json(result)
  }

}