import { IProduct, IProductRequest, IProductUpdateRequest} from '../dtos/productDTO'
import { IProductCategory } from '../dtos/productCategoryDTO';

export interface IProductRepository {
    findByName(name: string): Promise<IProduct | null>;
    findAll(): Promise<IProduct[]>;
    findById(id: string): Promise<IProduct | null>;
    delete(id: string): Promise<IProduct | null>;
    update(id: string, product: IProductUpdateRequest): Promise<IProduct>;
    create(product: IProductRequest): Promise<IProduct>;
    createWithCategory(product: IProductRequest): Promise<IProductCategory>;

}