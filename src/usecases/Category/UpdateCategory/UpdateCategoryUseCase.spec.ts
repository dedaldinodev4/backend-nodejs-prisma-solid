import { UpdateCategoryUseCase } from "./UpdateCategoryUseCase";
import { CreateCategoryUseCase } from "../CreateCategory/CreateCategoryUseCase";
import { 
  InMemoryCategoryRepository 
} from "../../../repositories/implementations/in-memory/InMemoryCategoryRepository"
import { ICategory } from "../../../dtos/categoryDTO";

describe("Update Category usecase", () => {

  let inMemoryCategoryRepository: InMemoryCategoryRepository;
  let createCategoryUseCase: CreateCategoryUseCase;
  let updateCategoryUseCase: UpdateCategoryUseCase;

  beforeAll(() => {
    inMemoryCategoryRepository = new InMemoryCategoryRepository();
    createCategoryUseCase = new CreateCategoryUseCase(inMemoryCategoryRepository)
    updateCategoryUseCase = new UpdateCategoryUseCase(inMemoryCategoryRepository)
  })

  it("Should be able to create and update a category ", async () => {
    
    const response = await createCategoryUseCase.execute({ 
      name: 'Devices Information'
    })

    const id = (response as ICategory).id; 
    await expect(updateCategoryUseCase.execute( id, {
        name: 'Devices'
      })
    )
    .resolves
    .not
    .toThrow()

  })

});