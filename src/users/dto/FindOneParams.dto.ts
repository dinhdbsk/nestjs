import { IsAlphanumeric, IsNotEmpty, IsNumberString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class FindOneParams {
  @ApiProperty()
  @IsAlphanumeric()
  @IsNotEmpty()
  @IsNumberString()
  id: number;
}
