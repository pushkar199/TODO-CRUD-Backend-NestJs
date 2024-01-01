import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './todo/todo.entity';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      // Add your database configuration here
      // For example:
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [Todo],
      synchronize: true, // Be cautious with synchronize in production
    }),
    TodoModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
