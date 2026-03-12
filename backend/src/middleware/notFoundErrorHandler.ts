


import type { NextFunction, Request, Response } from "express";

import { NotFoundError } from "../lib/requireOrThrowNotFound";

export const notFoundErrorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
   if (err instanceof NotFoundError){
    res.status(404).json({message:"no se encontro " + err.message})
    return
   }
   
  
  next(err)
};

