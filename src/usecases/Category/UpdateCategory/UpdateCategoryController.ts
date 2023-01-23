import { Request, Response } from 'express'
import { UpdateCategoryUseCase } from './UpdateCategoryUseCase'


export class UpdateCategoryController {
    constructor(
        private updateCategoryUseCase: UpdateCategoryUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { name } = request.body;

        try {
            const data = await this.updateCategoryUseCase.execute(id, {
                name
            });

            return response.status(201).json(data);
        } catch(err: any) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            })
        }
    }
}