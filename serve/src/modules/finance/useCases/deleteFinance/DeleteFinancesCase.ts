import { AuthFinanceDTO } from "../../dtos/CreateFinanceDTO";
import { prisma } from "../../../../prisma/cliente";
import { Finance } from "@prisma/client";
import { GetallFinanceDTO } from "../../dtos/getAllFinanceDTO";

export class DeleteFinancesCase {
  async execute({ id, userId }: Partial<Finance>): Promise<any> {
    const finance = await prisma.finance.deleteMany({
      where: {
        userId,
        id: id,
      },
    });

    return finance;
  }
}
