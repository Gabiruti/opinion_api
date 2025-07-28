import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TopicDTO } from 'src/domains/topic/dtos/topic.dto';
import { Topic } from 'src/domains/topic/entities/topic.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TopicRepository {
  constructor(
    @InjectRepository(Topic)
    private topicsRepository: Repository<Topic>,
  ) {}

  findAll(): Promise<Topic[]> {
    return this.topicsRepository.find();
  }

  findOne(id: number): Promise<Topic | null> {
    return this.topicsRepository.findOneBy({ id });
  }

  async insert(topic: TopicDTO): Promise<string> {
    await this.topicsRepository.insert(topic);
    return 'Topic added.';
  }

  async remove(id: number): Promise<string> {
    await this.topicsRepository.softDelete(id);
    return 'Topic deleted.';
  }
}
