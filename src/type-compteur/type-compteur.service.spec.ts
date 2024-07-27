import { Test, TestingModule } from '@nestjs/testing';
import { TypeCompteurService } from './type-compteur.service';

describe('TypeCompteurService', () => {
  let service: TypeCompteurService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeCompteurService],
    }).compile();

    service = module.get<TypeCompteurService>(TypeCompteurService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
