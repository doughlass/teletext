import { Module } from '@nestjs/common';
import { LivescoresService } from './livescores.service';
import { LivescoresController } from './livescores.controller';
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
  controllers: [LivescoresController],
  providers: [LivescoresService],
})
export class LivescoresModule {
  constructor() {
    console.log('Hello World.')
    console.log(env);
  }
}
