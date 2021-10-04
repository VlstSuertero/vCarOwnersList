import { CarModel } from './car-model';

export interface OwnerModel {
  id: string,
  lastName: string,
  firstName: string,
  middleName: string,
  cars: CarModel[]
}
