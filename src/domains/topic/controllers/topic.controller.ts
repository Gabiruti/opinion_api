import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
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

  @Get(':id')
  async findTopic(@Param('id') id: string): Promise<Topic | string> {
    return (
      (await this.topicsRepository.findOne(parseInt(id))) ?? 'Topic not found.'
    );
  }

  @Post()
  async insertTopic(@Body() topicDto: TopicDTO): Promise<string> {
    return await this.topicsRepository.insert(topicDto);
  }

  @Delete(':id')
  async deleteTopic(@Param('id') id: string): Promise<string> {
    return await this.topicsRepository.remove(parseInt(id));
  }
}
