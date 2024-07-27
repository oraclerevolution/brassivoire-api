import { Test, TestingModule } from '@nestjs/testing';
import { CompteursController } from './compteurs.controller';
import { CompteursService } from './compteurs.service';

describe('CompteursController', () => {
  let controller: CompteursController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompteursController],
      providers: [CompteursService],
    }).compile();

    controller = module.get<CompteursController>(CompteursController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
