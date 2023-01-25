import { CreateProductCategoryUseCase } from "./CreateProductCategoryUseCase";
import { 
  InMemoryProductCategoryRepository 
} from "../../../repositories/implementations/in-memory/InMemoryProductCategoryRepository"
import crypto from 'node:crypto'

describe("Create ProductCategory usecase", () => {

  let inMemoryProductCategoryRepository: InMemoryProductCategoryRepository;
  let createProductCategoryUseCase: CreateProductCategoryUseCase;

  beforeAll(() => {
    inMemoryProductCategoryRepository = new InMemoryProductCategoryRepository();
    createProductCategoryUseCase = new CreateProductCategoryUseCase(inMemoryProductCategoryRepository)
  })

  it("Should be able to create a new product with category existed", async () => {
    
    const data = {
      id_category: crypto.randomUUID(),
      id_product: crypto.randomUUID() 
    }
    await expect(createProductCategoryUseCase.execute(data)
    ).resolves
    .not
    .toThrow()

    expect(inMemoryProductCategoryRepository.productCategories).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id_category: data.id_category
        })
      ])
    )
  })

});