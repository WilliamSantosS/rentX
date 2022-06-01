import { Request, Response } from "express";
import { container } from "tsyringe";

import { AuthenticateUserUserCase } from "./AuthenticateUserUserCase";

class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;
    const authenticateUserUseCase = container.resolve(AuthenticateUserUserCase);

    try {
      const token = await authenticateUserUseCase.execute({ email, password });

      return response.json(token);
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }
}

export { AuthenticateUserController };
