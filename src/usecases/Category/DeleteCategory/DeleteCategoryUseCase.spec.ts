import { 
  InMemoryCategoryRepository 
} from "../../../repositories/implementations/in-memory/InMemoryCategoryRepository"
import { CreateCategoryUseCase } from "../CreateCategory/CreateCategoryUseCase";
import { DeleteCategoryUseCase } from "./DeleteCategoryUseCase";
import { Decimal } from "@prisma/client/runtime";
import crypto from 'node:crypto'
import { ICategory } from "../../../dtos/categoryDTO";


describe("Delete category usecase", () => {
  let inMemoryCategoryRepository: InMemoryCategoryRepository;
  let createCategoryUseCase: CreateCategoryUseCase;
  let deleteCategoryUseCase: DeleteCategoryUseCase;

  beforeEach(() => {
    inMemoryCategoryRepository = new InMemoryCategoryRepository();
    createCategoryUseCase = new CreateCategoryUseCase(inMemoryCategoryRepository);
    deleteCategoryUseCase = new DeleteCategoryUseCase(inMemoryCategoryRepository);
  });

  it("Should be able delete a category", async () => {

    const result = await createCategoryUseCase.execute({
      name: 'Devices Electronics'
    })

    expect(inMemoryCategoryRepository.categories).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'Devices Electronics'
        })
      ])
    )

    const id = (result as ICategory).id

    await expect(deleteCategoryUseCase.execute(id)).resolves.not.toThrow()

    expect(inMemoryCategoryRepository.categories).toEqual(
      expect.not
      .arrayContaining([
        expect.objectContaining({
          name: 'Devices Electronics'
        })
      ])
    )
  })


})