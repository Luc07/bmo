import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import errorHandler from '@middlewares/errorHandler';
import mainRouter from './router';

const app = express();

app.use(cors())
app.use(express.json());
app.use(mainRouter)
app.use(errorHandler)

export default app;