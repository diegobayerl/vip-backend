import dotenv from 'dotenv';

import express from 'express';

import path from 'path';
import cors from 'cors';

import 'express-async-errors';
import './database/connection';

import errorHandler from './errors/handler';

import routes from './routes';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..','uploads')));
app.use(errorHandler);

app.listen(process.env.PORT || 3333);
