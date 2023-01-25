import { FindAllProductsUseCase } from "./FindAllProductsUseCase";
import { 
  InMemoryProductRepository 
} from "../../../repositories/implementations/in-memory/InMemoryProductRepository"

describe("Find all products usecase", () => {

  let inMemoryProductRepository: InMemoryProductRepository;
  let findAllProductsUseCase: FindAllProductsUseCase;

  beforeAll(() => {
    inMemoryProductRepository = new InMemoryProductRepository();
    findAllProductsUseCase = new FindAllProductsUseCase(inMemoryProductRepository)
  })

  it("Should be able to find all products", async () => {
    
    await expect(findAllProductsUseCase.execute()
    ).resolves
    .not
    .toThrow()

    expect(inMemoryProductRepository.products).toEqual(
      expect.arrayContaining([])
    )
  })

});