import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors';
import morgan from 'morgan';
import { router } from './routes';
import 'dotenv/config';



const server = express();

server.use(express.json())
server.use(cors())
server.use(express.urlencoded({ extended: true }));
server.use(morgan("dev"))
server.use(router)

server.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err}`,
    });
  }

)

export { server }




