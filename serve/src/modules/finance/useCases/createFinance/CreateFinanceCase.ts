import { AuthFinanceDTO } from "../../dtos/CreateFinanceDTO";
import { prisma } from "../../../../prisma/cliente";
import { hash } from "bcryptjs";
import { Finance } from "@prisma/client";

export class CreateFinanceCase {
  async execute({
    description,
    valor,
    category,
    userId,
  }: AuthFinanceDTO): Promise<Finance> {
    const finance = await prisma.finance.create({
      data: {
        description,
        valor,
        category,
        userId,
      },
    });
    return finance;
  }
}
