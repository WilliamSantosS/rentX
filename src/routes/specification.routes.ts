import { Router } from "express";

import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";

const specificationsRouter = Router();

const specificationController = new CreateSpecificationController();

specificationsRouter.post("/", specificationController.handle);

export { specificationsRouter };
