import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configDotenv } from 'dotenv';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule } from '@nestjs/swagger';
import { readFile } from 'fs/promises';
import * as yaml from 'js-yaml';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  configDotenv();
  const port = process.env.PORT || 5000;

  const file = await readFile('./doc/api.yaml', 'utf8');
  const swaggerDocument = yaml.load(file);
  SwaggerModule.setup('docs', app, swaggerDocument);

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(port, () => console.log(`Server start on ${port} port.`));
}
bootstrap();
