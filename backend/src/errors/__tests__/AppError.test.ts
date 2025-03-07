import AppError from '../AppError';

describe('Given the AppError class', () => {
  describe('When it is instantiated with a message and a status code', () => {
    test('Then it should create an error with the correct message and status code', () => {
      const message = 'Test Error';
      const statusCode = 400;

      const error = new AppError(message, statusCode);

      expect(error.message).toBe(message);
      expect(error.statusCode).toBe(statusCode);
      expect(error.name).toBe('AppError');
    });
  });
});
