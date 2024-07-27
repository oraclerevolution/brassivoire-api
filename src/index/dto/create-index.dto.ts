import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateIndexDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  compteurId: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  value: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  periodId: string;
}
