import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { LivescoresModule } from './livescores/livescores.module';
import { FixturesModule } from './fixtures/fixtures.module';
import { StandingsModule } from './standings/standings.module';

import { env } from './utils';
import { TopscorersModule } from './topscorers/topscorers.module';
import { CommentariesModule } from './commentaries/commentaries.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: env === 'development' ? '.development.env' : '.env',
    }),
    LivescoresModule,
    FixturesModule,
    StandingsModule,
    TopscorersModule,
    CommentariesModule,
  ],
  controllers: [ApiController],
  providers: [ApiService],
})
export class ApiModule {}
