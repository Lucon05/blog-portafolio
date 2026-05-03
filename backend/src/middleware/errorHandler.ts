import type { NextFunction, Request, Response } from "express";

// normalmente un mitlerware tiene solo req res y next pero como es un errorHandler tenemos que anadir el err o error para ve que error ocurrio
export const errorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.error(err);
  res.status(500).json({ error: "Something went wrong" });
};
