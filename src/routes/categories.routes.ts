import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController";
import { ImportCategoryController } from "../modules/cars/useCases/importCategory/ImportCategoryController";
import { listCategoriesController } from "../modules/cars/useCases/listCategory";

const categoriesRouter = Router();

const upload = multer({ dest: "./tmp" });

const createCategoryController = new CreateCategoryController();
const importCategoriesController = new ImportCategoryController();

categoriesRouter.post("/", createCategoryController.handle);

categoriesRouter.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

categoriesRouter.post(
  "/import",
  upload.single("file"),
  importCategoriesController.handle
);

export { categoriesRouter };
