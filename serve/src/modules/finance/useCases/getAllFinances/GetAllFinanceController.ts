import { verify } from "jsonwebtoken";
import { Request, Response } from "express";
import { GetAllFinancesCase } from "./GetAllFinancesCase";
type TokenPayload = {
  id: string;
  iat: number;
  exp: number;
};
export class GetallFinanceController {
  async handle(req: Request, res: Response) {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ error: "Token not provided" });
    }
    const [, token] = authorization.split(" ");

    try {
      const decoded = verify(token, "secret");
      const { id } = decoded as TokenPayload;
      const getAllFinancesCase = new GetAllFinancesCase();
      const result = await getAllFinancesCase.execute({
        userId: id,
      });
      return res.status(201).json(result);
    } catch (err) {
      return res.status(401).send({ message: "Unauthorized" });
    }
  }
}
