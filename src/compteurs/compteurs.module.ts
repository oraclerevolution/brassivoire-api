import { Module } from '@nestjs/common';
import { CompteursService } from './compteurs.service';
import { CompteursController } from './compteurs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Compteur } from './entities/compteur.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Compteur])],
  controllers: [CompteursController],
  providers: [CompteursService],
})
export class CompteursModule {}
