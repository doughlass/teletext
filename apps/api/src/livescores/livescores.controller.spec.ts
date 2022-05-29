import { Test, TestingModule } from '@nestjs/testing';
import { LivescoresController } from './livescores.controller';
import { LivescoresService } from './livescores.service';

describe('LivescoresController', () => {
  let controller: LivescoresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LivescoresController],
      providers: [LivescoresService],
    }).compile();

    controller = module.get<LivescoresController>(LivescoresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
