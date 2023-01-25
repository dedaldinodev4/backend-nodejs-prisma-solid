import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
import { 
  InMemoryCategoryRepository 
} from "../../../repositories/implementations/in-memory/InMemoryCategoryRepository"

describe("Create category usecase", () => {

  let inMemoryCategoryRepository: InMemoryCategoryRepository;
  let createCategoryUseCase: CreateCategoryUseCase;

  beforeAll(() => {
    inMemoryCategoryRepository = new InMemoryCategoryRepository();
    createCategoryUseCase = new CreateCategoryUseCase(inMemoryCategoryRepository)
  })

  it("Should be able to create a new category ", async () => {
    
    await expect(createCategoryUseCase.execute({ 
      name: 'Information Technology'}
    )).resolves
    .not
    .toThrow()

    expect(inMemoryCategoryRepository.categories).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'Information Technology'
        })
      ])
    )
  })

});