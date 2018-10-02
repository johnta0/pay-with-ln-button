import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

const logger = new Logger();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port: number = 3000;
  await app.listen(port);
  logger.log(`Hosting on localhost:${port}`);
}
bootstrap();
