import { Request, Response } from "express";
import { CreateProductService } from "../../services/Product/CreateProductService";


export class CreateProductController {

  async handle(request: Request, response: Response) {
    const { name, bar_code, price } = request.body;
    
    const service = new CreateProductService();

    const result = await service.execute({ name, bar_code, price });

    if ( result instanceof Error) {
      return response.status(400).json(result.message)
    }

    return response.json(result)
  }

}