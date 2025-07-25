import { IsOptional, IsString } from 'class-validator';

export class TopicDTO {
  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  content: string;
}
