import { Test, TestingModule } from '@nestjs/testing';
import { CompteursService } from './compteurs.service';

describe('CompteursService', () => {
  let service: CompteursService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompteursService],
    }).compile();

    service = module.get<CompteursService>(CompteursService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
