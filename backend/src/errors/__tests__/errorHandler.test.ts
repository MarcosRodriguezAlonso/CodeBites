import { Response } from 'express';
import { errorHandler } from '../errorHandler';
import AppError from '../AppError';

describe('Given the errorHandler function', () => {
  describe('When it receives an AppError', () => {
    test('Then it should respond with the correct status code and message', () => {
      const mockResponse = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as unknown as Response;

      const error = new AppError('Test AppError', 400);

      errorHandler(error, mockResponse);

      expect(mockResponse.status).toHaveBeenCalledWith(400);
      expect(mockResponse.json).toHaveBeenCalledWith({ error: 'Test AppError' });
    });
  });

  describe('When it receives a generic error', () => {
    test('Then it should respond with status code 500 and a generic message', () => {
      const mockResponse = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as unknown as Response;

      const error = new Error('Test Error');

      errorHandler(error, mockResponse);

      expect(mockResponse.status).toHaveBeenCalledWith(500);
      expect(mockResponse.json).toHaveBeenCalledWith({ error: 'Server Error' });
    });
  });
});
