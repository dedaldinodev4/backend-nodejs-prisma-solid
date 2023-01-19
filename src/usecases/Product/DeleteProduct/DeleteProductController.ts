import { Request, Response } from 'express'
import { DeleteProductUseCase } from './DeleteProductUseCase'


export class DeleteProductController {
    constructor(
        private deleteProductUseCase: DeleteProductUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response> {

      const { id } = request.params;

      try {
        const data = await this.deleteProductUseCase.execute(id);
        return response.status(204).end();
      } catch(err: any) {
        return response.status(400).json({
          message: err.message || 'Unexpected Error.'
        })
      }
    }
}