import { Coffee } from './entities/coffee.entity';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class CoffeeService {
  private coffees: Coffee[] = [
    {
      id: '1',
      name: 'que chao',
      brand: 'china',
      flavors: ['aaaa', 'bbb'],
    },
  ];

  // 写一个增删改查

  findAll() {
    return this.coffees;
  }
  create(data: any) {
    this.coffees.push(data);
  }
  findOne(id: string) {
    const coffee = this.coffees.find((item) => item.id === id);
    if (!coffee) {
      //
      throw new HttpException(`coffee: ${id} not found`, HttpStatus.NOT_FOUND);
    }
    return coffee;
  }
  update(id: string, updateCoffeeDto: any) {
    const existingCoffees = this.findOne(id);
    if (existingCoffees) {
      // to do
      // return existingCoffees;
    }
  }
  delete(id: string) {
    let coffeeIndex = this.coffees.findIndex((item) => item.id === id);
    // 删除下表的那个值
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}
