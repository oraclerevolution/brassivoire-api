import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdatePeriodDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;
}
