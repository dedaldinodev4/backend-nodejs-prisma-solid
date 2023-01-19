import express from 'express'
import cors from 'cors';
import morgan from 'morgan';
import { router } from './routes';

export const server = express();

server.use(express.json())
server.use(cors())
server.use(express.urlencoded({ extended: true }));
server.use(morgan("dev"))
server.use(router)




