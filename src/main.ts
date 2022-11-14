import { ValidationPipe } from '@nestjs/common';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExceptionLoggerFilter } from './exceptions/exception.filter';
import { BackendLogger } from './modules/logger/BackendLogger';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SWAGGER } from './common/constant/swagger.constant';
import path, { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap(logger: BackendLogger) {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  });

  const { httpAdapter } = app.get(HttpAdapterHost);

  app.useStaticAssets(join(__dirname, '..', 'public/uploads'));

  app.enableCors();

  app.setGlobalPrefix('/api/v1')

  app.useGlobalPipes(new ValidationPipe());

  const options = new DocumentBuilder()
    .setTitle(SWAGGER.TITLE)
    .setDescription(SWAGGER.DESCRIPTION)
    .setVersion(SWAGGER.VERSION)

    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      'access-token',
    )
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  app.useGlobalFilters(new ExceptionLoggerFilter(httpAdapter));

  await app.listen(AppModule.port);

  logger.log(`Server is running at PORT: ${AppModule.port}`);
}
bootstrap(new BackendLogger(bootstrap.name));
