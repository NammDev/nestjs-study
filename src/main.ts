import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import * as config from 'config';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create(AppModule);
  const serverConfig: any = config.get('server');

  const port = process.env.PORT || serverConfig.port;
  await app.listen(port);
  logger.verbose(`Bootstrap application listening on port ${port}`);
}
bootstrap();
