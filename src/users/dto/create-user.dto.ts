import { ApiProperty } from '@nestjs/swagger';
import {
  IsAlphanumeric,
  IsNumber,
  IsNotEmpty,
  MinLength,
  MaxLength,
  Min,
  Max,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsAlphanumeric()
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
  @IsNumber()
  @Min(1)
  @Max(11)
  phone: number;

  @ApiProperty()
  @IsString()
  @MinLength(1)
  @MaxLength(256)
  address?: string;
}
