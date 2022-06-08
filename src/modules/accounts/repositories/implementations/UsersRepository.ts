import { getRepository, Repository } from "typeorm";

import { IUserDTO } from "../../dtos/IUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    name,
    email,
    password,
    drive_license,
    avatar,
    id,
  }: IUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      email,
      password,
      drive_license,
      avatar,
      id,
    });

    await this.repository.save(user);
  }

  findByEmail(email: string): Promise<User> {
    return this.repository.findOne({ email });
  }

  findById(id: string): Promise<User> {
    return this.repository.findOne({ id });
  }
}

export { UsersRepository };
