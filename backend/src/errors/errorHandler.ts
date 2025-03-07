import { Response } from "express";
import AppError from "./AppError";

export const errorHandler = (
  error: Error,
  res: Response
) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({ error: error.message });
  }

  return res.status(500).json({ error: "Server Error" });
};
