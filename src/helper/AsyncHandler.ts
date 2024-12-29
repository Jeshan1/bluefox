import { Request, Response, NextFunction } from "express";

type FunctionType = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void>;

export const asyncHandler = (requestHandler: FunctionType) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(requestHandler(req, res, next)).catch(next);
  };
};
