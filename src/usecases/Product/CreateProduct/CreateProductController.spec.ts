/** 
 * @jest-environment ./prisma/prisma-environment-jest
*/

import { server } from '../../../server';
import request from 'supertest'
import { Decimal } from '@prisma/client/runtime';

describe("Create Product Controller", () => {

  it("Should be able to create a new product", async () => {
  
    const response = await request(server)
    .post("/api/v1/products")
      .send({
        name: "Mouse Unix561",
        bar_code: "123uuedaa0111",
        price: Decimal.abs(1300)
    });
    
    expect(response.status).toBe(201);
    expect(response.body.error).toBeFalsy();
  }, 10000)

})