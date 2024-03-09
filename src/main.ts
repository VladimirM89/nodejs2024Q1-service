import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configDotenv } from 'dotenv';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  configDotenv();
  const port = process.env.PORT || 5000;
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(port, () => console.log(`Server start on ${port} port.`));
}
bootstrap();
