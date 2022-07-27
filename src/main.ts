import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformInterceptor } from './core/interceptor/transform.interceptor';
import { HttpExceptionFilter } from './core/filter/http-exception.filter';

import * as express from 'express';
import { join } from 'path';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api'); // 设置全局路由前缀
  // 到时候再打开这个
  // app.useGlobalFilters(new HttpExceptionFilter());
  // app.useGlobalInterceptors(new TransformInterceptor());

  const rootDir = join(__dirname, '..');
  app.use('/public', express.static(join(rootDir, 'public')));
  await app.listen(3000);
}
bootstrap();
