import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // tao ra app
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
