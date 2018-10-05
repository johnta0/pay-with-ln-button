import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { join } from 'path';

const logger = new Logger();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port: number = 3000;

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');

  await app.listen(port);
  logger.log(`Hosting on localhost:${port}`);
}
bootstrap();
