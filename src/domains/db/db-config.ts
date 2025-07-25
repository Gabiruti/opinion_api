import { TypeOrmModule } from '@nestjs/typeorm';

const postgresConfig = TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'admin',
  password: '123456',
  database: 'opinion_db',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
});

export { postgresConfig };
