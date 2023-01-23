import { Request, Response } from 'express'
import { FindAllCategoriesUseCase } from './FindAllCategoriesUseCase'


export class FindAllCategoriesController {
    constructor(
        private findAllCategoriesUseCase: FindAllCategoriesUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response> {

        try {
            const data = await this.findAllCategoriesUseCase.execute();
            return response.status(201).json(data);
        } catch(err: any) {
            return response.status(400).json({
              message: err.message || 'Unexpected Error.'
            })
        }
    }
}