import { prismaClient } from "../database/prismaClient";


export const productRepository = prismaClient.product;