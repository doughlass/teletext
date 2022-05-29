import { Test, TestingModule } from '@nestjs/testing';
import { TopscorersService } from './topscorers.service';

describe('TopscorersService', () => {
  let service: TopscorersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TopscorersService],
    }).compile();

    service = module.get<TopscorersService>(TopscorersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
