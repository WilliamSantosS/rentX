import { Router } from "express";
import multer from "multer";

import { createCategoriesController } from "../modules/cars/useCases/createCategory";
import { importCategoryController } from "../modules/cars/useCases/importCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategory";

const categoriesRouter = Router();

const upload = multer({ dest: "./tmp" });

categoriesRouter.post("/", (request, response) => {
  return createCategoriesController.handle(request, response);
});

categoriesRouter.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

categoriesRouter.post("/import", upload.single("file"), (request, response) => {
  return importCategoryController.handle(request, response);
});

export { categoriesRouter };
