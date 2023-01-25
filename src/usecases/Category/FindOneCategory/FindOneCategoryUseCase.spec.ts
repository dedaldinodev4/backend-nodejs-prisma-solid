import { FindOneCategoryUseCase } from "./FindOneCategoryUseCase";
import { 
  InMemoryCategoryRepository 
} from "../../../repositories/implementations/in-memory/InMemoryCategoryRepository"
import { CreateCategoryUseCase } from "../CreateCategory/CreateCategoryUseCase";
import crypto from 'node:crypto'
import { ICategory } from "../../../dtos/categoryDTO";

describe("Find one category usecase", () => {

  let inMemoryCategoryRepository: InMemoryCategoryRepository;
  let findOneCategoryUseCase: FindOneCategoryUseCase;
  let createCategoryUseCase: CreateCategoryUseCase;

  beforeAll(() => {
    inMemoryCategoryRepository = new InMemoryCategoryRepository();
    findOneCategoryUseCase = new FindOneCategoryUseCase(inMemoryCategoryRepository)
    createCategoryUseCase = new CreateCategoryUseCase(inMemoryCategoryRepository)
  })

  it("Should be able to find one category", async () => {
    
    const result = await createCategoryUseCase.execute({
      name: 'Devices iOS'
    })
    const id = (result as ICategory).id

    await expect(findOneCategoryUseCase.execute(id)
    ).resolves
    .not
    .toThrow()
  })

});