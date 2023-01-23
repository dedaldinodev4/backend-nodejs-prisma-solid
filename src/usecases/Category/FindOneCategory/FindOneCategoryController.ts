import { Request, Response } from 'express'
import { FindOneCategoryUseCase } from './FindOneCategoryUseCase'


export class FindOneCategoryController {
    constructor(
        private findOneCategoryUseCase: FindOneCategoryUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response> {

      const { id } = request.params;

      try {
        const data = await this.findOneCategoryUseCase.execute(id);
        return response.status(201).json(data);
      } catch(err: any) {
        return response.status(400).json({
          message: err.message || 'Unexpected error.'
        })
      }
    }
}