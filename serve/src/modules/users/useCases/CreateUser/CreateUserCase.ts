import { User } from "@prisma/client";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";
import { prisma } from "../../../../prisma/cliente";
import { hash } from "bcryptjs";

export class CreateUserUserCase {
  async execute({ name, email, password }: CreateUserDTO): Promise<User> {
    const hash_password = await hash(password, 12)
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hash_password
      }
    })
    return user

  }
}