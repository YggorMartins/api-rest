import express, { Request, Response, NextFunction } from "express";
import { routes } from "./routes";
import { AppError } from "./utils/AppError";
import { ZodError } from "zod"

const PORT = 3333; //

const app = express();
app.use(express.json()); // Estamos falando para o Express usar JSON no corpo das requisições

app.use(routes);

/* 
Erro do cliente. 
400 (Bad Request) - A requisição não pôde ser entendida pelo servidor devido a sintaxe inválida.
401 (Unauthorized) - A requisição requer autenticação do usuário.
403 (Forbidden) - O servidor entendeu a requisição, mas se recusa a autorizá-la.
404 (Not Found) - O servidor não encontrou a página requisitada.
500 (Internal Server Error) - Erro interno do servidor.
*/

app.use((error: any, req: Request, res: Response, _: NextFunction) => {
  if(error instanceof AppError){
    return res.status(error.statusCode).json ({ message: error.message })
  }

  if(error instanceof ZodError){
    return res
    .status(400)
    .json({ message: "Validation error!", issues: error.format()}) // format() é um método do ZodError que formata os erros de validação de uma maneira mais legível
  }

  res.status(500).json({ message: error.message });
});

app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
