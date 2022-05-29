import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { LivescoresService } from './livescores.service';
import { CreateLivescoreDto } from './dto/create-livescore.dto';
import { UpdateLivescoreDto } from './dto/update-livescore.dto';
import { ConfigService } from '@nestjs/config';

@Controller('livescores')
export class LivescoresController {
  constructor(
    private configService: ConfigService,
    private http: HttpService,
    private readonly livescoresService: LivescoresService,
  ) {}

  private sportsmonks: string = this.configService.get<string>('URL');

  @Post()
  create(@Body() createLivescoreDto: CreateLivescoreDto) {
    return this.livescoresService.create(createLivescoreDto);
  }

  @Get()
  findAll() {
    // return this.sportsmonks;
    return this.livescoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.livescoresService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLivescoreDto: UpdateLivescoreDto,
  ) {
    return this.livescoresService.update(+id, updateLivescoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.livescoresService.remove(+id);
  }
}
