import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './domains/db/db.module';
import { TopicModule } from './domains/topic/topic.module';

@Module({
  imports: [DbModule, TopicModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
