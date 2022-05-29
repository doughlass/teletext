import { Module } from '@nestjs/common';
import { TopscorersService } from './topscorers.service';
import { TopscorersController } from './topscorers.controller';
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
  controllers: [TopscorersController],
  providers: [TopscorersService]
})
export class TopscorersModule {}
