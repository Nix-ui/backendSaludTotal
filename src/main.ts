import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import { json, urlencoded } from 'express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors({
    origin: process.env.FRONTEND_ORIGIN,
    methods: process.env.FRONTEND_METHODS,
    credentials: true,
  });
  const path = process.env.SWAGGER_PATH || 'api/docs';
  const options = new DocumentBuilder()
    .setTitle('Salud Total API')
    .setDescription('API documentation for the Salud Total application')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(path, app, document)
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
