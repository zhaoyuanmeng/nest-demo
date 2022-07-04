import { Injectable } from '@nestjs/common';

@Injectable() //我们可以看出使用@Injectable修饰后的 AppService, 在AppModule中注册之后，
// 在app.controller.ts中使用，我们就不需要使用new AppService()去实例化，直接引入过来就可以用。
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
