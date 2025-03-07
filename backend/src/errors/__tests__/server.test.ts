import request from 'supertest';
import express, { Request, Response, NextFunction } from 'express';
import { errorHandler } from '../errorHandler';
import AppError from '../AppError';

const app = express();

app.get('/api', (_req: Request, res: Response) => {
  res.json({ message: 'Hello World' });
});

app.get('/', (_req: Request, _res: Response) => {
  throw new AppError('Not Found', 404);
});

app.use((_req: Request, _res: Response, next: NextFunction) => {
  next(new AppError('Not Found', 404));
});

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  errorHandler(err, res);
});

describe('Given an invalid GET/ endpoint', () => {
  describe('When it receives a request', () => {
    test("Then it should respond with the status code 404 and the error message 'Not Found'", async () => {
      const response = await request(app).get('/invalid-endpoint');
      expect(response.status).toBe(404);
      expect(response.body).toEqual({ error: 'Not Found' });
    });
  });
});
