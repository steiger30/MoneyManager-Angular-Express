import { User } from "@prisma/client";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";
import { prisma } from '../../../../prisma/cliente';

import { AuthUserDTO } from "../../dtos/AuthUserDTO";
import { compare } from "bcryptjs";
import { AppError } from "../../../../errors/AppError";


export class AuthUserUseCase {
  async authenticate({ email, password }: AuthUserDTO): Promise<User> {

    const userAlreadyExists = await prisma.user.findUnique({
      where: {
        email
      }
    })
    if (!userAlreadyExists) {
      throw new AppError("User already exists!")
    }
    const isValuePassword = await compare(password, userAlreadyExists.password)

    if (!isValuePassword) {
      throw new AppError("password invalid!");
    }
    return userAlreadyExists;
  }
}