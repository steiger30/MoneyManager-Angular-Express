import { AuthFinanceDTO } from "../../dtos/CreateFinanceDTO";
import { prisma } from "../../../../prisma/cliente";
import { Finance } from "@prisma/client";
import { GetallFinanceDTO } from "../../dtos/getAllFinanceDTO";

export class GetAllFinancesCase {
  async execute({
    userId,
  }: Partial<Finance>): Promise<GetallFinanceDTO[]> {
    const finance = await prisma.finance.findMany({
      where: {
        userId,
      },
      select: {
        id: true,
        description: true,
        valor: true,
        category: true,
      },
    });

    return finance;
  }
}
