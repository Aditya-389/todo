import 'dotenv/config';
import express from 'express';
import db from './config/db.ts'

const app = express();

db.connect();

export default app;





