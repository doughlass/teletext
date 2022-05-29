import { Test, TestingModule } from '@nestjs/testing';
import { CommentariesController } from './commentaries.controller';
import { CommentariesService } from './commentaries.service';

describe('CommentariesController', () => {
  let controller: CommentariesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommentariesController],
      providers: [CommentariesService],
    }).compile();

    controller = module.get<CommentariesController>(CommentariesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
