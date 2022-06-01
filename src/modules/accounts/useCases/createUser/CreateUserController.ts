import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password, drive_license, avatar } = request.body;
    const createUserUseCase = container.resolve(CreateUserUseCase);

    try {
      await createUserUseCase.execute({
        name,
        email,
        password,
        drive_license,
        avatar,
      });
      return response.status(201).send();
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }
}

export { CreateUserController };
