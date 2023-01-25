import { FindOneProductUseCase } from "./FindOneProductUseCase";
import { 
  InMemoryProductRepository 
} from "../../../repositories/implementations/in-memory/InMemoryProductRepository"
import { CreateProductUseCase } from "../CreateProduct/CreateProductUseCase";
import { Decimal } from "@prisma/client/runtime";
import crypto from 'node:crypto'
import { IProduct } from "../../../dtos/productDTO";

describe("Find one product usecase", () => {

  let inMemoryProductRepository: InMemoryProductRepository;
  let findOneProductUseCase: FindOneProductUseCase;
  let createProductUseCase: CreateProductUseCase;

  beforeAll(() => {
    inMemoryProductRepository = new InMemoryProductRepository();
    findOneProductUseCase = new FindOneProductUseCase(inMemoryProductRepository)
    createProductUseCase = new CreateProductUseCase(inMemoryProductRepository)
  })

  it("Should be able to find one product", async () => {
    
    const result = await createProductUseCase.execute({
      name: 'HDMI Cable',
      price: Decimal.abs(100),
      bar_code: crypto.randomUUID()
    })
    const id = (result as IProduct).id

    await expect(findOneProductUseCase.execute(id)
    ).resolves
    .not
    .toThrow()
  })

});