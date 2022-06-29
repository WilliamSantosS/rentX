import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { IUserDTO } from "@modules/accounts/dtos/IUserDTO";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    name,
    email,
    password,
    drive_license,
    avatar,
  }: IUserDTO): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);
    if (userAlreadyExists) {
      throw new AppError("E-mail already taken", 400);
    }
    const hashedPassword = await hash(password, 10);
    await this.usersRepository.create({
      name,
      email,
      password: hashedPassword,
      drive_license,
      avatar,
    });
  }
}

export { CreateUserUseCase };
