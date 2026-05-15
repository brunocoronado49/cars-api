import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Body,
  Delete,
  Patch,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { type Car } from './cars.interface';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars(): Car[] {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarById(@Param('id', ParseIntPipe) id: number): Car {
    return this.carsService.findById(id);
  }

  @Post()
  create(@Body() body: Car): Car {
    return body;
  }

  @Patch(':id')
  update(@Body() body: Car): Car {
    return body;
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number): string {
    return `Deleted car with id '${id}'`;
  }
}
