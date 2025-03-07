import express, { Request, Response, NextFunction } from 'express';
import { errorHandler } from './errors/errorHandler';
import AppError from './errors/AppError';

const app = express();
const port = 5000;

app.get('/api', (_req: Request, res: Response) => {
  res.json({ message: 'Hello World' })});

app.get('/', (_req: Request, _res: Response) => {
  throw new AppError('Not Found', 404);
});

app.use((_req: Request, _res: Response, next: NextFunction) => {
  next(new AppError('Not Found', 404));
});

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  errorHandler(err, res);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
