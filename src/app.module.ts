import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forRoot()], //导入模块的列表，如果需要使用其他模块的服务，需要通过这里导入
  controllers: [AppController], //处理http请求，包括路由控制，向客户端返回响应，将具体业务逻辑委托给providers处理；
  providers: [AppService], //Nest.js注入器实例化的提供者（服务提供者），处理具体的业务逻辑，各个模块之间可以共享
})
export class AppModule {}
