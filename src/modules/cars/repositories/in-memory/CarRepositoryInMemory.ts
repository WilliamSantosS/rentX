import { ICarDTO } from "@modules/cars/dto/ICarDTO";
import { Car } from "@modules/cars/infra/typeorm/entities/Car";

import { ICarRepository } from "../ICarRepository";

class CarRepositoryInMemory implements ICarRepository {
  cars: Car[] = [];
  async create({
    brand,
    category_id,
    daily_rate,
    description,
    fine,
    license_plate,
    name,
  }: ICarDTO): Promise<Car> {
    const car = new Car();

    Object.assign(car, {
      brand,
      category_id,
      daily_rate,
      description,
      fine,
      license_plate,
      name,
    });

    this.cars.push(car);

    return car;
  }

  async findByPlate(license_plate: string): Promise<Car> {
    return this.cars.find((car) => car.license_plate === license_plate);
  }

  async findAllAvailable(
    name: string,
    category_id: string,
    brand: string
  ): Promise<Car[]> {
    return this.cars.filter(
      (car) =>
        car.available === true ||
        (name && car.name === name) ||
        (brand && car.brand === brand) ||
        (category_id && car.category_id === category_id)
    );
  }
}

export { CarRepositoryInMemory };
