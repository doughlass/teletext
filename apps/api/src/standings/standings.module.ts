import { Module } from '@nestjs/common';
import { StandingsService } from './standings.service';
import { StandingsController } from './standings.controller';
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
  controllers: [StandingsController],
  providers: [StandingsService]
})
export class StandingsModule {}
