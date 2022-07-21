import { Router } from "express";

import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";
import { ListAvailableCarsController } from "@modules/cars/useCases/listCars/ListAvailableCarsController";

import { ensureAuthenticated } from "../middlewars/ensureAuthenticated";
import { isAdmin } from "../middlewars/isAdmin";

const carsRouter = Router();

const carController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();

carsRouter.post("/", ensureAuthenticated, isAdmin, carController.handle);

carsRouter.get("/available", listAvailableCarsController.handle);

export { carsRouter };
