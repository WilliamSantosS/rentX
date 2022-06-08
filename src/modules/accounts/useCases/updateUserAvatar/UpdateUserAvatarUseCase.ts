import { inject, injectable } from "tsyringe";

import { deleteFile } from "../../../../utils/file";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
  avatar: string;
}

@injectable()
class UpdateUserAvatarUseCase {
  constructor(
    @inject(UsersRepository)
    private usersRepository: IUsersRepository
  ) {}

  async execute({ user_id, avatar }: IRequest): Promise<void> {
    const user = await this.usersRepository.findById(user_id);

    if (user.avatar) {
      deleteFile(`./tmp/avatar/${user.avatar}`);
    }
    user.avatar = avatar;
    await this.usersRepository.create(user);
  }
}

export { UpdateUserAvatarUseCase };
