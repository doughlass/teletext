import { Module } from '@nestjs/common';
import { CommentariesService } from './commentaries.service';
import { CommentariesController } from './commentaries.controller';
import { ConfigModule } from '@nestjs/config';
import { env } from '../utils';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: env === 'development' ? '.development.env' : '.env',
    }),
    HttpModule,
  ],
  controllers: [CommentariesController],
  providers: [CommentariesService]
})
export class CommentariesModule {}
