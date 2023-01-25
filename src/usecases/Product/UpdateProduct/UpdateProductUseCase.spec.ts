import { UpdateProductUseCase } from "./UpdateProductUseCase";
import { CreateProductUseCase } from "../CreateProduct/CreateProductUseCase";
import { 
  InMemoryProductRepository 
} from "../../../repositories/implementations/in-memory/InMemoryProductRepository"
import { Decimal } from "@prisma/client/runtime";
import { IUpdateProductRequest } from "./UpdateProductDTO";
import { IProduct } from "../../../dtos/productDTO";
import crypto from 'node:crypto'


describe("Update Product usecase", () => {

  let inMemoryProductRepository: InMemoryProductRepository;
  let createProductUseCase: CreateProductUseCase;
  let updateProductUseCase: UpdateProductUseCase;

  beforeAll(() => {
    inMemoryProductRepository = new InMemoryProductRepository();
    createProductUseCase = new CreateProductUseCase(inMemoryProductRepository)
    updateProductUseCase = new UpdateProductUseCase(inMemoryProductRepository)
  })

  it("Should be able to create and update a product ", async () => {
    
    const response = await createProductUseCase.execute({ 
      name: 'Headphones A61', 
      price: Decimal.trunc(200),
      bar_code: '1223A334' 
    })

    const id = (response as IProduct).id; 
    await expect(updateProductUseCase.execute( id, {
        name: 'Oculos VRH',
        bar_code: crypto.randomUUID(),
        price: Decimal.abs(820)
      })
    )
      .resolves
        .not
        .toThrow()

  })

});