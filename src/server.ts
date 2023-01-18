import express from 'express'
import { router } from './routes';

export const server = express();

server.use(express.json())
server.use(router)




