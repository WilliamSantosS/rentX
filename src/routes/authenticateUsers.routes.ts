import { Router } from "express";

import { AuthenticateUserController } from "../modules/accounts/useCases/auth/AuthenticateUserController";

const authenticateUsersRouter = Router();

const authenticateUserController = new AuthenticateUserController();

authenticateUsersRouter.post("/sessions", authenticateUserController.handle);

export { authenticateUsersRouter };
