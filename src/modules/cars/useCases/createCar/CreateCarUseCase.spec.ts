import { CarRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";

import { CreateCarUseCase } from "./CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarRepositoryInMemory;

describe("Create car", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it("should be able to create a new car", async () => {
    await createCarUseCase.execute({
      name: "car",
      description: "this is a description",
      brand: "this is a new brand",
      daily_rate: 60,
      fine: 200,
      license_plate: "EFOUDAA",
      category_id: "CATEGORY",
    });
  });

  it("should not be able to create a new car with existent plate", async () => {
    expect(async () => {
      await createCarUseCase.execute({
        name: "car",
        description: "this is a description",
        brand: "this is a new brand",
        daily_rate: 60,
        fine: 200,
        license_plate: "EFOUDAA",
        category_id: "CATEGORY",
      });

      await createCarUseCase.execute({
        name: "car 2",
        description: "this is a description",
        brand: "this is a new brand",
        daily_rate: 60,
        fine: 200,
        license_plate: "EFOUDAA",
        category_id: "CATEGORY",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("The car should be created with available status being true", async () => {
    const car = await createCarUseCase.execute({
      name: "car 5",
      description: "this is a description",
      brand: "this is a new brand",
      daily_rate: 60,
      fine: 200,
      license_plate: "KIUFNNDF",
      category_id: "CATEGORY",
    });

    expect(car.available).toBe(true);
  });
});
