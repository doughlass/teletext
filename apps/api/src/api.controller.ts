import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ApiService } from './api.service';

@Controller()
export class ApiController {
  constructor(
    private readonly apiService: ApiService,
    private configService: ConfigService,
  ) {}

  @Get()
  getHello(): string {
    return this.apiService.getHello();
  }
}
