import { Request, Response } from "express";
import { UpdateProductService } from "../../services/Product/UpdateProductService";


export class UpdateProductController {

  async handle(request: Request, response: Response) {
    const { name, bar_code, price } = request.body;
    const { id } = request.params;
    
    const service = new UpdateProductService();

    const result = await service.execute(id, { name, bar_code, price });

    if ( result instanceof Error) {
      return response.status(400).json(result.message)
    }

    return response.json(result)
  }

}