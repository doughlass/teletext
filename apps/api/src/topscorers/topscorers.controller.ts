import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TopscorersService } from './topscorers.service';
import { CreateTopscorerDto } from './dto/create-topscorer.dto';
import { UpdateTopscorerDto } from './dto/update-topscorer.dto';

@Controller('topscorers')
export class TopscorersController {
  constructor(private readonly topscorersService: TopscorersService) {}

  @Post()
  create(@Body() createTopscorerDto: CreateTopscorerDto) {
    return this.topscorersService.create(createTopscorerDto);
  }

  @Get()
  findAll() {
    return this.topscorersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.topscorersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTopscorerDto: UpdateTopscorerDto) {
    return this.topscorersService.update(+id, updateTopscorerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.topscorersService.remove(+id);
  }
}
