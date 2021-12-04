import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.use(helmet()); //middlewares externo para proteger contra 15 tipos de façha de segurança comum
  await app.listen(3000, () => {
    console.log(`SERVIDOR RODANDO NA PORTA ${3000}`);
  });
}
bootstrap();
