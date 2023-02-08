import { Request, Response } from "express";
import { GetAllUsersUseCase } from "./GetAllUsersUseCase";
export class GetAllUsersController {
  async handle(req: Request, res: Response) {
    const { name, email } = req.body;

    const getAllUsersUseCase = new GetAllUsersUseCase();
    const result = await getAllUsersUseCase.execute();

    return res.status(201).json(result);
  }
}