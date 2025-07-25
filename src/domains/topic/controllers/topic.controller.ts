import { Body, Controller, Get, Post } from '@nestjs/common';
import { TopicDTO } from 'src/domains/topic/dtos/topic.dto';
import { Topic } from 'src/domains/topic/entities/topic.entity';
import { TopicRepository } from 'src/domains/topic/repositories/topic.repository';

@Controller('topic')
export class TopicController {
  constructor(private topicsRepository: TopicRepository) {}

  @Get()
  async findTopics(): Promise<Topic[]> {
    return await this.topicsRepository.findAll();
  }

  @Post()
  async insertTopic(@Body() topicDto: TopicDTO): Promise<string> {
    return await this.topicsRepository.insert(topicDto);
  }
}
