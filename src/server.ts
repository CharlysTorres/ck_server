import dotenv from 'dotenv';
dotenv.config();

import "express-async-errors"
import express from 'express';
import cors from 'cors';

import routes from './routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(routes);

app.listen(3333, () => {console.log("Ready a Go! 🚀, access in http://localhost:3333")});
