import { verify } from "jsonwebtoken";
import { Request, Response } from "express";
import { CreateFinanceCase } from "./CreateFinanceCase";
type TokenPayload = {
  id: string;
  iat: number;
  exp: number;
};
export class CreateFinanceController {
  async handle(req: Request, res: Response) {
    const { description, valor, category } = req.body;
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ error: "Token not provided" });
    }
    const [, token] = authorization.split(" ");
    try {
      const decoded = verify(token, "secret");
      const { id } = decoded as TokenPayload;

      const createUserUserCase = new CreateFinanceCase();
      const result = await createUserUserCase.execute({
        description,
        valor,
        category,
        userId: id,
      });
      return res.status(201).json(id);
    } catch (err) {
      return res.status(401).send({ message: "Unauthorized" });
    }
  }
}
