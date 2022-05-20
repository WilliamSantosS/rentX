import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUserCase";

const categoriesRepository = CategoriesRepository.getInstance();
const categoriesUseCase = new CreateCategoryUseCase(categoriesRepository);
const createCategoriesController = new CreateCategoryController(
  categoriesUseCase
);

export { createCategoriesController };
