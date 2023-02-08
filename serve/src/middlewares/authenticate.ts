import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

type TokenPayload = {
  id: string;
  iat: number;
  exp: number;
};
export function authenticate(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Token not provided" });
  }
  const [, token] = authorization.split(" ");


  try {

    const decoded = verify(token, "secret");
    const { id } = decoded as TokenPayload;
    Object.defineProperty(req, "userId", {
      value: id,
      writable: false,
      enumerable: true,
      configurable: false,
    });
    return next();
  } catch (err) {
    return res.status(401).send({ message: "Unauthorized" });
  }
}