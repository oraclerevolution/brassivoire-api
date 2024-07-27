import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { TypeCompteur } from 'src/type-compteur/entities/type-compteur.entity';

export class CreateCompteurDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  area: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  meterCode: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  section: string;

  @IsNotEmpty()
  @ApiProperty()
  typeCompteur: TypeCompteur;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  subSection: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  favorite: boolean;
}
