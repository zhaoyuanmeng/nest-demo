import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('coffee')
export class CoffeeController {
  @Get()
  findAll() {
    return 'Hello Coffee';
  }
  // 传入动态属性 @Parm 参数如果为空 就是所有的参数 访问就是parm.属性
  @Get(':id')
  findOne(@Param('id') id: string) {
    return 'Hello Coffee in' + id;
  }
  @Post('')
  findTwo(@Body() body: object) {
    return body;
  }
}
