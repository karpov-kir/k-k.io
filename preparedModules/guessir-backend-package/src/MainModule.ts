import { Module, OnApplicationBootstrap } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

import { TextController } from './conrollers';
import { applyDbMigrations, isDbEnabled } from './dbUtils';
import { Text } from './entities';

@Module({
  imports: [getTypeOrmModule(), TypeOrmModule.forFeature([Text])],
  controllers: [TextController],
  providers: [],
})
export class MainModule implements OnApplicationBootstrap {
  constructor(private readonly connection: Connection) {}

  async onApplicationBootstrap() {
    if (isDbEnabled()) {
      await applyDbMigrations();
    }
  }
}

function getTypeOrmModule() {
  const entities = [Text];

  if (isDbEnabled()) {
    return TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
      username: process.env.DB_USER,
      password: process.env.DB_PW,
      database: process.env.DB_NAME,
      // Handled manually using Umzug
      synchronize: false,
      logging: true,
      entities,
      subscribers: [],
      migrations: [],
    });
  }

  return TypeOrmModule.forRoot({
    type: 'sqlite',
    database: ':memory:',
    synchronize: true,
    logging: true,
    entities,
    subscribers: [],
    migrations: [],
  });
}
