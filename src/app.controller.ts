import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app') //这个参数就是主路径
export class AppController {
  // 这是工厂模式
  constructor(private readonly appService: AppService) {}
  // 上面与下面类似
  // appService = new AppService();
  @Get() //请求方法的装饰器，对getHello方法进行修饰， 表示这个方法会被GET请求调用。
  getHello(): string {
    return this.appService.getHello();
  }
}
