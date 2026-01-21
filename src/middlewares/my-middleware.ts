import { Request, Response, NextFunction } from "express";

export function myMiddleware(
  req: Request,
  res: Response, 
  next: NextFunction
) {
  req.user_id = "123456" // Exemplo de atribuição de valor ao novo campo user_id
  
  console.log("Passou pelo MIddleware");

  return next();
}
