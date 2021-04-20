import { ApiProperty } from '@nestjs/swagger';
import {
  IsNumber,
  IsNotEmpty,
  MinLength,
  MaxLength,
  Min,
  Max,
  IsString,
  IsNumberString,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(256)
  name: string;

  @ApiProperty()
  @IsNumber()
  @Min(1)
  @Max(200)
  age: number;

  @ApiProperty()
  @IsNumberString()
  phone: string;

  @ApiProperty()
  @IsString()
  @MinLength(1)
  @MaxLength(256)
  address?: string;
}
