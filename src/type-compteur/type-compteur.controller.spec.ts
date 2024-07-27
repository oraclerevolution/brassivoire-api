import { Test, TestingModule } from '@nestjs/testing';
import { TypeCompteurController } from './type-compteur.controller';
import { TypeCompteurService } from './type-compteur.service';

describe('TypeCompteurController', () => {
  let controller: TypeCompteurController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeCompteurController],
      providers: [TypeCompteurService],
    }).compile();

    controller = module.get<TypeCompteurController>(TypeCompteurController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
