import { Request, Response, NextFunction } from 'express';
import Snippet from '../models/snippet';
import AppError from '../errors/AppError';

export const createSnippet = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title, code, language } = req.body;
    if (!title || !code || !language) {
      throw new AppError('All fields are required', 400);
    }

    const newSnippet = new Snippet({ title, code, language });
    await newSnippet.save();

    res.status(201).json(newSnippet);
  } catch (error) {
    next(error);
  }
};

export const listSnippets = async (_req: Request, res: Response) => {
  const snippets = await Snippet.find();
  res.json(snippets);
};

export const deleteSnippet = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const snippet = await Snippet.findByIdAndDelete(req.params.id);
    if (!snippet) {
      throw new AppError('Snippet not found', 404);
    }

    res.json(snippet);
  } catch (error) {
    next(error);
  }
}
