import express from 'express';
import { router } from './app.router';
import {errorMiddleware} from "./common/error/error.middleware";
import cors from 'cors';

export const app = express();

const middlewareLog = (req, res, next) => {
    console.log(`METHOD : ${req.method} | URL : ${req.url} | CONTENT TYPE : ${req.headers['content-type']}`);
    next();
}

app.use(cors());
app.use(middlewareLog);

app.use(express.json());
app.use(router);
app.use(errorMiddleware);
