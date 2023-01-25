import { FindAllCategoriesUseCase } from "./FindAllCategoriesUseCase";
import { 
  InMemoryCategoryRepository 
} from "../../../repositories/implementations/in-memory/InMemoryCategoryRepository"
import { CreateCategoryUseCase } from "../CreateCategory/CreateCategoryUseCase"

describe("Find all categories usecase", () => {

  let inMemoryCategoryRepository: InMemoryCategoryRepository;
  let createCategoryUseCase: CreateCategoryUseCase;
  let findAllCategoriesUseCase: FindAllCategoriesUseCase;

  beforeAll(() => {
    inMemoryCategoryRepository = new InMemoryCategoryRepository();
    createCategoryUseCase = new CreateCategoryUseCase(inMemoryCategoryRepository)
    findAllCategoriesUseCase = new FindAllCategoriesUseCase(inMemoryCategoryRepository)
  })

  it("Should be able to find all categories", async () => {
    
    await expect(createCategoryUseCase.execute({ 
      name: 'Devices Electronics'}
    )).resolves
    .not
    .toThrow()

    expect(inMemoryCategoryRepository.categories).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'Devices Electronics'
        })
      ])
    )

    await expect(findAllCategoriesUseCase.execute()
    ).resolves
    .not
    .toThrow()
    expect(inMemoryCategoryRepository.categories.length).toEqual(1)
  })

});