import { CreateProductUseCase } from "./CreateProductUseCase";
import { 
  InMemoryProductRepository 
} from "../../../repositories/implementations/in-memory/InMemoryProductRepository"
import { Decimal } from "@prisma/client/runtime";
import { ICreateProductRequest } from "./CreateProductDTO";

describe("CreateProduct usecase", () => {

  let inMemoryProductRepository: InMemoryProductRepository;
  let createProductUseCase: CreateProductUseCase;

  beforeAll(() => {
    inMemoryProductRepository = new InMemoryProductRepository();
    createProductUseCase = new CreateProductUseCase(inMemoryProductRepository)
  })

  it("Should be able to create a new product ", async () => {
    
    await expect(createProductUseCase.execute({ 
      name: 'Mouse Led', 
      price: Decimal.trunc(100),
      bar_code: '1223A' })
    ).resolves
    .not
    .toThrow()

    expect(inMemoryProductRepository.products).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'Mouse Led'
        })
      ])
    )
  })

});