import { Request, Response } from "express";
import { AppError } from "../utils/AppError";
import { z } from "zod"

export class ProductsController {
  /* Guia de boas praticas para nomear métodos em controladores RESTful:
  index - GET para listar vários registros.
  show - GET para exibir um registro específico.
  create - POST para criar um novo registro.
  update - PUT ou PATCH para atualizar um registro existente.
  delete ou remove - DELETE para remover um registro.
  */

  index(req: Request, res: Response) {
    const { page, limit } = req.query; // Pega os valores da query string

    res.send(`Página ${page} de ${limit}`); // Retorna os valores para o cliente
  }

  create(req: Request, res: Response) {
    // const { name, price } = req.body; // Pega os valores do corpo da requisição

    const bodySchema = z.object({ 
      name: z.string({ required_error: "Name is required!" })
      .trim()
      .min(6, { message: "Nome precisa ter pelo menos 6 caracteres." }),
      price: z.number({ required_error: "Price is required!" })
      .positive({ message: "O preço deve ser um número positivo." }),      
     })

    const { name, price } = bodySchema.parse(req.body)
/*
    if(!name){
      throw new AppError("Nome do produto é obrigatório")
    }

    if(name.trim().length < 6){
      throw new AppError("Nome do produto precisa ter ao menos 6 caracteres")
    }

    if(!price){
      throw new AppError("Preço do produto é obrigatório")
    }

    if(price < 0){
      throw new AppError("Preço do produto não pode ser menor que zero")
    }
    */

    // throw new Error("Erro inesperado ao criar um produto");
    //throw new AppError("Erro ao criar um produto");

    res.status(201).json({ name, price, user_id: req.user_id }); // Retorna os valores para o cliente em formato JSON
  }
}
