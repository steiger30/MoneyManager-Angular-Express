import { Request, Response } from "express";
import { AuthUserUseCase } from "./AuthUserCase";
import { sign } from "jsonwebtoken";
export class AuthUserController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body;

    const authUserUseCase = new AuthUserUseCase();
    const result = await authUserUseCase.authenticate({ email, password });
    const token = sign({ id: result.id }, "secret", { expiresIn: "1d" });
    const { id } = result;
    return res.status(201).json({ result: { id, email }, token });
  }
}
