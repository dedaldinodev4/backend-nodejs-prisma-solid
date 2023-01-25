import { InMemoryProductRepository } from "../../../repositories/implementations/in-memory/InMemoryProductRepository"
import { CreateProductUseCase } from "../CreateProduct/CreateProductUseCase";
import { DeleteProductUseCase } from "./DeleteProductUseCase";
import { Decimal } from "@prisma/client/runtime";
import crypto from 'node:crypto'
import { IProduct } from "../../../dtos/productDTO";


describe("Delete product usecase", () => {
  let inMemoryProductRepository: InMemoryProductRepository;
  let createProductUseCase: CreateProductUseCase;
  let deleteProductUseCase: DeleteProductUseCase;

  beforeEach(() => {
    inMemoryProductRepository = new InMemoryProductRepository();
    createProductUseCase = new CreateProductUseCase(inMemoryProductRepository);
    deleteProductUseCase = new DeleteProductUseCase(inMemoryProductRepository);
  });

  it("Should be able delete a product", async () => {

    const result = await createProductUseCase.execute({
      name: 'HDMI Cable',
      price: Decimal.abs(100),
      bar_code: crypto.randomUUID()
    })

    expect(inMemoryProductRepository.products).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'HDMI Cable'
        })
      ])
    )

    const id = (result as IProduct).id

    await expect(deleteProductUseCase.execute(id)).resolves.not.toThrow()

    expect(inMemoryProductRepository.products).toEqual(
      expect.not
      .arrayContaining([
        expect.objectContaining({
          name: 'HDMI Cable'
        })
      ])
    )

    
  })


})