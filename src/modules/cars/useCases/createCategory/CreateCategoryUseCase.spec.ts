import { CategoriesRepositoryInMemory } from "@modules/cars/repositories/in-memory/CategoriesRepositoryInMemory";
import { AppError } from "@shared/infra/http/errors/AppError";

import { CreateCategoryUseCase } from "./CreateCategoryUserCase";

let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;
let createCategoryUseCase: CreateCategoryUseCase;

describe("Create category", () => {
  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(
      categoriesRepositoryInMemory
    );
  });
  it("Should be able to create a new category", async () => {
    const category = {
      name: "Test Category",
      description: "Test Description",
    };

    await createCategoryUseCase.execute({
      name: category.name,
      description: category.description,
    });

    const createdCategory = await categoriesRepositoryInMemory.findByName(
      category.name
    );

    expect(createdCategory).toHaveProperty("id");
  });

  it("Should not be able to create a with an existent name", async () => {
    expect(async () => {
      const category = {
        name: "Test Category",
        description: "Test Description",
      };

      await createCategoryUseCase.execute({
        name: category.name,
        description: category.description,
      });

      await createCategoryUseCase.execute({
        name: category.name,
        description: category.description,
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
