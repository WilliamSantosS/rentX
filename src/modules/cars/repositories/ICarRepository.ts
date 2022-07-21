import { ICarDTO } from "../dto/ICarDTO";
import { Car } from "../infra/typeorm/entities/Car";

interface ICarRepository {
  findByPlate(license_plate: string): Promise<Car>;
  create(data: ICarDTO): Promise<Car>;
  findAllAvailable(
    name?: string,
    category_id?: string,
    brand?: string
  ): Promise<Car[]>;
}
export { ICarRepository };
