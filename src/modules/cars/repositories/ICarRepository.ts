import { ICarDTO } from "../dto/ICarDTO";
import { Car } from "../infra/typeorm/entities/Car";

interface ICarRepository {
  findByPlate(license_plate: string): Promise<Car>;
  create(data: ICarDTO): Promise<Car>;
}
export { ICarRepository };
