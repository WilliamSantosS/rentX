import { Router } from "express";

import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";

const carsRouter = Router();

const carController = new CreateCarController();

carsRouter.post("/", carController.handle);

export { carsRouter };
