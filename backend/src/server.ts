import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { errorHandler } from './errors/errorHandler';
import AppError from './errors/AppError';
import { createSnippet, listSnippets, deleteSnippet, updateSnippet } from './controllers/snippetController';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 5000;

mongoose.connect(process.env.MONGODB_URI!)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.use(cors());
app.use(express.json());

app.get('/api', (_req: Request, res: Response) => {
  res.json({ message: 'API Is Working' });
});

app.post('/api/snippets', createSnippet);
app.get('/api/snippets', listSnippets);
app.delete('/api/snippets/:id', deleteSnippet);
app.patch('/api/snippets/:id', updateSnippet);

app.use((_req: Request, _res: Response, next: NextFunction) => {
  next(new AppError('Not Found', 404));
});

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  errorHandler(err, res);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
