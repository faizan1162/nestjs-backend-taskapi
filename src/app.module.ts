import { Module } from '@nestjs/common';
import { DatabaseModule } from './core/database.module';
import { TasksModule } from './modules/tasks/tasks.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [DatabaseModule, TasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
