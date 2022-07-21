import { inject, injectable } from "tsyringe";

import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { ICarRepository } from "@modules/cars/repositories/ICarRepository";

interface IRequest {
  name?: string;
  category_id?: string;
  brand?: string;
}
@injectable()
class ListAvailableCarsUseCase {
  constructor(
    @inject("CarsRepository") private carsRepository: ICarRepository
  ) {}
  async execute({ name, category_id, brand }: IRequest): Promise<Car[]> {
    const cars = await this.carsRepository.findAllAvailable(
      name,
      category_id,
      brand
    );
    return cars;
  }
}
export { ListAvailableCarsUseCase };
