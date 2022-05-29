import { Test, TestingModule } from '@nestjs/testing';
import { LivescoresService } from './livescores.service';

describe('LivescoresService', () => {
  let service: LivescoresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LivescoresService],
    }).compile();

    service = module.get<LivescoresService>(LivescoresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
