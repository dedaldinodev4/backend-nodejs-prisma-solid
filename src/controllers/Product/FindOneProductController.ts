import { Request, Response } from "express";
import { FindOneProductService } from "../../services/Product/FindOneProductService";


export class FindOneProductController {

  async handle(request: Request, response: Response) {
    
    const { id } = request.params;
    const service = new FindOneProductService();

    const result = await service.execute(id);

    if ( result instanceof Error) {
      return response.status(400).json(result.message)
    }

    return response.json(result)
  }

}