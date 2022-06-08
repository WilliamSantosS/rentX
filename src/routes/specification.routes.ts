import { Router } from "express";

import { ensureAuthenticated } from "../middlewars/ensureAuthenticated";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";

const specificationsRouter = Router();

const specificationController = new CreateSpecificationController();

specificationsRouter.use(ensureAuthenticated);
specificationsRouter.post("/", specificationController.handle);

export { specificationsRouter };
