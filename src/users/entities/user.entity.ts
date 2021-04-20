import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString } from 'class-validator';

export class User {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  age: number;

  @ApiProperty()
  @IsNumberString()
  phone: string;

  @ApiProperty({ required: false })
  address?: string;
}
