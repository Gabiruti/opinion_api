import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Topic } from 'src/domains/topic/entities/topic.entity';
import { TopicRepository } from 'src/domains/topic/repositories/topic.repository';
import { TopicController } from './controllers/topic.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Topic])],
  providers: [TopicRepository],
  controllers: [TopicController],
})
export class TopicModule {}
