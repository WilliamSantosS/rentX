import { IUserDTO } from "@modules/accounts/dtos/IUserDTO";
import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory";
import { AppError } from "@shared/infra/http/errors/AppError";

import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

let usersRepositoryInMemory: UsersRepositoryInMemory;
let authenticateUserUseCase: AuthenticateUserUseCase;
let createUserUseCase: CreateUserUseCase;

describe("Authenticate User", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    authenticateUserUseCase = new AuthenticateUserUseCase(
      usersRepositoryInMemory
    );
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  });

  it("Should be able to authenticate an user", async () => {
    const user: IUserDTO = {
      drive_license: "444474",
      email: "test@email.com",
      name: "test name",
      password: "123",
    };
    await createUserUseCase.execute(user);

    const result = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password,
    });

    expect(result).toHaveProperty("token");
  });

  it("Should not be able to authenticate an non existent user", () => {
    expect(async () => {
      await authenticateUserUseCase.execute({
        email: "false@email.com.br",
        password: "falsePassword",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("Should not be able to authenticate an user with invalid credentials", () => {
    expect(async () => {
      const user: IUserDTO = {
        drive_license: "4444",
        email: "invalid@email.com",
        name: "invalid name",
        password: "invalid password",
      };
      await createUserUseCase.execute(user);

      await authenticateUserUseCase.execute({
        email: "nonexistent@email.com.br",
        password: "nonexistent",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
