import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './cars.interface';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: 2,
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: 3,
      brand: 'Jeep',
      model: 'Cherokee',
    },
  ];

  findAll(): Car[] {
    return this.cars;
  }

  findById(id: number): Car {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car with id '${id}' not found`);

    return car;
  }

  create(): Car {
    const newCar = { id: 4, brand: 'Honda', model: 'Sonic ' };
    this.cars.push(newCar);

    return newCar;
  }
}
