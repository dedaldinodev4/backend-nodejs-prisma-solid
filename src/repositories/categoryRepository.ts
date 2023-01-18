import { prismaClient } from "../database/prismaClient";

export const categoryRepository = prismaClient.category;