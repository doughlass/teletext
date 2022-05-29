import { Test, TestingModule } from '@nestjs/testing';
import { TopscorersController } from './topscorers.controller';
import { TopscorersService } from './topscorers.service';

describe('TopscorersController', () => {
  let controller: TopscorersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TopscorersController],
      providers: [TopscorersService],
    }).compile();

    controller = module.get<TopscorersController>(TopscorersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
