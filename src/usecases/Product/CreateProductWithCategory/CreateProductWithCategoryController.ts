import { Request, Response, ErrorRequestHandler } from 'express'
import { CreateProductWithCategoryUseCase } from './CreateProductWithCategoryUseCase'



export class CreateProductWithCategoryController {
    constructor(
        private createProductWithCategoryUseCase: CreateProductWithCategoryUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, price, bar_code, id_category } = request.body;

        try {
            const data = await this.createProductWithCategoryUseCase.execute({
                name, price, bar_code, id_category
            });

            return response.status(201).json(data);
        } catch(err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}