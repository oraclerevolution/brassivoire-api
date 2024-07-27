import { Module } from '@nestjs/common';
import { TypeCompteurService } from './type-compteur.service';
import { TypeCompteurController } from './type-compteur.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeCompteur } from './entities/type-compteur.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TypeCompteur])],
  controllers: [TypeCompteurController],
  providers: [TypeCompteurService],
})
export class TypeCompteurModule {}
