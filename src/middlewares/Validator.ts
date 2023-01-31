/**
 * Created schemas
 * Validation with zod
 */

import { NextFunction, Request, Response } from "express";
import { AnyZodObject, z } from "zod";

export class Validator {

  execute (schema: AnyZodObject) {

    return async (request: Request, response:Response, next: NextFunction) => {

      try {
        await schema.parseAsync(request.body);

        return next();
      } catch (error: any) {
        let err = error
        if (err instanceof z.ZodError) {
          err = err.issues.map((e) => ({ path: e.path[0], message: e.message}))
        }
        return response.status(409).json({
          status: 'failed',
          error: err
        })
      }
    }
  }


}