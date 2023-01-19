import { Request, Response } from 'express'
import { DeleteCategoryUseCase } from './DeleteCategoryUseCase'


export class DeleteCategoryController {
    constructor(
        private deleteCategoryUseCase: DeleteCategoryUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response> {

      const { id } = request.params;

      try {
        const data = await this.deleteCategoryUseCase.execute(id);
        return response.status(204).end();
      } catch(err: any) {
        return response.status(400).json({
          message: err.message || 'Unexpected Error.'
        })
      }
    }
}