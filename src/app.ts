
import express from "express";

import indexRouter from './routes';

const app: express.Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

export default app;