import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateTypeCompteurDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;
}
