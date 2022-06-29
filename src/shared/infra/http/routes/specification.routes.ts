import { Router } from "express";

import { CreateSpecificationController } from "../../../../modules/cars/useCases/createSpecification/CreateSpecificationController";
import { ensureAuthenticated } from "../middlewars/ensureAuthenticated";

const specificationsRouter = Router();

const specificationController = new CreateSpecificationController();

specificationsRouter.use(ensureAuthenticated);
specificationsRouter.post("/", specificationController.handle);

export { specificationsRouter };
