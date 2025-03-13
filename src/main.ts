import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Enable CORS for all origins
  app.enableCors({
    origin: 'http://localhost:3001', // Allow requests from Next.js running on port 3001
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
