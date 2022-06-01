import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

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
  }: ICreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);
    if (userAlreadyExists) {
      throw new Error("E-mail already taken");
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
