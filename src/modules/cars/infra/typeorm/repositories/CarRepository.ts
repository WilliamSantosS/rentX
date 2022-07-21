/* eslint-disable no-return-await */
import { getRepository, Repository } from "typeorm";

import { ICarDTO } from "@modules/cars/dto/ICarDTO";
import { ICarRepository } from "@modules/cars/repositories/ICarRepository";

import { Car } from "../entities/Car";

class CarRepository implements ICarRepository {
  private repository: Repository<Car>;

  constructor() {
    this.repository = getRepository(Car);
  }

  async findByPlate(license_plate: string): Promise<Car> {
    return this.repository.findOne({ license_plate });
  }

  async create({
    brand,
    category_id,
    daily_rate,
    description,
    fine,
    license_plate,
    name,
  }: ICarDTO): Promise<Car> {
    const car = this.repository.create({
      brand,
      category_id,
      daily_rate,
      description,
      fine,
      license_plate,
      name,
    } as ICarDTO);

    return this.repository.save(car);
  }

  async findAllAvailable(
    name?: string,
    category_id?: string,
    brand?: string
  ): Promise<Car[]> {
    const carsQuery = this.repository
      .createQueryBuilder("cars")
      .where("available = :available", { available: true });

    if (brand) {
      carsQuery.andWhere("cars.brand = :brand", { brand });
    }

    if (category_id) {
      carsQuery.andWhere("cars.category_id = :category_id", { category_id });
    }

    if (name) {
      carsQuery.andWhere("cars.name = :name", { name });
    }

    return carsQuery.getMany();
  }
}

export { CarRepository };
