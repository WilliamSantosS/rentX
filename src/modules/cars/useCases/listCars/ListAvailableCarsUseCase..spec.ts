import { CarRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarRepositoryInMemory";

import { CreateCarUseCase } from "../createCar/CreateCarUseCase";
import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let carRepositoryInMemory: CarRepositoryInMemory;
let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let createCarUseCase: CreateCarUseCase;

describe("List Cars", () => {
  beforeEach(() => {
    carRepositoryInMemory = new CarRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carRepositoryInMemory
    );
    createCarUseCase = new CreateCarUseCase(carRepositoryInMemory);
  });

  it("Should be able to list all available cars", async () => {
    const car = await createCarUseCase.execute({
      name: "test_car_1",
      brand: "new brand",
      category_id: "test_id_1",
      daily_rate: 150,
      description: "test description",
      fine: 10,
      license_plate: "EDA3FA",
    });

    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("Should be able to list all available cars by name", async () => {
    const car = await createCarUseCase.execute({
      name: "test_car_2",
      brand: "new brand",
      category_id: "test_id_2",
      daily_rate: 150,
      description: "test description",
      fine: 10,
      license_plate: "E3FDDA",
    });

    const cars = await listAvailableCarsUseCase.execute({ name: "test_car_2" });

    expect(cars).toEqual([car]);
  });

  it("Should be able to list all available cars by category", async () => {
    const car = await createCarUseCase.execute({
      name: "test_car_3",
      brand: "new brand 2",
      category_id: "test_id_3",
      daily_rate: 150,
      description: "test description",
      fine: 10,
      license_plate: "E3FDDADA",
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: "test_id_3",
    });

    expect(cars).toEqual([car]);
  });

  it("Should be able to list all available cars by brand", async () => {
    const car = await createCarUseCase.execute({
      name: "test_car_3",
      brand: "new brand 3",
      category_id: "test_id_3",
      daily_rate: 150,
      description: "test description",
      fine: 10,
      license_plate: "E3FDDADA",
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: "new brand 3",
    });

    expect(cars).toEqual([car]);
  });
});
