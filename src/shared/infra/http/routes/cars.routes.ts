import { Router } from "express";

import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";

import { ensureAuthenticated } from "../middlewars/ensureAuthenticated";
import { isAdmin } from "../middlewars/isAdmin";

const carsRouter = Router();

const carController = new CreateCarController();

carsRouter.post("/", ensureAuthenticated, isAdmin, carController.handle);

export { carsRouter };
