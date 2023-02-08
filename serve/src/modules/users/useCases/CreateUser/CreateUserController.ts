
import { Request, Response } from "express";
import { CreateUserUserCase } from './CreateUserCase';

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email, password } = req.body;
    const createUserUserCase = new CreateUserUserCase();
    const result = await createUserUserCase.execute({ name, email, password });

    return res.status(201).json(result);
  }
}