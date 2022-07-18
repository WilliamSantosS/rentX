import { Router } from "express";

import { CreateSpecificationController } from "../../../../modules/cars/useCases/createSpecification/CreateSpecificationController";
import { ensureAuthenticated } from "../middlewars/ensureAuthenticated";
import { isAdmin } from "../middlewars/isAdmin";

const specificationsRouter = Router();

const specificationController = new CreateSpecificationController();

specificationsRouter.post(
  "/",
  ensureAuthenticated,
  isAdmin,
  specificationController.handle
);

export { specificationsRouter };
