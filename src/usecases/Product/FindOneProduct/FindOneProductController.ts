import { Request, Response } from 'express'
import { FindOneProductUseCase } from './FindOneProductUseCase'


export class FindOneProductController {
    constructor(
        private findOneProductUseCase: FindOneProductUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response> {

      const { id } = request.params;

      try {
        const data = await this.findOneProductUseCase.execute(id);
        return response.status(200).json(data);
      } catch(err: any) {
        return response.status(400).json({
          message: err.message || 'Unexpected error.'
        })
      }
    }
}