import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Enable CORS for all origins
  const isProduction = process.env.NODE_ENV === 'production';
  app.enableCors({
    origin: isProduction ? 'https://webapp-demo1-ahdgf5e6ghe9aefb.uaenorth-01.azurewebsites.net' : 'http://localhost:3001', // Use your frontend app URL for production
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  });
  await app.listen(process.env.PORT || 8080);
}
bootstrap();
