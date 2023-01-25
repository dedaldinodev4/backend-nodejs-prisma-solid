import { CreateProductWithCategoryUseCase } from "./CreateProductWithCategoryUseCase";
import { 
  InMemoryProductRepository 
} from "../../../repositories/implementations/in-memory/InMemoryProductRepository"
import { Decimal } from "@prisma/client/runtime";

describe("CreateProduct usecase", () => {

  let inMemoryProductRepository: InMemoryProductRepository;
  let createProductWithCategoryUseCase: CreateProductWithCategoryUseCase;

  beforeAll(() => {
    inMemoryProductRepository = new InMemoryProductRepository();
    createProductWithCategoryUseCase = new CreateProductWithCategoryUseCase(
      inMemoryProductRepository
      )
  })

  it("Should be able to create a new product with existing category ", async () => {

    await expect( createProductWithCategoryUseCase.execute({ 
        name: 'Mouse Led', 
        price: Decimal.trunc(100),
        bar_code: '1223A',
        id_category: '1287646d'
      }) 
    ).resolves
    .not
    .toThrow()

    expect(inMemoryProductRepository.productCategories).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id_category: '1287646d'
        })
      ])
    )
  })

});