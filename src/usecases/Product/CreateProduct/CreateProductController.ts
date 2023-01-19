import { Request, Response, ErrorRequestHandler } from 'express'
import { CreateProductUseCase } from './CreateProductUseCase'
import { IProduct } from '../../../dtos/productDTO'


export class CreateProductController {
    constructor(
        private createProductUseCase: CreateProductUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, price, bar_code } = request.body;

        try {
            const data = await this.createProductUseCase.execute({
                name, price, bar_code
            });

            return response.status(201).json(data);
        } catch(err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}