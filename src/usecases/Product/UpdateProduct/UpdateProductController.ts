import { Request, Response } from 'express'
import { UpdateProductUseCase } from './UpdateProductUseCase'
import { IProduct } from '../../../dtos/productDTO'


export class UpdateProductController {
    constructor(
        private updateProductUseCase: UpdateProductUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { name, price, bar_code } = request.body;

        try {
            const data = await this.updateProductUseCase.execute(id, {
                name, price, bar_code
            });

            return response.status(201).json(data);
        } catch(err: any) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            })
        }
    }
}