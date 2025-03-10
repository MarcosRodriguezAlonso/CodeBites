import request from 'supertest';
import express from 'express';
import mongoose from 'mongoose';
import { createSnippet, listSnippets } from '../controllers/snippetController';
import { Request, Response, NextFunction } from 'express';
import { errorHandler } from '../errors/errorHandler';
import dotenv from 'dotenv';

dotenv.config();

jest.setTimeout(30000);

const app = express();
app.use(express.json());
app.post('/api/snippets', createSnippet);
app.get('/api/snippets', listSnippets);
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  errorHandler(err, res);
});

beforeAll(async () => {
  await mongoose.connect(process.env.MONGODB_URI!);
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('Snippet API', () => {
  describe('POST /api/snippets', () => {
    test('should create a new snippet', async () => {
      const newSnippet = {
        title: 'Test Snippet',
        code: 'console.log("Hello, world!");',
        language: 'JavaScript',
      };

      const response = await request(app).post('/api/snippets').send(newSnippet);
      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('_id');
      expect(response.body.title).toBe(newSnippet.title);
      expect(response.body.code).toBe(newSnippet.code);
      expect(response.body.language).toBe(newSnippet.language);
    });

    test('should return 400 if required fields are missing', async () => {
      const newSnippet = {
        title: 'Test Snippet',
      };

      const response = await request(app).post('/api/snippets').send(newSnippet);
      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('error', 'All fields are required');
    });
  });

  describe('GET /api/snippets', () => {
    test('should return all snippets', async () => {
      const response = await request(app).get('/api/snippets');
      expect(response.status).toBe(200);
      expect(response.body).toBeInstanceOf(Array);
    });
  });
});
