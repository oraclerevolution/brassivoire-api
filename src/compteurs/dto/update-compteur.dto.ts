import { PartialType } from '@nestjs/swagger';
import { CreateCompteurDto } from './create-compteur.dto';

export class UpdateCompteurDto extends PartialType(CreateCompteurDto) {}
