import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../../../../modules/cars/useCases/createCategory/CreateCategoryController";
import { ImportCategoryController } from "../../../../modules/cars/useCases/importCategory/ImportCategoryController";
import { listCategoriesController } from "../../../../modules/cars/useCases/listCategory";
import { ensureAuthenticated } from "../middlewars/ensureAuthenticated";
import { isAdmin } from "../middlewars/isAdmin";

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
  ensureAuthenticated,
  isAdmin,
  upload.single("file"),
  importCategoriesController.handle
);

export { categoriesRouter };
