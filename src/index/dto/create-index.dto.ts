import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { User } from 'src/users/entities/users.entity';

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

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  user: User;
}
