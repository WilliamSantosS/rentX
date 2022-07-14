import { Router } from "express";

import { authenticateUsersRouter } from "./authenticateUsers.routes";
import { carsRouter } from "./cars.routes";
import { categoriesRouter } from "./categories.routes";
import { specificationsRouter } from "./specification.routes";
import { usersRouter } from "./users.routes";

const router = Router();

router.use("/categories", categoriesRouter);
router.use("/specifications", specificationsRouter);
router.use("/users", usersRouter);
router.use("/cars", carsRouter);
router.use(authenticateUsersRouter);

export { router };
