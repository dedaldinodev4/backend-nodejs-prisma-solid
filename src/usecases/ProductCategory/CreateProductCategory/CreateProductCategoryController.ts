import { Request, Response } from 'express'
import { CreateProductCategoryUseCase } from './CreateProductCategoryUseCase'



export class CreateProductCategoryController {
    constructor(
        private createProductCategoryUseCase: CreateProductCategoryUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
        const { id_product , id_category } = request.body;

        try {
            const data = await this.createProductCategoryUseCase.execute({
                id_product , id_category
            });

            return response.status(201).json(data);
        } catch(err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}