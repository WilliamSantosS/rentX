import { inject, injectable } from "tsyringe";

import { ICarDTO } from "@modules/cars/dto/ICarDTO";
import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { AppError } from "@shared/errors/AppError";

import { ICarRepository } from "../../repositories/ICarRepository";

@injectable()
class CreateCarUseCase {
  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarRepository
  ) {}
  async execute({
    name,
    description,
    license_plate,
    fine,
    daily_rate,
    category_id,
    brand,
  }: ICarDTO): Promise<Car> {
    const licensePlateAlreadyExists = await this.carsRepository.findByPlate(
      license_plate
    );

    if (licensePlateAlreadyExists)
      throw new AppError("License plate is already being used", 400);

    const car = await this.carsRepository.create({
      brand,
      category_id,
      daily_rate,
      description,
      fine,
      license_plate,
      name,
    });

    return car;
  }
}

export { CreateCarUseCase };
