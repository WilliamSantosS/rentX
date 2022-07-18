import { NextFunction, Request, Response } from "express";

import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import { AppError } from "@shared/errors/AppError";

export async function isAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { id } = request.params;

  const usersRepository = new UsersRepository();

  const isAdmin = usersRepository.findById(id);

  if (!isAdmin) {
    throw new AppError("You're not an admin user");
  }

  next();
}
