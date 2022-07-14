import { CoffeeService } from './coffee.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('coffee')
export class CoffeeController {
  constructor(private readonly CoffeeService: CoffeeService) {}
  @Get()
  findAll() {
    return this.CoffeeService.findAll();
  }
  // 传入动态属性 @Parm 参数如果为空 就是所有的参数 访问就是parm.属性
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.CoffeeService.findOne(id);
  }
  @Post('')
  create(@Body() body: object) {
    return this.CoffeeService.create(body);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() body: object) {
    return this.CoffeeService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.CoffeeService.delete(id);
  }
}
