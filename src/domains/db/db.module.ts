import { Module } from '@nestjs/common';
import { postgresConfig } from 'src/domains/db/db-config';

@Module({
  imports: [postgresConfig],
})
export class DbModule {}
