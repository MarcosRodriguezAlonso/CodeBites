import request from 'supertest';
import express from 'express';
import mongoose from 'mongoose';
import { createSnippet, listSnippets, deleteSnippet, updateSnippet } from '../controllers/snippetController';
import { Request, Response, NextFunction } from 'express';
import { errorHandler } from '../errors/errorHandler';
import dotenv from 'dotenv';

dotenv.config();

jest.setTimeout(30000);

const app = express();
app.use(express.json());
app.post('/api/snippets', createSnippet);
app.get('/api/snippets', listSnippets);
app.delete('/api/snippets/:id', deleteSnippet);
app.patch('/api/snippets/:id', updateSnippet);
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  errorHandler(err, res);
});

beforeAll(async () => {
  await mongoose.connect(global.__MONGO_URI__);
});

afterAll(async () => {
  await mongoose.disconnect();
});

afterEach(async () => {
  const collections = mongoose.connection.collections;
  for (const key in collections) {
    const collection = collections[key];
    await collection.deleteMany({});
  }
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

  describe('DELETE /api/snippets/:id', () => {
    test('should delete a snippet', async () => {
      const newSnippet = {
        title: 'Test Snippet',
        code: 'console.log("Hello, world!");',
        language: 'JavaScript',
      };

      const createResponse = await request(app).post('/api/snippets').send(newSnippet);
      const snippetId = createResponse.body._id;

      const deleteResponse = await request(app).delete(`/api/snippets/${snippetId}`);
      expect(deleteResponse.status).toBe(200);
      expect(deleteResponse.body).toHaveProperty('_id', snippetId);

      const getResponse = await request(app).get('/api/snippets');
      expect(getResponse.body).not.toContainEqual(expect.objectContaining({ _id: snippetId }));
    });

    test('should return 404 if snippet does not exist', async () => {
      const nonExistentId = new mongoose.Types.ObjectId().toString();
      const response = await request(app).delete(`/api/snippets/${nonExistentId}`);
      expect(response.status).toBe(404);
      expect(response.body).toHaveProperty('error', 'Snippet not found');
    });
  });
  
  describe('PATCH /api/snippets/:id', () => {
    test('should update a snippet', async () => {
      const newSnippet = {
        title: 'Test Snippet',
        code: 'console.log("Hello, world!");',
        language: 'JavaScript',
      };

      const createResponse = await request(app).post('/api/snippets').send(newSnippet);
      const snippetId = createResponse.body._id;

      const updatedSnippet = {
        title: 'Updated Snippet',
        code: 'console.log("Updated code!");',
        language: 'TypeScript',
      };

      const updateResponse = await request(app).patch(`/api/snippets/${snippetId}`).send(updatedSnippet);
      expect(updateResponse.status).toBe(200);
      expect(updateResponse.body).toHaveProperty('_id', snippetId);
      expect(updateResponse.body.title).toBe(updatedSnippet.title);
      expect(updateResponse.body.code).toBe(updatedSnippet.code);
      expect(updateResponse.body.language).toBe(updatedSnippet.language);
    });

    test('should return 404 if snippet does not exist', async () => {
      const nonExistentId = new mongoose.Types.ObjectId().toString();
      const updatedSnippet = {
        title: 'Updated Snippet',
        code: 'console.log("Updated code!");',
        language: 'TypeScript',
      };

      const response = await request(app).patch(`/api/snippets/${nonExistentId}`).send(updatedSnippet);
      expect(response.status).toBe(404);
      expect(response.body).toHaveProperty('error', 'Snippet not found');
    });
  });
});
