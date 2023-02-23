import { verify } from "jsonwebtoken";
import { Request, Response } from "express";
import { DeleteFinancesCase } from "./DeleteFinancesCase";
type TokenPayload = {
  id: string;
  iat: number;
  exp: number;
};
export class DeleteFinanceController {
  async handle(req: Request, res: Response) {
    const { id } = req.body;
    const idFinanc = id;
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ error: "Token not provided" });
    }
    const [, token] = authorization.split(" ");

    try {
      const decoded = verify(token, "secret");
      const { id } = decoded as TokenPayload;
      const deleteFinancesCase = new DeleteFinancesCase();
      const result = await deleteFinancesCase.execute({
        id: idFinanc,
        userId: id,
      });
      return res.status(201).json(result);
    } catch (err) {
      return res.status(401).send({ message: "Unauthorized" });
    }
  }
}
