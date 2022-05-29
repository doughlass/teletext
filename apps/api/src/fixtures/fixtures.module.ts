import { Module } from '@nestjs/common';
import { FixturesService } from './fixtures.service';
import { FixturesController } from './fixtures.controller';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { env } from '../utils';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: env === 'development' ? '.development.env' : '.env',
    }),
    HttpModule,
  ],
  controllers: [FixturesController],
  providers: [FixturesService]
})
export class FixturesModule {}
