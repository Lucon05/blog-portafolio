import type { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

export const zodErrorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err instanceof ZodError) {
    res.status(400).json({ message: err.issues });
    return;
  }

  next(err);
};
